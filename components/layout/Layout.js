import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsSunFill, BsFillMoonFill, BsBoxArrowInLeft } from "react-icons/bs";
import logo from "../../public/images/logo.png";
import Image from "next/image";

const Layout = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;
  return (
    <>
      <header className="flex items-start my-[10px] px-3">
        <Link href="/">
          <Image src={logo} alt="logo" className="w-[100px]" />
        </Link>
        <div className="flex flex-col items-center py-[10px] px-0 w-[370px] mx-[auto] rounded-[5px] bg-mainColor">
          <h2 className="text-[2.3rem] font-bold border-b-[1px] border-solid border-[black] mb-[10px] w-[fit-content]">
            CarDeals
          </h2>
          <p className="text-slate-300">Choose and Buy your car</p>
        </div>
        <div className="flex gap-x-4">
          <button className="flex items-center">
            <BsBoxArrowInLeft className="text-blue-400" size={22} />
            <span className="dark:text-white text-black">Login</span>
          </button>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? (
              <BsFillMoonFill className="text-blue-400" size={22} />
            ) : (
              <BsSunFill className="text-blue-400" size={22} />
            )}
          </button>
        </div>
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
