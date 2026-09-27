import Image from "next/image";
import ExerciseCard from "./ExerciseCard";

interface Prop{
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
}



async function getExercises() {
  const response = await fetch('https://api.abcz.workers.dev/api/fitlog');

  if (!response.ok) {
    throw new Error("Failed to fetch exercises");
  }

  return response.json();
}

const  Exercise=async()=>{
  const exercises = await getExercises();

  return (
    <main className="min-h-screen bg-[#0c0d0f] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1232px]">

        <div className="mb-5">
          <h1 className="text-2xl font-extrabold tracking-tight">
            THE LIBRARY
          </h1>

          <p className="mt-1 text-[10px] text-gray-500">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-[100]">
          {exercises.map((exercise:Prop) => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
            />
          ))}
        </div>

      </div>
    </main>
  );
}

export default Exercise;