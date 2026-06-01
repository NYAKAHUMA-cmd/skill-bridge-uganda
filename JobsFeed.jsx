import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xuajsrmywgofyrmvfxdk.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1YWpzcm15d2dvZnlybXZmeGRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3ODA0OTIsImV4cCI6MjA5NDM1NjQ5Mn0.yl0NNs2iUYvnapjh75L14ouMaYrXjsreZbKYz6xwQ-M'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
