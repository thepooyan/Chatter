import pb, { getAvatar } from "../../utility/backend";
import Login from "../Login";
import Logout from "../Logout";
import { isLoggedIn } from "../../utility/signal";
import { user } from "../../utility/interface";

const NavBar = () => {

  let user = () => {
    if (!isLoggedIn()) return null
    return pb.authStore.record as user
  }

  return <div class="bg-gray-200 border-b-gray-500 border-b-2 p-2 flex justify-end items-center">
    {user() && <div class="mr-auto flex items-center gap-2">
      <img src={getAvatar(user())} alt="user avatar" class="w-20 h-20 object-cover rounded-full "/>
      <div>
        <p>
          {user()?.username}
        </p>
        <p>
          {user()?.email}
        </p>
      </div>
    </div>}
    {isLoggedIn() && <Logout/> || <Login />}
  </div>;
};

export default NavBar;
