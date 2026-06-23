import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Scale } from "lucide-react";

export default function TermsConditionsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <Scale className="h-10 w-10 text-primary mx-auto" />
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">Terms & Conditions</h1>
          <p className="text-xs text-muted-foreground">Last updated: June 2026</p>
        </div>

        <div className="text-sm text-foreground/90 leading-relaxed space-y-6">
          <section className="space-y-2">
            <h3 className="text-base font-extrabold uppercase tracking-wide border-l-2 border-primary pl-2 text-foreground">1. Trek Booking & Confirmation</h3>
            <p>
              All bookings made through the Chalte Firte website are subject to availability. To comply with local forest department requirements, submitting valid identification proof (such as an Aadhaar Card) is mandatory. Your booking slot is confirmed only upon successful verification of documentation and receipt of total package fees.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-extrabold uppercase tracking-wide border-l-2 border-primary pl-2 text-foreground">2. Physical Fitness & Medical Liability</h3>
            <p>
              Trekking in Sahyadri hill fortresses involves physical exertion and steep rocky ascends. It is the responsibility of the traveler to ensure they are in average physical health. By signing up, you declare that you have no cardiovascular, spinal, respiratory, or joint ailments that could be aggravated by high-altitude trails. Leaders have the authority to suspend travelers who are physically unfit during initial assemblies.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-extrabold uppercase tracking-wide border-l-2 border-primary pl-2 text-foreground">3. Conduct & Mountain Decorum</h3>
            <p>
              Chalte Firte operates strict eco-tourism batches. Consumption of alcohol, tobacco products, and illicit substances is strictly prohibited on our travel buses and campsites. Violating safety guides, picking local flowers/fruits, or littering plastic will result in instant cancellation of booking with no refunds.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-extrabold uppercase tracking-wide border-l-2 border-primary pl-2 text-foreground">4. Force Majeure & Weather Rescheduling</h3>
            <p>
              Outdoor trekking depends heavily on seasonal weather conditions. In the event of government-mandated trail closures, flash floods warnings, landslides, or heavy red-alert rain predictions, Chalte Firte reserves the right to cancel or reschedule batches to alternative safe locations.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
