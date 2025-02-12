import CaseImage from "./CaseImage";

function ArcticWolf() {
  return (
    <div className="min-w-full flex justify-center font-inter container min-h-screen px-10">
      <div className="flex flex-col">
        <div className="py-16 grid lg:grid-cols-[1fr_3fr] gap-32">
          <div className="text-slate-50 max-w-md">
            <h1 className="text-left text-2xl pb-4 font-bold text-white">
              Enterprise Dashboard UX
            </h1>
            <div className="flex flex-col gap-2">
              <p>
                As a part of an iniative to improve the performance and
                efficiency of in-house engineers, I researched and verified the
                UX of a new in-house dashboard tool.
              </p>
              <div className="text-blue-200">
                <p>
                  Co-op: <span className="text-blue-50">Arctic Wolf</span>
                </p>
                <p>
                  Year: <span className="text-blue-50">2021</span>
                </p>
                <p>
                  Skills:{" "}
                  <span className="text-blue-50">
                    UX Research, User Interviews, Dashboard Design
                  </span>
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
                <CaseImage
                  img="arcticwolf/dashboard-laptop.png"
                  alt_text="Enterprise Dashboard"
                />
              </div>
            </section>
          </div>
        </div>
        <div className="py-16 grid lg:grid-cols-[1fr_3fr] gap-32">
          <div className="text-slate-50 max-w-md">
            <h1 className="text-left text-2xl pb-4 font-medium text-white">
              Problem Space
            </h1>
            <div className="flex flex-col gap-2">
              <p>
                Engineers go through thousands of incidents on a dashboard, to
                sort through cybersecurity incidents that are reported by
                sensors placed on customers' applications.
              </p>
              <p>
                Like a McDonald's drive-thru, they have a limit of taking 20 min
                per incident. In those 20 minutes, they have to gather as many{" "}
                <span className="bg-slate-600 font-bold">context clues</span> as
                possible by looking at various attributes about the incident,
                and make the judgement on whether the incident{" "}
                <span className="bg-slate-600 font-bold">
                  should be of concern
                </span>{" "}
                (and consequently raised for further investigation), or
                dismissed as a false positive.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-10">
            <section>
              <div className="p-3 flex flex-col items-center gap-2 mb-8">
                <div className="max-w-5xl">
                  <CaseImage
                    img="arcticwolf/problem-diagram.png"
                    alt_text="Enterprise Dashboard"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="py-16 grid lg:grid-cols-[1fr_3fr] gap-32">
          <div className="text-slate-50 max-w-md">
            <h1 className="text-left text-2xl pb-4 font-medium text-white">
              UX Research
            </h1>
            <div className="flex flex-col gap-2">
              <p>
                My work started with conducting user research to validate and
                inform UX decisions on the revamped triaging dashboard.
              </p>
              <p>
                I conducted 5 remote interviews, and 3 observation sessions of
                engineers of varying seniority, so that I could get a
                well-rounded perspective on the old and new dashboards.
              </p>
              <p>
                An interesting behaviour that was observed was also the act of{" "}
                <span className="bg-slate-600 font-bold">batch selecting</span>{" "}
                and{" "}
                <span className="bg-slate-600 font-bold">
                  batch investigating
                </span>
                , as the tools that the engineer were using were scattered
                across various platforms.
              </p>
              <p>The main findings are as follows:</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-10">
            <section>
              <div className="p-3 flex flex-col items-center gap-2 mb-8">
                <CaseImage
                  img="arcticwolf/interviewresults.png"
                  alt_text="Enterprise Dashboard"
                />
              </div>
            </section>
          </div>
        </div>
        <div className="py-16 grid lg:grid-cols-[1fr_3fr] gap-32">
          <div className="text-slate-50 max-w-md">
            <h1 className="text-left text-2xl pb-4 font-medium text-white">
              Dashboard UI
            </h1>
            <div className="flex flex-col gap-2">
              <p>
                The new dashboard feature tools and filters that make{" "}
                <span className="bg-slate-600 font-bold">
                  batch investigation
                </span>{" "}
                and ticketing faster.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-10">
            <section>
              <div className="border p-3 border-white flex flex-col gap-2">
                <CaseImage
                  img="arcticwolf/triageui.png"
                  alt_text="Enterprise Dashboard"
                />
              </div>
            </section>
          </div>
        </div>
        <div className="py-16 grid lg:grid-cols-[1fr_3fr] gap-32">
          <div className="text-slate-50 max-w-md">
            <h1 className="text-left text-2xl pb-4 font-medium text-white">
              Key Features
            </h1>
            <div className="flex flex-col gap-2">
              <p>
                Saved suppression filters allow engineers to automatically
                dismiss incidents matching certain patterns.
              </p>
              <p>
                Time filters give more control over the granularity and range of
                incidents that occur over a period.
              </p>
              <p>
                All these tools are purposefully docked in a toolbar at the top
                of the dashboard, making it clear which actions affect which
                incidents, and allowing for faster pivoting.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-10">
            <section>
              <div className="border p-3 border-white grid grid-cols-2 gap-2">
                <CaseImage
                  img="arcticwolf/feature-suppression-filter.png"
                  alt_text="Enterprise Dashboard"
                />
                <CaseImage
                  img="arcticwolf/feature-time-filter.jpg"
                  alt_text="Enterprise Dashboard"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArcticWolf;
