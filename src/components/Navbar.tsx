import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export default function Navbar() {
  // const navigate = useNavigate();
  return (
    <div className="border-b flex justify-between px-10 py-5 border-2 items-center">
      <div className="text-3xl">Bloggle</div>
      <div className="flex gap-3">
        {/* <Avatar Name={"authorName"} size={11} /> */}
        <Link to={`/create`}>
          <button
            type="button"
           className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  "
          >
            Create
          </button>
        </Link>
        <Avatar Name="Rohan Vaidya" size={20} />
      </div>
    </div>
  );
}
