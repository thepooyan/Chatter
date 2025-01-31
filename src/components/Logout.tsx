import pb from '../utility/backend'
import { setIsLoggedIn } from '../utility/signal'

const Logout = () => {
  const logout = () => {
    pb.authStore.clear()
    setIsLoggedIn(false)
  }
  return (
    <div onclick={logout}
      class='bg-teal-500 w-max p-1 rounded border-2 border-gray-300 h-max cursor-pointer'
    >Logout</div>
  )
}

export default Logout
