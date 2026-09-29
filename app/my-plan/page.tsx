"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { X, Clock, Flame, Dumbbell, Star } from "lucide-react";
import { toast } from "react-toastify";

import {
  PlanContext,
  Exercise,
} from "../context/PlanContext";

const MyPlan = () => {
  const {
    todayPlan,
    setTodayPlan,
    savedExercises,
    setSavedExercises,
  } = useContext(PlanContext);

  const searchParams = useSearchParams();

  const [activeTab, setActiveTab] = useState<
    "today" | "saved"
  >("today");

  
  useEffect(() => {
    const tab = searchParams.get("tab");

    if (tab === "saved") {
      setActiveTab("saved");
    } else {
      setActiveTab("today");
    }
  }, [searchParams]);

 
  const currentExercises =
    activeTab === "today"
      ? todayPlan
      : savedExercises;

  

  const totalExercises = currentExercises.length;

  const totalMinutes = currentExercises.reduce(
    (total, exercise) =>
      total + Number(exercise.duration),
    0
  );

  const totalCalories = currentExercises.reduce(
    (total, exercise) =>
      total + Number(exercise.caloriesBurned),
    0
  );


  const handleTabChange = (
    tab: "today" | "saved"
  ) => {
    setActiveTab(tab);
  };



  const removeFromTodayPlan = (id: number) => {
    setTodayPlan((prev) =>
      prev.filter((exercise) => exercise.id !== id)
    );
  };


  const removeFromSaved = (id: number) => {
    setSavedExercises((prev) =>
      prev.filter((exercise) => exercise.id !== id)
    );
  };

 
  const handleRemove = (exercise: Exercise) => {
    if (activeTab === "today") {
      removeFromTodayPlan(exercise.id);

      toast.success(
        `${exercise.name} removed from today's plan`
      );
    } else {
      removeFromSaved(exercise.id);

      toast.success(
        `${exercise.name} removed from saved`
      );
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">


        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            My Plan
          </h1>

          <p className="mt-2 text-slate-400">
            Manage your workout plan and saved exercises.
          </p>
        </div>


        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

      

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                <Dumbbell className="h-6 w-6 text-blue-400" />
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Exercises
                </p>

                <p className="text-2xl font-bold text-white">
                  {totalExercises}
                </p>
              </div>

            </div>
          </div>


          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">
                <Clock className="h-6 w-6 text-green-400" />
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Minutes
                </p>

                <p className="text-2xl font-bold text-white">
                  {totalMinutes}
                </p>
              </div>

            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10">
                <Flame className="h-6 w-6 text-orange-400" />
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Calories
                </p>

                <p className="text-2xl font-bold text-white">
                  {totalCalories}
                </p>
              </div>

            </div>
          </div>

        </div>

   
        <div className="mb-8 flex w-full rounded-xl border border-slate-800 bg-slate-900 p-1">

          <button
            onClick={() => handleTabChange("today")}
            className={`flex-1 rounded-lg px-4 py-3 text-sm font-semibold transition-all ${
              activeTab === "today"
                ? "bg-blue-600 text-white"
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => handleTabChange("saved")}
            className={`flex-1 rounded-lg px-4 py-3 text-sm font-semibold transition-all ${
              activeTab === "saved"
                ? "bg-blue-600 text-white"
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
            }`}
          >
            Saved
          </button>

        </div>


        {currentExercises.length === 0 ? (

          <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900 px-6 py-16 text-center">

            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-800">
              <Dumbbell className="h-8 w-8 text-slate-500" />
            </div>

            <h2 className="text-xl font-semibold text-white">
              {activeTab === "today"
                ? "Your plan is empty"
                : "No saved exercises"}
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
              {activeTab === "today"
                ? "Add some exercises to your today's plan to start your workout."
                : "Save exercises that you want to do later."}
            </p>

            <Link
              href="/Exercises"
              className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Browse Exercises
            </Link>

          </div>

        ) : (


          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            {currentExercises.map((exercise) => (

              <div
                key={exercise.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all hover:border-slate-700"
              >


                <button
                  onClick={() => handleRemove(exercise)}
                  aria-label={`Remove ${exercise.name}`}
                  className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/80 text-slate-400 backdrop-blur transition hover:bg-red-500 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="flex flex-col sm:flex-row">


                  <div className="relative h-52 w-full shrink-0 overflow-hidden sm:h-auto sm:w-48">

                    <Image
                      src={exercise.image}
                      alt={exercise.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                  </div>


                  <div className="flex flex-1 flex-col p-5">

                    <div className="pr-8">

                      <h2 className="text-lg font-bold text-white">
                        {exercise.name}
                      </h2>

                      <p className="mt-1 text-sm text-slate-400">
                        {exercise.equipment}
                      </p>

                    </div>


                    <div className="mt-4 grid grid-cols-2 gap-3">

                      <div className="flex items-center gap-2 text-sm text-slate-300">

                        <Clock className="h-4 w-4 text-blue-400" />

                        <span>
                          {exercise.duration} min
                        </span>

                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-300">

                        <Flame className="h-4 w-4 text-orange-400" />

                        <span>
                          {exercise.caloriesBurned} kcal
                        </span>

                      </div>

                    </div>


                    <div className="mt-3 flex items-center gap-2">

                      <div className="flex items-center gap-1">

                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                        <span className="text-sm font-medium text-white">
                          {exercise.rating}
                        </span>

                      </div>

                      <span className="text-sm text-slate-500">
                        •
                      </span>

                      <span className="text-sm text-slate-400">
                        {exercise.difficulty}
                      </span>

                    </div>

                    

                    <div className="mt-5 flex items-center gap-3">

                      <Link
                        href={`/Exercises/${exercise.id}`}
                        className="flex-1 rounded-lg border border-slate-700 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
                      >
                        View Details
                      </Link>

                      {activeTab === "today" && (
                        <button
                          onClick={() =>
                            toast.success(
                              `${exercise.name} marked as done!`
                            )
                          }
                          className="hidden rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:block"
                        >
                          Mark as Done
                        </button>
                      )}

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>
    </main>
  );
};

export default MyPlan;