import { authOprions } from "@/libs/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOprions);

export { handler as GET, handler as POST };
