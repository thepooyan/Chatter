import { removePost } from "../utility/backend"
import { post } from "../utility/interface"

interface props {
  post: post
}
const Post = ({post}:props) => {

  const removeMe = () => {
    removePost(post.id)
  }

  return (
    <div class="bg-green-300 w-[95%] m-auto mb-2 p-1 rounded ">
      {post.content}
      <span class="text-gray-700 text-xs ml-2">
        ({post.expand?.user.username})
      </span>
      <button class="text-xs text-red-500 ml-2" onclick={removeMe}>remove</button>
    </div>
  )
}

export default Post
