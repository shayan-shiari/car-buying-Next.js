import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BsSunFill,
  BsFillMoonFill,
  BsBoxArrowInLeft,
  BsFillBellFill,
  BsXLg,
  BsList,
  BsFillCarFrontFill,
} from "react-icons/bs";

import logo from "../../public/images/logo.png";
import Image from "next/image";

const Layout = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showNav, setShowNav] = useState(false);
  console.log(theme);
  const handleShowNavbar = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;
  return (
    <>
      <header className="flex items-start my-[12px] px-3">
        <Link href="/" className="mr-[30px] max-[768px]:m-0">
          <Image
            src={logo}
            alt="logo"
            className="w-[100px] max-[768px]:w-[70px]"
          />
        </Link>
        <div className="flex flex-col items-center py-[10px] px-0 w-[370px] mx-[auto] rounded-[5px] bg-mainColor max-[450px]:w-[190px] max-[768px]:w-[250px]">
          <h2 className="text-[2.3rem] max-[450px]:text-[28px] text-white font-bold border-b-[1px] border-solid border-[black] mb-[10px] w-[fit-content]">
            CarDeals
          </h2>
          <p className="text-slate-300 max-[450px]:text-[13px]">
            Choose and Buy your car
          </p>
        </div>
        <div className="flex gap-x-5 max-[768px]:gap-x-0">
          <button className="relative max-[768px]:mr-2">
            <BsFillBellFill className="text-blue-400" size={22} />
            <span className="text-xs text-white border-none bg-red-600 py-[2px] px-[3px] rounded absolute bottom-3">
              1
            </span>
          </button>
          <button
            onClick={handleShowNavbar}
            className="hidden max-[768px]:inline"
          >
            <BsList size={22} />
          </button>
          <div className={`${showNav && "cover"}`}>
            <div className={`flex gap-x-5 nav-elements ${showNav && "active"}`}>
              <button
                className="hidden max-[768px]:inline max-[768px]:ml-[110px]"
                onClick={handleShowNavbar}
              >
                <BsXLg />
              </button>
              <button className="flex items-center max-[768px]:w-[85px] ">
                <BsBoxArrowInLeft className="text-blue-400" size={22} />
                <Link
                  href="/login"
                  className="dark:text-white text-black max-[768px]:text-white "
                >
                  Login
                </Link>
              </button>
              <Link
                className="hidden max-[768px]:flex max-[768px]:gap-x-1 w-[85px]"
                href="/cars"
              >
                <BsFillCarFrontFill className="text-blue-400" size={22} />
                <span className="text-white">all cars</span>
              </Link>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <BsFillMoonFill className="text-blue-400" size={22} />
                ) : (
                  <BsSunFill className="text-blue-400" size={22} />
                )}
              </button>
            </div>
          </div>
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
