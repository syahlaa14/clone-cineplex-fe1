import Link from "next/link";
import Image from "next/image";
import {} from "@fortawesome/react-fontawesome";

const ExampleLayout = ({ children }: any) => {
  return (
    <>
      <div className="flex z-67 w-full bg-gray-50 h-[85px] p-5 border border-b">
        <Image
          style={{ marginLeft: "500px" }}
          src="/images/putih.png"
          alt="logo"
          ml-90
          width={250}
          height={150}
        />
      </div>
      <div className="flex z-67 w-full bg-secondary h-[85px] p-5 border border-b">
        <Image
          style={{ marginLeft: "50px" }}
          src="/images/logo.png"
          alt="logo"
          ml-90
          width={200}
          height={100}
        />
        <div className="w-2/3 absolute{60}">
          <input
            style={{
              float: "right",
              margin: " 0.5rem -7rem 8rem 3rem",
            }}
            type="text"
            placeholder="Search teathers,movies..."
            className="z-40 bg-zinc-200 rounded-full border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent px-3 py-2 w-96 italic text-sm font-light"
          />
          <button
            type="submit"
            className="absolute right-1 top-2 mt-3 mr-4"
          ></button>
        </div>
      </div>
      <div className="z-40 w-full bg-gray-100 h-[65px] p-5 navbar font-semibold ">
        <ul>
          <a
            href="#"
            style={{ margin: "4rem 0rem 2rem 4rem" }}
            className="p-3 text-green-600 "
          >
            Now Playing
          </a>
          <a href="#" className="p-3 text-green-600">
            Upcoming
          </a>
          <a href="#" className="p-3 text-green-600">
            Theaters
          </a>
          <a href="#" className="p-3 text-green-600">
            Promotions
          </a>
          <a href="#" className="p-3 text-green-600">
            Info 21
          </a>
          <a href="https://21cineplex.com/imax">
            <Image
              src="/images/imax.png"
              height={18}
              width={80}
              alt=""
              style={{ margin: "-1.5rem 0rem 2rem 47rem" }}
            ></Image>
          </a>
          <a href="https://21cineplex.com/dolby-atmos">
            <Image
              src="/images/dolby.png"
              alt=""
              height={18}
              width={120}
              style={{ margin: "-4.7rem 0rem 2rem 56rem" }}
            ></Image>
          </a>
          <a href="https://mtix.21cineplex.com/?mod=mtix">
            <Image
              src="/images/mtix.png"
              alt=""
              height={18}
              width={82}
              style={{ margin: "-4.9rem 0rem 2rem 67.5rem" }}
            ></Image>
          </a>
        </ul>
      </div>
      <Image
        style={{ margin: "35px 100px" }}
        src="/images/iklan.png"
        alt="iklan"
        width={865}
        height={100}
      />
      <div
        style={{ margin: "550px 0rem -2.1rem 8.7rem" }}
        className="mt-20 ml-13 w-40 bg-teal-800 text-gray-200 text-center pb-1.5 pt-0.5 font-bold tracking-widest"
      >
        <p>Now Playing</p>
      </div>

      <div
        style={{ margin: "-21px 6rem 0rem 18.8rem" }}
        className="mt-45 ml-71 w-40 bg-gray-200 text-teal-600 text-center pb-1.5 pt-0.5 font-bold tracking-widest w-34 p-1"
      >
        <div className="select-twenty">
          <select className="custom-select bg-gray-300" id="city-change p-1">
            <option value="1">JAKARTA</option>
            <option value="2">AMBON</option>
            <option value="3">BALIKPAPAN</option>
            <option value="4">BANDUNG</option>
            <option value="5">BANJARMASIN</option>
            <option value="6">BATAM</option>
            <option value="7">BEKASI</option>
            <option value="8">BENGKULU</option>
            <option value="9">BOGOR</option>
            <option value="10">CIKARANG</option>
            <option value="11">CILEGON</option>
            <option value="12">CIREBON</option>
            <option value="13">CIREBON</option>
            <option value="14">DENPASAR</option>
            <option value="15">DEPOK</option>
            <option value="16">JAKARTA</option>
            <option value="17">PONTIANAK</option>
          </select>
        </div>
      </div>
      <div className="full pt-[10px] pb-2 px-10 md:px-5">{children}</div>
      <div className="w-full bg-secondary h-[140px] pb-[48px] md:pb-0 px-2 md:px-5">
        <ul>
          <a
            href="#"
            style={{ margin: "4rem 0rem 2rem 4rem" }}
            className="p-3 text-gray-200 "
          >
            Profile
          </a>
          <a href="#" className="p-3 text-gray-200">
            |
          </a>
          <a href="#" className="p-3 text-gray-200">
            Terms of Use
          </a>
          <a href="#" className="p-3 text-gray-200">
            |
          </a>
          <a href="#" className="p-3 text-gray-200">
            Advertising
          </a>
        </ul>
      </div>
    </>
  );
};

export default ExampleLayout;
