import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="w-full bg-[#0b0c0e] px-6 py-20">
      <div className="mx-auto flex min-h-[400px] max-w-[1200px] items-center overflow-hidden rounded-2xl border border-zinc-800 bg-[#15171c]">

        <div className="w-1/2 px-12 py-12">
          <p className="mb-5 text-xs font-bold tracking-[0.12em] text-lime-400">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-[570px] text-4xl font-black uppercase leading-[0.95] tracking-tight text-white">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="mt-5 max-w-[500px] text-[15px] leading-6 text-zinc-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="/workouts"
            className="mt-7 inline-flex rounded-md bg-lime-400 px-5 py-3 text-xs font-bold uppercase tracking-wide text-black transition hover:bg-lime-300"
          >
            Browse Workouts
          </Link>
        </div>

       
        <div className="relative flex h-[400px] w-1/2 items-center justify-center">
          <Image
            src="/banner.png"
            alt="Workout illustration"
            width={500}
            height={500}
            className="h-[360px] w-auto object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;