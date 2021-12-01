import faker from 'faker'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import Story from './Story'
const Stories = () => {
  const { data: session } = useSession()
  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    setSuggestions(suggestions)
  }, [])
  return (
    <div className="flex space-x-3 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll">
      {auth.currentUser && (
        <Story
          img={auth.currentUser.photoURL}
          username={auth.currentUser.displayName}
        />
      )}

      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          username={profile.username}
          img={profile.avatar}
        />
      ))}
    </div>
  )
}

export default Stories
