import CaseImage from "./CaseImage";

function Freelance() {
  return (
    <div className="min-w-full flex justify-center font-inter container min-h-screen px-10">
      <div className="py-16 grid lg:grid-cols-[1fr_3fr] gap-32">
        <div className="text-slate-50 max-w-md">
          <h1 className="text-left text-2xl pb-4 font-bold text-white">
            Custom Web Design Solutions
          </h1>
          <div className="flex flex-col gap-2">
            <p>
              Designed and developed promotional digital content for Zero
              Studio, focusing on Instagram and TikTok campaigns.
            </p>
            <p>
              Created visually engaging posts to attract new resident artists,
              promote guest artists, design logos, and advertise flash events
              and pop-ups.
            </p>
            <p>
              Collaborated with the team to develop content that strengthened
              the studio's brand presence and engaged a dynamic audience across
              social media platforms.
            </p>
            <div className="text-blue-200">
              <p>
                Year: <span className="text-blue-50">2023-2025</span>
              </p>
              <p>
                Tools:{" "}
                <span className="text-blue-50">
                  HTML/CSS, Figma, JavaScript
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-10">
          <section>
            <div className="border p-3 border-white flex flex-col gap-2">
              <CaseImage img="freelance/title.png" alt_text="Freelance" />
              <CaseImage img="freelance/gallery.png" alt_text="Freelance" />
              <CaseImage img="freelance/booking.png" alt_text="Freelance" />
              <a
                target="_blank"
                className="underline text-sky-600"
                href="https://proxiiworld.com/"
              >
                Go to site →
              </a>
            </div>
          </section>
          <section>
            <div className="border p-3 border-white flex flex-col gap-2 mb-8">
              <CaseImage
                img="freelance/haydenportfolio.png"
                alt_text="Freelance"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Freelance;
