import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="w-full bg-[#0b0c0e] px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
      <div
        className="
          mx-auto
          flex
          max-w-[1200px]
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-zinc-800
          bg-[#15171c]

          lg:min-h-[400px]
          lg:flex-row
          lg:items-center
        "
      >
        <div
          className="
            w-full
            px-6
            py-10

            sm:px-10
            sm:py-12

            lg:w-1/2
            lg:px-12
            lg:py-12
          "
        >
          <p className="mb-4 text-[11px] font-bold tracking-[0.12em] text-lime-400 sm:mb-5 sm:text-xs">
            WORKOUT LIBRARY
          </p>

          <h1
            className="
              max-w-[570px]
              text-3xl
              font-black
              uppercase
              leading-[0.95]
              tracking-tight
              text-white

              sm:text-4xl
            "
          >
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p
            className="
              mt-5
              max-w-[500px]
              text-sm
              leading-6
              text-zinc-400

              sm:text-[15px]
            "
          >
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="/workouts"
            className="
              mt-6
              inline-flex
              rounded-md
              bg-lime-400
              px-5
              py-3
              text-xs
              font-bold
              uppercase
              tracking-wide
              text-black
              transition
              hover:bg-lime-300

              sm:mt-7
            "
          >
            Browse Workouts
          </Link>
        </div>

        <div
          className="
            relative
            flex
            min-h-[280px]
            w-full
            items-center
            justify-center
            px-6
            pb-8

            sm:min-h-[340px]
            sm:pb-10

            lg:h-[400px]
            lg:w-1/2
            lg:px-0
            lg:pb-0
          "
        >
          <Image
            src="/banner.png"
            alt="Workout illustration"
            width={500}
            height={500}
            priority
            className="
              h-auto
              w-[260px]
              object-contain

              sm:w-[330px]

              md:w-[380px]

              lg:h-[360px]
              lg:w-auto
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

