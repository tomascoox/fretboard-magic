'use server'

import { supabaseAdmin } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';

export async function saveToolAction(prevState: any, formData: FormData) {
    const slug = formData.get('slug') as string;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const gameSettingsJson = formData.get('gameSettings') as string;

    // Basic Validation
    if (!slug || !slug.match(/^[a-z0-9-]+$/)) {
        return { message: 'Invalid slug. Use lowercase letters, numbers, and hyphens only.', success: false };
    }

    try {
        const gameSettings = JSON.parse(gameSettingsJson);

        const { error } = await supabaseAdmin
            .from('tools')
            .upsert({
                slug,
                title,
                description,
                game_settings: gameSettings,
                // created_at is default now() usually, but upsert might need it if we want to update timestamp
            }, { onConflict: 'slug' });

        if (error) {
            console.error('Supabase Upsert Error:', error);
            return { message: 'Database Error: ' + error.message, success: false };
        }

        revalidatePath('/'); // Revalidate home (sitemap links etc)
        // revalidatePath('/sitemap.xml'); // Next.js handles sitemaps differently sometimes
        revalidatePath(`/${slug}`);

        return { message: `Saved! Accessible at: /${slug}`, success: true };
    } catch (e: any) {
        console.error('Action Error:', e);
        return { message: 'Server Error: ' + e.message, success: false };
    }
}
