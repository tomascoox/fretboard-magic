
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// 1. Client for public access (Read only, strictly RLS enforced)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 2. Admin client for server-side operations (Bypasses RLS - USE WITH CAUTION)
// Only use this in server actions or API routes protected by admin checks.
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey || supabaseAnonKey);
