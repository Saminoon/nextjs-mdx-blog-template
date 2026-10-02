import { fadeInSlideUp } from '@/lib/animations'
import { Animated } from '@/components/ui/animated'

export const metadata = {
  title: 'Privacy Policy | Hardware Tune',
  description: 'Privacy Policy for Hardware Tune.',
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh] max-w-3xl">
      <Animated variants={fadeInSlideUp} className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-lg text-muted-foreground">
          Last updated: September 29, 2026
        </p>
      </Animated>

      <Animated variants={fadeInSlideUp} delay={0.1} className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            Welcome to Hardware Tune. This Privacy Policy explains how we
            collect, use, and protect your information when you visit our
            website. By using our website, you hereby consent to our Privacy
            Policy and agree to its terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            2. Cookies and Web Beacons
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Like any other website, Hardware Tune uses "cookies". These cookies
            are used to store information including visitors' preferences, and
            the pages on the website that the visitor accessed or visited. The
            information is used to optimize the users' experience by customizing
            our web page content based on visitors' browser type and/or other
            information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            3. Google AdSense and DoubleClick DART Cookie
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Google is one of a third-party vendor on our site. It also uses
            cookies, known as DART cookies, to serve ads to our site visitors
            based upon their visit to Hardware Tune and other sites on the
            internet. However, visitors may choose to decline the use of DART
            cookies by visiting the Google ad and content network Privacy Policy
            at the following URL:{' '}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://policies.google.com/technologies/ads
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Log Files</h2>
          <p className="text-muted-foreground leading-relaxed">
            Hardware Tune follows a standard procedure of using log files. These
            files log visitors when they visit websites. The information
            collected by log files includes internet protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are
            not linked to any information that is personally identifiable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            5. Contact Information
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            If you require any more information or have any questions about our
            Privacy Policy, please feel free to reach out via our Contact page.
          </p>
        </section>
      </Animated>
    </div>
  )
}
