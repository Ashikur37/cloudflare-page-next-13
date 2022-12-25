// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Product } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../utils/prisma';


type Data = any[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const data=   await prisma.product.findMany({
        select:{
            id:true,
            name:true,
            brand:{
                select:{
                    name:true,
                    banner:true
                }
            },
            categories:{
                select:{
                    category:{
                        select:{
                            name:true,
                            slug:true,

                        }
                    }
                }
            }
        }
    }
    );
     res.json(data);
}
