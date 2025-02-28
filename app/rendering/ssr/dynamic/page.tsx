import { User } from "@prisma/client"
import Link from "next/link"

type Users = {
    dataList: User[]
}

async function RenderingDynamicPage() {
    const getData = await fetch("http://localhost:3000/api/rendering")
    const getData2: Users = await getData.json()
    const prismaData = getData2.dataList

    return (
        <div>
            <h1 className="text-3xl font-semibold">RenderingDynamicPage</h1>
            <div className="mt-10 flex flex-col gap-y-2">
                {prismaData.map((data, i) => (
                    <div key={i} className="border p-2 flex flex-col gap-y-1">
                        <div>id:{data.id}</div>
                        <div>email:{data.email}</div>
                        <div>name:{data.name}</div>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <div
                    className="border p-2 bg-slate-300 cursor-pointer hover:bg-slate-100"
                >
                    <Link href={"/rendering"}>Renderingに戻る</Link>
                </div>
            </div>
        </div>
    )
}

export default RenderingDynamicPage