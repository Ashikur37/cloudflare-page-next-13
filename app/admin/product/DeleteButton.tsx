'use client'

import { useRouter } from "next/navigation"

type Props = {
    productId: number
}
function DeleteButton({ productId }: Props) {
    const router = useRouter();
    const submitDelete = async () => {
        const data = await fetch("/api/product/delete", {
            method: "delete",
            body: JSON.stringify({ productId }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
        router.refresh();
    }
    return (
        <button
            onClick={submitDelete}
            type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>

    )
}

export default DeleteButton  