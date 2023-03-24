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
      </div>
      <div className="pt-[15px] w-full h-[55px] pb-3 px-2 md:px-5 flex space-between bg-tiga">
        <ul>
          <a href="#" className="flex-items-center">
            <Image
              src="/images/mtix.png"
              width={100}
              height={10}
              alt="Image"
              style={{ float: "right", margin: "0rem 4rem 1rem 1rem" }}
            />
          </a>
          <a href="#" className="flex-items-center">
            <Image
              src="/images/dolby.png"
              width={100}
              height={200}
              alt="Image"
              style={{ float: "right", margin: "0rem 4rem 1rem 1rem" }}
            />
          </a>
          <a href="#">
            <Image
              src="/images/imax.png"
              width={75}
              height={80}
              text-align="center"
              alt="Image"
              style={{ float: "right", margin: "0rem 5rem 1rem 1rem" }}
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
          marginLeft: "0px",
          display: "inline-block",
          padding: "6px",
          border: "2px",
        }}
      >
        <p>Jakarta</p>
      </div>
      <div className="full pt-[10px] pb-2 px-10 md:px-5">{children}</div>
      <div className="w-full bg-secondary h-[100px] pb-[48px] md:pb-0 px-2 md:px-5">
        Footer
      </div>
    </>
  );
};

export default ExampleLayout;
