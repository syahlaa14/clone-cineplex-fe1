import Link from "next/link";

const ExampleLayout = ({ children }: any) => {
  return (
    <>
      <div className="fixed z-50 w-full bg-white h-[64px] p-5 border border-b">
        Header
      </div>
      <div className="pt-[88px] pb-4 px-2 md:px-5">{children}</div>
      <div className="w-full bg-gray-50 h-[100px] pb-[48px] md:pb-0 px-2 md:px-5">
        Footer
      </div>
      <div className="fixed bottom-0 z-50 w-full bg-white h-[70px] p-2 border border-t md:hidden">
        <div className="flex justify-evenly">
          <Link href="/">Home</Link>
          <Link href="/page2">Page 2</Link>
        </div>
      </div>
    </>
  );
};

export default ExampleLayout;
