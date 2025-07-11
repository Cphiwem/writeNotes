import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const CreatePost = () => {
  const navigate = useNavigate();
  const postRef = collection(db, "posts");
  useTitle("Create Post");

  async function handleCreatePost(e) {
    e.preventDefault();

    const document = {
      title: e.target.title.value,
      description: e.target.description.value,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    };
    await addDoc(postRef, document);
    navigate("/");
  }

  return (
    <section className="create">
      <div className="heading">
        <h1>Add New Post</h1>
      </div>
      <form className="createPost" onSubmit={handleCreatePost}>
        <input
          type="text"
          className="title"
          name="title"
          placeholder="Title"
          maxLength="50"
          required
        />
        <textarea
          type="text"
          className="description"
          name="description"
          placeholder="Description"
          maxLength="450"
          required
        ></textarea>
        <button type="submit" className="submit">
          Create
        </button>
      </form>
    </section>
  );
};
