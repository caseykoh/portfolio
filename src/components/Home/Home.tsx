import proxii_world_mockup from "../../assets/proxiiworld_mockup.png";
import arctic_wolf_case from "../../assets/arctic_wolf_case.png";
import sturesident_case from "../../assets/sturesident.png";
import flash_case from "../../assets/flash.png";
import mpod_case from "../../assets/mpod.jpeg";
import seashell from "../../assets/seashell.png";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight } from "react-icons/fi";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const workExperience = [
  {
    id: 1,
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
    id: 2,
    startDate: "Jan",
    endDate: "Apr 2021",
    position: "UI/UX Design Co-op",
    company: "Interaptix",
    description:
      "Design asset management UI and craft responsive mobile AR experience with cross-platform communication.",
    link: "https://www.interaptix.com/",
    label: "UI/UX Design Co-op at Interaptix",
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
    startDate: "Jan",
    endDate: "Apr 2019",
    position: "Full Stack Developer Co-op",
    company: "Imagine Communications",
    description:
      "Optimize database architecture, and implement data source providers. Microsoft .NET and C#.",
    link: "https://imaginecommunications.com/",
    label: "Full Stack Developer Co-op at Imagine Communications",
  },
  {
    id: 5,
    startDate: "May",
    endDate: "Aug 2018",
    position: "QA Developer Co-op",
    company: "QuickTapSurvey",
    description: "Design and develop web and mobile test scripts.",
    link: "https://quicktapsurvey.com/",
    label: "QA Developer Co-op at QuickTapSurvey",
  },
];

const caseStudies = [
  {
    id: 1,
    title: "Tattoo Booking Platform",
    category: "Web Development, UI/UX",
    image: proxii_world_mockup,
    link: "https://proxiiworld.netlify.app/",
    client: "proxii_dream",
  },
  {
    id: 2,
    title: "Dashboard UX and Research",
    category: "UI/UX",
    image: arctic_wolf_case,
    link: "https://caseykoh.webflow.io/projects/arctic-wolf",
    client: "Arctic Wolf",
  },
  {
    id: 3,
    title: "Studio Promotional Materials",
    category: "Social Media, Branding",
    image: sturesident_case,
    client: "Zero Studio",
  },
  {
    id: 4,
    title: "Clothing Graphic Design",
    category: "Graphic Design",
    image: mpod_case,
    client: "MaybePerhapsOneDay",
  },
  {
    id: 5,
    title: "Digital Art Collection",
    category: "Illustration, Creative Direction",
    image: flash_case,
    client: "Personal",
  },
];

const Home = () => {
  const bio = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLOListElement>(null);
  const bodySection = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const aboutSection = useRef<HTMLDivElement>(null);
  const experienceSection = useRef<HTMLDivElement>(null);

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
        className="min-w-full flex justify-center font-inter container min-h-screen px-10 text-slate-100"
      >
        <div className="absolute w-28 top-36 left-40">
          <img src={seashell} alt="Casey Koh" className="mix-blend-screen" />
        </div>
        <div className="max-w-4xl">
          <section className="max-w-md max-h-[65vh] pt-[12rem] pb-2 flex justify-between flex-col">
            <div>
              <div ref={bio} className="origin-top-left">
                <h1 className="text-xl text-blue-400 mix-blend-screen">
                  Casey Koh
                </h1>
              </div>
            </div>
          </section>
          <section ref={bodySection} className="py-8">
            <div
              id="workSection"
              className="py-4 grid grid-cols-2 gap-x-6 gap-y-10"
            >
              {caseStudies.map((study, index) => (
                <div
                  key={study.id}
                  className="group overflow-hidden rounded-lg shadow-lg  transform transition-all opacity-0 duration-500 animate-slideFadeIn"
                  style={{
                    animationDelay: `${index * 300}ms`,
                  }}
                >
                  <a href={study.link} className="" target="_blank">
                    <div className="max-w-lg duration-100 rounded">
                      <img
                        className="rounded object-cover object-top w-full h-full max-h-96 cursor-pointer"
                        src={study.image}
                      />
                      <div className="absolute inset-0 bg-slate-800/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex w-full h-full justify-center items-center bottom-0 left-0 right-0 p-4 group-hover:opacity-100 duration-300">
                          <div className="flex flex-col items-center">
                            <h3 className="text-white font-bold text-2xl mb-1">
                              {study.title}
                            </h3>
                            <p className="text-white/80 text-sm">
                              {study.category}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <div ref={experienceSection} className="pt-20 max-w-xl">
              <ol ref={container} className="">
                {workExperience.map((experience) => (
                  <li className="mb-10" key={experience.id}>
                    <div className="grid grid-cols-4 gap-4 relative py-2">
                      <span className="block z-0 absolute -inset-y-3 -inset-x-4"></span>
                      <time className="text-sm relative z-10 col-span-1 font-normal text-gray-500 dark:text-gray-500">
                        {experience.startDate} — {experience.endDate}
                      </time>
                      <div className="col-start-2 col-end-5 z-10">
                        <h3 className="mb-2 text-base text-slate-500 font-semibold dark:text-gray-400">
                          <a
                            className="hover:text-slate-700 focus-visible:text-slate-700"
                            href={experience.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={experience.label}
                          >
                            <span className="duration-100 hover:bg-slate-300 hover:drop-shadow-xl rounded-md opacity-30 absolute block -inset-y-3 -inset-x-4"></span>
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
              <div className="inline-block">
                <a
                  href="src/assets/caseykohresume.pdf"
                  target="_blank"
                  className="flex items-center mb-12 font-semibold gap-1 hover:text-cyan-400 focus-visible:text-cyan-400"
                >
                  <span>See resume</span>
                  <FiArrowUpRight />
                </a>
              </div>
            </div>
            <div
              ref={aboutSection}
              className="text-slate-600/50 leading-relaxed"
            >
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
                embarked on my journey as a designer and developer in 2017.
                Since then, I've had the privilege of working and training under
                mentors at{" "}
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
                entrepreneurship skills while growing my global network of
                digital creators.
              </p>
              <p className="mb-4">
                Currently, I am working with multi-disciplinary artists,
                building digital solutions for their e-commerce and booking
                needs. I genuinely enjoy translating unique identities and
                stories into user-friendly and captivating websites. But above
                all, my biggest passion lies in connecting with creative and
                like-minded people ++
              </p>
            </div>
            <div className="flex gap-2 mt-2">
              <a
                href="https://github.com/caseykoh"
                target="_blank"
                className="inline-block opacity-75 hover:opacity-100 duration-200"
              >
                [Github]
              </a>
              <a
                href="https://www.linkedin.com/in/caseykoh/"
                target="_blank"
                className="inline-block opacity-75 hover:opacity-100 duration-200"
              >
                [LinkedIn]
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
