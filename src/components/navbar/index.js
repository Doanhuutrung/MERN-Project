"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const menuItems = [
    {
      id: "home",
      title: "home",
      path: "/browser",
    },
    {
      id: "tV",
      title: "TV",
      path: "/tv",
    },
    {
      id: "movies",
      title: "Movies",
      path: "/movies",
    },
    {
      id: "my-list",
      title: "My List",
      path: "/mylist",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative">
      <header
        className={`header ${isScrolled && "bg-[#141414]"} hover:bg-[1414141]}`}
      >
        <div className="flex items-center space-x-2 md:space-x-10">
          <img
            src="https://rb.gy/ulxxee"
            width={120}
            height={120}
            alt="Netflix-logo"
            className="cursor-pointer object-contain"
            onClick={() => router.push("/browser")}
          />
          <ul className="hidden md:space-x-4 md:flex cursor-pointer">
            {menuItems.map((item) => (
              <li
                className="cursor-pointer text-[16px] font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]"
                key={item.id}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="font-light flex items-center space-x-4 text-sm">
          
        </div>
      </header>
    </div>
  );
}
