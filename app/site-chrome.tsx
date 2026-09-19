"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const bookingUrl = "https://app.urable.com/virtual-shop/5KX6MhF9GzY0CymxBlHG";
export const phone = "tel:+14702156141";
export const text = "sms:+14702156141";

const links = [
  ["Services", "/services"],
  ["How it works", "/how-it-works"],
  ["Our work", "/work"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const pathname = usePathname();
  return <header className={`nav ${overlay ? "nav-overlay" : "nav-inner"}`} aria-label="Primary navigation">
    <Link className="brand" href="/" aria-label="Aloha Auto Detailing home"><Image className="brand-logo" src="/images/aloha-02.webp" alt="Aloha Mobile Detailing" width={300} height={300} priority /><span><b>Aloha Auto Detailing</b><small>Mobile care · Peachtree City</small></span></Link>
    <nav className="desktop-nav">{links.map(([label, href]) => <Link key={href} href={href} aria-current={pathname===href?"page":undefined}>{label}</Link>)}</nav>
    <a className="nav-call" href={bookingUrl}>Book online</a>
    <details className="mobile-menu"><summary aria-label="Open navigation">Menu</summary><div>{links.map(([label, href]) => <Link key={href} href={href} aria-current={pathname===href?"page":undefined}>{label}</Link>)}<a href={phone}>Call us</a><a href={bookingUrl}>Book online</a></div></details>
  </header>;
}

export function SiteFooter() {
  return <footer><Link className="brand footer-brand" href="/"><Image className="brand-logo" src="/images/aloha-02.webp" alt="Aloha Mobile Detailing" width={300} height={300} /></Link><div><p>Mobile auto detailing</p><p>Peachtree City, Georgia</p></div><div className="footer-links">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<a href={bookingUrl}>Book</a></div><a className="powered" href="https://syncedupsolutions.com">Powered by SyncedUp</a></footer>;
}
