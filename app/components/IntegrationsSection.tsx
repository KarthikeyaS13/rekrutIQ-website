import Image from "next/image";
import Link from "next/link";

const integrations = [
  {
    id: 1,
    title: "Mail Integrations",
    desc: "Seamlessly connects with Gmail, Office 365, Zoho Mail, and more..",
    img: "/mail.png",
    link: "/features#communication",
  },
  {
    id: 2,
    title: "Communication Tools",
    desc: "Integrates with Zoom, Google Meet, and Microsoft Teams and more ...",
    img: "/communicationtools.png",
    link: "/features#communication",
  },
  {
    id: 3,
    title: "Single Sign-On (SSO)",
    desc: "Easy and secure access with Single Sign-On with Gmail, Office 365...",
    img: "/sso.png",
    link: "/features",
  },
  {
    id: 4,
    title: "Job Boards",
    desc: "Integrations with Naukri, LinkedIn, Indeed, and more...(coming soon)",
    img: "/jobboards.png",
    link: "/features#sourcing",
  },
  {
    id: 5,
    title: "Finance Tools",
    desc: "Connects with QuickBooks, Zoho Books, Tally and more ...",
    img: "/finance.png",
    link: "/features#finance",
  },
  {
    id: 6,
    title: "Payroll with yfy®",
    desc: "Direct payroll sync for contract staffing.",
    img: "/yfyconnection.png",
    link: "/features#finance",
  }
];

export function IntegrationsSection() {
  return (
    <section className="py-24 bg-white" id="integrations">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-[#6b21a8] text-sm font-bold uppercase tracking-widest mb-4">
            CONNECT WITH TOOLS YOU ALREADY USE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1f1a22] mb-4 font-heading">
            Trusted Integrations
          </h2>
          <p className="text-[#7e7383]">
            Plug in. Sync up. Save hours daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration) => (
            <div key={integration.id} className="bg-[#F8F9FA] rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gray-100 flex flex-col h-full">
              <div className="relative w-full h-40 mb-6 rounded-xl overflow-hidden bg-white flex items-center justify-center">
                <Image
                  src={integration.img}
                  alt={integration.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1f1a22] mb-3">{integration.title}</h3>
              <p className="text-[#4c4452] text-sm leading-relaxed flex-grow mb-6">
                {integration.desc}
              </p>
              <Link href={integration.link} className="text-[#6b21a8] font-bold text-sm bg-white px-6 py-2.5 rounded-full w-fit shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors inline-block text-center">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
