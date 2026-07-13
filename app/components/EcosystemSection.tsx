import { ArrowRight, Users, UserPlus, Cpu, Rocket, Receipt, LineChart } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Client & Job Data Capture",
    desc: "Centralize all client details and job requisitions from the start.",
    icon: <Users className="w-8 h-8 text-[#6b21a8]" />,
    showArrow: true,
  },
  {
    id: 2,
    title: "Role-Based Task Handoffs",
    desc: "Structured workflow from Admin to Team Leads to Recruiters for smooth operations.",
    icon: <UserPlus className="w-8 h-8 text-[#6b21a8]" />,
    showArrow: true,
  },
  {
    id: 3,
    title: "AI-Powered Sourcing & Submission",
    desc: "Source, rank, and submit candidates using AI-driven tools.",
    icon: <Cpu className="w-8 h-8 text-[#6b21a8]" />,
    showArrow: false,
  },
  {
    id: 4,
    title: "Offer & Onboarding Automation",
    desc: "Manage offer releases and track candidate onboarding seamlessly.",
    icon: <Rocket className="w-8 h-8 text-[#6b21a8]" />,
    showArrow: true,
  },
  {
    id: 5,
    title: "Billing & Payroll Processing",
    desc: "Automate invoicing and payroll workflows for faster payments and accurate billing.",
    icon: <Receipt className="w-8 h-8 text-[#6b21a8]" />,
    showArrow: true,
  },
  {
    id: 6,
    title: "Full Process Visibility",
    desc: "Monitor the entire recruitment lifecycle with real-time status updates and insights.",
    icon: <LineChart className="w-8 h-8 text-[#6b21a8]" />,
    showArrow: false,
  }
];

export function EcosystemSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#3b0066] to-[#1e0036] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            End-to-End Recruitment Ecosystem
          </h2>
          <p className="text-[#dfb7ff] text-sm tracking-wide">
            From client intake to consultant payout:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 gap-x-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex">
              <div className="bg-white rounded-2xl p-8 flex-1 text-left relative z-0 flex flex-col h-full shadow-lg border-2 border-transparent hover:border-[#6b21a8]/20 transition-colors">
                <div className="mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1f1a22] mb-3">{step.title}</h3>
                <p className="text-[#4c4452] text-sm leading-relaxed flex-grow">
                  {step.desc}
                </p>
              </div>

              {/* Arrow Connector for Desktop */}
              {step.showArrow && (
                <div className="hidden lg:flex absolute top-1/2 -right-8 -translate-y-1/2 z-10 items-center justify-center">
                  <div className="w-12 h-12 bg-[#500088] rounded-full flex items-center justify-center border-4 border-[#1f1a22] shadow-lg">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              )}
              
              {/* Arrow Connector for Mobile (Down arrow) */}
              {index !== steps.length - 1 && (
                <div className="flex lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 z-10 items-center justify-center">
                   <div className="w-10 h-10 bg-[#500088] rounded-full flex items-center justify-center border-4 border-[#1f1a22] shadow-lg">
                    <ArrowRight className="w-5 h-5 text-white rotate-90" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
