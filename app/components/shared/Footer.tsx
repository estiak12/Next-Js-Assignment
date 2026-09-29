import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-[#1d2024] bg-[#090b0d]">
      <div
        className="
          mx-auto
          flex
          min-h-[120px]
          max-w-[1232px]
          flex-col
          items-center
          justify-center
          gap-4
          px-4
          py-6
          text-center

          sm:min-h-[94px]
          sm:flex-row
          sm:justify-between
          sm:gap-6
          sm:px-6
          sm:py-0
          sm:text-left
        "
      >
        <div className="flex shrink-0 items-center gap-2">
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

        <p className="text-xs leading-5 text-gray-600 sm:text-[13px] lg:text-[15px]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

