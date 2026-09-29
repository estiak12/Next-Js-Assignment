
"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

import {
  PlanContext,
  type Exercise,
} from "../context/PlanContext";

const MyPlan = () => {
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const {
    todayPlan,
    setTodayPlan,
    savedExercises,
    setSavedExercises,
  } = useContext(PlanContext);

  const exercises =
    activeTab === "today"
      ? todayPlan
      : savedExercises;

  const totalMinutes = todayPlan.reduce(
    (total, exercise) => total + exercise.duration,
    0
  );

  const totalCalories = todayPlan.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0
  );

  const removeFromTodayPlan = (id: number) => {
    setTodayPlan(
      todayPlan.filter((exercise) => exercise.id !== id)
    );
  };

  const removeFromSaved = (id: number) => {
    setSavedExercises(
      savedExercises.filter((exercise) => exercise.id !== id)
    );
  };

  const handleRemove = (exercise: Exercise) => {
    if (activeTab === "today") {
      removeFromTodayPlan(exercise.id);
    } else {
      removeFromSaved(exercise.id);
    }
  };

  return (
    <main
      className="
        min-h-screen
        bg-[#0c0d0f]
        px-4
        py-7
        text-white

        sm:px-6
        sm:py-9

        lg:px-8
        lg:py-10
      "
    >
      <div className="mx-auto max-w-[1232px]">

        {/* HEADER */}
        <div>
          <h1
            className="
              text-2xl
              font-extrabold
              uppercase
              tracking-tight

              sm:text-3xl
            "
          >
            My Plan
          </h1>

          <p className="mt-1 text-[10px] leading-5 text-gray-500 sm:text-[11px]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* SUMMARY */}
        <div
          className="
            mt-5
            grid
            grid-cols-3
            overflow-hidden
            rounded-xl
            border
            border-[#252930]
            bg-[#15181e]
          "
        >
          {/* EXERCISES */}
          <div className="px-3 py-4 sm:px-4 sm:py-5">
            <p className="text-[8px] text-gray-500 sm:text-[9px]">
              Exercises
            </p>

            <p className="mt-1 text-xl font-extrabold text-[#c8ff00] sm:text-2xl">
              {todayPlan.length}
            </p>
          </div>

          {/* MINUTES */}
          <div className="border-l border-[#252930] px-3 py-4 sm:border-l-0 sm:border-r sm:px-4 sm:py-5">
            <p className="text-[8px] text-gray-500 sm:text-[9px]">
              Minutes
            </p>

            <p className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
              {totalMinutes}
            </p>
          </div>

          {/* CALORIES */}
          <div className="border-l border-[#252930] px-3 py-4 sm:px-4 sm:py-5">
            <p className="text-[8px] text-gray-500 sm:text-[9px]">
              Calories
            </p>

            <p className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
              {totalCalories}
            </p>
          </div>
        </div>

        {/* TABS */}
        <div className="mt-5 flex">
          <div className="flex w-full max-w-[280px] rounded-md border border-[#252930] bg-[#15181e] p-1">
            <button
              onClick={() => setActiveTab("today")}
              className={`
                flex-1
                rounded
                px-3
                py-2
                text-[9px]
                transition

                sm:px-4
              ${
                activeTab === "today"
                  ? "bg-[#252a31] font-semibold text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Today's Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`
                flex-1
                rounded
                px-3
                py-2
                text-[9px]
                transition

                sm:px-5
              ${
                activeTab === "saved"
                  ? "bg-[#252a31] font-semibold text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>
        </div>

        {exercises.length > 0 ? (
          <div className="mt-4 flex flex-col gap-3 pb-10">

            {exercises.map((exercise) => (
              <article
                key={exercise.id}
                className="
                  flex
                  min-h-[82px]
                  w-full
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-[#272a2f]
                  bg-[#15171b]
                  px-2.5
                  py-2.5

                  sm:gap-4
                  sm:px-3
                "
              >
                <Link
                  href={`/Exercises/${exercise.id}`}
                  className="shrink-0"
                >
                  <div
                    className="
                      relative
                      h-[54px]
                      w-[78px]
                      overflow-hidden
                      rounded-lg

                      sm:h-[58px]
                      sm:w-[102px]
                    "
                  >
                    <Image
                      src={exercise.image}
                      alt={exercise.name}
                      fill
                      sizes="(max-width: 640px) 78px, 102px"
                      className="object-cover transition duration-300 hover:scale-105"
                    />
                  </div>
                </Link>

                {/* CONTENT */}
                <div className="min-w-0 flex-1">

                  <Link href={`/Exercises/${exercise.id}`}>
                    <h2
                      className="
                        truncate
                        text-[12px]
                        font-extrabold
                        uppercase
                        leading-tight
                        hover:text-[#c8ff00]

                        sm:text-[15px]
                      "
                    >
                      {exercise.name}
                    </h2>
                  </Link>

                  <p className="mt-1 truncate text-[10px] text-gray-500 sm:text-[12px]">
                    {exercise.equipment}
                  </p>

                  <div
                    className="
                      mt-1.5
                      flex
                      flex-wrap
                      items-center
                      gap-x-2
                      gap-y-1
                      text-[9px]
                      text-gray-400

                      sm:mt-2
                      sm:gap-x-4
                      sm:text-[11px]
                    "
                  >
                    <span className="whitespace-nowrap">
                      ◷ {exercise.duration} min
                    </span>

                    <span className="whitespace-nowrap">
                      🔥 {exercise.caloriesBurned} kcal
                    </span>

                    <span className="whitespace-nowrap">
                      ★ {exercise.rating}
                    </span>
                  </div>
                </div>

                {/* DESKTOP BUTTONS */}
                <div className="hidden shrink-0 items-center gap-2 sm:flex">

                  <Link
                    href={`/Exercises/${exercise.id}`}
                    className="
                      rounded-full
                      border
                      border-[#30343b]
                      px-3
                      py-2
                      text-[10px]
                      font-medium
                      text-gray-300
                      transition
                      hover:border-gray-500
                      hover:text-white

                      lg:px-4
                    "
                  >
                    View Details
                  </Link>

                  <button
                    className="
                      rounded-full
                      bg-[#c8ff00]
                      px-3
                      py-2
                      text-[10px]
                      font-bold
                      text-black
                      transition
                      hover:bg-[#b7ed00]

                      lg:px-4
                    "
                  >
                    ✓ Mark as Done
                  </button>
                </div>

                <Link
                  href={`/Exercises/${exercise.id}`}
                  className="
                    shrink-0
                    rounded-full
                    border
                    border-[#30343b]
                    px-2.5
                    py-1.5
                    text-[9px]
                    text-gray-300
                    transition
                    hover:text-white

                    sm:hidden
                  "
                >
                  View
                </Link>

                <button
                  onClick={() => handleRemove(exercise)}
                  className="
                    shrink-0
                    px-1
                    text-[17px]
                    font-light
                    text-gray-500
                    transition
                    hover:text-red-400
                  "
                  aria-label={`Remove ${exercise.name}`}
                >
                  ×
                </button>
              </article>
            ))}

          </div>
        ) : (

          <div
            className="
              mt-4
              flex
              min-h-[205px]
              flex-col
              items-center
              justify-center
              rounded-lg
              border
              border-dashed
              border-[#252930]
              bg-[#0d0f12]
              px-5
              text-center
            "
          >
            <h2 className="text-sm font-extrabold uppercase">
              Nothing Here Yet
            </h2>

            <p className="mt-1 max-w-[400px] text-[10px] leading-5 text-gray-500">
              {activeTab === "today"
                ? "Browse the library and add a lift to get today moving."
                : "Save an exercise for later and it will appear here."}
            </p>

            <Link
              href="/"
              className="
                mt-4
                rounded-full
                bg-[#c8ff00]
                px-5
                py-2
                text-[10px]
                font-bold
                text-black
                transition
                hover:bg-[#b7ed00]
              "
            >
              Go to workouts
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlan;
