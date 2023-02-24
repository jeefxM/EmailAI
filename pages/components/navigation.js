import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="sticky flex justify-center gap-10 p-5 text-[#f3f4f8] font-Manrope">
      <div>
        <Link href="/" className=" hover:text-blue-500">
          Home
        </Link>
      </div>
      <div>
        <Link href="/LinkedinEmail" className=" hover:text-blue-500">
          Email
        </Link>
      </div>
      <div className="flex">
        <Link href="/LinkedinPost" className=" hover:text-blue-500">
          Post
        </Link>
      </div>

      <div>
        <Link href="/JobReview" className=" hover:text-blue-500">
          Job Review
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
