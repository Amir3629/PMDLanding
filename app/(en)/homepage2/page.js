import { HomePageContent, metadata as currentMetadata } from '../page';
import Homepage2Experience from '@/components/homepage2/Homepage2Experience';
import './homepage2.css';

// This is a visual experiment, not a second indexed marketing homepage.
// Reusing the original server page keeps every word, link, image and product.
export const metadata = {
  ...currentMetadata,
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.paymydine.com/homepage2' },
};

export default function Homepage2() {
  return (
    <Homepage2Experience>
      <HomePageContent />
    </Homepage2Experience>
  );
}
