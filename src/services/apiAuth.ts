import { supabase } from "./supabase";

export async function login({ email, password }: { email: string; password: string }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function register({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }

  return null;
}

export async function getUser() {
  // //1.Check if the current sessioin is still in the current browser
  // const { data: session } = await supabase.auth.getSession();
  // //2.If there is no session, then not authenticated
  // if (!session) return null;

  const { data } = await supabase.auth.getUser();

  return data?.user;
}
