
import Link from 'next/link';
import ActionButton from './ActionButton';
import SearchHeader from './SearchHeader';
import { prisma } from '../../../utils/prisma';
// export const revalidate = 120;
async function CategoryList({ params, searchParams }: any) {

    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchParams.key || "",
            }
        },
        orderBy: {
            id: "desc"
        },

    });

    return (

        <div className="p-8">
            <Link href='/admin/product/create'>
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
                                name
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
                        {products.map(product => <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {product.id}
                            </th>
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {product.name}
                            </th>

                            <td className="py-4 px-6">
                                {product.createdAt.toLocaleString()}
                            </td>
                            <td className="py-4 px-6">
                                <ActionButton productId={product.id} />
                            </td>

                        </tr>)}


                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default CategoryList