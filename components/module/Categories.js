import Link from "next/link";
import Sedan from "../icons/Sedan";
import Suv from "../icons/Suv";
import Hatchback from "../icons/Hatchback";
import Sport from "../icons/Sport";

const Categories = () => {
  return (
    <div className="flex justify-between items-center w-fit rounded-[5px] my-[50px] mx-auto shadow-[0px_8px_24px_rgba(149,157,165,0.2)]">
      <Link href='/categories/sedan'>
        <div className="w-[100px] bg-mainColor flex flex-col items-center m-[5px] p-[5px] rounded-[5px] pb-0">
          <p>Sedan</p>
          <Sedan />
        </div>
      </Link>
      <Link href='/categories/suv'>
        <div className="w-[100px] bg-mainColor flex flex-col items-center m-[5px] p-[5px] rounded-[5px] pb-0">
          <p>Suv</p>
          <Suv />
        </div>
      </Link>
      <Link href='/categories/hatchback'>
        <div className="w-[100px] bg-mainColor flex flex-col items-center m-[5px] p-[5px] rounded-[5px] pb-0">
          <p>Hatchback</p>
          <Hatchback />
        </div>
      </Link>
      <Link href='/categories/sport'>
        <div className="w-[100px] bg-mainColor flex flex-col items-center m-[5px] p-[5px] rounded-[5px] pb-0">
          <p>Sport</p>
          <Sport />
        </div>
      </Link>
    </div>
  );
};

export default Categories;
