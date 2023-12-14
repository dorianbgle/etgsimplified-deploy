import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="flex items-center justify-center gap-x-10 h-full text-gray-400">
        <Link href="https://localhost:3000">Home</Link>
        <Link href="https://localhost:3000/guidelines">Guidelines</Link>
        <h1>Back</h1>
    </nav>
  )
}

export default Navbar
