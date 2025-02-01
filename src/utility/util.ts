import pb from "./backend"
import { post } from "./interface"
import { isLoggedIn } from "./signal"

export const isMyPost = (post: post) => {
  isLoggedIn()
  return pb.authStore.record?.username === post.expand?.user.username
}
