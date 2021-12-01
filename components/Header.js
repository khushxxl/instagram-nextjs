import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import Home from '../pages'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import Link from 'next/link'
import { auth, signInWithPopup, provider } from '../firebase'
import { onAuthStateChanged } from '@firebase/auth'
import Router from 'next/router'

const Header = () => {
  const { data: session } = useSession()

  const [open, setOpen] = useRecoilState(modalState)

  const router = useRouter()

  const currentUser = auth.currentUser

  return (
    <div className="shadow-sm border-b sticky top-0 z-50 bg-white">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto items-center">
        <div
          onClick={() => router.push('/')}
          className="relative w-24 h-24 hidden lg:inline-grid cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div
          onClick={() => router.push('/')}
          className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500  " />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
            />
          </div>
        </div>
        {auth.currentUser && (
          <>
            <div className="flex items-center space-x-4 justify-end">
              <HomeIcon className="navBtn" />
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div
                  className="absolute -top-1 -right-2 text-white
           bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse"
                >
                  3
                </div>
              </div>
              <MenuIcon className="h-10 w-6 md:hidden cursor-pointer" />
              <PlusCircleIcon
                className="navBtn"
                onClick={() => setOpen(true)}
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />

              <img
                onClick={() => {
                  auth.signOut().then(() => {
                    router.push('/')
                  })
                }}
                src={currentUser.photoURL}
                alt=""
                className="h-10 rounded-full cursor-pointer"
              />
            </div>
          </>
        )}
        {!auth.currentUser && (
          <div>
            <HomeIcon
              className="navBtn pr-3"
              onClick={() => router.push('/')}
            />
            <button
              onClick={() => {
                signInWithPopup(auth, provider).then((result) => {
                  const user = result.user
                  console.log(user)
                  router.push('/')
                })
              }}
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
