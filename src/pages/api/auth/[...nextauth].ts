/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import NextAuth from "next-auth";
import  GoogleProvider  from "next-auth/providers/google";
import  CredentialsProvider  from "next-auth/providers/credentials";
import  githubporvider  from "next-auth/providers/github";
import prisma from "../../../../prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter"


export default NextAuth({
    session: {
        strategy: 'jwt',
    },
    adapter: PrismaAdapter(prisma),
    // pages: {
    //     signIn: '/auth/signin',
    //     signOut: '/auth/signout',
    //     error: '/auth/error', // Error code passed in query string as ?error=
    //     verifyRequest: '/auth/verify-request', // (used for check email message)
    //     // newUser: null // If set, new users will be directed here on first sign in
    // },
        providers:[
            // working
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET
            }),
            githubporvider({
                clientId: process.env.GITHUB_CLIENT_ID,
                clientSecret: process.env.GITHUB_CLIENT_SECRET
            }),
            //not working
            // FacebookProvider({
            //     clientId: process.env.FACEBOOK_CLIENT_ID,
            //     clientSecret: process.env.FACEBOOK_CLIENT_SECRET
            //   }),
            //   twitterprovider({
            //     clientId: process.env.TWITTER_CLIENT_ID,
            //     clientSecret: process.env.TWITTER_CLIENT_SECRET
            //     }),
            CredentialsProvider({
                type: 'credentials',
                credentials: {
                    email: { label: "Email", type: "text", placeholder: "jsmith" },
                    password: {  label: "Password", type: "password" }
                },
                authorize(credentials,req){
                    const { email, password } = credentials as { email: string; password: string };
                }
            })

        ],
    });
