'use client'
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from "react"
import FileInput from '../../../../ui/inputs/FileInput';
import TextInput from "../../../../ui/inputs/TextInput"
import { uploadSingleImage } from '../../../../utils/upload';

function CreateForm({ categories }: any) {

    const router = useRouter();
    const [name, setName] = useState("");
    const [parentId, setParentId] = useState<number>(0);
    const [image, setImage] = useState<Blob>();
    const [createObjectURL, setCreateObjectURL] = useState<string>();

    const uploadToClient = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
    };


    const addCategory = async (e: FormEvent<HTMLFormElement>) => {
        console.log(categories);
        e.preventDefault();
        const { data, error
        } = await uploadSingleImage('categories', image!);


        const res = await fetch('/api/category/create', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, banner: data?.path, parent_id: parentId })
        }).then(res => res.json());

        router.push('/admin/category', {
            forceOptimisticNavigation: false,

        });
    }
    return (
        <form onSubmit={addCategory}>
            <div className="relative z-0 mb-6 w-full group">
                <TextInput onChange={setName} />
                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Parent Category</label>
                <select
                    onChange={e => setParentId(parseInt(e.target.value))}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Select Parent</option>
                    {
                        categories.map((category: any) => <option value={category.id} key={category.id}>{category.name}</option>)
                    }
                </select>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                {
                    createObjectURL && <img src={createObjectURL} />
                }

                <FileInput onChange={uploadToClient} />
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form >
    )
}

export default CreateForm