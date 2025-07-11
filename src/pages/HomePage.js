import { useEffect, useState } from "react";
import { useTitle } from "../hooks/useTitle";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { PostCard, SkeletonCard } from "../components";

export const HomePage = () => {
  const [posts, setPosts] = useState(new Array(3).fill(false));
  const [toggle, setToggle] = useState(false);

  useTitle("Home");

  useEffect(() => {
    async function getPosts() {
      const postRef = collection(db, "posts");
      const data = await getDocs(postRef);

      setPosts(
        data.docs.map((document) => ({ ...document.data(), id: document.id }))
      );
    }
    getPosts();
  }, [toggle]);

  return (
    <section>
      {posts.map((post, index) =>
        post ? (
          <PostCard
            key={post.id}
            post={post}
            toggle={toggle}
            setToggle={setToggle}
          />
        ) : (
          <SkeletonCard key={index} />
        )
      )}
    </section>
  );
};
