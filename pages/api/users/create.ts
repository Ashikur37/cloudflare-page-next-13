// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from '../../../utils/supabase'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {error,data}=await supabase.auth.signUp({
    email:req.body.email,
    password:req.body.password,
    phone:"01736937161",
    options:{
        data:{
            permissions:req.body.permissions
        }
    }
  })
  console.log(error)
  console.log(data)

}
