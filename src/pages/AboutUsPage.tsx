import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Zap, Layers } from "lucide-react";
import Sir from "../assets/Sir.jpg";
import { useEffect, useState } from "react";

const AboutUsPage = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>About Us | Nexby AI</title>
        <meta
          name="description"
          content="Empowering Business with Intelligent Automation. Nexby engineers the digital workforce that will power the next decade of business."
        />
      </Helmet>

      <div className="pt-24 pb-12 bg-white min-h-screen">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The Architects of the Autonomous Enterprise
            </h1>
            <p className="text-xl text-gray-600">
              We don't just build software tools. We engineer the digital
              workforce that will power the next decade of business.
            </p>
          </motion.div>
        </section>

        {/* Mission */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Empowering Business with Intelligent Automation.
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                Nexby is on a mission to democratize access to enterprise-grade
                AI agents. We believe that every business, regardless of size,
                should have the power of{" "}
                <span className="font-semibold text-gray-900">
                  autonomous intelligence
                </span>{" "}
                at their fingertips.
              </p>
              <p className="text-gray-600 text-lg">
                The gap between "AI Hype" and "Business Value" is where we live.
                We exist to close that gap.
              </p>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                A World Without Drudgery.
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                We envision a world where humans are free from repetitive,
                mundane tasks. By deploying specialized AI agents for sales,
                recruitment, and operations, we enable teams to focus on what
                actually drives growth:{" "}
                <span className="font-semibold text-gray-900">
                  strategy, creativity, and meaningful relationships.
                </span>
              </p>
              <p className="text-gray-600 text-lg mb-6">
                We are entering the era of the{" "}
                <span className="font-semibold text-gray-900">
                  Hybrid Workforce
                </span>
                —where silicon and biology work side-by-side. In this future,
                your "headcount" isn't limited by your payroll.
              </p>
              <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 text-lg">
                "We don't just build tools; we build digital teammates."
              </blockquote>
            </div>
            <div className="h-80 bg-gray-200 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Vision of future workforce"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* The Nexby Standard */}
        <section className="bg-black text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">
              The Nexby Standard
            </h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
              Our technology is built on three non-negotiable principles:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-gray-800 rounded-2xl bg-gray-900/50">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="text-blue-500" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Transparency (Glass-Box AI)
                </h3>
                <p className="text-gray-400">
                  We reject "Black Box" algorithms. You should know exactly why
                  an agent qualified a lead or screened a candidate. Our systems
                  are auditable, explainable, and designed for trust.
                </p>
              </div>
              <div className="p-8 border border-gray-800 rounded-2xl bg-gray-900/50">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="text-purple-500" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Radical Efficiency</h3>
                <p className="text-gray-400">
                  We measure success in minutes saved and revenue generated. If
                  it doesn't move the needle on your P&L, we don't build it.
                </p>
              </div>
              <div className="p-8 border border-gray-800 rounded-2xl bg-gray-900/50">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-6">
                  <Layers className="text-green-500" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Seamless Integration</h3>
                <p className="text-gray-400">
                  True intelligence doesn't live in a silo. Our agents are
                  designed to flow invisibly into your existing
                  infrastructure—Salesforce, Slack, Jira, or SAP—without
                  disrupting your current architecture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*Certifications & Recognition (NEW) */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          {/* <div className="container mx-auto px-4"> */}
          <div className="max-w-screen-xl mx-auto px-6">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-bold mb-4">
                Certified. Recognized. Trusted.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Independent validation of our engineering standards, operational
                maturity, and impact across industries.
              </p>
            </div>

            {/* Certificates Grid */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12"> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-5xl mx-auto">
              {/* Certificate 1 */}
              <div
                className="border border-black/30 bg-white 
             transition-all duration-300 
             hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
              >
                <div className="relative bg-gray-100 p-6 flex items-center justify-center overflow-hidden">
                  <img
                    src="/certificates/bg-lines.svg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                  />

                  <img
                    src="/certificates/NexbyISOIEC2000012018Certificatepage-0001.jpg"
                    alt="Information Technology – Service Management"
                    className="relative z-10 max-h-[360px] w-auto object-contain bg-white"
                  />
                </div>

                <div className="px-6 py-5 text-center">
                  <h3 className="text-base font-medium tracking-wide uppercase mb-3 text-black">
                    Information Technology – Service Management
                  </h3>
                  <p className="text-gray-800 text-sm leading-relaxed tracking-wide">
                    ITSM of Atishay Limited has been independently assessed and
                    is compliant with the requirements of: ISO/IEC 20000-1:2018
                  </p>
                </div>
              </div>

              {/* Certificate 2 */}
              <div
                className="border border-black/30 bg-white 
             transition-all duration-300 
             hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
              >
                <div className="relative bg-gray-100 p-6 flex items-center justify-center overflow-hidden">
                  <img
                    src="/certificates/bg-lines.svg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                  />

                  <img
                    src="/certificates/card10033page0001.jpg"
                    alt="Information Technology – Service Management"
                    className="relative z-10 max-h-[360px] w-auto object-contain bg-white"
                  />
                </div>

                <div className="px-6 py-5 text-center">
                  <h3 className="text-base font-medium tracking-wide uppercase mb-3 text-black">
                    Tech Solution Providers for Government
                  </h3>
                  <p className="text-gray-800 text-sm leading-relaxed tracking-wide">
                    In Annual Roll of Honor as one of the 20 most promising Tech
                    Solution Providers for Government and Public Sector – 2019.
                  </p>
                </div>
              </div>

              {/* Certificate 3 */}
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto"> */}
              <div
                className="border border-black/30 bg-white 
             transition-all duration-300 
             hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
              >
                <div className="relative bg-gray-100 p-6 flex items-center justify-center overflow-hidden">
                  <img
                    src="/certificates/bg-lines.svg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                  />

                  <img
                    src="/certificates/NexbyISO90012015Certificatepage-0001.jpg"
                    alt="Information Technology – Service Management"
                    className="relative z-10 max-h-[360px] w-auto object-contain bg-white"
                  />
                </div>

                <div className="px-6 py-5 text-center">
                  <h3 className="text-base font-medium tracking-wide uppercase mb-3 text-black">
                    Quality Management System
                  </h3>
                </div>
              </div>

              {/* Certificate 4 */}
              <div
                className="border border-black/30 bg-white 
             transition-all duration-300 
             hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
              >
                <div className="relative bg-gray-100 p-6 flex items-center justify-center overflow-hidden">
                  <img
                    src="/certificates/bg-lines.svg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                  />

                  <img
                    src="/certificates/NexbyISOIEC270012022Certificatepage0001.jpg"
                    alt="Information Technology – Service Management"
                    className="relative z-10 max-h-[360px] w-auto object-contain bg-white"
                  />
                </div>

                <div className="px-6 py-5 text-center">
                  <h3 className="text-base font-medium tracking-wide uppercase mb-3 text-black">
                    Information Security Management System
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Leadership</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2">
              <div className="h-full min-h-[300px] bg-gray-200">
                {/* Placeholder for Archit Jain's image */}
                <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500">
                  <img
                    src={Sir}
                    alt="Archit Jain"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-1">Archit Jain</h3>
                <p className="text-blue-600 font-medium mb-6">Founder & CEO</p>
                <p className="text-gray-600 mb-4">
                  Archit founded Nexby with a singular engineering thesis:{" "}
                  <span className="font-semibold text-gray-900">
                    Software should do the work, not just manage it.
                  </span>
                </p>
                <p className="text-gray-600 mb-4">
                  Recognizing that enterprises were drowning in "productivity
                  tools" that only added to the noise, Archit pivoted the focus
                  from <i>software-as-a-service</i> to{" "}
                  <i>service-as-a-software</i>. Under his leadership, Nexby has
                  evolved from a tech provider into a strategic automation
                  partner for high-growth companies.
                </p>
                <p className="text-gray-600 italic">
                  He leads a team of AI engineers and product strategists who
                  are obsessed with one question: "How much of this workflow can
                  be handled by a machine?"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Are Different */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">
              We Are Not for Everyone.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We are not a volume-based SaaS wrapper. We are an
              engineering-first company building specialized agents for complex
              problems.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-red-600" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">We don't guess.</h3>
                <p className="text-gray-600">
                  We use data to prove capability before deployment.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  We don't over-promise.
                </h3>
                <p className="text-gray-600">
                  If AI isn't the right tool for your problem, we will tell you.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  We don't answer to VC timelines.
                </h3>
                <p className="text-gray-600">We answer to client uptime.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUsPage;
