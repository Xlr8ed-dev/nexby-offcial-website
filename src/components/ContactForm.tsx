import { useState } from 'react';

interface ContactFormProps {
    showDescription?: boolean;
    formId: string;
}

const ContactForm = ({ showDescription = true, formId }: ContactFormProps) => {
    const [problemText, setProblemText] = useState("");

    const handleTagClick = (text: string) => {
        setProblemText(text);
    }

    return (
        <section id="contact" className="border-t border-slate-100 bg-white py-20">
            <div className="mx-auto max-w-6xl px-6">
                {showDescription && (
                    <div className="text-center mb-12">
                        <p className="text-sm font-bold uppercase tracking-widest text-purple-600 mb-4">
                            Talk to an AI expert
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Answer a few sharp questions.<br />We'll tell you if we're a fit.
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                            We're not the right partner for every business — and that's by
                            design. This short form qualifies your stage, intent and
                            readiness. If we can meaningfully move the needle, we'll get on a
                            call.
                        </p>
                    </div>
                )}

                <div className="w-full">
                    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 shadow-2xl border border-purple-500/20">
                        <form
                            className="space-y-6"
                            onSubmit={(e) => {
                                e.preventDefault();
                                console.log('Contact Form Submitted:', {
                                    formId,
                                    problem: problemText
                                });
                                // TODO: wire to backend / Postgres
                            }}
                        >
                            <div className="grid gap-5 md:grid-cols-2">
                                <div>
                                    <label className="text-sm font-semibold text-white mb-2 block">
                                        Your name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full h-11 rounded-xl border-2 border-purple-400/30 bg-white/10 backdrop-blur-sm px-4 text-white placeholder-purple-300/50 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-semibold text-white mb-2 block">
                                        Work email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full h-11 rounded-xl border-2 border-purple-400/30 bg-white/10 backdrop-blur-sm px-4 text-white placeholder-purple-300/50 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-semibold text-white mb-2 block">
                                        Company name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full h-11 rounded-xl border-2 border-purple-400/30 bg-white/10 backdrop-blur-sm px-4 text-white placeholder-purple-300/50 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-semibold text-white mb-2 block">
                                        Your role
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full h-11 rounded-xl border-2 border-purple-400/30 bg-white/10 backdrop-blur-sm px-4 text-white placeholder-purple-300/50 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all"
                                        placeholder="Founder, CXO, Head of..."
                                    />
                                </div>
                            </div>

                            <div className="grid gap-5 md:grid-cols-2">
                                <div>
                                    <label className="text-sm font-semibold text-white mb-2 block">
                                        Primary area you want to fix first
                                    </label>
                                    <select className="w-full h-11 rounded-xl border-2 border-purple-400/30 bg-white/10 backdrop-blur-sm px-4 text-white outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all [&>option]:bg-slate-900">
                                        <option>Sales / demand generation</option>
                                        <option>Recruitment / talent</option>
                                        <option>Operations / service</option>
                                        <option>Exhibitions / events</option>
                                        <option>Multiple / not sure</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-sm font-semibold text-white mb-2 block">
                                        What best describes your current stage?
                                    </label>
                                    <select className="w-full h-11 rounded-xl border-2 border-purple-400/30 bg-white/10 backdrop-blur-sm px-4 text-white outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all [&>option]:bg-slate-900">
                                        <option>Exploring AI, no pilots yet</option>
                                        <option>One or two pilots, want system</option>
                                        <option>Have tools, want integration</option>
                                        <option>Scaling an existing AI program</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-white mb-2 block">
                                    What is the uncomfortable business problem you want AI to
                                    attack first?
                                </label>

                                {/* One-Tap Chips for "Lazy" Users */}
                                <div className="flex flex-wrap gap-2 mb-3 mt-1">
                                    <button type="button" onClick={() => handleTagClick("Leads are high volume, but my team is too slow to follow up.")} className="text-[10px] bg-gradient-to-r from-red-500/20 to-orange-500/20 hover:from-red-500/30 hover:to-orange-500/30 border border-red-400/50 text-red-200 rounded-full px-3 py-1.5 transition-all font-medium">
                                        🔥 Leads getting cold
                                    </button>
                                    <button type="button" onClick={() => handleTagClick("Spending too much time filtering bad resumes.")} className="text-[10px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 border border-blue-400/50 text-blue-200 rounded-full px-3 py-1.5 transition-all font-medium">
                                        📄 Too many bad resumes
                                    </button>
                                    <button type="button" onClick={() => handleTagClick("Customer support costs are eating our margins.")} className="text-[10px] bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 border border-green-400/50 text-green-200 rounded-full px-3 py-1.5 transition-all font-medium">
                                        💸 Support costs high
                                    </button>
                                </div>

                                <textarea
                                    className="w-full rounded-xl border-2 border-purple-400/30 bg-white/10 backdrop-blur-sm px-4 py-3 text-white placeholder-purple-300/50 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all resize-none"
                                    rows={3}
                                    value={problemText}
                                    onChange={(e) => setProblemText(e.target.value)}
                                    placeholder="Be as specific as you can: numbers, processes, teams, markets."
                                />
                            </div>

                            <div className="grid gap-5 md:grid-cols-2">
                                <div>
                                    <label className="text-sm font-semibold text-white mb-2 block">
                                        Team size involved in this journey
                                    </label>
                                    <select className="w-full h-11 rounded-xl border-2 border-purple-400/30 bg-white/10 backdrop-blur-sm px-4 text-white outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all [&>option]:bg-slate-900">
                                        <option>1–5 people</option>
                                        <option>6–20 people</option>
                                        <option>21–50 people</option>
                                        <option>50+ people</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 rounded-2xl bg-black/40 px-4 py-3 text-xs text-slate-50 border border-purple-500/20">
                                <p className="font-medium text-purple-200">
                                    Humans read this. Not bots.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    We are selective because we care about results, not volume. If you are ready to move, you matter to us. You will hear from our strategy team within 24 hours.
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="w-full h-14 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 hover:from-purple-700 hover:via-purple-600 hover:to-pink-700 rounded-full text-white font-bold text-base uppercase tracking-wider shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Request Strategy Call
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;
