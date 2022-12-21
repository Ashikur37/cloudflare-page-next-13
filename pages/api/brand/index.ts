// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Brand } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../utils/prisma';


type Data = Brand[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const data=   await prisma.brand.findMany({});
     res.json(data);
}
