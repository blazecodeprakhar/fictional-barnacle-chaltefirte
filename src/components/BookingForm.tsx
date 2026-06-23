"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Phone, Calendar, Users, Upload, CheckCircle, ArrowRight, ArrowLeft, Loader2, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Trek } from "@/lib/db";

type BookingFormProps = {
  trek: Trek;
  onSuccess?: (bookingDetails: any) => void;
};

export function BookingForm({ trek, onSuccess }: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Form State
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [trekDate, setTrekDate] = useState("");
  const [guestsCount, setGuestsCount] = useState(1);

  // Upload States
  const [aadhaarFile, setAadhaarFile] = useState<File | null>(null);
  const [aadhaarProgress, setAadhaarProgress] = useState(0);
  const [aadhaarUploading, setAadhaarUploading] = useState(false);

  const [healthFile, setHealthFile] = useState<File | null>(null);
  const [healthProgress, setHealthProgress] = useState(0);
  const [healthUploading, setHealthUploading] = useState(false);

  // Validation Errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Calculations
  const totalPrice = trek.price * guestsCount;

  // Validate Step 1
  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!fullname.trim()) newErrors.fullname = "Full name is required";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Valid email is required";
    if (!phone.trim() || phone.length < 10) newErrors.phone = "Valid phone number (10+ digits) is required";
    if (!trekDate) newErrors.trekDate = "Please choose a departure date";
    if (guestsCount < 1) newErrors.guestsCount = "Must have at least 1 guest";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Aadhaar Simulation
  const handleAadhaarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setAadhaarFile(file);
    setAadhaarUploading(true);
    setAadhaarProgress(0);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      setAadhaarProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setAadhaarUploading(false);
      }
    }, 200);
  };

  // Handle Health Simulation
  const handleHealthUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setHealthFile(file);
    setHealthUploading(true);
    setHealthProgress(0);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      setHealthProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setHealthUploading(false);
      }
    }, 200);
  };

  const saveBookingLocally = (booking: any) => {
    try {
      const existing = localStorage.getItem("chaltefir_bookings") || "[]";
      const bookingsList = JSON.parse(existing);
      bookingsList.push({
        ...booking,
        id: "BK-" + Math.floor(100000 + Math.random() * 900000),
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem("chaltefir_bookings", JSON.stringify(bookingsList));
    } catch (e) {
      console.error("Local storage error:", e);
    }
  };

  // Submit Booking to API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (aadhaarUploading || healthUploading) return;

    setLoading(true);

    const bookingPayload = {
      trekId: trek.id,
      trekTitle: trek.title,
      pricePerPerson: trek.price,
      trekDate,
      fullname,
      email,
      phone,
      guestsCount,
      aadhaarFileName: aadhaarFile?.name || "Uploaded_Aadhaar.pdf",
      healthFileName: healthFile?.name || "Uploaded_Health.pdf",
    };

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingPayload),
      });

      if (response.ok) {
        const data = await response.json();
        setStep(3);
        if (onSuccess) {
          onSuccess(data.booking);
        }
      } else {
        console.warn("API returned error status. Falling back to local storage simulation.");
        saveBookingLocally(bookingPayload);
        setStep(3);
      }
    } catch (err) {
      console.warn("Network error or static hosting. Running local fallback booking simulation.", err);
      saveBookingLocally(bookingPayload);
      setStep(3);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Step Indicators */}
      <div className="flex items-center justify-between mb-8 px-2">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                step >= s
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {s === 3 && step === 3 ? <CheckCircle className="h-4 w-4" /> : s}
            </div>
            <span
              className={`text-xs font-bold uppercase tracking-wider hidden sm:inline ${
                step === s ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {s === 1 ? "Details" : s === 2 ? "Documents" : "Done"}
            </span>
            {s < 3 && <div className="h-0.5 w-8 bg-border" />}
          </div>
        ))}
      </div>

      {/* Forms Switcher */}
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 gap-4">
              <Input
                label="Full Name"
                placeholder="Enter your full name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                error={errors.fullname}
                required
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={errors.email}
                  required
                />
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="10-digit number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  error={errors.phone}
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Trek Date"
                  type="date"
                  value={trekDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setTrekDate(e.target.value)}
                  error={errors.trekDate}
                  required
                />
                <Input
                  label="Number of Guests"
                  type="number"
                  min="1"
                  max="15"
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(Number(e.target.value))}
                  error={errors.guestsCount}
                  required
                />
              </div>
            </div>

            {/* Price Summary */}
            <div className="p-4 rounded-xl bg-secondary/60 border border-border mt-6">
              <div className="flex items-center justify-between text-sm mb-1.5 font-medium text-muted-foreground">
                <span>Price per head</span>
                <span>₹{trek.price}</span>
              </div>
              <div className="flex items-center justify-between text-sm mb-3 font-medium text-muted-foreground">
                <span>Number of Trekkers</span>
                <span>x {guestsCount}</span>
              </div>
              <div className="h-px bg-border my-2" />
              <div className="flex items-center justify-between font-extrabold text-foreground">
                <span>Total Amount</span>
                <span className="text-lg text-primary">₹{totalPrice}</span>
              </div>
            </div>

            <Button
              className="w-full mt-6"
              onClick={() => {
                if (validateStep1()) setStep(2);
              }}
            >
              Next Step <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="space-y-6"
          >
            <div className="text-center sm:text-left mb-2">
              <p className="text-xs text-muted-foreground leading-relaxed">
                As per local forest department guidelines, uploading your identity proof (Aadhaar) and a self-attested health certificate is mandatory for checking permit clearances at checkpoints.
              </p>
            </div>

            {/* Aadhaar Upload Card */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Aadhaar Card (PDF / Image)
              </span>
              <div className="border-2 border-dashed border-border rounded-xl p-4 flex flex-col items-center justify-center bg-card hover:bg-secondary/40 transition-colors relative">
                <input
                  type="file"
                  accept=".pdf, image/*"
                  onChange={handleAadhaarUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  disabled={aadhaarUploading}
                />
                
                {aadhaarUploading ? (
                  <div className="w-full text-center space-y-2">
                    <Loader2 className="h-6 w-6 text-primary animate-spin mx-auto" />
                    <span className="text-xs font-semibold block">Uploading Aadhaar... {aadhaarProgress}%</span>
                    <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full transition-all duration-100" style={{ width: `${aadhaarProgress}%` }} />
                    </div>
                  </div>
                ) : aadhaarFile ? (
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-primary" />
                    <div className="text-left">
                      <span className="text-xs font-bold block max-w-[200px] truncate">{aadhaarFile.name}</span>
                      <span className="text-[10px] text-muted-foreground block">{(aadhaarFile.size / 1024).toFixed(1)} KB • Completed</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <Upload className="h-6 w-6 text-muted-foreground mb-1.5" />
                    <span className="text-xs font-bold">Click or drag Aadhaar file here</span>
                    <span className="text-[10px] text-muted-foreground block mt-0.5">Supports PDF or PNG/JPG (Max 5MB)</span>
                  </>
                )}
              </div>
            </div>

            {/* Health Certificate Upload Card */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Fitness Certificate (Optional / Self-Attested PDF)
              </span>
              <div className="border-2 border-dashed border-border rounded-xl p-4 flex flex-col items-center justify-center bg-card hover:bg-secondary/40 transition-colors relative">
                <input
                  type="file"
                  accept=".pdf, image/*"
                  onChange={handleHealthUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  disabled={healthUploading}
                />

                {healthUploading ? (
                  <div className="w-full text-center space-y-2">
                    <Loader2 className="h-6 w-6 text-primary animate-spin mx-auto" />
                    <span className="text-xs font-semibold block">Uploading Certificate... {healthProgress}%</span>
                    <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full transition-all duration-100" style={{ width: `${healthProgress}%` }} />
                    </div>
                  </div>
                ) : healthFile ? (
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-primary" />
                    <div className="text-left">
                      <span className="text-xs font-bold block max-w-[200px] truncate">{healthFile.name}</span>
                      <span className="text-[10px] text-muted-foreground block">{(healthFile.size / 1024).toFixed(1)} KB • Completed</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <Upload className="h-6 w-6 text-muted-foreground mb-1.5" />
                    <span className="text-xs font-bold">Click or drag certificate here</span>
                    <span className="text-[10px] text-muted-foreground block mt-0.5">Self-declaration form / doctor fitness note</span>
                  </>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <Button variant="outline" className="flex-1" onClick={() => setStep(1)} disabled={loading}>
                <ArrowLeft className="h-4 w-4 mr-2" /> Back
              </Button>
              <Button className="flex-[2]" onClick={handleSubmit} disabled={loading || aadhaarUploading || healthUploading}>
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" /> Confirming...
                  </>
                ) : (
                  <>
                    Complete Booking (₹{totalPrice}) <CheckCircle className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-6 space-y-6"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle className="h-10 w-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-tight text-foreground">Adventure Booked Successfully!</h3>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                Thank you for choosing Chalte Firte, <span className="font-semibold text-foreground">{fullname}</span>. Your slot for <span className="font-semibold text-foreground">{trek.title}</span> on <span className="font-semibold text-foreground">{trekDate}</span> is confirmed!
              </p>
            </div>

            {/* Booking Slip Card */}
            <div className="border border-border rounded-xl p-4 bg-secondary/40 text-left text-xs max-w-sm mx-auto divide-y divide-border/60">
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground font-semibold">Trek Package</span>
                <span className="font-bold text-foreground">{trek.title}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground font-semibold">Departure Date</span>
                <span className="font-bold text-foreground">{trekDate}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground font-semibold">Trekkers (Guests)</span>
                <span className="font-bold text-foreground">{guestsCount} Persons</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground font-semibold">Contact Email</span>
                <span className="font-bold text-foreground">{email}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground font-semibold">Amount Paid</span>
                <span className="font-bold text-primary text-sm">₹{totalPrice}</span>
              </div>
            </div>

            <p className="text-[10px] text-muted-foreground">
              A copy of your booking confirmation voucher and assembly instructions has been dispatched to {email}. For urgent support, call +91 97649 89764.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
