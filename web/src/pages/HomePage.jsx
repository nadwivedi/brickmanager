import { Link } from 'react-router-dom';
import {
  AlertTriangle, ArrowRight, BarChart3, Boxes, Building2, CalendarRange, Calculator, CheckCircle2, ChevronDown,
  ClipboardList, Clock, Cog, Factory, FileText, Flame, Gauge, Hammer, HandCoins, HardHat, IndianRupee, Landmark,
  Layers, LogIn, MapPin, Network, ShieldCheck, Smartphone, Sparkles, TrendingUp, Truck, UserRound, Users,
} from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import JsonLd from '../components/JsonLd';
import PricingCard from '../components/PricingCard';
import { BrickPattern, Footer, Navbar, SectionHeading } from '../components/PublicSite';
import {
  APP_PAGE, BHATTA_PAGE, BILLING_PAGE, CONTACT_PAGE, EXPENSE_PAGE, FEATURES_PAGE, FLY_ASH_PAGE, INVENTORY_PAGE,
  PAYMENT_PAGE, PLANT_PAGE, PRICE_PAGE, PRODUCTION_PAGE, REPORTS_PAGE,
} from '../lib/publicNav';
import { PLANS } from '../lib/plans';
import { appLink, site } from '../lib/site';
import usePageMeta from '../hooks/usePageMeta';

export const TITLE = `Brick Kiln Management Software | ${site.name} Bhatta Software`;
export const DESCRIPTION = `${site.name} is brick kiln management software for Indian bhattas & plants. Track production, stock, GST billing, dues & expenses online. Request a demo!`;

const FEATURES = [
  { icon: Hammer, title: 'Production Tracking', to: PRODUCTION_PAGE, text: 'Record daily output by plant, brick type and shift, along with the raw material used and any damaged bricks.' },
  { icon: Boxes, title: 'Raw Material Stock', to: INVENTORY_PAGE, text: 'Cement, fly ash, sand and more. Stock moves with every purchase and production entry, so you always see your balance.' },
  { icon: FileText, title: 'Sales and Invoices', to: BILLING_PAGE, text: 'Create GST invoices in seconds, with transport and trip charges worked in.' },
  { icon: Users, title: 'Party Ledgers and Dues', to: PAYMENT_PAGE, text: 'One ledger per customer and vendor shows exactly who owes what, and since when.' },
  { icon: Landmark, title: 'Expenses, Cash and Bank', to: EXPENSE_PAGE, text: 'Log every expense and keep a live balance for each cash and bank account.' },
  { icon: HardHat, title: 'Labour and Vehicles', text: 'Keep your workers and delivery vehicles on record, right next to the work they do.' },
  { icon: BarChart3, title: 'Reports and Profit', to: REPORTS_PAGE, text: 'Profit and loss and ledger reports, ready whenever you or your accountant need them.' },
  { icon: AlertTriangle, title: 'Low Stock Alerts', text: 'Get warned before a raw material runs out and production has to stop.' },
];

const BENEFITS = [
  'Replace paper registers and scattered spreadsheets',
  'Know your brick and material stock at any moment',
  'Collect dues on time with clear party ledgers',
  'Run several plants from a single login',
  'Works on phone, tablet, and desktop',
  'Your business data stays private to your account',
];

const STEPS = [
  { icon: Building2, title: 'Set up your plant', text: 'Add your plants, brick types, raw materials, and parties once.' },
  { icon: ClipboardList, title: 'Record the day', text: 'Enter production, sales, purchases, and expenses as they happen.' },
  { icon: TrendingUp, title: 'See the full picture', text: 'Stock, dues, and profit are worked out for you, always up to date.' },
];

const INDIA_POINTS = [
  { icon: MapPin, title: 'Made for Indian kiln operations', text: 'From coal and fly ash purchase to delivery charges, you can manage every record of a real brick kiln with a clean workflow in our software. Not a generic factory template.' },
  { icon: IndianRupee, title: 'GST-ready invoice', text: 'You can generate a GST-compliant invoice in just a few seconds. In addition, you can keep your accounts clear and GST-ready whenever you want, without any chasing.' },
  { icon: Smartphone, title: 'Run on every device', text: 'You do not require any special hardware for our online brick kiln management software. There is no need to have a munshi at your plant to record everything.' },
];

