import { ContactCta } from "@/components/home/contact-cta";
import { Hero } from "@/components/home/hero";
import { PageTransition } from "@/components/layout/page-transition";

// The About page is the site's landing page. Its metadata (title,
// description, canonical "/") comes from the root layout.
export default function AboutPage() {
  return (
    <PageTransition>
      <div>
        <Hero />
        <ContactCta />
      </div>
    </PageTransition>
  );
}
