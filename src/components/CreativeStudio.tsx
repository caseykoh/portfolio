import CaseImage from "./CaseImage";

function CreativeStudio() {
  return (
    <div className="min-w-full flex justify-center font-inter container min-h-screen px-10">
      <div className="py-16 grid grid-cols-[1fr_3fr] gap-32">
        <div className="text-slate-50 max-w-md">
          <h1 className="text-left text-2xl pb-4 font-bold text-white">
            Creative Studio Content Creation
          </h1>
          <div className="flex flex-col gap-2">
            <p>
              Designed and produced promotional digital content for Zero Studio,
              focusing on Instagram and TikTok campaigns.
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
                Year: <span className="text-blue-50">2023-2024</span>
              </p>
              <p>
                Tools:{" "}
                <span className="text-blue-50">
                  Adobe Photoshop, Illustrator, Procreate
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-10">
          <section>
            {/* <h2 className="text-left text-xl pb-4 text-slate-500">
              Creative Studio Logo
            </h2> */}
            <div className="max-w-md border p-3 border-white flex flex-col gap-2">
              <div className="max-w-36">
                <CaseImage
                  img="creative-studio/logo.png"
                  alt_text="Creative studio"
                />
              </div>

              <CaseImage
                img="creative-studio/logo-banner.png"
                alt_text="Creative studio"
              />
            </div>
          </section>
          <section>
            {/* <h2 className="text-left text-xl pb-4 text-slate-500">
              Guest Features [Instagram]
            </h2> */}
            <div className="border p-3 border-white grid grid-cols-2 md:grid-cols-3 gap-2">
              <CaseImage
                img="creative-studio/guest1.png"
                alt_text="Creative studio"
              />
              <CaseImage
                img="creative-studio/guest2.png"
                alt_text="Creative studio"
              />
              <CaseImage
                img="creative-studio/guest3.png"
                alt_text="Creative studio"
              />
              <CaseImage
                img="creative-studio/guest4.png"
                alt_text="Creative studio"
              />
              <CaseImage
                img="creative-studio/guest5.png"
                alt_text="Creative studio"
              />
              <CaseImage
                img="creative-studio/guest6.png"
                alt_text="Creative studio"
              />
            </div>
          </section>
          <section>
            {/* <h2 className="text-left text-xl pb-4 text-slate-500">
              Artist Recruitment [Instagram]
            </h2> */}
            <div className="border p-3 border-white grid grid-cols-2 gap-2 mb-8">
              <CaseImage
                img="creative-studio/sturesident.png"
                alt_text="Creative studio"
              />
              <CaseImage
                img="creative-studio/sturesidentinfo.png"
                alt_text="Creative studio"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CreativeStudio;
