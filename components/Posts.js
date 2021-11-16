import { collection, onSnapshot, orderBy, query } from '@firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import Post from './Post'
const Posts = () => {
  // const posts = [
  //   {
  //     id: '1',
  //     username: 'khushxxl_04',
  //     userImage:
  //       'https://lh3.googleusercontent.com/ogw/ADea4I6rb6HTAQqVsHoajMVjnL8N6zbA-cNLl7PSOBkhNcc=s192-c-mo',

  //     img: 'https://wallpaperaccess.com/full/780774.jpg',

  //     caption: 'This is dope',
  //   },
  //   {
  //     id: '2',
  //     username: 'khushxxl_04',
  //     userImage:
  //       'https://lh3.googleusercontent.com/ogw/ADea4I6rb6HTAQqVsHoajMVjnL8N6zbA-cNLl7PSOBkhNcc=s192-c-mo',
  //     img: 'https://wallpaperaccess.com/full/780774.jpg',
  //     caption: 'This is dope',
  //   },
  // ]

  const [posts, setPosts] = useState([])
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setPosts(snapshot.docs)
        },
      ),
    [db],
  )
  console.log(posts)

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImage={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}

export default Posts
