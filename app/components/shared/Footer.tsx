import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-[#1d2024] bg-[#090b0d]">
      <div className="mx-auto flex min-h-[94px] max-w-[1232px] items-center justify-between px-6">

        <div className="flex items-center gap-2">
           <Image
                    src="/logo.png"
                    alt="FITLOG Logo"
                    width={28}
                    height={28}
                    className="object-contain"
                   />
          

          <span className="text-sm font-extrabold tracking-wide text-white">
            FITLOG
          </span>
        </div>

        <p className="text-[15] text-gray-600">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;