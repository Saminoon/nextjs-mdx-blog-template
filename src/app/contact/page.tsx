import { Mail } from 'lucide-react'
import { fadeInSlideUp } from '@/lib/animations'
import { Animated } from '@/components/ui/animated'
import { Card, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'Contact | Hardware Tune',
  description:
    'Get in touch for hardware questions, PC build advice, or business inquiries.',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <Animated variants={fadeInSlideUp} className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Contact</h1>
        <p className="text-lg text-muted-foreground">
          Have a question about a PC build, BIOS tuning, or a business inquiry?
        </p>
      </Animated>

      <Animated variants={fadeInSlideUp} delay={0.1} className="max-w-2xl">
        <Card>
          <CardContent className="p-8 space-y-6">
            <p className="text-muted-foreground">
              The best way to reach me is directly via email. I try to respond
              to all hardware and optimization questions within a few days.
            </p>

            <div className="flex items-center space-x-4 text-lg">
              <Mail className="h-6 w-6 text-primary" />
              {/* Make sure to swap this out for your actual professional email */}
              <a
                href="mailto:saminoon76@gmail.com"
                className="font-medium hover:text-primary transition-colors"
              >
                saminoon76@gmail.com
              </a>
            </div>
          </CardContent>
        </Card>
      </Animated>
    </div>
  )
}
