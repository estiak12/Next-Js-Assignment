"use client";

import React, { useContext } from "react";
import {
  PlanContext,
  Exercise,
} from "../../context/PlanContext";

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
      return;
    }

    if (todayPlan.length >= 5) {
      return;
    }

    setTodayPlan([...todayPlan, exercise]);
  };

  const saveForLater = () => {
    const alreadyExists = savedExercises.some(
      (item) => item.id === exercise.id
    );

    if (alreadyExists) {
      return;
    }

    setSavedExercises([
      ...savedExercises,
      exercise,
    ]);
  };

  return (
    <div className="mt-7 flex flex-wrap gap-3">

      <button
        onClick={addToTodayPlan}
        className="rounded-md bg-[#c8ff00] px-5 py-3 text-xs font-bold text-black transition hover:bg-[#b7ed00]"
      >
        Add to today's plan
      </button>

      <button
        onClick={saveForLater}
        className="rounded-md border border-[#363a40] px-5 py-3 text-xs font-medium text-gray-300 transition hover:bg-[#17191d]"
      >
        ♡ Save for later
      </button>

    </div>
  );
};

export default PlanButtons;