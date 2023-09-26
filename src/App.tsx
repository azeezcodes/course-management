import { useState } from "react";
import { courses } from "./data";

function App() {
   const [search, setSearch] = useState<string>("");
const searchItem = () => {
   return courses.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
   );
};

const searchResults = searchItem();
   return (
      <div className="px-20 pb-14">
         <div>
            <p className="w-[486px] md:w-[606px] lg:w-[786px] font-extrabold text-[4rem] mt-20">
               Welcome to Top Course Management Tool.
            </p>
            <p className="mt-2 text-gray-400 w-[686px] ">
               Where you can get all your choice of course for study, search and
               get full details about the course and students preferences.{" "}
            </p>
         </div>
         <div className="mt-8 font-medium mb-6 ">
            Explore Our Available Course
         </div>

         <div className="w-fit">
            <form className="">
               <div className=" mt-2 flex items-center border border-gray-300 outline-none ring-none rounded-md justify-between ">
                  <input
                     className="block  rounded-md border-0 px-2 py-4 outline-none focus:ring-0 text-md"
                     value={search}
                     placeholder="Say something..."
                     onChange={(e) => setSearch(e.target.value)}
                  />

                  <div className="flex items-center py-1.5 pr-1.5 text-sm ">
                     <button type="submit" className="btn-secondary">
                        Search
                     </button>
                  </div>
               </div>
            </form>
         </div>

         <div className="grid  lg:grid-cols-4 lg:gap-10 md:grid-cols-3 grid-cols-2 gap-16 md:gap-14 mt-14">
            {searchResults.map((course) => (
               <div key={course.id} className="border p-2 rounded-md ">
                  <div className="flex gap-2 p-3">
                     <div className="bg-gray-500 border rounded-lg w-16 h-16 min-h-fit min-w-fit flex-0.5 lg:block md:hidden sm:hidden  "></div>
                     <div className="flex-1 flex flex-col justify-evenly">
                        <p className="font-bold">{course.name}</p>
                        <p className="font-light text-gray-600 text-sm">
                           Registered Student: {course.number_of_users}
                        </p>
                     </div>
                  </div>
                  <p className="text-sm">{course.description}</p>
               </div>
            ))}
         </div>
      </div>
   );
}

export default App;
