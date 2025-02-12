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
              I designed and developed custom web solutions for artists and
              businesses, translating each client's unique creative identity
              into web experiences.
            </p>
            <p>
              For proxii_dream, I created a custom CMS application to allow easy
              flash uploading, and appointment management.
            </p>
            <p>
              Mobile experiences were heavily prioritized, optimizing for
              Instagram-to-web conversions.
            </p>
            <div className="text-blue-200">
              <p>
                Clients:{" "}
                <span className="text-blue-50">proxii_dream, Hayden Koh</span>
              </p>
              <p>
                Year: <span className="text-blue-50">2023-2025</span>
              </p>
              <p>
                Tools:{" "}
                <span className="text-blue-50">
                  HTML/CSS, Figma, JavaScript, React, Node.js
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
