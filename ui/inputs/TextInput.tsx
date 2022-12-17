import { ChangeEventHandler, Dispatch, SetStateAction } from "react"

type Props = {
    onChange: Dispatch<SetStateAction<string>>,
    defaultValue?: string
}
function TextInput({ onChange, defaultValue = "" }: Props) {
    return (
        <input defaultValue={defaultValue} onChange={e => onChange(e.target.value)} type="text" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

    )
}

export default TextInput