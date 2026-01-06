'use client';

import React, { useState, useEffect } from 'react';

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already consented
        const consent = localStorage.getItem('frethunt_cookie_consent');
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('frethunt_cookie_consent', 'true');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[5000] p-4 bg-slate-900/95 backdrop-blur-md border-t border-slate-700 shadow-[0_-4px_20px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom-5 duration-500">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-slate-300 text-sm leading-relaxed text-center sm:text-left">
                    <p>
                        <span className="font-bold text-white">We use cookies</span> to enhance your experience and analyze traffic.
                        By continuing to use FretHunt, you agree to our <a href="/privacy" className="text-blue-400 hover:text-blue-300 underline">Privacy Policy</a>.
                    </p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={acceptCookies}
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all shadow-lg hover:shadow-blue-500/25"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
}
