import CaseImage from "./CaseImage";

function Showcase() {
  return (
    <div className="min-w-full flex justify-center font-inter container min-h-screen px-10">
      <div className="py-16 grid lg:grid-cols-[1fr_3fr] gap-32">
        <div className="text-slate-50 max-w-md">
          <h1 className="text-left text-2xl pb-4 font-bold text-white">
            Digital Artwork Showcase
          </h1>
          <div className="flex flex-col gap-2">
            <p>
              Personal projects to develop skills and experiment with concepts.
            </p>
            <div className="text-blue-200">
              <p>
                Year: <span className="text-blue-50">2020-2025</span>
              </p>
              <p>
                Tools:{" "}
                <span className="text-blue-50">
                  Blender, Adobe Photoshop, Illustrator, Figma
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-10">
          <section>
            <div className="max-w-md border p-3 border-white flex flex-col gap-2">
              <div className="flex items-center">
                <video autoPlay muted loop playsInline>
                  <source src="assets/showcase/3dchrome.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
          <section>
            <div className="max-w-xl border p-3 border-white flex flex-col gap-2">
              <div className="flex items-center">
                <video autoPlay muted loop playsInline>
                  <source
                    src="assets/showcase/animal-crossing-tools.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
          <section>
            <div className="max-w-md border p-3 border-white flex flex-col gap-2 mb-8">
              <CaseImage img="showcase/ecco-album.png" alt_text="Album art" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
