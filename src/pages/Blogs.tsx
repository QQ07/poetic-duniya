import Appbar from '../components/Appbar';
import AllBlogs from '../components/BlogsList';
const Blogs = () => {
  return (
    <>
      <Appbar skipAuthCheck />
      <AllBlogs />
    </>
  );
};

export default Blogs;
