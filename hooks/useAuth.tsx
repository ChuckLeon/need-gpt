import { IUser, userStore } from "@/store/userStore";
import { createClient } from "@/utils/supabase/clients";

export const useAuth = () => {
  const supabase = createClient();
  const { setUser } = userStore();

  const getUser = async () => {
    const { data } = await supabase.auth.getUser();

    if (data.user) {
      let { data: users, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", data.user?.id)
        .limit(1);

      if (users && users?.length > 0) {
        const formatedUser: IUser = {
          id: users[0].id,
          email: users[0].email,
          credits: users[0].credits,
        };

        setUser(formatedUser);
      }
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return { supabase, signOut, getUser };
};
