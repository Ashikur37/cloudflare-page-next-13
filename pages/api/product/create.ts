// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

    const prisma = new PrismaClient();
    const data=   await prisma.product.create({
        data:{
            name:req.body.name,
           
            brandId:req.body.brand_id
        }
     });

     req.body.images.forEach(async(image:any)=>{
      await prisma.productImage.create({
        data:{
          productId:data.id,
        name:image
        }
      });
     })
     req.body.category_ids.forEach(async(category:number)=>{
      await prisma.categoriesOnProducts.create({
        data:{
          productId:data.id,
          categoryId:category,
          assignedBy:"test"
        }
      });
     })
     res.json(data);
}
