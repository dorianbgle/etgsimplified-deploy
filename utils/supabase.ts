import { Database } from '../types/database.types'
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!url || !anonKey) {
    throw new Error('Bloody TypeScript!')
}

const supabase = createClient<Database>(url, anonKey)

export default supabase 