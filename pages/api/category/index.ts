// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Category } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../utils/prisma';


type Data = Category[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const data=   await prisma.category.findMany({});
     res.json(data);
}
