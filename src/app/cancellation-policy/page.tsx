import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AlertCircle } from "lucide-react";

export default function CancellationPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <AlertCircle className="h-10 w-10 text-primary mx-auto" />
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">Cancellation & Refund Policy</h1>
          <p className="text-xs text-muted-foreground">Last updated: June 2026</p>
        </div>

        <div className="text-sm text-foreground/90 leading-relaxed space-y-6">
          <section className="space-y-4">
            <h3 className="text-base font-extrabold uppercase tracking-wide border-l-2 border-primary pl-2 text-foreground">1. Cancellation Refund Slabs</h3>
            <p>
              Since transport coaches, food supplies, and guide permits are paid to rural villagers in advance, cancellations are subject to the following charges:
            </p>
            
            <div className="overflow-x-auto rounded-xl border border-border bg-card">
              <table className="w-full text-left text-xs divide-y divide-border">
                <thead className="bg-secondary/40 text-muted-foreground font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-3">Timeline before Departure</th>
                    <th className="p-3">Refund Percentage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border font-medium">
                  <tr>
                    <td className="p-3 text-foreground">7 Days or more</td>
                    <td className="p-3 text-emerald-500 font-bold">100% Refund (or full travel credit voucher)</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-foreground">4 Days to 6 Days</td>
                    <td className="p-3 text-foreground font-bold">50% Refund</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-foreground">Less than 72 Hours</td>
                    <td className="p-3 text-destructive font-bold">No Refund (0% refund)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-extrabold uppercase tracking-wide border-l-2 border-primary pl-2 text-foreground">2. Booking Transfers</h3>
            <p>
              If you cannot attend a trek, you may transfer your seat booking to a friend or family member at no additional cost. Transfer requests must be emailed along with their name, email, and Aadhaar copy at least 24 hours prior to the assembly time.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-extrabold uppercase tracking-wide border-l-2 border-primary pl-2 text-foreground">3. Weather-Induced Cancellations by Chalte Firte</h3>
            <p>
              If a trek is cancelled by Chalte Firte due to landslides, government regulatory closures, or extreme weather warnings, travelers will receive a <strong>100% cash refund</strong> or can opt for an open travel voucher valid for 12 months on any future package.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
