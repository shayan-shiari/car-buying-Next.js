import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <header className="flex flex-col items-center py-[15px] px-0 w-[440px] my-[10px] mx-[auto] rounded-[5px] bg-mainColor">
        <Link href="/">
          <h2 className="text-[2.3rem] font-bold border-b-[1px] border-solid border-[black] mb-[10px] w-[fit-content]">
            Bama Car
          </h2>
          <p>Choose and Buy your car</p>
        </Link>
      </header>
      <main className="min-h-[1000px]">{children}</main>
      <footer className="bg-[#d9d9d9] text-center text-gray-600 py-[10px] mt-[10px]">
        &copy; All Rights Reserved 2023 |{" "}
        <Link href="/" className="text-[#454545] font-semibold">
          Bama Car
        </Link>
      </footer>
    </>
  );
};

export default Layout;
