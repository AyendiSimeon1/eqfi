// lib/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gfutowwuwzjgvklrpacs.supabase.co';
const supabaseKey = 'sb_publishable_rz4fM7JQm27XZ5FsY_P45g_O_-u07NO';

let supabase = null;

if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
} else {
  console.warn('Supabase environment variables not set. Supabase client not initialized.');
}

export { supabase };

