'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import TextInput from '../../../ui/inputs/TextInput'

function SearchHeader() {
    const [key, setKey] = useState<string>("");
    const router = useRouter();
    const search = () => {
        router.push("/admin/brand?key=" + key);
    }
    return (
        <div>
            <TextInput
                onChange={setKey}
            />
            <button onClick={search}>
                Search
            </button>
        </div>
    )
}

export default SearchHeader