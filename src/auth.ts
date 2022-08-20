import {createClient} from '@supabase/supabase-js'

export const supabase = createClient(
    'https://yafsawyirvnluhxzcjzm.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhZnNhd3lpcnZubHVoeHpjanptIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA5MzIwNTIsImV4cCI6MTk3NjUwODA1Mn0.9UBeSmPl9zu8gA7ijDIi2X-nbf6PNv-Nfg7Rt14FQyk')
