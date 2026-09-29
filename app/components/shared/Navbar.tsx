"use client";

import Link from "next/link";
import Image from "next/image";
import { Suspense, useContext } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { PlanContext } from "../../context/PlanContext";

const NavbarContent = () => {
  const { todayPlan, savedExercises } = useContext(PlanContext);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  // =========================
  // CURRENT TAB
  // =========================

  const currentTab = searchParams.get("tab");

  // =========================
  // ACTIVE NAV ITEMS
  // =========================

  const isWorkoutPage =
    pathname === "/" || pathname.startsWith("/Exercises");

  const isMyPlanPage = pathname === "/my-plan";

  const isTodayPlanActive =
    isMyPlanPage && (currentTab === "today" || currentTab === null);

  const isSavedActive = isMyPlanPage && currentTab === "saved";

  return (
    <nav className="w-full border-b border-zinc-800 bg-[#0b0c0e]">
      <div className="mx-auto flex min-h-[68px] max-w-[1200px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
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

        {/* MAIN NAVIGATION */}
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
            href="/my-plan?tab=today"
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

        {/* PLAN + SAVED */}
        <div className="flex shrink-0 items-center gap-3 text-xs sm:gap-6">
          {/* TODAY'S PLAN */}
          <Link
            href="/my-plan?tab=today"
            className={`
              flex items-center gap-1.5 transition sm:gap-2
              ${
                isTodayPlanActive
                  ? "text-lime-400"
                  : "text-zinc-300 hover:text-white"
              }
            `}
          >
            <span className="hidden text-[12px] sm:inline">Plan</span>
            <span className="text-[11px] sm:hidden">P</span>

            <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-lime-400 px-1 text-[9px] font-bold text-black">
              {todayPlan.length}
            </span>
          </Link>

          {/* SAVED */}
          <Link
            href="/my-plan?tab=saved"
            className={`
              flex items-center gap-1.5 transition sm:gap-2
              ${
                isSavedActive
                  ? "text-lime-400"
                  : "text-zinc-400 hover:text-white"
              }
            `}
          >
            <span className="hidden text-[12px] sm:inline">Saved</span>
            <span className="text-[11px] sm:hidden">S</span>

            <span
              className={`
                flex h-4 min-w-4 items-center justify-center rounded-full border px-1 text-[9px]
                ${
                  isSavedActive
                    ? "border-lime-400 text-lime-400"
                    : "border-zinc-700 text-zinc-400"
                }
              `}
            >
              {savedExercises.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Navbar = () => {
  return (
    <Suspense
      fallback={
        <nav className="min-h-[68px] w-full border-b border-zinc-800 bg-[#0b0c0e]" />
      }
    >
      <NavbarContent />
    </Suspense>
  );
};

export default Navbar;