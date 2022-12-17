// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../utils/prisma';


type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const data=   await prisma.brand.delete({
        where:{
            id:req.body.brandId
        }
    })
     res.json(data);
}
