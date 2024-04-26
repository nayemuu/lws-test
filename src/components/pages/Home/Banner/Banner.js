import Link from 'next/link';

function Banner(props) {
  return (
    <header className="h-[500px] bg-center flex flex-col-reverse bg-cover w-full bg-[url('/header.webp')]">
      <div className="mb-5 w-10/12 max-w-7xl text-white mx-auto">
        <h1 className="text-2xl lg:text-3xl font-serif">
          Introducing LWS Shop Center
        </h1>
        <p>Your whole week at a glance</p>
        <Link href="/about">
          <button className="bg-[#ffd160] hover:bg-[#e4be60] border border-black w-60 mt-2 py-3 rounded-full text-center text-black">
            About Page
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Banner;
