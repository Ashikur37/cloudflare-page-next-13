// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from '../../../utils/supabase-admin'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {error,data}=await supabase.auth.admin.createUser({
    email:req.body.email,
    password:req.body.password,
    user_metadata:{
      permissions:req.body.permissions
    },
    email_confirm:true,
    phone:"8801736937164",
        data:{
            permissions:req.body.permissions
        }
  })
  console.log(error)
  console.log(data)
  res.send({
    data,
    error
  });

}