const PLANT_TYPES = [
  { icon: Flame, title: 'Traditional bhatta and fixed chimney kilns', text: 'Simple daily entries and party-wise credit records.', link: { to: BHATTA_PAGE, label: 'bhatta software' } },
  { icon: Layers, title: 'Fly ash brick plants', text: 'Track raw material mix, stock and production.', link: { to: FLY_ASH_PAGE, label: 'fly ash brick management software' } },
  { icon: Cog, title: 'Mechanised and semi-mechanised plants', text: 'Shift-wise production, labour and vehicle records.', link: { to: PLANT_PAGE, label: 'brick plant management software' } },
  { icon: Factory, title: 'Single or multiple plants', text: 'Our brick kiln software for multiple plants lets you manage every bhatta from one login, with full visibility across all of them.' },
  { icon: CalendarRange, title: 'Seasonal and cycle-based operations', text: 'Records stay organised through the season and the off-season.' },
];

const USERS = [
  { icon: UserRound, label: 'Brick kiln owner' },
  { icon: ClipboardList, label: 'Plant manager and munshi' },
  { icon: Calculator, label: 'Accountant, CA team' },
  { icon: Network, label: 'Multi-plant supervisor' },
  { icon: Truck, label: 'Delivery partner and family business' },
];

const REASONS = [
  { icon: Clock, title: 'Save hours every week', text: 'No manual register entries or end-of-month reconciliation.' },
  { icon: HandCoins, title: 'Collect dues faster', text: 'Clear party ledgers show exactly who to follow up with.' },
  { icon: AlertTriangle, title: 'Never stop production for stock', text: 'Low stock alerts warn you before raw material runs out.' },
  { icon: TrendingUp, title: 'Know your real profit', text: 'Profit and loss is ready whenever you or your accountant need it.' },
  { icon: Building2, title: 'Run multiple plants calmly', text: 'One login, full visibility across every bhatta.' },
  { icon: Flame, title: 'Built only for brick kilns', text: 'Our brick kiln management system is based on a real bhatta workflow and made for the Indian market.' },
  { icon: Sparkles, title: 'Easy to use', text: 'No IT skills needed. The dashboard is simple and clean, and we train your team to get started.' },
  { icon: Gauge, title: 'Real-time reports', text: 'Filter and generate reports whenever you want, with up-to-date data.' },
  { icon: ShieldCheck, title: 'Secure and private', text: 'Your data stays private to your account, and you can back up and restore it.' },
  {
    icon: Smartphone,
    title: 'Online, any device',
    text: (
      <>
        Nothing to install and no IT team required. Your whole team can use it from a browser, and our{' '}
        <Link to={APP_PAGE} className="font-semibold text-orange-700 hover:underline">mobile app</Link> is available for Android and iOS.
      </>
    ),
  },
];

const FAQS = [
  {
    q: 'Is your software for kiln an online system?',
    a: 'Yes, BrickManager is online brick kiln management software. You can log in from anywhere without requiring any installation. You just need an ID and password to log in from any device, including a phone, desktop, or tablet.',
  },
  {
    q: 'Is your brick business software ideal for Indian kilns?',
    a: 'Yes, BrickManager is built for Indian kilns. You can use it daily with GST invoicing and Indian-specific records.',
  },
  {
    q: 'Is my data safe with your online brick kiln management software?',
    a: 'Yes, your data is completely safe with us. We use advanced security protocols to keep your account private.',
  },
  {
    q: 'Can I manage more than one plant with your brick kiln management software in India?',
    a: 'Yes, BrickManager is brick kiln software for multiple plants. You can manage every bhatta from a single secure login. A multi-plant package is required for this feature.',
  },
  {
    q: 'Can it replace my registers and sheets?',
    a: 'Yes, BrickManager is one of the leading brick kiln software solutions in India, helping you completely replace registers and Excel sheets. You can manage production, stock, collections, and expenses, all under one dashboard.',
  },
  {
    q: 'How can I start with your brick kiln software?',
    a: 'To get started with BrickManager, simply request a demo. After the demo, you can choose a package based on your requirements, add your plant type and parties, and start recording entries the same day.',
  },
];

