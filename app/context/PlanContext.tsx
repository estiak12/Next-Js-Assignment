"use client";
import React,{
  createContext,
  ReactNode,
  useState,
} from "react";

export type Exercise = {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
};

interface IPlanContext {
  todayPlan: Exercise[];
  setTodayPlan: React.Dispatch<
    React.SetStateAction<Exercise[]>
  >;

  savedExercises: Exercise[];
  setSavedExercises: React.Dispatch<
    React.SetStateAction<Exercise[]>
  >;
}

export const PlanContext = createContext<IPlanContext>({
  todayPlan: [],
  setTodayPlan: () => {},

  savedExercises: [],
  setSavedExercises: () => {},
});

const PlanProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [todayPlan, setTodayPlan] = useState<Exercise[]>([]);
  const [savedExercises, setSavedExercises] = useState<
    Exercise[]
  >([]);

  const sharedData = {
    todayPlan,
    setTodayPlan,
    savedExercises,
    setSavedExercises,
  };

  return (
    <PlanContext.Provider value={sharedData}>
      {children}
    </PlanContext.Provider>
  );
};

export default PlanProvider;