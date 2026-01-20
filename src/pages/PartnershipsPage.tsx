import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Handshake,
  Target,
  Zap,
  Users,
  Building2,
  Megaphone,
  Presentation,
  Globe,
  TrendingUp,
  CheckCircle,
  Rocket,
  Award,
  HeadphonesIcon,
} from "lucide-react";
import PartnershipForm from "../components/PartnershipForm";

const PartnershipsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partnershipModels = [
    {
      id: 1,
      icon: Users,
      headline: "Close Mandates in Hours, Not Weeks.",
      forType: "For Recruitment & Staffing Agencies",
      pitch:
        "Your revenue depends on 'Speed to Placement.' But your recruiters are stuck manually screening thousands of irrelevant resumes.",
      solution:
        "Use Nexby Recruiter Agent to screen 10,000 profiles overnight. Present the 'Top 50' to your client the next morning.",
      winWin:
        "You reduce your operational costs (man-hours) by 70% and fulfill high-volume RPO (Recruitment Process Outsourcing) mandates faster than any competitor.",
      clientPitch:
        '"We use AI-proctored screening to ensure we only send you candidates who actually know the job."',
      color: "blue",
    },
    {
      id: 2,
      icon: Building2,
      headline: "You Have the Contract. We Have the Tech.",
      forType: "For Government Liaisons & Prime Bidders",
      pitch:
        "You are a trusted vendor for Government bodies (State/Central) or PSUs. You know the procurement process, but you lack the specific AI/LLM capabilities requested in modern tenders (e.g., 'Sovereign AI,' 'On-Premise Deployment').",
      solution:
        "Nexby joins your consortium as the Technical OEM Partner. We deploy our 'Sovereign AI' stack within the State Data Center, fully compliant with data localization laws.",
      winWin:
        "You win the tender based on our technical eligibility; we handle the deployment. We respect the hierarchy: You are the Prime; we are the Sub-contractor.",
      clientPitch: null,
      color: "green",
    },
    {
      id: 3,
      icon: Megaphone,
      headline: "Don't Just Sell Leads. Sell Revenue.",
      forType: "For Digital Marketing Agencies",
      pitch:
        "You deliver 1,000 leads to your client. The client calls them 3 days later, gets no answer, and blames your lead quality. You lose the retainer.",
      solution:
        "Bundle Nexby SalesX with your retainer. Workflow: You generate the lead → Nexby AI calls instantly (<10s) → Appointment Booked.",
      winWin:
        "You prove definitive ROI to your client (booked meetings vs. raw leads). We get a user; you keep the client forever.",
      clientPitch: null,
      color: "purple",
    },
    {
      id: 4,
      icon: Presentation,
      headline: 'Sell "Smart Stalls," Not Just Wood & Acrylic.',
      forType: "For Event Management & Stall Fabricators",
      pitch:
        "Exhibitors spend millions on fabrication but struggle to calculate ROI because physical business cards get lost.",
      solution: "Include Nexby Expo Insight as a value-add in your quotation.",
      winWin:
        'You differentiate yourself from other fabricators by offering "Tech-Enabled Booths." Your client gets a dashboard of digitized leads, proving the value of the event you managed.',
      clientPitch: null,
      color: "orange",
    },
    {
      id: 5,
      icon: Globe,
      headline: "The AI Layer for Your Stack.",
      forType: "For Global System Integrators (SI) & BPOs",
      pitch:
        "You manage CRM/ERP implementations or run large contact centers in Europe/USA/LATAM. Your clients want to reduce headcount or automate support.",
      solution:
        "White-label Nexby's Support Assist or Multi-lingual TeleCaller as part of your digital transformation proposal.",
      winWin:
        "You capture high-margin AI consulting revenue. Our multi-lingual agents handle the timezone/language barriers for your global clients.",
      clientPitch: null,
      color: "cyan",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Commercial Flexibility",
      desc: "We offer generous Revenue Share models, Reseller Margins, or flat OEM licensing fees depending on the deal structure.",
    },
    {
      icon: HeadphonesIcon,
      title: "Sales Support",
      desc: "Our Pre-Sales engineers will join your client calls to handle the technical grilling. We wear your jersey during the meeting.",
    },
    {
      icon: Rocket,
      title: "Referral Loop",
      desc: "We actively refer our direct clients to our partners. If our Manufacturing client needs a Marketing Agency, we introduce our Marketing Partner.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Partnerships | You Sell the Vision. We Build the Intelligence | Nexby
          AI
        </title>
        <meta
          name="description"
          content="Partner with Nexby to offer end-to-end AI automation to your clients. Revenue share, OEM licensing, and white-label solutions for agencies, integrators, and consultants."
        />
        <meta
          name="keywords"
          content="AI partnership, technology partner, reseller program, system integrator partnership, government AI solutions, recruitment automation partner"
        />
      </Helmet>

      <div className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-28 text-white">
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
              >
                <Handshake className="text-cyan-400" size={20} />
                <span className="text-sm font-bold text-cyan-100 uppercase tracking-wide">
                  Partnership Program
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              >
                You Sell the Vision.
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  We Build the Intelligence.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
              >
                Partner with Nexby to offer end-to-end AI automation to your
                clients. Whether you are an agency, an integrator, or a
                consultant—let's build a combined offering that is impossible to
                refuse.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Target size={200} />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 relative z-10">
                The Philosophy: The Symbiotic Edge
              </h2>

              <h3 className="text-2xl font-bold text-slate-800 mb-6 relative z-10">
                Stop Leaving Revenue on the Table.
              </h3>

              <div className="prose prose-lg text-slate-700 relative z-10">
                <p className="mb-4">
                  Your clients are asking for AI. If you don't offer it, someone
                  else will.
                </p>
                <p className="mb-4">
                  Instead of building a data science team from scratch, partner
                  with Nexby. We operate as your{" "}
                  <strong>Deep-Tech Backend</strong>, allowing you to front-end
                  the solution. You maintain the client relationship, the
                  billing, and the strategy. We provide the engine that delivers
                  the results.
                </p>
                <p className="font-bold text-slate-900 text-xl">
                  We don't compete with our partners. We complete them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Models */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Partnership Models & Use Cases
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Industry-specific partnership opportunities designed for mutual
                growth
              </p>
            </div>

            {/* <div className="space-y-8">
              {partnershipModels.map((model, idx) => (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-6">
                    <div
                      className={`w-16 h-16 bg-${model.color}-100 rounded-2xl flex items-center justify-center shrink-0`}
                    >
                      <model.icon
                        className={`text-${model.color}-600`}
                        size={32}
                      />
                    </div>
                    <div className="flex-1">
                      <div
                        className={`inline-block bg-${model.color}-100 text-${model.color}-800 px-3 py-1 rounded-full text-sm font-bold mb-3`}
                      >
                        {model.forType}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        {model.headline}
                      </h3>

                     
                      <div className="mb-4">
                        <h4 className="font-bold text-slate-800 mb-2">
                          The Pitch:
                        </h4>
                        <p className="text-slate-600">{model.pitch}</p>
                      </div>

                    
                      <div className="mb-4">
                        <h4 className="font-bold text-slate-800 mb-2">
                          The Collaboration:
                        </h4>
                        <div
                          className={`bg-${model.color}-50 border-l-4 border-${model.color}-500 p-4 rounded-r-lg`}
                        >
                          <p className="text-slate-700">
                            <strong>The Solution:</strong> {model.solution}
                          </p>
                        </div>
                      </div>

                   
                      <div className="mb-4">
                        <h4 className="font-bold text-slate-800 mb-2">
                          The Win-Win:
                        </h4>
                        <p className="text-slate-600">{model.winWin}</p>
                      </div>

                     
                      {model.clientPitch && (
                        <div className="bg-slate-100 border-l-4 border-slate-400 p-4 rounded-r-lg italic">
                          <p className="text-slate-700">
                            <strong>Client Pitch:</strong> {model.clientPitch}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div> */}
            <div className="space-y-8">
              {partnershipModels.map((model, idx) => (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="
        bg-white rounded-3xl 
        p-6 max-sm:p-5 md:p-10
        shadow-lg border border-slate-200 
        hover:shadow-xl transition-shadow
      "
                >
                  {/* MOBILE STACK / DESKTOP ROW */}
                  <div className="flex gap-6 max-sm:flex-col max-sm:items-center md:items-start">
                    {/* ICON */}
                    <div
                      className={`
            w-16 h-16 bg-${model.color}-100 rounded-2xl 
            flex items-center justify-center shrink-0
          `}
                    >
                      <model.icon
                        className={`text-${model.color}-600`}
                        size={32}
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="flex-1 max-sm:text-center">
                      {/* TAG */}
                      <div
                        className={`
              inline-block bg-${model.color}-100 text-${model.color}-800 
              px-3 py-1 rounded-full text-sm font-bold mb-3
            `}
                      >
                        {model.forType}
                      </div>

                      {/* HEADLINE */}
                      <h3 className="text-xl max-sm:text-lg md:text-3xl font-bold text-slate-900 mb-4">
                        {model.headline}
                      </h3>

                      {/* PITCH */}
                      <div className="mb-4 text-left max-sm:text-center">
                        <h4 className="font-bold text-slate-800 mb-2">
                          The Pitch:
                        </h4>
                        <p className="text-slate-600 leading-relaxed">
                          {model.pitch}
                        </p>
                      </div>

                      {/* COLLABORATION */}
                      <div className="mb-4">
                        <h4 className="font-bold text-slate-800 mb-2">
                          The Collaboration:
                        </h4>

                        <div
                          className={`
                bg-${model.color}-50 
                border-l-4 border-${model.color}-500
                max-sm:border-l-0 max-sm:border-t-4
                max-sm:rounded-t-lg
                p-4 rounded-r-lg
              `}
                        >
                          <p className="text-slate-700 leading-relaxed">
                            <strong>The Solution:</strong> {model.solution}
                          </p>
                        </div>
                      </div>

                      {/* WIN-WIN */}
                      <div className="mb-4 text-left max-sm:text-center">
                        <h4 className="font-bold text-slate-800 mb-2">
                          The Win-Win:
                        </h4>
                        <p className="text-slate-600 leading-relaxed">
                          {model.winWin}
                        </p>
                      </div>

                      {/* CLIENT PITCH */}
                      {model.clientPitch && (
                        <div
                          className="
                bg-slate-100 
                border-l-4 border-slate-400
                max-sm:border-l-0 max-sm:border-t-4
                p-4 rounded-r-lg italic
              "
                        >
                          <p className="text-slate-700 leading-relaxed">
                            <strong>Client Pitch:</strong> {model.clientPitch}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Geographic Focus */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Geographic Focus: India & The World
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* India Partnership Program */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 border-2 border-orange-200"
              >
                <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                  <Building2 className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  India Partnership Program
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-orange-600 shrink-0 mt-1"
                      size={20}
                    />
                    <p className="text-slate-700">
                      <strong>Focus:</strong> High-volume Government Projects,
                      Real Estate, and Manufacturing.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-orange-600 shrink-0 mt-1"
                      size={20}
                    />
                    <p className="text-slate-700">
                      <strong>We Need:</strong> Partners with deep local
                      networks in Tier-2 cities and industrial corridors
                      (Gujarat, Maharashtra, Karnataka) who can navigate local
                      business nuances.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Global Partnership Program */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border-2 border-blue-200"
              >
                <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Global Partnership Program
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-blue-600 shrink-0 mt-1"
                      size={20}
                    />
                    <p className="text-slate-700">
                      <strong>Regions:</strong> USA, EU, LATAM, GCC
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-blue-600 shrink-0 mt-1"
                      size={20}
                    />
                    <p className="text-slate-700">
                      <strong>Focus:</strong> Pharma Exports, SaaS Support, and
                      Cross-Border Sales.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      className="text-blue-600 shrink-0 mt-1"
                      size={20}
                    />
                    <p className="text-slate-700">
                      <strong>We Need:</strong> Partners who can front-end Nexby
                      in regions where English is not the primary language.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap className="text-blue-600 shrink-0 mt-1" size={20} />
                    <p className="text-slate-700">
                      <strong>The Edge:</strong> Our AI speaks Spanish,
                      Portuguese, German, and Arabic. You sell the local
                      interface; we provide the global engine.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Partner with Nexby?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Form */}
        <section id="apply" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Let's Co-Create Value.
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Tell us your strength, and we will find the synergy.
              </p>
            </div>

            <PartnershipForm />
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnershipsPage;
