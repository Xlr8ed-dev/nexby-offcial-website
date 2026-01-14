import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
// import ContactForm from "../components/ContactForm";
import Form from "@/components/Form";
import DynamicFormContainer from "@/components/DynamicFormContainer";

const ContactPage = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  const officeAddress =
    "15, Khatau Building, 44 Bank Street, Mumbai - 400001, India";
  const mapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.0772289959804!2d72.83123!3d18.93279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c0c4d5c5b5%3A0x3b3c3f3f3c3c3c3c!2s44%20Bank%20St%2C%20Fort%2C%20Mumbai%2C%20Maharashtra%20400001!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin";

  return (
    <>
      <Helmet>
        <title>
          Contact Us - Nexby AI Solutions | Get in Touch with Our AI Experts
        </title>
        <meta
          name="description"
          content="Contact Nexby AI Solutions for AI-powered recruitment, sales, and exhibition management solutions. Reach out via email, phone, or visit our Mumbai office."
        />
        <meta
          name="keywords"
          content="contact nexby, AI solutions contact, Mumbai AI company, AI consultation, business automation support"
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Contact Us - Nexby AI Solutions" />
        <meta
          property="og:description"
          content="Get in touch with Nexby AI Solutions for cutting-edge AI automation solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexby.ai/contact-us" />

        {/* Structured Data - LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Nexby AI Solutions Private Limited",
            image: "https://nexby.ai/logo.png",
            description:
              "Leading AI automation solutions for recruitment, sales, and business operations",
            address: {
              "@type": "PostalAddress",
              streetAddress: "15, Khatau Building, 44 Bank Street",
              addressLocality: "Mumbai",
              addressRegion: "Maharashtra",
              postalCode: "400001",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "18.93279",
              longitude: "72.83123",
            },
            telephone: "+919892048816",
            email: "hello@nexby.ai",
            url: "https://nexby.ai",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
            ],
            priceRange: "$$",
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://nexby.ai/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Contact Us",
                item: "https://nexby.ai/contact-us",
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white pt-24">
        {/* Breadcrumb Navigation */}
        <nav className="max-w-7xl mx-auto px-6 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <a href="/" className="hover:text-blue-600 transition-colors">
                Home
              </a>
            </li>
            <li className="before:content-['/'] before:mx-2">Contact Us</li>
          </ol>
        </nav>

        {/* Header Section */}
        <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch with Our AI Experts
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business with AI? Reach out to us and
              let's discuss how we can help you automate and scale.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 -mt-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Email Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-purple-100 hover:border-purple-300 transition-all hover:shadow-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mb-4">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Email Us
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Send us an email anytime
                </p>
                <a
                  href="mailto:hello@nexby.ai"
                  className="text-purple-600 font-medium hover:text-purple-800 transition-colors block mb-1"
                >
                  hello@nexby.ai
                </a>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-4">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Call Us
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Mon-Fri from 9am to 6pm IST
                </p>
                <a
                  href="tel:+919892048816"
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors text-lg"
                >
                  +91 98920 48816
                </a>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-green-100 hover:border-green-300 transition-all hover:shadow-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  WhatsApp
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Get instant responses
                </p>
                <a
                  href="https://wa.me/919892048816"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-medium hover:text-green-800 transition-colors text-lg"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content - Form and Map Side by Side */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Side - Contact Form */}
              <div>
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and our team will get back to you
                    within 24 hours.
                  </p>
                </div>
                {/* <div className="w-[800px]"> */}
                {/* <ContactForm
                  showDescription={false}
                  formId="contact_page_form"
                /> */}
                <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-purple-500/20">
                  <DynamicFormContainer />
                  {/* <Form
                    title={null}
                    buttonName="Request Voice Demo"
                    fields={[
                      {
                        id: "fullName",
                        label: "Full Name",
                        type: "text",
                        required: true,
                      },
                      {
                        id: "email",
                        label: "Email",
                        type: "email",
                        required: true,
                      },
                      {
                        id: "company",
                        label: "Company Name",
                        type: "text",
                        required: true,
                      },
                      {
                        id: "phone",
                        label: "Mobile Number",
                        type: "phone",
                        required: true,
                      },
                    ]}

                
                  /> */}
                </div>
                {/* </div> */}
              </div>

              {/* Right Side - Office Location & Map */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Visit Our Office
                  </h2>

                  {/* Office Details */}
                  <div className="bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 rounded-2xl border-2 border-purple-200 p-6 mb-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center shrink-0">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">
                          Nexby AI Solutions Private Limited
                        </h3>
                        <address className="text-gray-700 not-italic leading-relaxed">
                          15, Khatau Building, 44 Bank Street
                          <br />
                          Mumbai - 400001, Maharashtra, India
                        </address>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 pt-4 border-t border-purple-200">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shrink-0">
                        <Clock className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">
                          Business Hours
                        </h3>
                        <div className="text-gray-700 text-sm space-y-1">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                          <p className="text-gray-500">
                            Saturday & Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Google Maps Embed */}
                  <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200">
                    <iframe
                      src={mapsEmbedUrl}
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Nexby AI Solutions Office Location"
                      className="w-full"
                    ></iframe>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      officeAddress
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    <MapPin size={16} />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - SEO Best Practice */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  How quickly can I expect a response?
                </h3>
                <p className="text-gray-600">
                  Our team typically responds within 24 hours during business
                  days. For urgent inquiries, please call us directly.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Do you offer free consultations?
                </h3>
                <p className="text-gray-600">
                  Yes! We offer a complimentary initial consultation to
                  understand your needs and determine if our AI solutions are
                  the right fit for your business.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  What information should I prepare before contacting you?
                </h3>
                <p className="text-gray-600">
                  It's helpful to have a clear understanding of your current
                  business challenges, team size, and specific areas where you'd
                  like to implement AI automation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
