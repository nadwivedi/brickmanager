import { Check } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppButton';
import { whatsappLink } from '../lib/site';

// One yearly plan from lib/plans.js, with a WhatsApp enquiry button.
const planEnquiry = (plan) => whatsappLink(`Hi, I'm interested in ${plan.name} (₹${plan.price}/year). Please share the details.`);

export default function PricingCard({ plan }) {
  const featured = plan.featured;
  return (
    <div className={`relative flex flex-col rounded-3xl p-7 sm:p-8 ${featured
      ? 'bg-gradient-to-b from-white to-orange-50/70 shadow-2xl shadow-orange-200/50 ring-2 ring-orange-500'
      : 'bg-white shadow-xl shadow-slate-200/60 ring-1 ring-slate-200'}`}
    >
      {featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-orange-700 to-orange-500 px-4 py-1 text-xs font-bold text-white shadow-md">
          For multiple kilns
        </span>
      )}
      {/* Room for two lines keeps both cards' prices level when one name wraps */}
      <h3 className="text-xl font-bold text-slate-900 md:min-h-[3.5rem]">{plan.name}</h3>
      <p className="mt-1 text-sm text-slate-500">{plan.audience}</p>
      <p className="mt-6 flex items-end gap-1">
        <span className="text-5xl font-extrabold tracking-tight text-slate-900">₹{plan.price}</span>
        <span className="mb-1.5 text-base font-semibold text-slate-500">/year</span>
      </p>
      <a
        href={planEnquiry(plan)}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 py-3 text-[15px] ${featured ? 'btn-primary' : 'btn-secondary'}`}
      >
        <WhatsAppIcon size={18} /> Choose This Plan
      </a>
      <ul className="mt-7 space-y-3 border-t border-slate-200 pt-6">
        {plan.features.map(f => (
          <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
            <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${featured ? 'bg-orange-600 text-white' : 'bg-emerald-100 text-emerald-700'}`}>
              <Check size={13} strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
