import Link from "next/link"

const Header = () => {
  return (
    
    <header className="flex justify-between items-center p-3 bf-grey-700">
        <div className="LOGO"> LOGO </div>
            <ul>
                <menu className="flex gap-3 items-center">
                    <li className="underline">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="underline">
                        <Link href="/users">Users</Link>
                    </li>
                </menu>
            </ul>
        
    </header>

  )
}

export default Header