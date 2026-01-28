import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "./components/SplitText";
import Aurora from "./components/Aurora";
import { Confetti } from "./components/Confetti";
import { memories } from "./data/memories";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [confettiOn, setConfettiOn] = useState(true);
  const heroSectionRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t2 = setTimeout(() => setConfettiOn(false), 14000);
    return () => {
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    const heroEl = heroTextRef.current;
    const heroSectionEl = heroSectionRef.current;
    const scrollIndicatorEl = scrollIndicatorRef.current;
    if (!heroEl || !heroSectionEl || !scrollIndicatorEl) return;

    const heroTween = gsap.to(heroEl, {
      yPercent: -35,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: heroSectionEl,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    const indicatorTween = gsap.to(scrollIndicatorEl, {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: heroSectionEl,
        start: "top top+=1",
        end: "top+=140 top",
        scrub: true,
      },
    });

    return () => {
      heroTween.scrollTrigger?.kill();
      heroTween.kill();
      indicatorTween.scrollTrigger?.kill();
      indicatorTween.kill();
    };
  }, []);

  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".memory-section");
    const tweens: gsap.core.Tween[] = [];

    const intro = gsap.utils.toArray<HTMLElement>(".memory-intro");

    intro.forEach((el) => {
      const tween = gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
      tweens.push(tween);
    });

    sections.forEach((section) => {
      const image = section.querySelector<HTMLElement>(".memory-image");
      const text = section.querySelector<HTMLElement>(".memory-text");
      if (!image || !text) return;

      const imageTween = gsap.fromTo(
        image,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      );

      const textTween = gsap.fromTo(
        text,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 65%",
            toggleActions: "play none none none",
          },
        },
      );

      tweens.push(imageTween, textTween);
    });

    return () => {
      tweens.forEach((tween) => {
        tween.scrollTrigger?.kill();
        tween.kill();
      });
    };
  }, []);

  const scrollToMemories = () => {
    document.getElementById("memories")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative z-0 min-h-screen bg-[#0b0205] text-white">
      {/* HERO */}
      <section
        ref={heroSectionRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
      >
        <Aurora
          colorStops={["#ff5a6e", "#d11a2a", "#7a0b17"]}
          blend={0.44}
          amplitude={1.0}
          speed={1}
          className="fixed -z-10"
        />
        {/* confetti */}
        <Confetti active={confettiOn} seconds={14} pieces={120} />

        {/* background glows */}
        {/* <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-[#d11a2a]/20 blur-3xl" />
          <div className="absolute bottom-[-260px] left-[10%] h-[640px] w-[640px] rounded-full bg-[#8a0c1a]/20 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/70" />
        </div> */}

        {/* text */}
        <div
          ref={heroTextRef}
          className="relative z-10 w-full max-w-3xl text-center"
        >
          <div>
            <SplitText
              text="Happy 17th Birthday!"
              tag="h1"
              className="relative z-10 overflow-visible whitespace-nowrap pb-2 text-3xl font-semibold leading-[1.1] tracking-wide text-white sm:text-5xl md:text-7xl"
              delay={35}
              duration={1.1}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <div
              className="relative z-10 mt-3 text-2xl font-semibold tracking-[0.2em] sm:text-3xl"
              style={{ fontFamily: "cursive" }}
            >
              <SplitText
                text="KHUSHIE"
                tag="h2"
                className="italic text-[#ff5a6e] drop-shadow-[0_0_32px_rgba(255,90,110,0.65)]"
                delay={40}
                duration={1.1}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 26 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </div>
          </div>
        </div>

        <div
          ref={scrollIndicatorRef}
          className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center text-base text-white/70"
        >
          <div>To all the moments we've spent together</div>
          <div className="mt-2 flex justify-center animate-bounce">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </section>

      {/* MEMORIES SECTION */}
      <section id="memories" className="px-6 pb-24 pt-24">
        <div className="mx-auto w-full max-w-6xl h-100 text-center">
          <h2 className="memory-intro text-2xl font-semibold tracking-wide">
            Dear my Beloved Khushie,
          </h2>
          <p className="memory-intro mt-3 text-white/70">
            I am beyond excited to wish you the happiest 17th birthday, and I
            hope you enjoy this day and its full of love, laughter, and
            beautiful moments, because you deserve it more than I could ever
            express. I wish we could spend every minute of this special day
            together, but even though that isn't possible, I hope you feel me
            with you the whole time.
            <br></br>
            <br></br>
            As a small gesture, I've made this website to compile all our
            beautiful moments together with small notes about each one. I hope
            you enjoy scrolling through our memories and it makes your smile
            wider for the rest of the day.
          </p>
        </div>

        <div className="mt-12 space-y-32">
          {memories.map((memory, index) => (
            <div key={index} className="memory-section relative min-h-[120vh]">
              <div className="flex min-h-screen items-center">
                <div className="mx-auto w-full max-w-6xl">
                  <div className="relative mx-auto flex w-full flex-col items-center md:min-h-[520px] md:flex-row md:items-center md:justify-between md:gap-12">
                    <div className="memory-image relative mx-auto h-[360px] w-[300px] flex-none overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl sm:h-[460px] sm:w-[380px] md:h-[520px] md:w-[460px]">
                      <img
                        src={memory.image}
                        alt={memory.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="memory-text mt-8 max-w-lg flex-1 text-center text-white/80 md:mt-0 md:max-w-md md:text-left">
                      <h3 className="text-xl font-semibold text-white sm:text-2xl">
                        {memory.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-white/70">
                        {memory.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto w-full max-w-6xl h-120 text-center">
          <p className="memory-intro mt-3 text-white/70">
            Happy Birthday once again my love. I really hope you enjoyed reading
            my little notes along with looking at the pictures, and I also wish
            that this makes this special day of January 28th, 2026 just a little
            bit brighter.
            <br></br>
            <br></br>
            Yours Truly, <br></br>
            Ryan
          </p>
        </div>
      </section>
    </div>
  );
}
