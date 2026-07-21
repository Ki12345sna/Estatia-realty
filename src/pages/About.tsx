import { useNavigate } from "react-router-dom";
import { Compass, Eye, Target } from "lucide-react";
import { MaskReveal, Reveal, StaggerReveal } from "../components/common/Reveal";
import { Counter } from "../components/common/Counter";
import { Magnetic } from "../components/common/MagneticButton";
import { officeGallery, team, testimonials, timeline, values } from "../data";

const numbers = [
  { label: "Years of Excellence", value: 18, suffix: "" },
  { label: "Residences Sold", value: 1280, suffix: "+" },
  { label: "Global Advisors", value: 64, suffix: "" },
  { label: "Cities Represented", value: 42, suffix: "" },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <main className="bg-black text-white">
      {/* Hero / Company story intro */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden px-6 pb-20 pt-40 sm:px-10">
        <div className="pointer-events-none absolute inset-0">
          <img
            src="https://images.pexels.com/photos/36286291/pexels-photo-36286291.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1600"
            alt="Estatia headquarters"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-white/50">
              Our Story
            </span>
          </Reveal>
          <MaskReveal className="mt-5">
            <h1 className="max-w-3xl font-luxury-serif text-5xl italic leading-[1.05] sm:text-6xl lg:text-7xl">
              Built on trust, defined by taste
            </h1>
          </MaskReveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-white/50 sm:text-base">
              For nearly two decades, Estatia has represented the world's
              most extraordinary residences — guiding discerning clients
              with discretion, insight, and an uncompromising eye for design.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 py-24 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
          {[
            { icon: Compass, title: "Our Mission", text: "To connect exceptional people with exceptional places, guided by integrity and craft at every step." },
            { icon: Eye, title: "Our Vision", text: "To be the world's most trusted name in architectural real estate — where legacy properties find their rightful stewards." },
            { icon: Target, title: "Our Promise", text: "Every engagement is treated as a singular relationship, never a transaction — precise, private, and personal." },
          ].map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.1} className="rounded-2xl border border-white/10 p-8 transition-colors duration-500 hover:border-white/30">
              <Icon size={26} strokeWidth={1.2} className="text-white/60" />
              <h3 className="mt-6 font-luxury-serif text-2xl italic">{title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-white/50">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Founder section */}
      <section className="px-6 py-24 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative h-[26rem] overflow-hidden rounded-2xl border border-white/10 sm:h-[32rem]">
            <img
              src={team[0].image}
              alt={team[0].name}
              className="h-full w-full object-cover"
            />
          </Reveal>
          <div>
            <Reveal>
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-white/40">
                Founder's Note
              </span>
            </Reveal>
            <MaskReveal className="mt-5">
              <h2 className="font-luxury-serif text-4xl italic leading-[1.15] sm:text-5xl">
                "Real estate, done with reverence."
              </h2>
            </MaskReveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-white/50">
                I founded Estatia on a simple belief: that a home is never
                just a building — it's a legacy, a feeling, a rare piece of
                the world worth protecting. Every residence we represent is
                chosen with that same reverence.
              </p>
            </Reveal>
            <Reveal delay={0.25} className="mt-8">
              <p className="font-luxury-serif text-xl italic">{team[0].name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">{team[0].role}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Numbers counter */}
      <section className="border-y border-white/10 px-6 py-20 sm:px-10">
        <StaggerReveal className="mx-auto grid max-w-7xl grid-cols-2 gap-8 lg:grid-cols-4" itemClassName="text-center">
          {numbers.map((n) => (
            <div key={n.label}>
              <div className="font-luxury-serif text-4xl italic sm:text-5xl">
                <Counter value={n.value} suffix={n.suffix} />
              </div>
              <p className="mt-3 text-[0.6rem] font-medium uppercase tracking-[0.25em] text-white/40">
                {n.label}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </section>

      {/* Office gallery */}
      <section className="px-6 py-24 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-white/40">
              Inside Estatia
            </span>
          </Reveal>
          <MaskReveal className="mt-5">
            <h2 className="max-w-xl font-luxury-serif text-4xl italic leading-[1.1] sm:text-5xl">
              A studio built for quiet ambition
            </h2>
          </MaskReveal>

          <StaggerReveal className="mt-14 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4" y={35}>
            {officeGallery.map((img, i) => (
              <div
                key={img}
                className={`group overflow-hidden rounded-xl border border-white/10 ${
                  i === 0 ? "col-span-2 row-span-2 h-[22rem] sm:h-[26rem]" : "h-40 sm:h-[12.5rem]"
                }`}
              >
                <img
                  src={img}
                  alt="Estatia office"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Timeline (vertical) + Values */}
      <section className="px-6 py-24 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr]">
          <div>
            <Reveal>
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-white/40">
                Milestones
              </span>
            </Reveal>
            <div className="mt-10 space-y-10 border-l border-white/10 pl-8">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.08} className="relative">
                  <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full border border-white bg-black" />
                  <p className="font-luxury-serif text-2xl italic text-white/90">{item.year}</p>
                  <h4 className="mt-2 text-sm font-medium uppercase tracking-[0.1em] text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 max-w-sm text-sm font-light leading-relaxed text-white/50">
                    {item.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-white/40">
                Our Values
              </span>
            </Reveal>
            <StaggerReveal className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2" y={30}>
              {values.map((v, i) => (
                <div key={v.title} className="rounded-xl border border-white/10 p-6 transition-colors duration-500 hover:border-white/30">
                  <span className="text-xs text-white/30">0{i + 1}</span>
                  <h4 className="mt-3 font-luxury-serif text-xl italic">{v.title}</h4>
                  <p className="mt-2 text-sm font-light leading-relaxed text-white/50">{v.description}</p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* Meet the team */}
      <section className="px-6 py-24 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-white/40">
              Meet the Team
            </span>
          </Reveal>
          <MaskReveal className="mt-5">
            <h2 className="max-w-xl font-luxury-serif text-4xl italic leading-[1.1] sm:text-5xl">
              The advisors behind every address
            </h2>
          </MaskReveal>

          <StaggerReveal className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" y={35}>
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="relative h-72 overflow-hidden rounded-xl border border-white/10 sm:h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <p className="absolute inset-x-0 bottom-0 translate-y-4 p-5 text-xs font-light text-white/70 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {member.bio}
                  </p>
                </div>
                <h4 className="mt-4 font-luxury-serif text-lg italic">{member.name}</h4>
                <p className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-white/40">{member.role}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Testimonials strip */}
      <section className="border-y border-white/10 px-6 py-24 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-white/40">
              What Clients Say
            </span>
          </Reveal>
          <StaggerReveal className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3" y={30}>
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-white/10 p-7">
                <p className="text-sm font-light italic leading-relaxed text-white/60">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs font-light text-white/40">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 py-28 text-center sm:px-10 lg:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <MaskReveal>
            <h2 className="font-luxury-serif text-4xl italic leading-[1.15] sm:text-5xl">
              Ready to find a home worth remembering?
            </h2>
          </MaskReveal>
          <Reveal delay={0.15} className="mt-9">
            <Magnetic
              as="button"
              onClick={() => navigate("/contact")}
              className="rounded-full bg-white px-9 py-4 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-black transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.35)]"
            >
              Get in Touch
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
