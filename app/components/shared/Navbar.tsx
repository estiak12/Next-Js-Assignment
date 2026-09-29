"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { usePathname } from "next/navigation";

import { PlanContext } from "../../context/PlanContext";

const Navbar = () => {
  const { todayPlan, savedExercises } = useContext(PlanContext);
  const pathname = usePathname();

  
  const isWorkoutPage =
    pathname === "/" || pathname.startsWith("/Exercises");

  const isMyPlanPage = pathname === "/my-plan";

  return (
    <nav className="w-full border-b border-zinc-800 bg-[#0b0c0e]">
      <div className="mx-auto flex min-h-[68px] max-w-[1200px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">

       
        <Link href="/" className="flex shrink-0 items-center gap-2">
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

        <div className="flex items-center gap-1 sm:gap-2">

         
          <Link
            href="/"
            className={`
              rounded-full px-3 py-1.5 text-xs font-semibold transition
              sm:px-4 sm:text-[15px]
              ${
                isWorkoutPage
                  ? "bg-[#17240b] text-lime-400"
                  : "text-zinc-400 hover:text-white"
              }
            `}
          >
            Workouts
          </Link>

         
          <Link
            href="/my-plan"
            className={`
              rounded-full px-3 py-1.5 text-xs font-medium transition
              sm:px-4 sm:text-[14px]
              ${
                isMyPlanPage
                  ? "bg-[#17240b] text-lime-400"
                  : "text-zinc-400 hover:text-white"
              }
            `}
          >
            My Plan
          </Link>
        </div>

     
        <div className="flex shrink-0 items-center gap-3 text-xs sm:gap-6">

         
          <Link
            href="/my-plan?tab=today"
            className="flex items-center gap-1.5 text-zinc-300 transition hover:text-white sm:gap-2"
          >
            <span className="hidden text-[12px] sm:inline">
              Plan
            </span>

            <span className="text-[11px] sm:hidden">
              P
            </span>

            <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-lime-400 px-1 text-[9px] font-bold text-black">
              {todayPlan.length}
            </span>
          </Link>

          
          <Link
            href="/my-plan?tab=saved"
            className="flex items-center gap-1.5 text-zinc-400 transition hover:text-white sm:gap-2"
          >
            <span className="hidden text-[12px] sm:inline">
              Saved
            </span>

            <span className="text-[11px] sm:hidden">
              S
            </span>

            <span className="flex h-4 min-w-4 items-center justify-center rounded-full border border-zinc-700 px-1 text-[9px] text-zinc-400">
              {savedExercises.length}
            </span>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
