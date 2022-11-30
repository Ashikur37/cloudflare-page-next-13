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
    const data=   await prisma.brand.create({
        data:{
            name:req.body.name,
            banner:req.body.banner
        }
     })
     res.json(data);
}
