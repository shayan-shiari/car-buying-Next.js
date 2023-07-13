import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

const SearchBar = () => {
  const router = useRouter();
  const [min, setMin] = useState();
  const [max, setMax] = useState();

  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      toast.error("Enter minimum and maximum price!");
    }
  };

  return (
    <div className="flex justify-between w-[440px] max-[768px]:w-[330px] my-[50px] mx-auto p-[5px] shadow-[0px_8px_24px_rgba(149,157,165,0.2)]">
      <div className="flex flex-col w-full">
        <input
          value={min}
          onChange={(e) => setMin(e.target.value)}
          className="rounded-[5px] p-[5px] my-[5px] border-2 border-solid border-mainColor"
          type="text"
          placeholder="Enter min-price"
        />
        <input
          value={max}
          onChange={(e) => setMax(e.target.value)}
          className="rounded-[5px] p-[5px] my-[5px] border-2 border-solid border-mainColor"
          type="text"
          placeholder="Enter max-price"
        />
      </div>
      <button
        onClick={searchHandler}
        className="my-[5px] ml-[10px] bg-mainColor border-none p-[10px] rounded-[5px] text-white"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
