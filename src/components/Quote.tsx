export const Quote = () => {
 
  return (
    <div className="bg-slate-200 h-screen flex justify-center flex-col rounded-md">
      <div className="max-w-screen-md mx-auto text-center p-28">
        <div>
          <p className="text-2xl italic font-medium text-gray-900 ">
            "Bloggle keeps me hooked on all things tech.. It's built using dated
            stack but still manages to be sleek and intuitive. Join now to
            experience it yourselves"
          </p>
        </div>
        <div className="flex items-center justify-center mt-6  ">
          <div className="flex items-center divide-x-2 divide-gray-500 ">
            <div className="pe-3 font-medium text-gray-900 italic">
              Rohan Vaidya
            </div>
            <div className="ps-3 text-sm text-gray-500 ">Techie</div>
          </div>
        </div>
      </div>
    </div>
  );
};
