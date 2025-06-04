import { User } from "../page"
type Props = {
    params: Promise<{ id: string }>
}

const page =  async({params}: Props) => {
    const { id } = await params
    const  res = await fetch (` http://localhost:3001/api/users/${id}`)
    const data: User = await res.json()
  return (
    <div>
        <h2>{data.firstName} {data.lastName}</h2>
        <h2>Age: {data.age}</h2>
        <h2>Gender: {data.gender}</h2>
        <h2>Email: {data.email}</h2>

    </div>
  )
}

export default page