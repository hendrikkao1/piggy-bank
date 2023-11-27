import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function LoggedIn({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <>{user ? children : null}</>;
}
