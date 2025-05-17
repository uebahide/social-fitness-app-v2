import { createClient } from "@supabase/supabase-js";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
console.log(supabaseKey)
export const supabaseUrl = "https://tymuaybudcswkjikxenm.supabase.co";
export const supabase = createClient(supabaseUrl, supabaseKey);
