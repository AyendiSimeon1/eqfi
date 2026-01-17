// app/page.js
import HomeClient from './HomeClient';
// Initialize Supabase (Ensure these are in your .env.local)
// const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default function Home() {
  return <HomeClient />;
}