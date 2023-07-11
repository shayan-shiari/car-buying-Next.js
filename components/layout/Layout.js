import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
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
      <header className="flex items-start my-[10px]">
        <Image src={logo} alt="logo" className="w-[150px]"/>
        <div className="flex flex-col items-center py-[15px] px-0 w-[440px] mx-[auto] rounded-[5px] bg-mainColor">
          <Link href="/">
            <h2 className="text-[2.3rem] font-bold border-b-[1px] border-solid border-[black] mb-[10px] w-[fit-content]">
              Bama Car
            </h2>
            <p>Choose and Buy your car</p>
          </Link>
        </div>
        <div>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? (
              <BsFillMoonFill className="text-red-400" />
            ) : (
              <BsSunFill className="text-blue-400" />
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
