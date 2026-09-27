import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="h-[68px] w-full border-b border-zinc-800 bg-[#0b0c0e]">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-8">

        <Link href="/" className="flex items-center gap-2">
          <Image
          src="/logo.png"
          alt="FITLOG Logo"
          width={28}
          height={28}
          className="object-contain"
         />

          <span className="text-[15px] font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href="/workouts"
            className="rounded-full bg-[#17240b] px-4 py-1.5 text-[15px] font-semibold text-lime-400"
          >
            Workouts
          </Link>

          <Link
            href="/plan"
            className="px-4 py-1.5 text-[14px] font-medium text-zinc-400 transition hover:text-white"
          >
            My Plan
          </Link>
        </div>

        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2 text-zinc-300">
            <span className="text-[12px]">Plan</span>

            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-lime-400 text-[9px] font-bold text-black">
              0
            </span>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <span className="text-[12px]">Saved</span>

            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-zinc-700 text-[9px] text-zinc-400">
              0
            </span>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;