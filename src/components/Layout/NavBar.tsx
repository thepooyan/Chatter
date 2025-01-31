import pb from "../../utility/backend";
import Login from "../Login";
import Logout from "../Logout";
import { isLoggedIn } from "../../utility/signal";
import { user } from "../../utility/interface";

const NavBar = () => {

  let user = () => {
    if (!isLoggedIn()) return null
    return pb.authStore.record as user
  }

  return <div class="bg-gray-200 border-b-gray-500 border-b-2 p-2 flex justify-end">
    {user() && <div class="mr-auto flex flex-col">
      <span>
        {user()?.name}
      </span>
      <span>
        {user()?.email}
      </span>
      <img src={user()?.avatar} alt="user avatar"/>
    </div>}
    {isLoggedIn() && <Logout/> || <Login />}
  </div>;
};

export default NavBar;
