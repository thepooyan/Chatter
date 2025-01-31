import pb from "../../utility/backend";
import Login from "../Login";
import Logout from "../Logout";
import { isLoggedIn } from "../../utility/signal";

const NavBar = () => {

  return <div class="bg-gray-200 border-b-gray-500 border-b-2 p-2 flex justify-end">
    {isLoggedIn() && <div class="mr-auto flex flex-col">
      <span>
        {pb.authStore.record?.name}
      </span>
      <span>
        {pb.authStore.record?.email}
      </span>
    </div>}
    {isLoggedIn() && <Logout/> || <Login />}
  </div>;
};

export default NavBar;
