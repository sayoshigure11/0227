// import { prisma } from "@/prisma";
// import { NextResponse } from "next/server";

// export async function GET() {
//     const users = await prisma.user.findMany()
//     return NextResponse.json({dataList: users, status: 200})
// }



// import { Redis } from '@upstash/redis'
import { redis } from "@/app/rendering/components/redis";
import { NextResponse } from "next/server";

// export const redis = new Redis({
//   url: process.env.UPSTASH_REDIS_REST_URL,
//   token: process.env.UPSTASH_REDIS_REST_TOKEN,
// })

export async function GET() {
  // const redis = new Redis({
  //   url: process.env.UPSTASH_REDIS_REST_URL,
  //   token: process.env.UPSTASH_REDIS_REST_TOKEN,
  // })

    const users = await redis.get('datalist');
    return NextResponse.json({dataList: users, status: 200})
}
// export async function POST() {
//     const users = await redis.get('foo');
//     return NextResponse.json({dataList: users, status: 200})
// }

