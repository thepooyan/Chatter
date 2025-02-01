import pb from "../utility/backend"
import { setIsLoggedIn } from "../utility/signal";

const Login = () => {

  const auth = async () => {
    await pb.collection('users').authWithOAuth2({ provider: 'google', createData: {role: "user"} });
    setIsLoggedIn(true)
  }

  return (
    <div onclick={auth} class="cursor-pointer">Continue with Google</div>
  )
}

export default Login
