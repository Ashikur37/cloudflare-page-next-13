import supabase from "../../utils/supabase";
import Table from "./Table";
export const revalidate = 60
async function Page() {
    const { data, error } = await supabase.from("parks").select();
    return (
        <div>
            <Table />
            server side
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    )
}

export default Page;
