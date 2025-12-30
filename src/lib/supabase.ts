import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://czpeoqbeoxhlnyriyfkw.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6cGVvcWJlb3hobG55cml5Zmt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcwNDQwODcsImV4cCI6MjA4MjYyMDA4N30.f5HDQtUI-tTMlr6RGNIoMlVameMGpZoFtelaRYV8QsI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
