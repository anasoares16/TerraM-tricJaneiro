import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://utizidvjcklzkwbxuqgs.supabase.co";
const supabaseKey = "sb_publishable_r8GOrEfry8egeGKqHo20Mw_pNxXtcPL";

export const supabase = createClient(supabaseUrl, supabaseKey);