// Matches the visible FAQs word for word.
const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

// Illustrative preview of the dashboard, so visitors can picture the product.
function HeroPreview() {
  const bars = [55, 70, 48, 82, 66, 90, 74];
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-orange-200/70 via-amber-100/50 to-primary-200/60 blur-2xl" />

      <div className="relative rounded-2xl bg-white p-[1.125rem] shadow-2xl shadow-slate-300/70 ring-1 ring-slate-200 sm:p-[1.35rem] lg:p-[0.9rem]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">Today at your plant</p>
            <p className="font-bold text-slate-900">Dashboard</p>
          </div>
          <span className="badge-gray">Sample view</span>
        </div>

        <div className="mt-[1.125rem] grid grid-cols-2 gap-[0.675rem] lg:mt-[0.675rem] lg:gap-[0.5625rem]">
          {[
            { icon: Hammer, label: 'Bricks made today', value: '12,500', note: '+8% vs yesterday', card: 'from-orange-50 ring-orange-100', chip: 'from-orange-600 to-orange-500 shadow-orange-200', noteCls: 'text-emerald-600' },
            { icon: Truck, label: 'Bricks sold today', value: '9,800', note: '6 trips delivered', card: 'from-primary-50 ring-primary-100', chip: 'from-primary-600 to-primary-500 shadow-primary-200', noteCls: 'text-slate-500' },
            { icon: Layers, label: 'Ready stock', value: '48,200', note: 'Across 3 brick types', card: 'from-amber-50 ring-amber-100', chip: 'from-amber-500 to-amber-400 shadow-amber-200', noteCls: 'text-slate-500' },
            { icon: HandCoins, label: 'Dues to collect', value: '₹1.8L', note: '₹42K received today', card: 'from-emerald-50 ring-emerald-100', chip: 'from-emerald-600 to-emerald-500 shadow-emerald-200', noteCls: 'text-emerald-600' },
          ].map(({ icon: Icon, label, value, note, card, chip, noteCls }) => (
            <div key={label} className={`rounded-xl bg-gradient-to-br to-white px-[0.675rem] py-[0.5rem] ring-1 lg:px-[0.5625rem] lg:py-[0.4rem] ${card}`}>
              <div className="flex items-center gap-2">
                <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-white shadow-md lg:h-6 lg:w-6 ${chip}`}><Icon size={14} /></span>
                <p className="text-[11px] font-semibold leading-tight text-slate-600">{label}</p>
              </div>
              <p className="mt-[0.3rem] text-xl font-extrabold leading-tight tracking-tight text-slate-900 lg:mt-[0.2rem] lg:text-lg">{value}</p>
              <p className={`text-[10.5px] font-medium leading-tight ${noteCls}`}>{note}</p>
            </div>
          ))}
        </div>

        <div className="mt-[0.9rem] rounded-xl border border-slate-100 p-[0.9rem] lg:mt-[0.675rem] lg:p-[0.675rem]">
          <p className="text-xs font-semibold text-slate-600">Production this week</p>
          <div className="mt-[0.675rem] flex h-24 items-end gap-[0.45rem] lg:mt-[0.45rem] lg:h-12">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-orange-600 to-orange-400" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

        <div className="mt-[0.9rem] space-y-[0.45rem] lg:mt-[0.5625rem]">
          {[
            { label: 'Invoice #1042 · 4,000 bricks', status: 'Paid', cls: 'badge-green' },
            { label: 'Cement purchase · 50 bags', status: 'Due', cls: 'badge-orange' },
          ].map(r => (
            <div key={r.label} className="flex items-center justify-between rounded-lg bg-slate-50 px-[0.675rem] py-[0.45rem] text-xs lg:py-[0.3375rem]">
              <span className="truncate font-medium text-slate-700">{r.label}</span>
              <span className={r.cls}>{r.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  usePageMeta(TITLE, DESCRIPTION, '/');

  return (
    <div className="min-h-[100dvh] bg-gradient-to-b from-orange-50/60 via-white to-slate-50 text-slate-900">
      <JsonLd data={STRUCTURED_DATA} />
      <Navbar />

      <main>
        {/* Hero */}
        <section id="home" className="relative scroll-mt-20 overflow-hidden">
          <BrickPattern className="fill-orange-900/[0.035] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-[3.15rem] px-4 pb-[1.35rem] pt-[1.35rem] sm:px-6 sm:pt-[1.8rem] lg:grid-cols-[1.1fr_1fr] lg:gap-[2.25rem] lg:pb-[1.575rem] lg:pt-[3.6rem]">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-orange-800 shadow-sm">
                <Sparkles size={14} /> Run your brick plant digitally, no paperwork
              </span>
              <h1 className="mt-[1.35rem] text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:mt-[0.9rem] lg:text-[2.6rem]">
                <span className="bg-gradient-to-r from-orange-700 to-amber-600 bg-clip-text text-transparent">Brick Kiln Management Software</span>{' '}
                for Indian Bhattas, No Paperwork
              </h1>
              <p className="mx-auto mt-[1.35rem] max-w-xl text-lg leading-relaxed text-slate-600 lg:mx-0 lg:mt-[0.9rem] lg:text-base">
                {site.name} tracks production, raw material stock, GST billing, dues, and expenses for your brick kiln
                or bhatta, so you always know what was made, what was sold, and who still has to pay. Use online brick
                kiln management software anywhere, anytime.
              </p>
              <div className="mt-[1.8rem] flex flex-col justify-center gap-[0.675rem] sm:flex-row lg:mt-[1.125rem] lg:justify-start">
                <a href={CONTACT_PAGE} className="btn-primary px-7 py-3.5 text-base">
                  Get Started <ArrowRight size={18} />
                </a>
                <Link to={CONTACT_PAGE} className="btn-secondary px-7 py-3.5 text-base">
                  Request a Demo
                </Link>
              </div>
              <ul className="mt-[1.8rem] flex flex-wrap items-center justify-center gap-x-3 gap-y-[0.45rem] text-[11px] font-medium text-slate-600 sm:gap-x-[1.35rem] sm:text-sm lg:mt-[0.9rem] lg:justify-start">
                {['Works on any device', 'Multiple plants', 'Secure login'].map(t => (
                  <li key={t} className="flex items-center gap-1 whitespace-nowrap sm:gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600 sm:h-4 sm:w-4" /> {t}</li>
                ))}
              </ul>
            </div>
            <HeroPreview />
          </div>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-20 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Features"
              title="Everything Your Plant Tracks, in One Place"
              text="From the first batch of the morning to the last truck out, every entry lands in the right register automatically. That’s what makes this brick kiln management system different from a notebook."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map(({ icon: Icon, title, text, to }) => (
                <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/60">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-amber-50 text-orange-700 ring-1 ring-orange-200/60 transition group-hover:from-orange-600 group-hover:to-orange-500 group-hover:text-white">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 font-bold text-slate-900">
                    {to ? <Link to={to} className="transition hover:text-orange-700 hover:underline">{title}</Link> : title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to={FEATURES_PAGE} className="btn-secondary px-6 py-3">
                See all features <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits + how it works */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-700">Why {site.name}</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Less Paperwork. More Control</h2>
              <p className="mt-4 text-slate-600">
                Most brick plants run on registers, phone calls, and memory. {site.name}, a complete brick kiln business
                software, turns that into clear numbers you can trust.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {BENEFITS.map(b => (
                  <li key={b} className="flex items-start gap-2.5 text-sm font-medium text-slate-700">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-600" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">How It Works</h2>
              <ol className="mt-5 space-y-4">
                {STEPS.map(({ icon: Icon, title, text }, i) => (
                  <li key={title} className="flex gap-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-700 text-white shadow-md shadow-primary-700/20">
                      <Icon size={22} />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-primary-700">Step {i + 1}</p>
                      <h3 className="font-bold text-slate-900">{title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Built for India */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Made for India"
              title="Built for Brick Plants in India"
              text={`${site.name} is a brick kiln software in India, specially designed around how an Indian bhatta actually works. Every Indian brick plant works in its own way. Customers buy on credit, deliveries go out regularly, GST invoices are required, dues are collected across weeks and many more. Hence, our software is specially designed for the Indian market.`}
            />
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {INDIA_POINTS.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50/70 to-white p-6 shadow-sm">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-600 to-orange-500 text-white shadow-md shadow-orange-200">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to={CONTACT_PAGE} className="btn-primary px-7 py-3.5 text-base">
                Request a Demo <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Plant types */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Plant types"
              title="Software for Every Type of Brick Plant"
              text="Every plant is set up differently, with different firing methods, scales and ways of selling. Whether you run a traditional bhatta or a modern mechanised unit, this is software for brick kiln owners of every kind."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PLANT_TYPES.map(({ icon: Icon, title, text, link }) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-700 text-white shadow-md shadow-primary-700/20">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {text}
                    {link && (
                      <>
                        {' '}See our{' '}
                        <Link to={link.to} className="font-semibold text-orange-700 hover:underline">{link.label}</Link>.
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-20 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading eyebrow="Our Pricing Plans" title="Simple Plans for Every Size of Brick Plant/Bhatta" />
            <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2 md:items-start">
              {PLANS.map(p => <PricingCard key={p.name} plan={p} />)}
            </div>
            <div className="mt-10 text-center">
              <Link to={PRICE_PAGE} className="btn-secondary px-6 py-3">
                Know More About Plan <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Who uses it */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Who it's for"
              title={`Who Uses ${site.name}`}
              text="As a leading brick kiln software company in India, we offer our software to everyone. It is built for real roles, not job titles. You can use our software as:"
            />
            <ul className="mt-12 flex flex-wrap justify-center gap-4">
              {USERS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white px-5 py-4 font-semibold text-slate-800 shadow-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-amber-50 text-orange-700 ring-1 ring-orange-200/60">
                    <Icon size={20} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why choose */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Benefits"
              title={`Why Brick Plants Choose ${site.name}`}
              text="By choosing software to manage your brick kiln, you can transform your plant into a digital one that is easy to track. Here is the reason why you should ask for brick kiln record-keeping software and what benefits you get:"
            />
            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {REASONS.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faq" className="scroll-mt-20 bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <SectionHeading eyebrow="FAQs" title="Frequently Asked Questions" />
            <div className="mt-12 space-y-3">
              {FAQS.map(({ q, a }) => (
                <details key={q} className="group rounded-2xl border-l-4 border-orange-200 bg-slate-50 transition open:border-orange-500 open:bg-white open:shadow-md">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                    <h3 className="text-base">{q}</h3>
                    <ChevronDown size={20} className="shrink-0 text-orange-600 transition group-open:rotate-180" />
                  </summary>
                  <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="px-4 pt-20 sm:px-6 sm:pt-24">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#1f2a3c] via-[#27374f] to-[#7c2d12] px-6 py-14 text-center text-white shadow-2xl sm:px-12">
            <BrickPattern className="fill-white/[0.04]" />
            <div className="relative">
              <h2 className="text-3xl font-bold sm:text-4xl">Ready to run your plant digitally?</h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-300">
                Create your account and record your first production entry in minutes.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a href={CONTACT_PAGE} className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 font-semibold text-slate-900 shadow-lg transition hover:bg-orange-50">
                  Create Your Account <ArrowRight size={18} />
                </a>
                <a href={appLink('/login')} className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10">
                  <LogIn size={18} /> Login
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="pt-20 sm:pt-24" />
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  );
}
