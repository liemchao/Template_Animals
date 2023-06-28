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
        flexGrow: 1,
        marginBottom: "1rem",
        marginTop: "1rem",
        borderRadius: "20px",
        height: "90px",
        marginLeft: "2%",
        width: "96%",
      }}
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 mt-1">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="flex items-center">
            <div className="shrink-0 mr-9 mt-1">
              <Link href="/" className="block" aria-label="Cruip">
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={toanhh}
                  width={200}
                  height={200}
                  alt="Features 01"
                />
              </Link>
            </div>
            <h2
              className="h2 mb-2 block text-black text-2xl md:text-3xl lg:text-3xl xl:text-5xl"
              data-aos="fade-up"
            >
              Hệ thống bình chọn
            </h2>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="http://fpt-voting.surge.sh/authentication/sign-in"
                  className="btn-sm text-black bg-purple-500 hover:bg-purple-700 ml-3 rounded-full"
                >
                  Chiến dịch
                </Link>
              </li>
              <li>
                <Link
                  href="http://fpt-voting.surge.sh/authentication/sign-in"
                  className="btn-sm text-black bg-purple-500 hover:bg-purple-700 ml-3 rounded-full"
                >
                  Tính năng
                </Link>
              </li>
              <li>
                <Link
                  href="http://fpt-voting.surge.sh/authentication/sign-in"
                  className="btn-sm text-black bg-purple-500 hover:bg-purple-700 ml-3 rounded-full"
                >
                  Hỗ Trợ
                </Link>
              </li>
              <li>
                <Link
                  href="http://fpt-voting.surge.sh/authentication/sign-in"
                  className="btn-sm text-black bg-purple-500 hover:bg-purple-700 ml-3 rounded-full"
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
