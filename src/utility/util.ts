import pb from "./backend"
import { post } from "./interface"

export const isMyPost = (post: post) => {
  return pb.authStore.record?.username === post.expand?.user.username
}
