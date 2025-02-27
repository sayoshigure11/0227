import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const users = await prisma.user.findMany()
    return NextResponse.json({dataList: users, status: 200})
}