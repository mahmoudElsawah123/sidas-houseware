"use client";
import { Drawer } from "flowbite-react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Navbar, NavbarBrand } from "flowbite-react";
import logo from '/public/images/logo.png';
import Image from "next/image";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { LuChevronDown } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";

export function NavbarLayout() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);
  return (
    <div>
      <Navbar  rounded style={{boxShadow : '0px 2px 4px rgba(0,0,0,.1)'}}>
      <NavbarBrand href="#">
      <div className="block md:hidden">
        <FaBars size={25} onClick={() => setIsOpen(false)}/>
      </div>
        <Image src={logo} className="mx-3 w-[92px] md:w-auto" alt="Flowbite React Logo" />
        <div className="hidden lg:flex items-center mx-5 gap-7">
          <div className="flex items-center">
            <span className="text-[1rem] font-bold">فئات</span>
            <span><LuChevronDown size={16} /></span>
          </div>
          <div>
            <span className="text-secondary text-[1rem] font-bold">اقوي العروض</span>
          </div>
        </div>
      </NavbarBrand>

      <div className="w-[150px] md:w-auto mx-0 md:mr-10" style={{ flexGrow: 1 }}>
        <form className="mx-auto flex-1">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <CiSearch size={20} />
            </div>
            <input
              type="search"
              id="default-search"
              className="font-bold block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
              placeholder="ابحث في المنتجات او الماركات"
              required
            />
          </div>
        </form>
      </div>

      <div className="flex md:order-2">
        <Link href={''} className="hidden md:flex flex gap-3 text-lg items-center mx-4">
          <FaRegUser />
          <span>نسجيل الدخول</span>
        </Link>
        <Link href={''} className="flex gap-3 text-lg items-center mx-4">
          <RiShoppingCartLine />
          <span className="hidden md:block">مشترياتي</span>
        </Link>
      </div>
      

      {/* Uncomment the NavbarCollapse if needed in the future */}
      {/* <NavbarCollapse style={{ flexGrow: 1 }}>
        <form className="mx-auto flex-1">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <CiSearch size={20} />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
              placeholder="ابحث في المنتجات او الماركات"
              required
            />
          </div>
        </form>
      </NavbarCollapse> */}
    </Navbar>
          <Drawer open={isOpen} onClose={handleClose}>
          <Drawer.Header title="Drawer" />
          <Drawer.Items>
           
          </Drawer.Items>
        </Drawer>
    </div>
  );
}
