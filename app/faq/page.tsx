import type { Metadata } from "next";
import { bookingUrl, SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = { title: "Detailing FAQ | Aloha Auto Detailing", description: "Answers about appointments, packages, products, payment, timing, and maintenance plans at Aloha Auto Detailing.", alternates: { canonical: "/faq" } };
const faqs=[
  ["Can I customize a package?","Aloha’s current site says packages can be customized. Call the team to discuss the vehicle and the result you are trying to achieve."],
  ["Are appointments required?","Yes. Appointments are required. Use the online booking system or call to choose a service and time."],
  ["What products are used?","Aloha states that it uses high-quality, eco-friendly products intended to be safe for the vehicle and the environment."],
  ["How long does a service take?","Timing varies by the package and the condition of the vehicle. Current package information is listed in the live booking menu."],
  ["What payment methods are accepted?","Aloha’s current site lists cash, credit cards, and Cash App."],
  ["Are maintenance options available?","Aloha’s current site says monthly maintenance plans are available. Call for current details rather than relying on an outdated package description."],
] as const;
export default function FaqPage(){return <main><a className="skip" href="#main">Skip to content</a><SiteHeader /><section className="faq-layout" id="main"><aside><p className="eyebrow">Before the appointment</p><h1>Good questions.<br/>Clear answers.</h1><p>For vehicle-specific advice, contact Aloha directly.</p><div className="actions"><a className="button primary" href={bookingUrl}>View booking ↗</a><a className="button darkline" href="tel:+14702156141">Call the team</a></div></aside><div className="faq-list">{faqs.map(([q,a],i)=><article key={q}><span>0{i+1}</span><div><h2>{q}</h2><p>{a}</p></div></article>)}</div></section><SiteFooter /></main>}
