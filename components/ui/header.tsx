import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Avatar1 from "@/public/images/Avatar1.png";
import toanhh from "../../public/images/LogoFVS.svg";
import Image from "next/image";
export default function Header() {
  return (
    <header
      className="absolute w-full z-30 bg-gray-200 "
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "6.4rem",
      }}
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 mt-1">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="flex items-center">
            <div className="d-flex justify-content-start justify-content-center">
              <Image
                className="d-flex justify-content-start max-w-full mx-auto mt-6  md:max-w-none h-auto"
                src={toanhh}
                width={250}
                height={300}
                alt="Features 01"
              />
            </div>
            <h2
              className="h2 mb-2 block text-black text-3xl md:text-1  xl lg:text-3xl xl:text-1xl mt-4"
              data-aos="fade-up"
            >
              Voting System
            </h2>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="#section-1"
                  className="btn-sm text-white bg-green-100 hover:bg-green-900 ml-3 rounded-full"
                >
                  Chiến dịch
                </Link>
              </li>
              <li>
                <Link
                  href="#section-2"
                  className="btn-sm text-white bg-green-100 hover:bg-green-900 ml-3 rounded-full"
                >
                  Giải pháp
                </Link>
              </li>
              <li>
                <Link
                  href="#section-3"
                  className="btn-sm text-white bg-green-100 hover:bg-green-900 ml-3 rounded-full"
                >
                  Tính năng
                </Link>
              </li>
              <li>
                <Link
                  href="#section-4"
                  className="btn-sm text-white bg-green-100 hover:bg-green-900 ml-3 rounded-full"
                >
                  Hỗ Trợ
                </Link>
              </li>
              <li>
                <Link
                  href="http://voting_system.surge.sh/authentication/sign-in"
                  className="btn-sm text-white bg-green-100 hover:bg-green-900 ml-3 rounded-full"
                >
                  Đăng nhập
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
