// app/page.js
import HomeClient from './HomeClient';
// Initialize Supabase (Ensure these are in your .env.local)
// const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export const metadata = {
  title: "EQFI Invest | Wealth & Investment Management",
  description: "EQFI Invest - Professional wealth management, investment strategies, and financial planning for individuals and institutions. Discover our global approach to investing.",
};

export default function Home() {
  return <HomeClient />;
}