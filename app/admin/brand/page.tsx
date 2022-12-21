
import Image from 'next/image';
import Link from 'next/link';
import ActionColumn from './ActionColumn';
import SearchHeader from './SearchHeader';
import { prisma } from '../../../utils/prisma';
// export const revalidate = 120;
// export const runtime = 'experimental-edge';
async function BrandList({ params, searchParams }: any) {

    const brands = await prisma.brand.findMany({
        where: {
            name: {
                contains: searchParams.key || "",
            }
        },
        orderBy: {
            id: "desc"
        }
    });


    return (

        <div className="p-8">
            <Link href='/admin/brand/create'>
                Add new
            </Link>
            <div className=" overflow-x-auto relative">
                <SearchHeader />
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                ID
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Brand name
                            </th>

                            <th scope="col" className="py-3 px-6">
                                Slug
                            </th>
                            <th>
                                Banner
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Created At
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {brands.map(brand => <tr key={brand.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {brand.id}
                            </th>
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {brand.name}
                            </th>
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {brand.slug}
                            </th>
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <Image src={`${process.env.IMAGE_PATH!}${brand.banner}`} alt={brand.name} width={200} height={100} />

                            </th>
                            <td className="py-4 px-6">
                                {brand.createdAt.toLocaleString()}
                            </td>
                            <td className="py-4 px-6">
                                <ActionColumn brandId={brand.id} />
                            </td>

                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BrandList