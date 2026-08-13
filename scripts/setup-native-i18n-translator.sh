#!/usr/bin/env bash
set -euo pipefail

I18N_HOME="${HOME}/.cache/paymydine-native-i18n"
I18N_VENV="$I18N_HOME/venv"
ARGOS_PYTHON="$I18N_VENV/bin/python"

mkdir -p "$I18N_HOME"

if [ ! -x "$ARGOS_PYTHON" ]; then
  echo "Creating PayMyDine i18n Python environment..."

  if ! python3 -m venv "$I18N_VENV"; then
    echo "python3 venv support is missing. Attempting to install python3-venv..."

    if command -v sudo >/dev/null 2>&1 && sudo -n true >/dev/null 2>&1; then
      sudo apt-get update
      sudo apt-get install -y python3-venv
      python3 -m venv "$I18N_VENV"
    else
      echo "ERROR: python3 -m venv failed and passwordless sudo is unavailable."
      echo "Install python3-venv, then rerun this script."
      exit 1
    fi
  fi
fi

"$ARGOS_PYTHON" -m pip install \
  --no-cache-dir \
  --upgrade \
  pip \
  setuptools \
  wheel

# ============================================================
# LIGHTWEIGHT ARGOS INSTALL
#
# IMPORTANT:
# Argos 1.11.0 normally pulls:
# - spacy
# - stanza
# - torch
# - CUDA / NVIDIA packages
#
# We explicitly do NOT need them.
#
# PayMyDine translation generation uses:
# - CTranslate2 CPU
# - SentencePiece
# - Sacremoses
# - MiniSBD / ONNX Runtime
# ============================================================

"$ARGOS_PYTHON" -m pip install \
  --no-cache-dir \
  --no-deps \
  "argostranslate==1.11.0"

"$ARGOS_PYTHON" -m pip install \
  --no-cache-dir \
  "ctranslate2>=4.0,<5" \
  "minisbd==0.9.5" \
  "packaging" \
  "sacremoses>=0.0.53,<0.2" \
  "sentencepiece>=0.2.0,<0.3"

# === PMD ARGOS OPTIONAL STANZA HOTFIX V13.2 ===
#
# Argos Translate v1.11.0 imports stanza unconditionally
# from argostranslate/sbd.py, even when MINISBD is selected.
#
# We backport the upstream optional-import behaviour so:
# - MINISBD works
# - Stanza is NOT required
# - Torch is NOT required
# - CUDA / NVIDIA packages are NOT required
#
"$ARGOS_PYTHON" - <<'PYARGOS'
from pathlib import Path
import sysconfig

purelib = Path(
    sysconfig.get_paths()["purelib"]
)

sbd = (
    purelib
    / "argostranslate"
    / "sbd.py"
)

if not sbd.exists():
    raise SystemExit(
        f"ERROR: Argos sbd.py not found: {sbd}"
    )

text = sbd.read_text()

old = """import stanza
from minisbd import SBDetect, models as minisbd_models"""

new = """try:
    import stanza
except ImportError:
    stanza = None

from minisbd import SBDetect, models as minisbd_models"""

if old in text:

    sbd.write_text(
        text.replace(
            old,
            new,
            1
        )
    )

    print(
        f"OK: patched optional Stanza import: {sbd}"
    )

elif (
    "stanza = None" in text
    and
    "from minisbd import SBDetect" in text
):

    print(
        f"OK: optional Stanza import already patched: {sbd}"
    )

else:

    raise SystemExit(
        "ERROR: unexpected Argos sbd.py structure"
    )
PYARGOS
# === PMD ARGOS OPTIONAL STANZA HOTFIX V13.2 END ===

export ARGOS_DEVICE_TYPE=cpu
export ARGOS_CHUNK_TYPE=MINISBD
export ARGOS_PACKAGE_INDEX="https://raw.githubusercontent.com/argosopentech/argospm-index/main/"

"$ARGOS_PYTHON" scripts/pmd-argos-translate.py --install-only

echo "Offline translation engine ready: $ARGOS_PYTHON"
