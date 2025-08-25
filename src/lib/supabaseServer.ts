import { createClient } from "@supabase/supabase-js";

const supabaseServer = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!, // URL は公開可
    process.env.SUPABASE_SERVICE_ROLE_KEY! // ✅ Service Role Key
);

export default supabaseServer;
