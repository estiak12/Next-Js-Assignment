import PlanButtons from "@/app/components/Button/PlanButtons";
import Image from "next/image";

async function getExercise(id: string) {
  const response = await fetch(
    `https://api.api-store.workers.dev/api/fitlog/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch exercise");
  }

  const exercise = await response.json();

  return exercise;
}

const ExerciseDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const exercise = await getExercise(id);

  if (!exercise) {
    return (
      <main className="min-h-screen bg-[#0c0d0f] px-5 py-10 text-white">
        <h1 className="text-2xl font-bold">Exercise not found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0c0d0f] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1232px] gap-8 lg:grid-cols-[1fr_1fr]">

        <div className="relative h-[460px] overflow-hidden rounded-lg sm:h-[520px]">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>

          {/* TITLE */}
          <h1 className="text-2xl font-extrabold uppercase leading-tight sm:text-3xl">
            {exercise.name}
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-2 text-sm leading-relaxed text-gray-500">
            {exercise.description}
          </p>

          {/* MUSCLE GROUPS */}
          <div className="mt-4 flex flex-wrap gap-2">
            {exercise.muscleGroups.map((muscle: string) => (
              <span
                key={muscle}
                className="rounded-full bg-[#c8ff00] px-3 py-1 text-[10px] font-bold text-black"
              >
                {muscle}
              </span>
            ))}

            <span className="rounded-full bg-[#c8ff00] px-3 py-1 text-[10px] font-bold text-black">
              {exercise.difficulty}
            </span>
          </div>

          {/* INFORMATION BOX */}
          <div className="mt-5 overflow-hidden rounded-lg border border-[#272a2f] bg-[#15171b]">

            {/* EQUIPMENT */}
            <div className="flex items-center justify-between border-b border-[#272a2f] px-4 py-3">
              <span className="text-[10px] font-medium uppercase text-gray-500">
                Equipment
              </span>

              <span className="text-xs text-gray-300">
                {exercise.equipment}
              </span>
            </div>

            {/* DIFFICULTY */}
            <div className="flex items-center justify-between border-b border-[#272a2f] px-4 py-3">
              <span className="text-[10px] font-medium uppercase text-gray-500">
                Difficulty
              </span>

              <span className="text-xs text-gray-300">
                {exercise.difficulty}
              </span>
            </div>

            {/* SETS */}
            <div className="flex items-center justify-between border-b border-[#272a2f] px-4 py-3">
              <span className="text-[10px] font-medium uppercase text-gray-500">
                Sets
              </span>

              <span className="text-xs text-gray-300">
                {exercise.sets}
              </span>
            </div>

            {/* REPS */}
            <div className="flex items-center justify-between border-b border-[#272a2f] px-4 py-3">
              <span className="text-[10px] font-medium uppercase text-gray-500">
                Reps
              </span>

              <span className="text-xs text-gray-300">
                {exercise.reps}
              </span>
            </div>

            {/* DURATION */}
            <div className="flex items-center justify-between border-b border-[#272a2f] px-4 py-3">
              <span className="text-[10px] font-medium uppercase text-gray-500">
                Duration
              </span>

              <span className="text-xs text-gray-300">
                {exercise.duration} min
              </span>
            </div>

            {/* CALORIES */}
            <div className="flex items-center justify-between border-b border-[#272a2f] px-4 py-3">
              <span className="text-[10px] font-medium uppercase text-gray-500">
                Calories
              </span>

              <span className="text-xs text-gray-300">
                {exercise.caloriesBurned} kcal
              </span>
            </div>

            {/* RATING */}
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-[10px] font-medium uppercase text-gray-500">
                Rating
              </span>

              <span className="text-xs text-gray-300">
                {exercise.rating}
              </span>
            </div>

          </div>

          {/* INSTRUCTIONS */}
          <div className="mt-6">
            <h2 className="text-sm font-extrabold uppercase">
              Instructions
            </h2>

            <ol className="mt-3 space-y-3">
              {exercise.instructions.map(
                (instruction: string, index: number) => (
                  <li
                    key={index}
                    className="flex gap-3 text-xs leading-relaxed text-gray-400"
                  >
                    <span className="shrink-0 text-gray-500">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                )
              )}
            </ol>
          </div>

          {/* BUTTONS */}
          <div className="mt-7 flex flex-wrap gap-3">

           <PlanButtons exercise={exercise} />
          </div>

        </div>
      </div>
    </main>
  );
};

export default ExerciseDetails;