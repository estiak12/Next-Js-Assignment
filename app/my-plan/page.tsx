"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

import {
  PlanContext,
  type Exercise,
} from "../context/PlanContext";

const MyPlan = () => {
  const [activeTab, setActiveTab] = useState<
    "today" | "saved"
  >("today");

  // Get data from PlanContext
  const {
    todayPlan,
    setTodayPlan,
    savedExercises,
    setSavedExercises,
  } = useContext(PlanContext);

  // Decide which exercises to show
  const exercises =
    activeTab === "today"
      ? todayPlan
      : savedExercises;

  // Calculate total minutes
  const totalMinutes = todayPlan.reduce(
    (total, exercise) =>
      total + exercise.duration,
    0
  );

  // Calculate total calories
  const totalCalories = todayPlan.reduce(
    (total, exercise) =>
      total + exercise.caloriesBurned,
    0
  );

  // Remove exercise from today's plan
  const removeFromTodayPlan = (id: number) => {
    setTodayPlan(
      todayPlan.filter(
        (exercise) => exercise.id !== id
      )
    );
  };

  // Remove exercise from saved exercises
  const removeFromSaved = (id: number) => {
    setSavedExercises(
      savedExercises.filter(
        (exercise) => exercise.id !== id
      )
    );
  };

  // Handle remove button
  const handleRemove = (exercise: Exercise) => {
    if (activeTab === "today") {
      removeFromTodayPlan(exercise.id);
    } else {
      removeFromSaved(exercise.id);
    }
  };

  return (
    <main className="min-h-screen bg-[#0c0d0f] px-4 py-7 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1232px]">

        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-extrabold uppercase tracking-tight">
            My Plan
          </h1>

          <p className="mt-1 text-[11px] text-gray-500">
            Cap of five lifts for today. Finish them,
            then load more.
          </p>
        </div>

        {/* STATS */}
        <div className="mt-5 grid grid-cols-1 overflow-hidden rounded-xl border border-[#252930] bg-[#15181e] sm:grid-cols-3">

          {/* EXERCISES */}
          <div className="px-4 py-5 sm:border-r sm:border-[#252930]">
            <p className="text-[9px] text-gray-500">
              Exercises
            </p>

            <p className="mt-1 text-2xl font-extrabold text-[#c8ff00]">
              {todayPlan.length}
            </p>
          </div>

          {/* MINUTES */}
          <div className="px-4 py-5 sm:border-r sm:border-[#252930]">
            <p className="text-[9px] text-gray-500">
              Minutes
            </p>

            <p className="mt-1 text-2xl font-extrabold text-white">
              {totalMinutes}
            </p>
          </div>

          {/* CALORIES */}
          <div className="px-4 py-5">
            <p className="text-[9px] text-gray-500">
              Calories
            </p>

            <p className="mt-1 text-2xl font-extrabold text-white">
              {totalCalories}
            </p>
          </div>

        </div>

        {/* TAB BAR */}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex w-fit rounded-md border border-[#252930] bg-[#15181e] p-1">

            {/* TODAY TAB */}
            <button
              onClick={() => setActiveTab("today")}
              className={`rounded px-4 py-1.5 text-[9px] ${
                activeTab === "today"
                  ? "bg-[#252a31] font-semibold text-white"
                  : "text-gray-500"
              }`}
            >
              Today's Plan
            </button>

            {/* SAVED TAB */}
            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded px-5 py-1.5 text-[9px] ${
                activeTab === "saved"
                  ? "bg-[#252a31] font-semibold text-white"
                  : "text-gray-500"
              }`}
            >
              Saved
            </button>

          </div>

        </div>

        {/* EXERCISE CARDS */}
        {exercises.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {exercises.map((exercise) => (
              <article
                key={exercise.id}
                className="overflow-hidden rounded-lg border border-[#272a2f] bg-[#15171b]"
              >

                {/* IMAGE */}
                <Link href={`/Exercises/${exercise.id}`}>
                  <div className="relative h-[190px] w-full overflow-hidden">

                    <Image
                      src={exercise.image}
                      alt={exercise.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-300 hover:scale-105"
                    />

                  </div>
                </Link>

                {/* CONTENT */}
                <div className="px-5 py-5">

                  {/* TAGS */}
                  <div className="mb-3 flex flex-wrap gap-2">

                    {exercise.muscleGroups.map(
                      (muscle) => (
                        <span
                          key={muscle}
                          className="rounded bg-[#c8ff00] px-2.5 py-1 text-[10px] font-bold uppercase text-black"
                        >
                          {muscle}
                        </span>
                      )
                    )}

                    <span className="rounded bg-[#c8ff00] px-2.5 py-1 text-[10px] font-bold uppercase text-black">
                      {exercise.difficulty}
                    </span>

                  </div>

                  {/* NAME */}
                  <Link href={`/Exercises/${exercise.id}`}>
                    <h2 className="text-[16px] font-extrabold uppercase leading-tight hover:text-[#c8ff00]">
                      {exercise.name}
                    </h2>
                  </Link>

                  {/* EQUIPMENT */}
                  <p className="mt-1.5 text-[12px] text-gray-500">
                    {exercise.equipment}
                  </p>

                  {/* STATS */}
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-gray-400">

                    <span>
                      ◷ {exercise.duration} min
                    </span>

                    <span>
                      🔥 {exercise.caloriesBurned} kcal
                    </span>

                    <span>
                      ▣ {exercise.sets} sets
                    </span>

                    <span>
                      ★ {exercise.rating}
                    </span>

                  </div>

                  {/* REMOVE */}
                  <button
                    onClick={() =>
                      handleRemove(exercise)
                    }
                    className="mt-5 text-[10px] font-medium text-red-400 hover:text-red-300"
                  >
                    Remove
                  </button>

                </div>
              </article>
            ))}

          </div>
        ) : (

          /* EMPTY STATE */
          <div className="mt-4 flex min-h-[205px] flex-col items-center justify-center rounded-lg border border-dashed border-[#252930] bg-[#0d0f12] px-5 text-center">

            <h2 className="text-sm font-extrabold uppercase">
              Nothing Here Yet
            </h2>

            <p className="mt-1 text-[9px] text-gray-500">
              {activeTab === "today"
                ? "Browse the library and add a lift to get today moving."
                : "Save an exercise for later and it will appear here."}
            </p>

            <Link
              href="/"
              className="mt-4 rounded-full bg-[#c8ff00] px-5 py-2 text-[9px] font-bold text-black transition hover:bg-[#b7ed00]"
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