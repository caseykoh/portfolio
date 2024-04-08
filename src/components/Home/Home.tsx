import photocard from "../../assets/casey-koh-photocard.jpg";
import proxii_world_preview from "../../assets/proxii_world.png";

const Home = () => {
  return (
    <div className="font-inter container min-h-screen px-16 text-gray-50 bg-gradient-to-br from-gray-950 to-gray-800 grid gap-5 grid-cols-[5fr_7fr]">
      <section className="max-w-md my-11 flex justify-between flex-col sticky top-0">
        <div className="border-t-2 border-gray-50 text-base pt-4">
          <p className="text-gray-50 mr-8">
            Former tattoo artist, turned web developer based in Toronto -
            reclaiming the modern website as her medium of choice.
          </p>
        </div>
        <div>
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
        <div>
          <img
            className="max-h-52 rounded-2xl"
            src={photocard}
            alt="Casey Koh Photo"
          />
          <h1 className="text-6xl font-medium">Casey Koh</h1>
        </div>
      </section>
      <section className="rounded-3xl bg-gray-950 top-56">
        <h2 className="text-4xl">Selected Work</h2>
        <img
          className="rounded-3xl"
          src={proxii_world_preview}
          alt="proxii_world"
        />
        <h3>proxii_world</h3>
        <p>
          Showcasing a unique artist's voice through brutalist style booking
          site.
        </p>
      </section>
    </div>
  );
};

export default Home;
