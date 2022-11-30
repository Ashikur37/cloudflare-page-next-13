import { ChangeEvent, ChangeEventHandler } from "react"

type Props = {
  onChange: any
}
function FileInput({ onChange }: Props) {
  return (
    <>

      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => onChange(e)}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />

    </>
  )
}

export default FileInput