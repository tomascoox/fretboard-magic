
import { supabaseAdmin } from '@/lib/supabase';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { Metadata } from 'next';

export const revalidate = 60; // Revalidate every minute
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Guitar Fretboard Tools & Games | FretHunt',
    description: 'Browse our collection of interactive guitar fretboard tools, games, and quizzes. Master every note on the neck.',
};

export default async function ToolsIndexPage() {
    let tools: any[] = [];

    try {
        const result = await supabaseAdmin
            .from('tools')
            .select('slug, title, description')
            .order('title', { ascending: true }); // Alphabetical is easier for users

        if (result.data) tools = result.data;
    } catch (e) {
        console.error("Error fetching tools", e);
    }

    return (
        <Layout allowScroll={true}>
            <main className="w-full max-w-6xl mx-auto px-6 py-12 pt-24 pb-48">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-blue-glow">
                        GUITAR TOOLS
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Explore our collection of interactive fretboard trainers designed to help you master specific strings, positions, and keys.
                    </p>
                </header>

                {tools.length === 0 ? (
                    <div className="text-center text-slate-500 py-20">
                        <p>No tools found yet. Check back soon!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tools.map((tool) => (
                            <Link
                                href={`/${tool.slug}`}
                                key={tool.slug}
                                className="group block bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:bg-slate-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                            >
                                <h2 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                                    {tool.title}
                                </h2>
                                <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
                                    {tool.description}
                                </p>
                                <div className="mt-4 flex items-center text-xs font-bold text-blue-500 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                    Start Trainer →
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </main>
        </Layout>
    );
}
