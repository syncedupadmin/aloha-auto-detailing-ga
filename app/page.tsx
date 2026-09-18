import Image from "next/image";

const bookingUrl = "https://app.urable.com/virtual-shop/5KX6MhF9GzY0CymxBlHG";
const phone = "tel:+14702156141";

const services = [
  ["Interior reset", "Vacuuming, shampoo and extraction, surfaces, glass and the details that make the cabin feel fresh again."],
  ["Full detail", "A thorough interior and exterior service built for vehicles that need more than a maintenance wash."],
  ["Paint correction", "Measured polishing work to reduce swirls and restore gloss before protection is applied."],
  ["Ceramic coating", "Longer-term paint protection for drivers who want easier maintenance and a deeper finish."],
];

export default function Home() {
  return <main>
    <a className="skip" href="#content">Skip to content</a>
    <header className="nav" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="Aloha Auto Detailing home"><Image className="brand-logo" src="/images/aloha-02.webp" alt="Aloha Mobile Detailing" width={300} height={300} priority /></a>
      <nav className="desktop-nav"><a href="#services">Services</a><a href="#work">Our work</a><a href="#area">Service area</a></nav>
      <a className="nav-call" href={phone}>Call 470-215-6141</a>
      <details className="mobile-menu"><summary aria-label="Open navigation">Menu</summary><div><a href="#services">Services</a><a href="#work">Our work</a><a href="#area">Service area</a><a href={phone}>Call us</a></div></details>
    </header>

    <section className="hero" id="top">
      <Image className="hero-image" src="/images/aloha-03.webp" alt="Freshly detailed white pickup truck in Peachtree City" fill priority sizes="100vw" />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow">Mobile detailing · Peachtree City, GA</p>
        <h1>Your car.<br/><span>Cared for.</span></h1>
        <p className="hero-copy">Professional detailing that comes to your driveway—interior refreshes, full details, paint correction and ceramic protection.</p>
        <div className="actions"><a className="button primary" href={bookingUrl}>View services & book <span aria-hidden="true">↗</span></a><a className="button ghost" href={phone}>Call or text</a></div>
      </div>
      <div className="hero-note"><span>Convenience, without compromise.</span><small>Booking available online 24/7</small></div>
    </section>

    <div id="content">
      <section className="intro section-pad">
        <p className="section-index">01 / The Aloha standard</p>
        <div><h2>Not a quick wash.<br/>A complete reset.</h2><p>Aloha brings professional tools, careful technique and a detail-first mindset to your home or office. The goal is simple: make your vehicle feel worth getting into again.</p></div>
      </section>

      <section className="services" id="services">
        <div className="services-head"><p className="section-index">02 / Services</p><h2>Choose the care<br/>your vehicle needs.</h2></div>
        <div className="service-list">{services.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><a href={bookingUrl} aria-label={`Book ${title}`}>Explore & book <span aria-hidden="true">↗</span></a></article>)}</div>
      </section>

      <section className="work" id="work">
        <div className="work-main"><Image src="/images/aloha-06.webp" alt="Detailer polishing a black SUV under inspection lights" fill sizes="(max-width: 800px) 100vw, 65vw" /></div>
        <div className="work-side"><Image src="/images/aloha-04.webp" alt="Two freshly detailed vehicles in a Peachtree City driveway" fill sizes="(max-width: 800px) 100vw, 35vw" /></div>
        <div className="work-label"><p>Real vehicles. Real local work.</p><span>Inspect · correct · protect</span></div>
      </section>

      <section className="process section-pad">
        <p className="section-index">03 / What to expect</p>
        <div className="process-grid"><div><b>01</b><h3>Choose a service</h3><p>Review the live service menu and select what fits your vehicle.</p></div><div><b>02</b><h3>Pick your time</h3><p>Schedule through Aloha’s booking system—no credit card required to view availability.</p></div><div><b>03</b><h3>We come prepared</h3><p>Your vehicle gets focused, professional attention at the agreed location.</p></div></div>
      </section>

      <section className="area" id="area">
        <div><p className="section-index light">04 / Local service</p><h2>Peachtree City<br/>and nearby.</h2></div>
        <div className="area-copy"><p>Aloha serves drivers in Peachtree City, Newnan and Fayetteville, with additional nearby communities listed through its current booking network.</p><address>401 Westpark Ct<br/>Peachtree City, GA 30269</address><a href={phone}>470-215-6141</a><a href="mailto:alohadetail.team@gmail.com">alohadetail.team@gmail.com</a></div>
      </section>

      <section className="closing"><p className="eyebrow">Your driveway. A better finish.</p><h2>Give your car<br/>the Aloha treatment.</h2><div className="actions"><a className="button primary" href={bookingUrl}>Book online <span aria-hidden="true">↗</span></a><a className="button darkline" href={phone}>Call 470-215-6141</a></div></section>
    </div>

    <footer><a className="brand footer-brand" href="#top"><Image className="brand-logo" src="/images/aloha-02.webp" alt="Aloha Mobile Detailing" width={300} height={300} /></a><div><p>Mobile auto detailing</p><p>Peachtree City, Georgia</p></div><div className="footer-links"><a href={bookingUrl}>Book</a><a href={phone}>Call</a><a href="mailto:alohadetail.team@gmail.com">Email</a></div><a className="powered" href="https://syncedupsolutions.com">Powered by SyncedUp</a></footer>
  </main>;
}
