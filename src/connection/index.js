import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://aojrevdyxeipawiejdfy.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvanJldmR5eGVpcGF3aWVqZGZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk2NDU5MzYsImV4cCI6MjAzNTIyMTkzNn0.PrhvJYB7HalMx1mZj0ESiMH7jyAIwBAG-TrOa91s1_w"
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase

