import { Link } from 'react-router-dom';
import Avatar from './BlogCard';
import { useRecoilState } from 'recoil';
import { userState } from '../store/atoms';

export default function Navbar() {
  const [user, setUser] = useRecoilState(userState);
  console.log('recoil: ' + user.name);
  // const navigate = useNavigate();
  return (
    <div className="border-b flex justify-between px-10 py-5 border-2 items-center">
      <div className="text-3xl">Poetic Duniya</div>
      <div className="flex gap-3">
        {/* <Avatar Name={"authorName"} size={11} /> */}
        <Link to={`/create`}>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-1.5 text-center  "
          >
            New
          </button>
        </Link>
        {/* {user.name ? <Avatar Name={user.name} size={20} /> : <></>} */}
      </div>
    </div>
  );
}
