import supabase from "@/lib/supabase";

export async function uploadToSupabase(fileName: string, fileData: Buffer): Promise<string | null> {
    const filePath = `private/music/${fileName}`;
    const { error } = await supabase.storage
        .from("diary-musics")
        .upload(filePath, fileData, {
            contentType: "audio/wav",
            upsert: true,
        });

    if (error) {
        console.error("Supabaseアップロード失敗:", error.message);
        return null;
    }

    const { data } = supabase.storage.from("diary-musics").getPublicUrl(filePath);
    return data?.publicUrl ?? null;
}
