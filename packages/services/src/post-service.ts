import axios from "axios";
import { Post } from "@demo/types";

const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const postService = {
  fetchPosts: () =>
    http.get<Post[]>("/posts").then((response) => response.data),
  fetchPost: (id: number) =>
    http.get<Post>(`/posts/${id}`).then((response) => response.data),
};
