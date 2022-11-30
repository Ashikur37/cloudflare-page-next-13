import 'server-only'

import SupabaseListener from '../components/supabase-listener'
import './globals.css'
import createClient from '../utils/supabase-server'
import Login from '../components/login'

// do not cache this layout
export const revalidate = 0

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SupabaseListener accessToken={session?.access_token} />
        <Login />
        {children}
      </body>
    </html>
  )
}