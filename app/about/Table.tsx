'use client'

import { useEffect, useState } from "react"
import supabase from "../../utils/supabase";

function Table() {
    const [data, setData] = useState<any>(null);
    useEffect(() => {
        const getData = async () => {
            const { data, error } = await supabase.from("parks").select();
            setData(data);
        }
        getData();
    }, [])
    return (
        <div>Client side data
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    )
}

export default Table