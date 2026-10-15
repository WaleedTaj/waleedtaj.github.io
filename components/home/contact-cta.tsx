import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon, MailIcon } from "@/components/ui/icons";
import { mailto } from "@/lib/site";

/** Closing call to action on a gold panel. */
export function ContactCta() {
  return (
    <section aria-labelledby="cta-title" className="pb-(--section-y)">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-panel bg-accent px-6 py-12 text-on-accent sm:px-12 sm:py-16 lg:px-16">
            {/* Concentric rings, echoing the portrait frame */}
            <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 hidden sm:block">
              {[22, 16, 10].map((size) => (
                <span
                  key={size}
                  style={{ width: `${size}rem`, height: `${size}rem` }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-on-accent/15"
                />
              ))}
            </div>

            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_auto] lg:items-end">
              <div>
                <p className="text-eyebrow uppercase opacity-70">Contact</p>
                <h2 id="cta-title" className="mt-4 max-w-[18ch] text-h1 text-on-accent">
                  Looking for a Flutter developer?
                </h2>
                <p className="mt-5 max-w-xl text-lead opacity-80">
                  If you&apos;re hiring for Flutter work or have an app that needs attention, I&apos;d be
                  glad to hear about it. Email is the quickest way to reach me.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={mailto("Flutter development opportunity")}
                  className="inline-flex h-13 items-center gap-2 rounded-control bg-on-accent px-6 font-semibold text-accent transition-[transform,opacity] duration-200 ease-out-soft hover:opacity-90 active:translate-y-px"
                >
                  <MailIcon className="size-5" />
                  Email me
                </a>
                <Link
                  href="/contact"
                  className="inline-flex h-13 items-center gap-2 rounded-control border border-on-accent/30 px-6 font-semibold transition-colors duration-200 hover:border-on-accent hover:bg-on-accent/5"
                >
                  Contact details
                  <ArrowRightIcon className="size-5" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
