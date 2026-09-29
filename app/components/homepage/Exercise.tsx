import ExerciseCard from "./ExerciseCard";
import { Exercise as ExerciseType } from "@/app/type";

async function getExercises(): Promise<ExerciseType[]> {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch exercises");
  }

  return response.json();
}

const Exercise = async () => {
  const exercises = await getExercises();

  return (
    <main className="min-h-screen bg-[#0c0d0f] px-4 py-8 text-white sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1232px]">

        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            THE LIBRARY
          </h1>

          <p className="mt-2 max-w-[500px] text-xs leading-5 text-gray-500 sm:text-sm">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

       
        <div
          className="
            grid
            grid-cols-1
            gap-4

            sm:grid-cols-2
            sm:gap-5

            lg:grid-cols-3
            lg:gap-6

            pb-20
          "
        >
          {exercises.map((exercise: ExerciseType) => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
            />
          ))}
        </div>

      </div>
    </main>
  );
};

export default Exercise;

