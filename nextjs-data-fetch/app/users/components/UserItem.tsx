"use Client"

import Link from "next/link"
import { User } from "../page"


type Props = {
    UserItem: User
}

const UserItem = ({UserItem}: Props) => {
  return (
    <div>
        <li>
            <Link href={`/users/${UserItem.id}`}>{UserItem.firstName}</Link>
        </li>
    </div>
  )
}

export default UserItem