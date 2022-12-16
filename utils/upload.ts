import supabase from "./supabase";

export const uploadSingleImage=async (folder:string,image:Blob)=>{
    var timestamp = new Date().toISOString().replace(/[-:.]/g,"")
    const { data, error
    } = await supabase.storage.from("images").upload(folder+"/" +  timestamp+image?.name, image!);
    return {
        data,
        error
    }
}