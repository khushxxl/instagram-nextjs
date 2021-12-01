import { useSession, signOut } from 'next-auth/react'
import { auth } from '../firebase'

const Miniprofile = () => {
  const { data: session } = useSession()

  return (
    <div className="flex items-center justify-between mt-14 ml-16">
      <img
        className="w-16 h-16 rounded-full border p-[2px]"
        src={auth.currentUser.photoURL}
      />
      <div>
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button onClick={signOut} className="text-blue-400 text-sm font-semibold">
        Sign Out
      </button>
    </div>
  )
}

export default Miniprofile
