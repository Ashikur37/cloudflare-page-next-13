// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';


type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const prisma = new PrismaClient();
    console.log(req.body.brandId)
    console.log(req.body)

    const data=   await prisma.brand.delete({
        where:{
            id:req.body.brandId
        }
    })
     res.json(data);
}
