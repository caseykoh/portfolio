import CaseImage from "./CaseImage";

function Mpod() {
  return (
    <div className="min-w-full flex justify-center font-inter container min-h-screen px-10">
      <div className="py-16 grid grid-cols-[1fr_3fr] gap-32">
        <div className="text-slate-50 max-w-md">
          <h1 className="text-left text-2xl pb-4 font-bold text-white">
            Fashion Branding and Design
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
                Year: <span className="text-blue-50">2023</span>
              </p>
              <p>
                Tools:{" "}
                <span className="text-blue-50">
                  Adobe Photoshop, Illustrator
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-10">
          <section>
            <div className="max-w-md border p-3 border-white flex flex-col gap-2">
              <CaseImage img="fashion/mpod.jpeg" alt_text="fashion" />
            </div>
          </section>
          <section>
            <div className="grid border p-3 border-white grid-cols-2 gap-2">
              <CaseImage img="fashion/gologoblack.png" alt_text="fashion" />
              <CaseImage img="fashion/darkshirt.png" alt_text="fashion" />
              <CaseImage img="fashion/lightshirt.png" alt_text="fashion" />
            </div>
          </section>
          <section>
            <div className="max-w-md border p-3 border-white flex flex-col gap-2 mb-8">
              <CaseImage img="fashion/perhapshat.jpg" alt_text="fashion" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Mpod;
