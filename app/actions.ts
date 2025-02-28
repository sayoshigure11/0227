"use server"

import { redis } from "./api/rendering/route";

export async function myAction(formData: FormData) {
    const id = formData.get("id") as string
    const text = formData.get("text")

    const datalist = {
        id,
        text
    }
    console.log("datalist", datalist)

    await redis.set("datalist", datalist)
}