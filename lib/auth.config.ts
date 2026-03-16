import Credentials from "next-auth/providers/credentials";

const authConfig = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize() {
        // აქ შეგიძლია რეალური authorize logic ჩასვა
        return null; // ჯერჯერობით dummy
      },
    }),
  ],
};

export default authConfig;
