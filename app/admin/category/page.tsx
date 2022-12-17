
import Image from 'next/image';
import Link from 'next/link';
import ActionButton from './ActionButton';
import SearchHeader from './SearchHeader';
import { prisma } from '../../../utils/prisma';
// export const revalidate = 120;
async function CategoryList({ params, searchParams }: any) {

    const categories = await prisma.category.findMany({
        where: {
            name: {
                contains: searchParams.key || "",
            }
        },
        orderBy: {
            id: "desc"
        },
        include: {
            parent: true
        }
    });

    console.log(categories);
    return (

        <div className="p-8">
            <Link href='/admin/category/create'>
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
                                Category name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Parent
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
                        {categories.map(category => <tr key={category.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {category.id}
                            </th>
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {category.name}
                            </th>
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {
                                    category.parent ? category.parent.name : "No"
                                }
                            </th>
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <Image src={`${process.env.IMAGE_PATH!}${category.banner}`} alt={category.name} width={200} height={100} />

                            </th>
                            <td className="py-4 px-6">
                                {category.createdAt.toLocaleString()}
                            </td>
                            <td className="py-4 px-6">
                                <ActionButton categoryId={category.id} />
                            </td>

                        </tr>)}


                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default CategoryList