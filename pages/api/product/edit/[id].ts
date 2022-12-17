// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../utils/prisma';


// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const id = parseInt(req.query.id as string);
    const data=   await prisma.product.update(
      {
        where:{
          id
        },
        data:{
            name:req.body.name,
            brandId:req.body.brand_id,
            
        }
     })
     
     res.json({
        id:req.query.id
     });
}
