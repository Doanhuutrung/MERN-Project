import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const authOptions = {
  provider: [
    GitHubProvider({
      clientId: "Iv1.fb58dfced60cde19",
      clientSecret: "94c01472fc8da79c0d1f7043108e4d900ed61ddc",
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session?.user?.name
        .split("")
        .join("")
        .toLocaleLowerCase();
      session.user.uid = token.sub;
      return session;
    },
  },
  secret: "default_secreet_key",
};

const handler = NextAuth(authOptions);

export {handler as GET , handler as POST }