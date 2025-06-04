import UserItem from "./components/UserItem"


export interface User {
    id: number
    firstName: string
    lastName: string
    age: number
    gender: string
    email: string
}

const fetechUsers = async () => {
    const res = await fetch ("https://dummyjson.com/users")
    const data = await res.json()
    return data.users
}



const page = async () => {
    const users: User[] = await fetechUsers()

  return (
    <div className="max-w-3xl mx-auto p-10 bg-white shadow-lg rounded-2xl">
        <h1 className="text-3xl font-bold mb-6 text-black text-center">Users</h1>
        <ul className="space-y-4 text-black">
          {users.map(user => (
            <UserItem key={user.id} UserItem={user} />
          ))}
        
        </ul>
    </div>
  )
}

export default page