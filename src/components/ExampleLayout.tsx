import Link from "next/link";
import Image from "next/image";
import {} from "@fortawesome/react-fontawesome";

const ExampleLayout = ({ children }: any) => {
  return (
    <>
      <div className="flex z-67 w-full bg-secondary h-[85px] p-5 border border-b">
        <Image
          style={{ marginLeft: "50px" }}
          src="/images/logo.png"
          alt="logo"
          ml-90
          width={200}
          height={100}
        />
        <div className="w-2/3 absolute{90}">
          <input
            style={{
              float: "right",
              margin: "0.5rem 1rem 5rem 2rem",
            }}
            type="text"
            placeholder="Search teathers,movies..."
            className="bg-white rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-4 py-2 w-64"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-3 mr-4"
          ></button>
        </div>
      </div>
      <div className="pt-[15px] w-full h-[55px] pb-3 px-2 md:px-5 absolute{100} flex space-between bg-tiga">
        <ul>
          <a href="https://mtix.21cineplex.com/?mod=mtix">
            <Image
              src="/images/mtix.png"
              width={80}
              height={80}
              alt="Image"
              style={{ float: "right", margin: "0rem 0rem 2rem 2rem" }}
            />
          </a>
          <a
            href="https://21cineplex.com/dolby-atmos"
            className="flex-items-center"
          >
            <Image
              src="/images/dolby.png"
              width={125}
              height={200}
              alt="Image"
              style={{ float: "right", margin: "1rem 2rem 1rem 2rem" }}
            />
          </a>
          <a
            href="https://21cineplex.com/imax"
            className="position:absolute flex-items-center"
          >
            <Image
              src="/images/imax.png"
              width={75}
              height={80}
              text-align="center"
              alt="Image"
              style={{ float: "right", margin: "0rem 0rem 2rem 10rem" }}
            />
          </a>
          <a href="#" style={{ margin: "50px" }} className="p-3 text-green-700">
            Now Playing
          </a>
          <a href="#" className="p-3 text-green-700">
            Upcoming
          </a>
          <a href="#" className="p-3 text-green-700">
            Theaters
          </a>
          <a href="#" className="p-3 text-green-700">
            Promotions
          </a>
          <a href="#" className="p-3 text-green-700">
            Info 21
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
        className="md:px-5  bg-secondary text-gray-50"
        style={{
          margin: "50px 70px",
          display: "inline-block",
          padding: "6px",
          border: "2px",
        }}
      >
        <p>Now Playing</p>
      </div>
      <div
        className="md:px-5 bg-gray-300 text-green-500"
        style={{
          display: "inline-block",
          padding: "6px",
          border: "2px",
        }}
      >
        <div className="select-twenty ">
          <select className="custom-select bg-gray-300" id="city-change">
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
      <div className="w-full bg-secondary h-[100px] pb-[48px] md:pb-0 px-2 md:px-5">
        Footer
      </div>
    </>
  );
};

export default ExampleLayout;
