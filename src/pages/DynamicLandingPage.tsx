import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Loader2 } from 'lucide-react';
import DynamicForm from '../components/dynamic/DynamicForm';
import DynamicSection from '../components/dynamic/DynamicSection';

const DynamicLandingPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [lpData, setLpData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLP = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/landing-pages/${slug}`);
                if (!response.ok) {
                    if (response.status === 404) {
                        setError('Landing Page Not Found');
                    } else {
                        setError('Something went wrong');
                    }
                    return;
                }
                const data = await response.json();
                setLpData(data);
            } catch (err) {
                console.error(err);
                setError('Failed to load landing page');
            } finally {
                setLoading(false);
            }
        };

        if (slug) fetchLP();
    }, [slug]);

    const handleFormSuccess = (thankYouData: any) => {
        if (thankYouData.type === 'redirect') {
            window.location.href = thankYouData.url;
        } else {
            // For inline thank you, we could either redirect to a generic thank you or replace content
            // For now, let's just alert (or better, redirect to a generic thank you route passing state)
            alert(thankYouData.headline);
        }
    };

    if (loading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin text-blue-600" size={48} /></div>;
    if (error) return <div className="h-screen flex items-center justify-center text-red-600 font-bold text-xl">{error}</div>;
    if (!lpData) return null;

    const { layout, form, seo } = lpData;
    const heroSection = layout.sections.find((s: any) => s.type === 'hero');

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            <Helmet>
                <title>{seo.metaTitle || lpData.name}</title>
                <meta name="description" content={seo.metaDescription} />
            </Helmet>

            {/* Hero Section (Hardcoded layout for standard split screen) */}
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] opacity-20 bg-cover bg-center"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="text-white">
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                                {heroSection?.props?.headline || "Headline Missing"}
                            </h1>
                            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                                {heroSection?.props?.subheadline}
                            </p>
                            <button onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg hidden md:block">
                                {heroSection?.props?.ctaLabel || "Get Started"}
                            </button>
                        </div>

                        {/* Hero Form */}
                        <div id="hero-form">
                            <DynamicForm
                                config={form}
                                landingPageId={lpData.id}
                                onSuccess={handleFormSuccess}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Dynamic Sections */}
            {layout.sections.map((section: any, idx: number) => {
                if (section.type === 'hero') return null; // Already rendered
                return <DynamicSection key={idx} type={section.type} props={section.props} />;
            })}

            {/* Footer Form (Bottom Hook) */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Empower Your Sales Team With Nexby Sales AI.</h2>
                    <p className="text-gray-600 mb-12">Stop the leakage. Start the growth.</p>
                    <DynamicForm
                        config={{ ...form, title: "", subtext: "" }} // Reuse form config but cleaner
                        landingPageId={lpData.id}
                        onSuccess={handleFormSuccess}
                    />
                </div>
            </section>
        </div>
    );
};

export default DynamicLandingPage;
