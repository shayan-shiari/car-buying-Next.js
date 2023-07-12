import { useRouter } from "next/router";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import Card from "../module/Card";

const CarsList = ({ data }) => {
  const router = useRouter();
  const backHnadler = () => {
    router.back();
  };

  return (
    <div className="max-w-[1200px] m-auto">
      <div onClick={backHnadler} className="flex items-center cursor-pointer bg-mainColor py-[10px] px-[15px] rounded-[5px] my-[50px] w-fit">
        <BsArrowLeftCircleFill size={22} />
        <p className="ml-[10px]">back</p>
      </div>
      <div className="flex justify-around flex-wrap">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CarsList;
