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
    (total, exercise) =>
      total + exercise.duration,
    0
  );

 
  const totalCalories = todayPlan.reduce(
    (total, exercise) =>
      total + exercise.caloriesBurned,
    0
  );

 
  const removeFromTodayPlan = (id: number) => {
    setTodayPlan(
      todayPlan.filter(
        (exercise) => exercise.id !== id
      )
    );
  };

  
  const removeFromSaved = (id: number) => {
    setSavedExercises(
      savedExercises.filter(
        (exercise) => exercise.id !== id
      )
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
    <main className="min-h-screen bg-[#0c0d0f] px-4 py-7 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1232px]">

      
        <div>
          <h1 className="text-2xl font-extrabold uppercase tracking-tight">
            My Plan
          </h1>

          <p className="mt-1 text-[11px] text-gray-500">
            Cap of five lifts for today. Finish them,
            then load more.
          </p>
        </div>

     
        <div className="mt-5 grid grid-cols-1 overflow-hidden rounded-xl border border-[#252930] bg-[#15181e] sm:grid-cols-3">

          <div className="px-4 py-5 sm:border-r sm:border-[#252930]">
            <p className="text-[9px] text-gray-500">
              Exercises
            </p>

            <p className="mt-1 text-2xl font-extrabold text-[#c8ff00]">
              {todayPlan.length}
            </p>
          </div>

          
          <div className="px-4 py-5 sm:border-r sm:border-[#252930]">
            <p className="text-[9px] text-gray-500">
              Minutes
            </p>

            <p className="mt-1 text-2xl font-extrabold text-white">
              {totalMinutes}
            </p>
          </div>

          
          <div className="px-4 py-5">
            <p className="text-[9px] text-gray-500">
              Calories
            </p>

            <p className="mt-1 text-2xl font-extrabold text-white">
              {totalCalories}
            </p>
          </div>

        </div>


        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex w-fit rounded-md border border-[#252930] bg-[#15181e] p-1">

            <button
              onClick={() => setActiveTab("today")}
              className={`rounded px-4 py-1.5 text-[9px] w-full ${
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

        
{exercises.length > 0 ? (
  <div className="mt-4 flex flex-col gap-3">

    {exercises.map((exercise) => (
      <article
        key={exercise.id}
        className="flex min-h-[82px] w-full items-center gap-4 rounded-xl border border-[#272a2f] bg-[#15171b] px-3 py-2.5"
      >

       
        <Link
          href={`/Exercises/${exercise.id}`}
          className="shrink-0"
        >
          <div className="relative h-[58px] w-[102px] overflow-hidden rounded-lg">
            <Image
              src={exercise.image}
              alt={exercise.name}
              fill
              sizes="102px"
              className="object-cover transition duration-300 hover:scale-105"
            />
          </div>
        </Link>

        <div className="min-w-0 flex-1">


          <Link href={`/Exercises/${exercise.id}`}>
            <h2 className="truncate text-[15px] font-extrabold uppercase leading-tight hover:text-[#c8ff00]">
              {exercise.name}
            </h2>
          </Link>

          <p className="mt-1 text-[12px] text-gray-500">
            {exercise.equipment}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-gray-400">

            <span>
              ◷ {exercise.duration} min
            </span>

            <span>
              🔥 {exercise.caloriesBurned} kcal
            </span>

            <span>
              ★ {exercise.rating}
            </span>

          </div>

        </div>

        
        <div className="hidden shrink-0 items-center gap-2 sm:flex">

          
          <Link
            href={`/Exercises/${exercise.id}`}
            className="rounded-full border border-[#30343b] px-4 py-2 text-[10px] font-medium text-gray-300 transition hover:border-gray-500 hover:text-white"
          >
            View Details
          </Link>

         
          <button
            className="rounded-full bg-[#c8ff00] px-4 py-2 text-[10px] font-bold text-black transition hover:bg-[#b7ed00]"
          >
            ✓ Mark as Done
          </button>

        </div>

        <Link
          href={`/Exercises/${exercise.id}`}
          className="shrink-0 rounded-full border border-[#30343b] px-3 py-1.5 text-[10px] text-gray-300 sm:hidden"
        >
          View
        </Link>

        <button
          onClick={() => handleRemove(exercise)}
          className="shrink-0 px-1 text-[17px] font-light text-gray-500 transition hover:text-red-400"
          aria-label={`Remove ${exercise.name}`}
        >
          ×
        </button>

      </article>
    ))}

  </div>
) : (

  <div className="mt-4 flex min-h-[205px] flex-col items-center justify-center rounded-lg border border-dashed border-[#252930] bg-[#0d0f12] px-5 text-center">

    <h2 className="text-sm font-extrabold uppercase">
      Nothing Here Yet
    </h2>

    <p className="mt-1 text-[10px] text-gray-500">
      {activeTab === "today"
        ? "Browse the library and add a lift to get today moving."
        : "Save an exercise for later and it will appear here."}
    </p>

    <Link
      href="/"
      className="mt-4 rounded-full bg-[#c8ff00] px-5 py-2 text-[10px] font-bold text-black transition hover:bg-[#b7ed00]"
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