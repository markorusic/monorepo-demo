import { postService } from "../../services/dist";

const run = async () => {
  console.log("fetching posts...");
  const posts = await postService.fetchPosts();
  console.log(`fetched ${posts.length} posts`);
};

run();
