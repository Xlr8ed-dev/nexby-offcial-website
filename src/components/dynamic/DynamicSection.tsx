import React from 'react';
import { CheckCircle, BarChart3, Users, Zap, Globe, MessageSquare, Phone, Lock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface SectionProps {
    type: string;
    props: any;
    className?: string;
}

const DynamicSection: React.FC<SectionProps> = ({ type, props }) => {
    switch (type) {
        case 'problem_awareness':
            return (
                <section className="py-24 bg-black text-white text-center">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">{props.headline}</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-12">
                            {props.points?.map((point: string, idx: number) => (
                                <div key={idx} className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                                    <div className="text-red-500 mb-2">❌</div>
                                    <p className="text-gray-300 font-medium">{point}</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-gray-900/50 p-8 rounded-2xl inline-block max-w-2xl border border-gray-800">
                            <p className="text-xl md:text-2xl font-semibold mb-2 text-white">{props.realityCheck}</p>
                            <p className="text-gray-400">{props.subtext}</p>
                        </div>
                        {props.ctaLabel && (
                            <div className="mt-12">
                                <a href={props.ctaHref || "#hero-form"} className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all font-bold">
                                    {props.ctaLabel}
                                </a>
                            </div>
                        )}
                    </div>
                </section>
            );

        case 'agitation':
            return (
                <section className="py-24 bg-red-50">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">{props.headline}</h2>
                        <div className="space-y-4 text-left max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-sm border border-red-100">
                            {props.items?.map((item: any, idx: number) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">!</div>
                                    <div className="text-lg text-gray-700">
                                        <strong>{item.title}</strong> {item.desc}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12">
                            <p className="text-xl font-medium text-gray-900 mb-6">{props.closingStatement}</p>
                            <a href={props.ctaHref || "#hero-form"} className="bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all shadow-lg hover:shadow-red-200">
                                {props.ctaLabel}
                            </a>
                        </div>
                    </div>
                </section>
            );

        case 'impact':
            return (
                <section className="py-16 bg-white border-y border-gray-100">
                    <div className="max-w-7xl mx-auto px-6">
                        {props.headline && <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{props.headline}</h2>}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                            {props.stats?.map((stat: any, idx: number) => (
                                <div key={idx} className="text-center p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors">
                                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                                    <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">{stat.label}</div>
                                    {stat.subtext && <div className="text-xs text-gray-400 mt-2">{stat.subtext}</div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            );

        case 'how_it_works':
            return (
                <section className="py-24 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">{props.headline}</h2>
                            <p className="text-xl text-gray-600">{props.subheadline}</p>
                        </div>
                        <div className="relative border-l-2 border-blue-200 ml-4 md:ml-0 md:pl-0 space-y-12">
                            {props.steps?.map((step: any, idx: number) => (
                                <div key={idx} className="relative pl-12 md:pl-0 md:flex md:items-center md:gap-12">
                                    {/* Number/Icon */}
                                    <div className="absolute left-[-21px] md:relative md:left-auto md:w-16 md:h-16 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg md:text-2xl shadow-lg shrink-0 z-10">
                                        {idx + 1}
                                    </div>
                                    {/* Content */}
                                    <div className="flex-1 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                        <p className="text-gray-600">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                            <a href={props.ctaHref || "#hero-form"} className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
                                {props.ctaLabel}
                            </a>
                        </div>
                    </div>
                </section>
            );

        case 'features':
            return (
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {props.features?.map((feat: any, idx: number) => (
                                <div key={idx} className="p-8 rounded-3xl bg-gray-50 hover:bg-blue-50 transition-colors border border-gray-100">
                                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                                        <Zap size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feat.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            );

        case 'omnichannel':
            return (
                <section className="py-24 bg-slate-900 text-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">{props.headline}</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                                <MessageSquare className="text-blue-400 mb-4" size={32} />
                                <h3 className="text-xl font-bold mb-2">Website Chatbot</h3>
                                <p className="text-slate-400 text-sm">{props.items?.[0]?.desc || "Convert visitors in real-time."}</p>
                            </div>
                            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                                <MessageSquare className="text-green-400 mb-4" size={32} />
                                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                                <p className="text-slate-400 text-sm">{props.items?.[1]?.desc || "Reach them where they are."}</p>
                            </div>
                            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                                <Phone className="text-purple-400 mb-4" size={32} />
                                <h3 className="text-xl font-bold mb-2">AI Calling</h3>
                                <p className="text-slate-400 text-sm">{props.items?.[2]?.desc || "Scale outreach to millions."}</p>
                            </div>
                            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                                <Globe className="text-pink-400 mb-4" size={32} />
                                <h3 className="text-xl font-bold mb-2">Social Media</h3>
                                <p className="text-slate-400 text-sm">{props.items?.[3]?.desc || "Capture intent from ads."}</p>
                            </div>
                        </div>
                        <div className="text-center mt-12">
                            <a href={props.ctaHref || "#hero-form"} className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">
                                {props.ctaLabel}
                            </a>
                        </div>
                    </div>
                </section>
            );

        case 'social_proof':
            return (
                <section className="py-16 bg-gray-50 text-center">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">{props.headline}</h2>
                        <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
                            {/* Placeholder logos since user didn't provide specific images */}
                            <div className="text-xl font-bold text-gray-400">Trusted Client 1</div>
                            <div className="text-xl font-bold text-gray-400">Trusted Client 2</div>
                            <div className="text-xl font-bold text-gray-400">Trusted Client 3</div>
                            <div className="text-xl font-bold text-gray-400">Trusted Client 4</div>
                        </div>
                    </div>
                </section>
            );

        default:
            return null;
    }
};

export default DynamicSection;
