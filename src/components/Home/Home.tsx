import proxii_world_preview from "../../assets/proxii_world.png";
import uiux_preview from "../../assets/uiux.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

// TODO: create experience and project sections and make references for them

const Home = () => {
  const bio = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLOListElement>(null);
  const timeline = useRef<HTMLDivElement>(null);
  const bodySection = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const aboutSection = useRef<HTMLDivElement>(null);

  //cursor gradient effect
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  });

  //starting timeline
  useGSAP(
    () => {
      let tl = gsap.timeline();
      tl.from(bio.current!, {
        duration: 1,
        ease: "power3.out",
        opacity: 0,
        delay: 0.2,
        y: -80,
      });
      tl.from(timeline.current!, { duration: 3.6, scaleY: 0 });
      tl.from("li", { opacity: 0, stagger: 1.2 }, "<"); // <-- automatically reverted
      gsap.from(bodySection.current!, {
        duration: 1,
        ease: "power3.out",
        opacity: 0,
        y: 100,
        delay: 0.2,
      });
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)

  return (
    <>
      <div
        ref={targetRef}
        className="min-w-full font-inter container min-h-screen px-40 text-cyan-100 bg-slate-900 bg-[radial-gradient(circle_600px_at_var(--x,100px)_var(--y,100px),#172c3d_0%,transparent_100%)] grid gap-24 grid-cols-[5fr_7fr]"
      >
        <section className="max-w-md min-h-screen max-h-screen py-20 flex justify-start flex-col sticky top-0">
          <div ref={bio} className="mb-8 origin-top-left">
            <h1 className="text-6xl font-semibold">Casey Koh</h1>
            <h2 className="text-xl pt-4">Frontend Developer</h2>
            <p className="pt-6 text-cyan-100/50">
              I build enlightening, digital experiences.
            </p>
          </div>
          <div>
            <ul className="flex flex-col items-start gap-2s">
              <button
                className="text-xl font-medium opacity-75 hover:opacity-100 duration-200"
                onClick={() => {
                  bodySection.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                About
              </button>
              <button
                className="text-xl font-medium opacity-75 hover:opacity-100 duration-200"
                onClick={() => {
                  bodySection.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Experience
              </button>
              <button
                className="text-xl font-medium opacity-75 hover:opacity-100 duration-200"
                onClick={() => {
                  bodySection.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Projects
              </button>
            </ul>
          </div>
        </section>
        <section ref={bodySection} className="py-20">
          <div ref={aboutSection} className="text-cyan-100/50 leading-relaxed">
            <p className="mb-4">
              Fascinated by the weird and delightful corners of the Internet, I
              set out to recreate a favourite of mine: an animated visual sound
              experience called{" "}
              <a
                href="https://patatap.com/"
                target="_blank"
                className="underline"
              >
                patatap
              </a>
              . Seeing the endless possibilities of coding and web development,
              I embarked on my journey as a developer in 2017. Since then, I've
              had the privilege of working and training under mentors at{" "}
              <a
                href="https://www.stackadapt.com/"
                target="_blank"
                className="text-cyan-50"
              >
                StackAdapt
              </a>
              ,{" "}
              <a
                href="https://www.interaptix.com/"
                target="_blank"
                className="text-cyan-50"
              >
                Interaptix
              </a>{" "}
              and{" "}
              <a
                href="https://arcticwolf.com/"
                target="_blank"
                className="text-cyan-50"
              >
                Arctic Wolf
              </a>
              .
            </p>
            <p className="mb-4">
              In 2022, I was active as a tattoo artist in Toronto, honing my
              composition and design skills. Working with multi-disciplinary
              artists, I created digital solutions for their portfolio and
              booking needs.
            </p>
            <p className="mb-4">
              I live at the junction of design, art and technology - shining
              when creating critical user experiences.
            </p>
          </div>

          <div className="ml-4 inline-flex">
            <div
              ref={timeline}
              className="w-px max-w-px bg-gray-700 origin-top"
            ></div>
            <ol ref={container} className="relative max-w-sm">
              <li className="mb-3 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  April 2022
                </time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Graduated Computer Science Co-op at University of Waterloo
                </p>
              </li>
              <li className="mb-3 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Feb 2023
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Tattoo Artist at Zero Studio
                </p>
              </li>
              <li className="ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Sept 2023
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Freelance Developer/Designer
                </p>
              </li>
            </ol>
          </div>
          <div className="rounded-2xl bg-gray-950 py-9 px-14">
            <div className="inline-block">
              <h2 className="text-4xl font-bold inline-block">Selected Work</h2>
              <p className="inline-block align-top ms-1">&#40;2&#41;</p>
            </div>
            <div className="mt-9 mb-12">
              <a href="https://proxiiworld.netlify.app/" target="_blank">
                <img
                  className="rounded-3xl cursor-pointer"
                  src={proxii_world_preview}
                  alt="proxii_world"
                />
              </a>
              <div className="my-8">
                <h3 className="font-bold text-lg">proxii_world</h3>
                <p className="text-gray-500">
                  Showcasing a unique artist's voice through brutalist style
                  booking site.
                </p>
              </div>
            </div>
            <div className="mt-9 mb-12">
              <a href="https://caseykoh.webflow.io/" target="_blank">
                <img
                  className="rounded-3xl cursor-pointer"
                  src={uiux_preview}
                  alt="UI/UX Work"
                />
              </a>
              <div className="my-8">
                <h3 className="font-bold text-lg">UI/UX Work</h3>
                <p className="text-gray-500">Internship and portfolio work.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
