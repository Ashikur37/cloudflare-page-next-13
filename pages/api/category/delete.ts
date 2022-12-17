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
    console.log(req.body.categoryId)
    console.log(req.body)

    const data=   await prisma.category.delete({
        where:{
            id:req.body.categoryId
        }
    })
     res.json(data);
}
