import { auth, onAuthStateChanged } from '../firebase'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

const RightNavbar = () => {
  onAuthStateChanged(auth, (user) => {
    const [open, setOpen] = useRecoilState(modalState)
   
  })
}

export default RightNavbar

// {auth.currentUser ? (
//     <>
//
//   ) : (

//   )}
