import {
  DotsHorizontalIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'

const Post = ({ id, username, userImage, img, caption }) => {
  const { data: session } = useSession()
  return (
    <div className="bg-white my-7 border rounded-lg">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={userImage}
          alt=""
          className="rounded-full h-12 w-12 object-contain p-2 mr-3 border"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* Image */}
      <img src={img} className="object-cover w-full" alt="" />
      {/* Buttons */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn rotate-45" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      {!session && (
        <p className="p-0 text-center mt-2">Sign in to Like and Comment</p>
      )}

      {/* Caption  */}

      <p className="truncate p-5">
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </p>

      {/* Comments  */}
      {session && (
        <form action="" className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            placeholder="Add Comments...."
            type="text"
            className="border-none flex-1 focus:ring-0 outline-none"
          />
        </form>
      )}
    </div>
  )
}

export default Post
