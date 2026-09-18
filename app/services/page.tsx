import type { Metadata } from "next";
import Image from "next/image";
import { bookingUrl, SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = { title: "Mobile Detailing Services | Aloha Auto Detailing", description: "Explore interior, exterior, full-detail, paint-correction, and ceramic-coating services from Aloha Auto Detailing.", alternates: { canonical: "/services" } };

const services = [
  { title: "Interior detail", text: "A cabin-focused reset built around vacuuming, shampoo and extraction, hard surfaces, glass, and the areas that collect daily wear.", note: "For interiors that need more than a quick wipe-down." },
  { title: "Exterior detail", text: "A careful exterior service intended to revive the finish and restore the clean, polished presence of the vehicle.", note: "Choose the live booking menu for current package details." },
  { title: "Full detail", text: "Interior and exterior care combined for vehicles that need a more complete return to form.", note: "A practical choice when the whole vehicle needs attention." },
  { title: "Paint correction", text: "Measured polishing work that addresses visible swirls and surface defects before protection is considered.", note: "Scope depends on the vehicle and condition." },
  { title: "Ceramic coating", text: "Longer-term paint protection designed to support easier maintenance and a deeper-looking finish.", note: "Preparation and service fit are confirmed before work begins." },
];

export default function ServicesPage() { return <main><a className="skip" href="#main">Skip to content</a><SiteHeader /><section className="subhero service-hero" id="main"><div><p className="eyebrow">The service menu</p><h1>Care matched<br/>to the vehicle.</h1><p>Start with what the car needs now. Aloha’s live booking system shows current packages and availability without requiring a credit card just to look.</p><a className="button primary" href={bookingUrl}>View live services & book ↗</a></div><Image src="/images/aloha-05.webp" alt="A vehicle being detailed by Aloha Auto Detailing" fill priority sizes="(max-width:900px) 100vw, 50vw" /></section><section className="service-detail-list">{services.map((service, index) => <article id={`service-${index + 1}`} key={service.title}><span>0{index + 1}</span><div><h2>{service.title}</h2><p>{service.text}</p><small>{service.note}</small></div><a href={bookingUrl}>See current options ↗</a></article>)}</section><section className="decision-band"><p className="eyebrow">Not sure where to begin?</p><h2>Describe the vehicle.<br/>Aloha can help narrow it down.</h2><div className="actions"><a className="button primary" href="tel:+14702156141">Call 470-215-6141</a><a className="button darkline" href="mailto:alohadetail.team@gmail.com">Email the team</a></div></section><SiteFooter /></main> }
