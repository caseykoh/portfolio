import proxii_world_preview from "../../assets/proxii_world.png";
import uiux_preview from "../../assets/uiux.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const workExperience = [
  {
    id: 1,
    startDate: "2023",
    endDate: "Present",
    position: "Full Stack Developer",
    company: "Freelance",
    description:
      "Custom design and develop responsive web applications for multi-discliplinary artists.",
    link: "https://proxiiworld.netlify.app/",
    label: "Freelance Full Stack Developer",
  },
  {
    id: 2,
    startDate: "Sept",
    endDate: "Dec 2021",
    position: "UX Design Co-op",
    company: "Arctic Wolf",
    description:
      "Validate system migration of cybersecurity workflows and maintain design system patterns, promoting reusability and consistency throughout systems.",
    link: "https://arcticwolf.com/",
    label: "UX Design Co-op at Arctic Wolf",
  },
  {
    id: 3,
    startDate: "Sept",
    endDate: "Dec 2019",
    position: "Full Stack Engineer Co-op",
    company: "StackAdapt",
    description:
      "Frontend development with React, backend using Ruby, and Ruby on Rails.",
    link: "https://www.stackadapt.com/",
    label: "Full Stack Engineer Co-op at StackAdapt",
  },
  {
    id: 4,
    startDate: "May",
    endDate: "Aug 2018",
    position: "QA Developer Co-op",
    company: "QuickTapSurvey",
    description: "Design and develop web and mobile test scripts.",
    link: "https://quicktapsurvey.com/",
    label: "QA Developer Co-op at QuickTapSurvey",
  },
];

const Home = () => {
  const bio = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLOListElement>(null);
  const bodySection = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const aboutSection = useRef<HTMLDivElement>(null);
  const experienceSection = useRef<HTMLDivElement>(null);
  const workSection = useRef<HTMLDivElement>(null);

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

  //timeline animation
  // useGSAP(
  //   () => {
  //     let tl = gsap.timeline();
  //     tl.from(bio.current!, {
  //       duration: 1,
  //       ease: "power3.out",
  //       opacity: 0,
  //       delay: 0.2,
  //       y: -80,
  //     });
  //     tl.from(timeline.current!, { duration: 3.6, scaleY: 0 });
  //     tl.from("li", { opacity: 0, stagger: 1.2 }, "<"); // <-- automatically reverted
  //     gsap.from(bodySection.current!, {
  //       duration: 1,
  //       ease: "power3.out",
  //       opacity: 0,
  //       y: 100,
  //       delay: 0.2,
  //     });
  //   },
  //   { scope: container }
  // ); // <-- scope is for selector text (optional)

  return (
    <>
      <div
        ref={targetRef}
        className="min-w-full font-inter container min-h-screen px-40 text-cyan-100 bg-slate-900 bg-[radial-gradient(circle_600px_at_var(--x,100px)_var(--y,100px),#172c3d_0%,transparent_100%)] grid gap-24 grid-cols-[4fr_8fr]"
      >
        <section className="max-w-md min-h-screen max-h-screen py-20 flex justify-start flex-col sticky top-0">
          <div ref={bio} className="mb-8 origin-top-left">
            <h1 className="text-6xl font-semibold">Casey Koh</h1>
            <h2 className="text-xl pt-4">Front-End Developer</h2>
            <p className="pt-6 text-cyan-100/50">
              I craft dynamic and visually stunning digital experiences.
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
                  experienceSection.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Experience
              </button>
              <button
                className="text-xl font-medium opacity-75 hover:opacity-100 duration-200"
                onClick={() => {
                  workSection.current?.scrollIntoView({
                    behavior: "smooth",
                  });
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
              Originally fascinated by the weird and delightful corners of the
              Internet, I set out to recreate a favourite of mine: a visual
              sound kit called{" "}
              <a
                href="https://patatap.com/"
                target="_blank"
                className="text-cyan-100/75 hover:text-cyan-400 focus-visible:text-cyan-400"
              >
                patatap
              </a>
              . Realizing the awesome potential of digital experiences, I
              embarked on my journey as a designer and developer in 2017. Since
              then, I've had the privilege of working and training under mentors
              at{" "}
              <a
                href="https://www.stackadapt.com/"
                target="_blank"
                className="text-cyan-50 hover:text-cyan-400 focus-visible:text-cyan-400"
              >
                StackAdapt
              </a>
              ,{" "}
              <a
                href="https://www.interaptix.com/"
                target="_blank"
                className="text-cyan-50 hover:text-cyan-400 focus-visible:text-cyan-400"
              >
                Interaptix
              </a>{" "}
              and{" "}
              <a
                href="https://arcticwolf.com/"
                target="_blank"
                className="text-cyan-50 hover:text-cyan-400 focus-visible:text-cyan-400"
              >
                Arctic Wolf
              </a>
              .
            </p>
            <p className="mb-4">
              From 2022 to 2024, I worked as a tattoo artist, co-founding a
              Toronto-based tattoo collective called{" "}
              <a
                href="https://www.instagram.com/000000000000_studio/"
                target="_blank"
                className="text-cyan-50 hover:text-cyan-400 focus-visible:text-cyan-400"
                aria-label="000000000000_studio"
              >
                @000000000000_Studio
              </a>
              . I gained invaluable design, digital marketing and
              entrepreneurship skills while growing my global network of digital
              creators.
            </p>
            <p className="mb-4">
              Currently, I am working with multi-disciplinary artists, building
              digital solutions for their e-commerce and booking needs. I
              genuinely enjoy translating unique identities and stories into
              user-friendly and captivating websites. But above all, my biggest
              passion lies in connecting with creative and like-minded people ++
            </p>
          </div>

          <div ref={experienceSection} className="pt-20 max-w-xl">
            <ol ref={container} className="">
              {workExperience.map((experience) => (
                <li className="mb-10" key={experience.id}>
                  <div className="grid grid-cols-4 gap-4 relative py-2">
                    <span className="block z-0 absolute -inset-y-3 -inset-x-4"></span>
                    <time className="text-sm relative z-10 col-span-1 font-normal text-gray-400 dark:text-gray-500">
                      {experience.startDate} — {experience.endDate}
                    </time>
                    <div className="col-start-2 col-end-5 z-10">
                      <h3 className="mb-2 text-base text-gray-100 font-semibold dark:text-gray-400">
                        <a
                          className="hover:text-cyan-400 focus-visible:text-cyan-400"
                          href={experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={experience.label}
                        >
                          <span className="duration-100 hover:bg-slate-950 hover:drop-shadow-xl rounded-md opacity-30 absolute block -inset-y-3 -inset-x-4"></span>
                          <span className="z-10 relative pointer-events-none">
                            {experience.position} | {experience.company}
                          </span>
                        </a>
                      </h3>
                      <p className="z-10 relative pointer-events-none text-sm font-normal text-gray-500 dark:text-gray-400">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div
            ref={workSection}
            id="workSection"
            className="rounded-2xl bg-gray-950 py-9 px-14"
          >
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
