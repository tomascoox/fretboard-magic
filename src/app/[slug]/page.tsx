import { notFound } from 'next/navigation';
import { tools } from '@/lib/tools-config';
import GameWrapper from '@/components/GameWrapper';
import { Metadata } from 'next';

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;

    const tool = tools[slug];
    if (!tool) return {};

    return {
        title: tool.title,
        description: tool.description,
        openGraph: {
            title: tool.title,
            description: tool.description,
        },
    };
}

export default async function ToolPage({ params }: PageProps) {
    const { slug } = await params;
    const tool = tools[slug];

    if (!tool) {
        notFound();
    }

    return (
        <main className="min-h-screen w-full flex flex-col items-center justify-start bg-slate-900 text-slate-50">
            {/* The Tool */}
            <GameWrapper
                initialNotes={tool.gameSettings.initialNotes}
                initialStrings={tool.gameSettings.initialStrings}
                disablePersistence={true}
            />
        </main>
    );
}
