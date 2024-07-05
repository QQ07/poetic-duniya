import { useNavigate } from "react-router-dom";

export interface BlogType {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

export function BlogCard({
  authorName,
  title,
  content,
  publishedDate,
  id,
}: BlogType) {
  const navigate = useNavigate();
  return (
    <div
      className="m-3 p-3 border rounded-xl cursor-hand"
      onClick={() => {
        navigate("/blog/" + id);
      }}
    >
      <div className="flex items-center gap-2">
        <Avatar Name={authorName} size={10} />
        <div className="font "> {authorName} </div>
        <svg
          fill="rgb(100 116 139)"
          viewBox="0 0 16 16"
          height="1rem"
          width="1rem"
        >
          <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>{" "}
        <div className="text-slate-500  text-sm">{publishedDate}</div>
      </div>
      <div className="p-2">
        <div className="font-bold text-2xl">{title}</div>
        <div>{content.slice(0, 150) + "..."}</div>
        <div className="text-slate-500 text-sm ">{`${Math.ceil(
          content.length / 600
        )} minute${content.length > 100 ? "s" : ""} read`}</div>
      </div>
    </div>
  );
}
interface AvatarName {
  Name: string;
  size?: number;
}
export const Avatar = ({ Name, size = 10 }: AvatarName) => {
  console.log(`w-${size}`);
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden w-${size} h-${size} bg-gray-100 rounded-full`}
    >
      <span className="font-medium text-gray-600 ">
        {Name?Name.split(" ").map((e) => {
          return e.split("")[0];
        }):"R V"}
      </span>
    </div>
  );
};
