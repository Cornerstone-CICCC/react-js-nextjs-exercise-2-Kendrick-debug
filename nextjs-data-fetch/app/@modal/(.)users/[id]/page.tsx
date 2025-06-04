import { User } from "@/app/users/page";
import Link from "next/dist/client/link";


type Props  = {
    params: Promise<{ id: string }>
}


const page = async ({params}: Props) => {
    const { id } = await params
    const res = await fetch(`https://dummyjson.com/users/${id}`)
    const data: User = await res.json()


  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-black/70 flex items-center justify-center">
        <div className="bg-white text-black p-3 w-1/3">
            <h3>{data.firstName}</h3>
            <h3>{data.lastName}</h3>
            <h3>{data.age}</h3>
            <h3>{data.gender}</h3>
            <h3>{data.email}</h3>
            
            <Link href="/users" className="border-1 px-2 mt-1 inline-block rounded-md shadow-md">Close</Link>
            <a href={`/users/${data.id}`} className="border-1 px-2 mt-1 inline-block rounded-md shadow-md">View User Details</a>
        </div>
    </div>
  )
}

export default page