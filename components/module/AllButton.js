import Link from "next/link";

const AllButton = () => {
  return (
    <div className="w-[440px] my-[50px] mx-auto max-[768px]:w-[320px]">
      <Link
        className="bg-mainColor text-center text-white py-[10px] block rounded-[5px]"
        href="/cars"
      >
        See All Cars
      </Link>
    </div>
  );
};

export default AllButton;
