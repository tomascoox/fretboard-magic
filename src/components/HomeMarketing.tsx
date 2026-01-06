import React from 'react';
import Link from 'next/link';

export default function HomeMarketing() {
    return (
        <div className="w-full bg-slate-950 text-slate-300 mt-12 pb-24">

            {/* HERO / INTRO SECTION */}
            <section className="max-w-4xl mx-auto px-6 py-16 text-center border-b border-slate-800/50">
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tight">
                    Master the Fretboard. <span className="text-blue-500">For Free.</span>
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                    FretHunt is the fastest way to memorize guitar notes. No signup required.
                    Just interactive games designed to rewire your brain for instant fretboard recall.
                </p>
            </section>

            {/* FEATURES GRID */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Feature 2 */}
                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                        <div className="text-4xl mb-4 text-emerald-500">🔊</div>
                        <h3 className="text-xl font-bold text-white mb-3">Real Audio Feedback</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Train your ear while you train your eyes. FretHunt uses high-quality acoustic guitar samples for every single note.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                        <div className="text-4xl mb-4 text-blue-500">⚡️</div>
                        <h3 className="text-xl font-bold text-white mb-3">Instant & Free</h3>
                        <p className="text-slate-400 leading-relaxed">
                            No login barriers. No paywalls. Works on any device, from desktop to mobile. Start mastering the neck in seconds.
                        </p>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="bg-slate-900 py-20 border-y border-slate-800">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">How to Use FretHunt</h2>

                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="bg-blue-600 text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-blue-900/50">1</div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Select Your Notes</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Use the <strong>CUSTOM NOTE SELECTION</strong> button to toggle specific notes or open strings you want to focus on.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="bg-purple-600 text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-purple-900/50">2</div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Start the Game</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Press <strong>START HUNT</strong>. A target position will be highlighted on the virtual fretboard. Identify the correct note using the interactive selector wheel. Consistent practice builds instant fretboard mastery.
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="max-w-4xl mx-auto px-6 py-24 text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Master the Guitar?</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        onClick={() => {
                            const scrollContainer = document.getElementById('main-scroll-container');
                            if (scrollContainer) {
                                scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
                            } else {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        }}
                        className="px-8 py-4 bg-white text-slate-900 font-black uppercase tracking-widest rounded-full hover:bg-slate-200 transition-colors shadow-xl shadow-white/10"
                    >
                        Start Playing Now
                    </button>
                </div>
            </section>

        </div>
    );
}
