import { Avatar } from "./BlogCard";

export const FullBlog = (props: {
  content: string;
  title: string;
  author: { name: string; tagline: string };
}) => {
  console.log(props);
  return (
    <div className="grid grid-cols-12 px-40 pt-20 gap-10 text-xl w-screen">
      <div className="col-span-9">
        <div className="text-5xl font-extrabold">{props.title}</div>
        <div className="text-slate-500"> Posted on 21 June 2024</div>
        <div className="text-md pt-4">{props.content}</div>
      </div>
      <div className="col-span-3">
        Author
        <div className="flex items-center">
          <div >
            <Avatar Name={props.author.name}></Avatar>
          </div>
          <div>
            <div className="font-bold text-xl"> {props.author.name || "Anonymous"}</div>
            <div className="text-sm text-slate-400">
              {" "}
              Random Catch Phrase About the Author's ability to grab user's
              attention
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
