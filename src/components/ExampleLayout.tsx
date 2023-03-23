import Link from "next/link";
import Image from "next/image";

const ExampleLayout = ({ children }: any) => {
  return (
    <>
      <div className="fixed z-50 w-full bg-secondary h-[85px] p-5 border border-b">
        <Image src="/images/logo.png" alt="logo" width={200} height={100} />
      </div>
      <div className="pt-[98px] pb-4 px-2 md:px-5 bg-tiga">
        <ul>
          <a href="#" className="p-3 text-green-500">
            Now Playing
          </a>
          <a href="#" className="p-3 text-green-500">
            Upcoming
          </a>
          <a href="#" className="p-3 text-green-500">
            Theaters
          </a>
          <a href="#" className="p-3 text-green-500">
            Promotions
          </a>
          <a href="#" className="p-3 text-green-500">
            Info 21
          </a>
        </ul>
      </div>
      <div className="full pt-[13px] pb-4 px-2 md:px-5">{children}</div>
      <div className="w-full bg-secondary h-[100px] pb-[48px] md:pb-0 px-2 md:px-5">
        Footer
      </div>
    </>
  );
};

export default ExampleLayout;
