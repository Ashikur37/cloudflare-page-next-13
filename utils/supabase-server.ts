import { headers, cookies } from 'next/headers'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../db_types'

const SupabaseServer= () =>
  createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })

  export default SupabaseServer;