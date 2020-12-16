import { postService } from "@demo/services";
import { Post } from "@demo/types";
import { useQuery } from "react-query";

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
};

function App() {
  const postsQuery = useQuery("posts", postService.fetchPosts);
  return (
    <div>
      <h3>Posts:</h3>
      {postsQuery.data && <PostList posts={postsQuery.data} />}
    </div>
  );
}

export default App;
