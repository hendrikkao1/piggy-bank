import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Page, PageBody, PageHeader } from "@/components/Page";
import { Button } from "@/components/Button/Button";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";
import { Input } from "@/components/Input/Input";
import { InputLabel } from "@/components/InputLabel";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";
    const email = formData.get("email") as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const origin = "http://localhost:3000";
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/");
  };

  return (
    <Page>
      {searchParams?.message && (
        <ErrorMessage>{searchParams.message}</ErrorMessage>
      )}
      <form action={signIn}>
        <PageHeader heading="login.heading">
          <Button>signin</Button>
        </PageHeader>
        <PageBody>
          <div className="pt-6">
            <div className="flex flex-col gap-6">
              <InputLabel label="login.form.email.label">
                <Input name="email" type="email" required />
              </InputLabel>
            </div>
          </div>
        </PageBody>
      </form>
    </Page>
  );
}
