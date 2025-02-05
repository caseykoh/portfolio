import CaseImage from "./CaseImage";

function Interaptix() {
  return (
    <div className="min-w-full flex justify-center font-inter container min-h-screen px-10">
      <div className="flex flex-col">
        <div className="py-16 grid grid-cols-[1fr_3fr] gap-32">
          <div className="text-slate-50 max-w-md">
            <h1 className="text-left text-2xl pb-4 font-bold text-white">
              Augmented Reality Design
            </h1>
            <div className="flex flex-col gap-2">
              <p>
                Designed and researched augmented reality (AR) user interfaces
                and experiences.
              </p>
              <p>
                Tested and demonstrated working prototypes for mobile and web
                platforms.
              </p>
              <p>
                Collaborated with the team to develop content that strengthened
                the studio's brand presence and engaged a dynamic audience
                across social media platforms.
              </p>
              <div className="text-blue-200">
                <p>
                  Year: <span className="text-blue-50">2021</span>
                </p>
                <p>
                  Tools: <span className="text-blue-50">Figma, Miro</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-10">
            <section>
              <div className="p-3 flex flex-col gap-2">
                <CaseImage img="interaptix/ar-title.png" alt_text="AR UI UX" />
              </div>
            </section>
          </div>
        </div>
        <div className="py-16 grid grid-cols-[1fr_3fr] gap-32">
          <div className="text-slate-50 max-w-md">
            <h1 className="text-left text-2xl pb-4 font-medium text-white">
              AR UX/Product Research
            </h1>
            <div className="flex flex-col gap-2">
              <p>
                Augmented reality UI is an emerging field, with unique best
                practices.
              </p>
              <p>
                Looking at other AR products and best practices, I researched
                how these fundamentals could translate into interactive
                experiences for remote communication and information sharing.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-10">
            <section>
              <div className="border p-3 border-white grid grid-cols-2 gap-2 mb-8">
                <CaseImage
                  img="interaptix/ar-best-practice-google.jpg"
                  alt_text="AR UI UX"
                />
                <CaseImage
                  img="interaptix/ar-best-practice.png"
                  alt_text="AR UI UX"
                />
              </div>
            </section>
          </div>
        </div>
        <div className="py-16 grid grid-cols-[1fr_3fr] gap-32">
          <div className="text-slate-50 max-w-md">
            <h1 className="text-left text-2xl pb-4 font-medium text-white">
              Mobile AR Annotations
            </h1>
            <div className="flex flex-col gap-2">
              <p>
                Designed behaviour for selecting and displaying annotation
                information for 3D AR elements.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-10">
            <section>
              <div className="border p-3 border-white max-w-3xl mb-8">
                <video autoPlay muted loop playsInline>
                  <source
                    src="assets/interaptix/reticle-demo.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </section>
          </div>
        </div>
        <div className="py-16 grid grid-cols-[1fr_3fr] gap-32">
          <div className="text-slate-50 max-w-md">
            <h1 className="text-left text-2xl pb-4 font-medium text-white">
              Mobile AR UX
            </h1>
            <div className="flex flex-col gap-2">
              <p>Instructions for scanning surroundings.</p>
              <p>
                UI elements like buttons are semi-transparent and need to hover
                on screen for all kinds of backgrounds.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-10">
            <section>
              <div className="border p-3 border-white flex flex-col gap-2 mb-8">
                <div className="grid grid-cols-2 gap-2">
                  <CaseImage
                    img="interaptix/mobile-anchor-mockup.png"
                    alt_text="AR UI UX"
                  />
                  <CaseImage
                    img="interaptix/mobile-scan-step-mockup.png"
                    alt_text="AR UI UX"
                  />
                  <CaseImage
                    img="interaptix/mobile-ui-versions.png"
                    alt_text="AR UI UX"
                  />
                </div>

                <CaseImage
                  img="interaptix/mobile-flow.png"
                  alt_text="AR UI UX"
                />
              </div>
            </section>
          </div>
        </div>
        <div className="py-16 grid grid-cols-[1fr_3fr] gap-32">
          <div className="text-slate-50 max-w-md">
            <h1 className="text-left text-2xl pb-4 font-medium text-white">
              Desktop UI
            </h1>
            <div className="flex flex-col gap-2">
              <p>
                Auditor needs to manage work orders, templates and annotations.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-10">
            <section>
              <div className="border p-3 border-white flex flex-col gap-2">
                <CaseImage
                  img="interaptix/web-components-design.png"
                  alt_text="AR UI UX"
                />
                <CaseImage
                  img="interaptix/work-order-table.png"
                  alt_text="AR UI UX"
                />
              </div>
            </section>
          </div>
        </div>
        <div className="py-16 grid grid-cols-[1fr_3fr] gap-32">
          <div className="text-slate-50 max-w-md">
            <h1 className="text-left text-2xl pb-4 font-medium text-white">
              Onboarding Emails
            </h1>
            <div className="flex flex-col gap-2">
              <p>Designed emails for desktop and mobile.</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-10">
            <section>
              <div className="border p-3 border-white flex flex-col gap-2">
                <CaseImage
                  img="interaptix/desktop-email.png"
                  alt_text="AR UI UX"
                />
                <CaseImage
                  img="interaptix/mobile-email.png"
                  alt_text="AR UI UX"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interaptix;
