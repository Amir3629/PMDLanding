import { HomePageContent, metadata as currentMetadata } from '../page';
import HomepageMainExperience from '@/components/homepage-main/HomepageMainExperience';
import Homepage3Experience from '@/components/homepage3/Homepage3Experience';
import '../homepage-main-modern.css';
import './homepage3.css';

export const metadata = {
  ...currentMetadata,
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.paymydine.com/homepage3' },
};

export default function Homepage3() {
  return (
    <Homepage3Experience>
      <HomepageMainExperience>
        <HomePageContent />
      </HomepageMainExperience>
    </Homepage3Experience>
  );
}
