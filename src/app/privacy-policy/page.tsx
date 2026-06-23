import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <Shield className="h-10 w-10 text-primary mx-auto" />
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">Privacy Policy</h1>
          <p className="text-xs text-muted-foreground">Last updated: June 2026</p>
        </div>

        <div className="text-sm text-foreground/90 leading-relaxed space-y-6">
          <section className="space-y-2">
            <h3 className="text-base font-extrabold uppercase tracking-wide border-l-2 border-primary pl-2 text-foreground">1. Personal Information Collection</h3>
            <p>
              When you book a trek with Chalte Firte, we collect name, email address, phone number, and trek departure preferences. This information is used strictly to draft pick-up itineraries, distribute voucher instructions, and keep you updated on weather conditions.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-extrabold uppercase tracking-wide border-l-2 border-primary pl-2 text-foreground">2. Aadhaar & Health Certificate Security</h3>
            <p>
              As required by forest department checkpoints and local authorities in Maharashtra, travelers must upload a government ID (Aadhaar) and fitness confirmation. These documents are stored inside secured, encrypted local server folders. We strictly promise never to distribute, sell, or utilize these certificates for marketing. All identity card metadata is completely purged from our active data system 15 days post-trek completion.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-extrabold uppercase tracking-wide border-l-2 border-primary pl-2 text-foreground">3. Cookie Policy & Web Logs</h3>
            <p>
              Our website uses basic session cookies to persist light/dark theme preference values and state transitions. No behavioral tracking cookies or third-party ad networks are integrated.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-extrabold uppercase tracking-wide border-l-2 border-primary pl-2 text-foreground">4. Contact Data Rights</h3>
            <p>
              Travelers retain the right to query what personal details we hold. If you wish to delete your booking log records or support inquiries, feel free to email our compliance officer at hello@chaltefirte.com.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
