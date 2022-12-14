// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../utils/prisma';
import slug from 'slug';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const data=   await prisma.brand.create({
        data:{
            name:req.body.name,
            slug:slug(req.body.name),
            banner:req.body.banner,
        }
     })
     res.json(data);
}
