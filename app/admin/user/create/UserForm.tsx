'use client'
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from "react"
import FileInput from '../../../../ui/inputs/FileInput';
import TextInput from "../../../../ui/inputs/TextInput"
import supabase from '../../../../utils/supabase';
import Select from 'react-select';

function CreateForm() {
    const router = useRouter();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [permissions, setPermissions] = useState<string[]>([]);

    const options = [
        { value: "brand", label: "brand" },
        { value: "category", label: "category" },
        { value: "product", label: "product" },
        { value: "user", label: "user" },

    ]



    const addUser = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch('/api/users/create', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                permissions
            })
        }).then(res => res.json());
        // router.push('/admin/brand');
    }
    return (
        <form onSubmit={addUser}>
            <div className="relative z-0 mb-6 w-full group">
                <TextInput onChange={setEmail} />
                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
            </div>

            <div className="relative z-0 mb-6 w-full group">
                <TextInput onChange={setPassword} />
                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>

            <Select isMulti options={options} onChange={val => setPermissions(val.map(e => e.value))} />

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form >
    )
}

export default CreateForm