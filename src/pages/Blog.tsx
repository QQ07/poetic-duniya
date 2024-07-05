import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks";

export const Blog = () => {
  const params = useParams();
  const id: string = params.id || "";

  const { loading, blog } = useBlog({id});
  if (loading) {
    return <>Loading...</>;
  }
  return (
    <>
      <FullBlog {...blog}></FullBlog>
    </>
  );
};
