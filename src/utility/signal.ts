import { createSignal } from "solid-js";
import pb from "./backend";

export const [isLoggedIn, setIsLoggedIn] = createSignal(pb.authStore.isValid)
