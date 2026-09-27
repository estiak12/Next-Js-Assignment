
"use client";

import React, { useContext } from "react";
import { PlanContext, Exercise } from "../../context/PlanContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PlanButtons = ({
  exercise,
}: {
  exercise: Exercise;
}) => {
  const {
    todayPlan,
    setTodayPlan,
    savedExercises,
    setSavedExercises,
  } = useContext(PlanContext);

  const addToTodayPlan = () => {
    const alreadyExists = todayPlan.some(
      (item) => item.id === exercise.id
    );

    if (alreadyExists) {
      toast.warning(
        "This exercise is already in today's plan!"
      );
      return;
    }

    
    if (todayPlan.length >= 5) {
      toast.warning(
        "Today's plan can contain maximum 5 exercises!"
      );
      return;
    }
    setTodayPlan([...todayPlan, exercise]);

    toast.success(
      "Exercise added to today's plan!"
    );
  };

 
  const saveForLater = () => {
    const alreadyExists = savedExercises.some(
      (item) => item.id === exercise.id
    );

   
    if (alreadyExists) {
      toast.warning(
        "This exercise is already saved!"
      );
      return;
    }

   
    setSavedExercises([
      ...savedExercises,
      exercise,
    ]);

    toast.success(
      "Exercise saved for later!"
    );
  };

  return (
    <>
      <div className="mt-7 flex flex-wrap gap-3">

      
        <button
          onClick={addToTodayPlan}
          className="
            rounded-lg
            bg-[#c8ff00]
            px-6 py-3
            text-sm font-bold text-black
            transition-all duration-300 ease-in-out
            hover:scale-105
            hover:bg-white
            hover:shadow-[0_0_20px_#c8ff00]
            active:scale-95
          "
        >
          + Add to today's plan
        </button>

      
        <button
          onClick={saveForLater}
          className="
            rounded-lg
            border-2 border-[#363a40]
            bg-[#111316]
            px-6 py-3
            text-sm font-semibold text-gray-300
            transition-all duration-300 ease-in-out
            hover:scale-105
            hover:border-[#c8ff00]
            hover:bg-[#c8ff00]
            hover:text-black
            hover:shadow-[0_0_20px_#c8ff00]
            active:scale-95
          "
        >
          ♡ Save for later
        </button>

      </div>

    
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default PlanButtons;
