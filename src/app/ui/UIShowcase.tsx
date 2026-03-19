"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Truck, ArrowRight, Mail, Phone, Search, Lock,
  Star, Zap, Shield, Package,
} from "lucide-react";
import {
  Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Badge, Input, Textarea, Select, Checkbox, FormField, Divider, Stat, SectionLabel,
} from "@/components/ui";

// ─── Section wrapper ────────────────────────────────────────────────────────
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-black text-dark tracking-tight">{title}</h2>
        <div className="flex-1 h-px bg-outline-soft" />
      </div>
      {children}
    </motion.section>
  );
}

// ─── Token swatch ────────────────────────────────────────────────────────────
function Swatch({ color, name, hex }: { color: string; name: string; hex: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className={`h-16 rounded-xl border border-outline-soft ${color}`} />
      <span className="text-[11px] font-bold text-dark">{name}</span>
      <span className="text-[10px] text-neutral font-mono">{hex}</span>
    </div>
  );
}

export default function UIShowcase() {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [inputVal, setInputVal] = useState("");

  const handleLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-surface pt-28 pb-32 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto space-y-24">

        {/* ── Header ── */}
        <div className="space-y-4">
          <Badge variant="cta" dot pulse>Design System</Badge>
          <h1 className="text-6xl font-black text-dark tracking-tight leading-tight">
            UI Component<br />
            <span className="text-cta">Library</span>
          </h1>
          <p className="text-primary/60 text-lg leading-relaxed max-w-xl">
            Enterprise-grade components built on Tailwind CSS + Framer Motion.
            8px spacing system, consistent typography hierarchy, smooth interactions.
          </p>
        </div>

        {/* ── Color Tokens ── */}
        <Section title="Color Tokens">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            <Swatch color="bg-primary"      name="Primary"      hex="#495D6E" />
            <Swatch color="bg-primary-dark" name="Primary Dark" hex="#324556" />
            <Swatch color="bg-cta"          name="CTA"          hex="#D89042" />
            <Swatch color="bg-cta-dark"     name="CTA Dark"     hex="#8b5000" />
            <Swatch color="bg-dark"         name="Dark"         hex="#212223" />
            <Swatch color="bg-neutral"      name="Neutral"      hex="#7F7E7C" />
            <Swatch color="bg-surface"      name="Surface"      hex="#fcf9f6" />
            <Swatch color="bg-surface-low"  name="Surface Low"  hex="#f6f3f0" />
          </div>
        </Section>

        {/* ── Buttons ── */}
        <Section title="Button">
          {/* Variants */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-neutral mb-4">Variants</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="danger">Danger</Button>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-neutral mb-4">Sizes</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
          </div>

          {/* With icons */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-neutral mb-4">With Icons</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button icon={<Truck className="w-4 h-4" />}>Fleet Inquiry</Button>
              <Button variant="secondary" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                Get Quote
              </Button>
              <Button variant="outline" icon={<Mail className="w-4 h-4" />}>Contact Us</Button>
            </div>
          </div>

          {/* States */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-neutral mb-4">States</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button loading={loading} onClick={handleLoad}>
                {loading ? "Sending..." : "Click to Load"}
              </Button>
              <Button disabled>Disabled</Button>
              <Button fullWidth variant="secondary" className="max-w-xs">Full Width</Button>
            </div>
          </div>
        </Section>

        {/* ── Badges ── */}
        <Section title="Badge">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-neutral mb-4">Variants</p>
            <div className="flex flex-wrap gap-3 items-center">
              <Badge variant="default">Default</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="cta">CTA</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="neutral">Neutral</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="dark">Dark</Badge>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-neutral mb-4">With Dot Indicator</p>
            <div className="flex flex-wrap gap-3 items-center">
              <Badge variant="success" dot>Active Fleet</Badge>
              <Badge variant="danger" dot>Offline</Badge>
              <Badge variant="cta" dot pulse>Live Tracking</Badge>
              <Badge variant="warning" dot>Maintenance</Badge>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-neutral mb-4">Sizes</p>
            <div className="flex flex-wrap gap-3 items-center">
              <Badge size="sm" variant="primary">Small</Badge>
              <Badge size="md" variant="primary">Medium</Badge>
              <Badge size="lg" variant="primary">Large</Badge>
            </div>
          </div>
        </Section>

        {/* ── Cards ── */}
        <Section title="Card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Default */}
            <Card variant="default">
              <CardHeader>
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <CardTitle>Industrial Haulage</CardTitle>
                <CardDescription>
                  End-to-end heavy-duty transportation for manufacturing projects nationwide.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="default" size="sm">Multi-Axle</Badge>
                  <Badge variant="success" size="sm" dot>Active</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="outline">Learn More</Button>
                <Button size="sm" iconPosition="right" icon={<ArrowRight className="w-3 h-3" />}>
                  Quote
                </Button>
              </CardFooter>
            </Card>

            {/* Elevated */}
            <Card variant="elevated">
              <CardHeader>
                <Badge variant="cta" size="sm" className="mb-4">Featured</Badge>
                <CardTitle>ODC Management</CardTitle>
                <CardDescription>
                  Specialized route engineering for over-dimensional cargo across complex terrains.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mt-2">
                  {["Route surveys", "Permit handling", "Escort services"].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-primary/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-cta shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm" fullWidth>Get Started</Button>
              </CardFooter>
            </Card>

            {/* Dark */}
            <Card variant="dark">
              <CardHeader>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-cta" />
                </div>
                <CardTitle className="text-white">Safety Protocol</CardTitle>
                <CardDescription className="text-white/50">
                  Military-grade maintenance cycles and advanced telematics for every asset.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-black text-cta mt-2">99.8%</div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-white/40 mt-1">
                  Operational Reliability
                </p>
              </CardContent>
              <CardFooter className="border-white/10">
                <Button size="sm" variant="ghost">View Report</Button>
              </CardFooter>
            </Card>
          </div>

          {/* Filled + Glass */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="filled" padding="md">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-ambient shrink-0">
                  <Zap className="w-5 h-5 text-cta" />
                </div>
                <div>
                  <p className="font-black text-dark">Filled Card</p>
                  <p className="text-sm text-primary/60">Subtle surface background, no heavy shadow.</p>
                </div>
              </div>
            </Card>
            <Card variant="glass" padding="md">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-black text-dark">Glass Card</p>
                  <p className="text-sm text-primary/60">Frosted glass effect with backdrop blur.</p>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        {/* ── Stats ── */}
        <Section title="Stat">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Stat value="500+" label="Active Fleet" accent="primary" />
            <Stat value="30+" label="Years of Excellence" accent="cta" description="Since 1994" />
            <Stat value="12K+" label="Project Completions" accent="primary" />
            <Stat value="99.8%" label="Reliability Score" accent="success" />
          </div>
        </Section>

        {/* ── Inputs ── */}
        <Section title="Input">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <Input
              label="Full Name"
              placeholder="Rajesh Varma"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <Input
              label="Email Address"
              type="email"
              placeholder="rajesh@company.com"
              leadingIcon={<Mail className="w-4 h-4" />}
            />
            <Input
              label="Phone Number"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              leadingIcon={<Phone className="w-4 h-4" />}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
              leadingIcon={<Lock className="w-4 h-4" />}
            />
            <Input
              label="Search"
              placeholder="Search shipments..."
              variant="filled"
              leadingIcon={<Search className="w-4 h-4" />}
            />
            <Input
              label="Underline Style"
              placeholder="Type here..."
              variant="underline"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <Input
              label="With Error"
              placeholder="Enter value"
              error="This field is required."
              defaultValue="invalid@"
            />
            <Input
              label="With Success"
              placeholder="Enter value"
              success="Looks good!"
              defaultValue="solutions@kapoortransport.in"
            />
            <Input
              label="With Hint"
              placeholder="Enter tracking ID"
              hint="Format: KT-XXXXXXXX"
            />
            <Input
              label="Disabled"
              placeholder="Cannot edit"
              disabled
              defaultValue="Read only value"
            />
          </div>
        </Section>

        {/* ── Textarea & Select ── */}
        <Section title="Textarea & Select">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <Textarea
              label="Project Details"
              placeholder="Describe your logistics requirements..."
              hint="Minimum 50 characters recommended."
              rows={4}
            />
            <div className="space-y-6">
              <Select
                label="Service Required"
                placeholder="Select a service"
                options={[
                  { value: "haulage", label: "Industrial Haulage" },
                  { value: "odc", label: "ODC Management" },
                  { value: "warehouse", label: "Smart Warehousing" },
                  { value: "project", label: "Project Cargo" },
                  { value: "ftl", label: "Full Truck Load" },
                ]}
              />
              <Select
                label="With Error"
                placeholder="Select a service"
                error="Please select a service."
                options={[{ value: "haulage", label: "Industrial Haulage" }]}
              />
            </div>
          </div>
        </Section>

        {/* ── Checkbox ── */}
        <Section title="Checkbox">
          <div className="space-y-4 max-w-sm">
            <Checkbox
              label="I agree to the Terms of Service"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <Checkbox
              label="Subscribe to logistics insights"
              description="Receive monthly reports on Indian logistics trends."
              defaultChecked
            />
            <Checkbox
              label="With error state"
              error="You must accept to continue."
            />
            <Checkbox label="Disabled checkbox" disabled />
            <Checkbox label="Disabled checked" disabled defaultChecked />
          </div>
        </Section>

        {/* ── Divider ── */}
        <Section title="Divider">
          <div className="space-y-6 max-w-lg">
            <Divider />
            <Divider label="or continue with" />
            <div className="flex items-center gap-4 h-16">
              <span className="text-sm text-primary/60">Left content</span>
              <Divider orientation="vertical" />
              <span className="text-sm text-primary/60">Right content</span>
            </div>
          </div>
        </Section>

        {/* ── SectionLabel ── */}
        <Section title="SectionLabel">
          <div className="space-y-12">
            <SectionLabel
              eyebrow="Our Expertise"
              title="Industrial Solutions Architected for Growth"
              subtitle="From large-scale infrastructure projects to precision manufacturing delivery, our specialized logistics ecosystem handles it all."
            />
            <SectionLabel
              eyebrow="Client Feedback"
              title="Executive Endorsements"
              align="center"
            />
          </div>
        </Section>

        {/* ── Full Form Example ── */}
        <Section title="Form Composition">
          <Card variant="elevated" padding="xl" hover={false} className="max-w-2xl">
            <div className="mb-8">
              <Badge variant="cta" size="sm" className="mb-4">Inquiry Form</Badge>
              <h3 className="text-2xl font-black text-dark tracking-tight">Request a Consultation</h3>
              <p className="text-primary/60 text-sm mt-1.5">
                Our logistics strategist will contact you within 2 business hours.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input label="Full Name" placeholder="Your name" required />
                <Input label="Email" type="email" placeholder="you@company.com" leadingIcon={<Mail className="w-4 h-4" />} required />
                <Input label="Phone" type="tel" placeholder="+91 XXXXX XXXXX" leadingIcon={<Phone className="w-4 h-4" />} required />
                <Select
                  label="Service"
                  placeholder="Select service"
                  options={[
                    { value: "haulage", label: "Industrial Haulage" },
                    { value: "odc", label: "ODC Management" },
                    { value: "warehouse", label: "Smart Warehousing" },
                  ]}
                  required
                />
              </div>

              <Textarea label="Project Details" placeholder="Describe your requirements..." rows={3} />

              <Divider />

              <Checkbox
                label="I agree to the Terms of Service and Privacy Policy"
                description="Your data is handled securely and never shared with third parties."
              />

              <div className="flex gap-3 pt-2">
                <Button type="submit" size="lg" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                  Submit Inquiry
                </Button>
                <Button type="reset" variant="ghost" size="lg">
                  Clear
                </Button>
              </div>
            </form>
          </Card>
        </Section>

        {/* ── Spacing Reference ── */}
        <Section title="Spacing System (8px base)">
          <div className="flex flex-wrap items-end gap-4">
            {[1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24].map((n) => (
              <div key={n} className="flex flex-col items-center gap-2">
                <div
                  className="bg-primary/20 rounded"
                  style={{ width: `${n * 4}px`, height: `${n * 4}px` }}
                />
                <span className="text-[9px] font-mono text-neutral">{n * 4}px</span>
              </div>
            ))}
          </div>
        </Section>

      </div>
    </div>
  );
}
