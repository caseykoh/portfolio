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
              <p>Designed and researched cybersecurity triaging workflows.</p>
              <p>
                Conducted 5 interviews and observation sessions, to understand
                pain points and constraints.
              </p>
              <p>
                Collaborated with the team to develop content that strengthened
                the studio's brand presence and engaged a dynamic audience
                across social media platforms.
              </p>
              <div className="text-blue-200">
                <p>
                  Co-op: <span className="text-blue-50">Arctic Wolf</span>
                </p>
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
              UX Research
            </h1>
            <div className="flex flex-col gap-2">
              <p>
                I was tasked with conducting user research to validate and
                inform UX decisions on the revamped triaging dashboard.
              </p>
              <p>
                I conducted 5 remote interviews, and 3 observation sessions of
                engineers of varying seniority, so that I could get a
                well-rounded perspective on the old and new dashboards.
              </p>
              <p>The findings are as follows:</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-10">
            <section>
              <div className="border p-3 border-white flex flex-col gap-2 mb-8">
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
              Ideation sketches
            </h1>
            <div className="flex flex-col gap-2">
              <p>Explored alternative layouts for dashboard UI.</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-10">
            <section>
              <div className="border p-3 border-white grid grid-cols-2 gap-2 mb-8">
                <CaseImage
                  img="arcticwolf/option1.png"
                  alt_text="Enterprise Dashboard"
                />
                <CaseImage
                  img="arcticwolf/option2.png"
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
                I was tasked with conducting user research to validate and
                inform UX decisions on the revamped triaging dashboard. I
                conducted 5 remote interviews, and 3 observation sessions of
                engineers of varying seniority, so that I could get a
                well-rounded perspective on the old and new dashboards.
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
                I was tasked with conducting user research to validate and
                inform UX decisions on the revamped triaging dashboard. I
                conducted 5 remote interviews, and 3 observation sessions of
                engineers of varying seniority, so that I could get a
                well-rounded perspective on the old and new dashboards.
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
