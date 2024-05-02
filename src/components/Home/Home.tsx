import proxii_world_preview from "../../assets/proxii_world.png";
import uiux_preview from "../../assets/uiux.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const bio = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLOListElement>(null);
  const timeline = useRef<HTMLDivElement>(null);
  const work = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  const targetRef = useRef<HTMLDivElement>(null);

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

  useGSAP(
    () => {
      let tl = gsap.timeline();
      tl.from(bio.current!, {
        duration: 2,
        ease: "power3.out",
        opacity: 0,
        delay: 0.5,
        y: -100,
      });
      tl.from(timeline.current!, { duration: 3.6, scaleY: 0 });
      tl.from("li", { opacity: 0, stagger: 1.2 }, "<"); // <-- automatically reverted
      tl.from(work.current!, {
        duration: 2.5,
        ease: "power3.out",
        opacity: 0,
        y: 200,
        delay: 0.5,
      });
      gsap.from(contact.current!, {
        scrollTrigger: contact.current,
        opacity: 0,
        ease: "power3.out",
        x: 200,
        duration: 1.8,
        delay: 0.5,
      });
      gsap.to([timeline.current!, container.current!], {
        scrollTrigger: {
          trigger: contact.current,
          scrub: 2,
        },
        opacity: 0,
      });
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)

  return (
    <>
      <div
        ref={targetRef}
        className="min-w-full font-inter container min-h-screen px-32 text-gray-200 bg-gray-900 grid gap-5 grid-cols-[5fr_7fr]"
      >
        <section className="max-w-md min-h-screen max-h-screen py-20 flex justify-start flex-col sticky top-0">
          <div ref={bio} className="mb-8 origin-top-left">
            <h1 className="text-6xl font-semibold">Casey Koh</h1>
            <h2 className="text-xl pt-4 ms-1">Frontend Developer</h2>
          </div>
          <div className="ml-4 inline-flex">
            <div
              ref={timeline}
              className="w-px h-full max-w-px bg-gray-700 origin-top"
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
        </section>
        <div>
          <section
            ref={work}
            className="mt-64 mb-14 px-14 py-9 rounded-2xl bg-gray-950 top-56"
          >
            <div className="inline-block">
              <h2 className="text-4xl font-bold inline-block">Selected Work</h2>
              <p className="inline-block align-top ms-1">&#40;2&#41;</p>
            </div>
            <div className="mt-9 mb-12">
              <a href="https://proxiiworld.netlify.app/">
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
              <a href="https://caseykoh.webflow.io/">
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
          </section>
          <div ref={contact} className="mt-32 mb-12 text-right text-4xl">
            <span>Contact @ </span>
            <a className="underline cursor-pointer">s.casey.koh@gmail.com</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
