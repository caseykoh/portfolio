import CaseImage from "./CaseImage";

function Mpod() {
  return (
    <div className="min-w-full flex justify-center font-inter container min-h-screen px-10">
      <div className="py-16 grid lg:grid-cols-[1fr_3fr] gap-32">
        <div className="text-slate-50 max-w-md">
          <h1 className="text-left text-2xl pb-4 font-bold text-white">
            Fashion Branding and Design
          </h1>
          <div className="flex flex-col gap-2">
            <p>
              Designed graphics and illustrations for a bold and dynamic
              streetwear brand, bringing its vision to life through striking
              visual storytelling.
            </p>
            <p>
              Created mockups and prepared production-ready files for engraving,
              embroidery, and screen printing, ensuring seamless execution
              across various materials and textures.
            </p>
            <p>
              Developed a cohesive brand aesthetic that resonated with the
              streetwear community, enhancing the collection’s impact and
              appeal.
            </p>
            <div className="text-blue-200">
              <p>
                Client: <span className="text-blue-50">MaybePerhapsOneDay</span>
              </p>
              <p>
                Year: <span className="text-blue-50">2023-2024</span>
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
