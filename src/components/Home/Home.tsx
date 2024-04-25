import photocard from "../../assets/casey-koh-photocard.jpg";
import proxii_world_preview from "../../assets/proxii_world.png";
import uiux_preview from "../../assets/uiux.png";
import Navbar from "../Navbar/Navbar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const Home = () => {
  // const tl = useRef();

  // const toggleTimeline = () => {
  //   tl.current.reversed(!tl.current.reversed());
  // };

  // useGSAP(
  //   () => {
  //     const boxes = gsap.utils.toArray(".box");
  //     tl.current = gsap
  //       .timeline()
  //       .to(boxes[0], { x: 120, rotation: 360 })
  //       .to(boxes[1], { x: -120, rotation: -360 }, "<")
  //       .to(boxes[2], { y: -166 })
  //       .reverse();
  //   },
  //   { scope: container }
  // );

  return (
    <>
      <Navbar />
      <div className="min-w-full font-inter container min-h-screen px-16 text-gray-50 bg-gradient-to-br from-gray-950 to-gray-800 grid gap-5 grid-cols-[5fr_7fr]">
        <section className="max-w-md min-h-screen max-h-screen py-11 flex justify-start flex-col sticky top-0">
          <div className="mb-8">
            <img
              className="max-h-52 rounded-2xl mb-3"
              src={photocard}
              alt="Casey Koh Photo"
            />
            <h1 className="text-6xl font-medium">Casey Koh</h1>
          </div>
          <div className="ml-4">
            <ol className="relative border-s border-gray-200 dark:border-gray-700 max-w-sm">
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
          <section className="mt-64 mb-14 px-14 py-9 rounded-2xl bg-gray-950 top-56">
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
          <div className="mt-32 mb-12 text-right text-4xl">
            <span>Contact @ </span>
            <a className="underline cursor-pointer">s.casey.koh@gmail.com</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
