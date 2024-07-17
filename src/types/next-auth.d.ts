// next-auth.d.ts

import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      _id?: string;
      isVerified?: boolean;
      isAcceptingMessages?: boolean;
      username?: string;
      isAdmin?: boolean;
      diamonds?: number;
      lastDiamondUpdate?: number;
    } & DefaultSession["user"];
  }

  interface User {
    _id?: string;
    isVerified?: boolean;
    isAcceptingMessages?: boolean;
    username?: string;
    isAdmin?: boolean;
    diamonds?: number;
    lastDiamondUpdate?: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    _id?: string;
    isVerified?: boolean;
    isAcceptingMessages?: boolean;
    username?: string;
    isAdmin?: boolean;
    diamonds?: number;
    lastDiamondUpdate?: number;
  }
}
