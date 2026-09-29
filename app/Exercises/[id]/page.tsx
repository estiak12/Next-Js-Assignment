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
      <main className="min-h-screen bg-[#0c0d0f] px-4 py-8 text-white sm:px-6">
        <h1 className="text-xl font-bold sm:text-2xl">
          Exercise not found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0c0d0f] px-4 py-8 text-white sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div
        className="
          mx-auto
          grid
          max-w-[1232px]
          grid-cols-1
          gap-7

          sm:gap-8

          lg:grid-cols-2
          lg:gap-10
        "
      >
        {/* IMAGE */}
        <div
          className="
            relative
            h-[300px]
            w-full
            overflow-hidden
            rounded-lg

            sm:h-[420px]

            md:h-[500px]

            lg:h-[560px]
          "
        >
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="min-w-0">

          {/* TITLE */}
          <h1
            className="
              text-2xl
              font-extrabold
              uppercase
              leading-tight

              sm:text-3xl

              lg:text-4xl
            "
          >
            {exercise.name}
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-2
              text-xs
              leading-6
              text-gray-500

              sm:text-sm
            "
          >
            {exercise.description}
          </p>

          {/* MUSCLE GROUPS */}
          <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
            {exercise.muscleGroups.map((muscle: string) => (
              <span
                key={muscle}
                className="
                  rounded-full
                  bg-[#c8ff00]
                  px-2.5
                  py-1
                  text-[9px]
                  font-bold
                  uppercase
                  text-black

                  sm:px-3
                  sm:text-[10px]
                "
              >
                {muscle}
              </span>
            ))}

            <span
              className="
                rounded-full
                bg-[#c8ff00]
                px-2.5
                py-1
                text-[9px]
                font-bold
                uppercase
                text-black

                sm:px-3
                sm:text-[10px]
              "
            >
              {exercise.difficulty}
            </span>
          </div>

          {/* INFORMATION BOX */}
          <div
            className="
              mt-5
              overflow-hidden
              rounded-lg
              border
              border-[#272a2f]
              bg-[#15171b]

              sm:mt-6
            "
          >
            {/* EQUIPMENT */}
            <div className="flex items-center justify-between gap-4 border-b border-[#272a2f] px-4 py-3">
              <span className="shrink-0 text-[9px] font-medium uppercase text-gray-500 sm:text-[10px]">
                Equipment
              </span>

              <span className="text-right text-xs text-gray-300">
                {exercise.equipment}
              </span>
            </div>

            {/* DIFFICULTY */}
            <div className="flex items-center justify-between gap-4 border-b border-[#272a2f] px-4 py-3">
              <span className="shrink-0 text-[9px] font-medium uppercase text-gray-500 sm:text-[10px]">
                Difficulty
              </span>

              <span className="text-right text-xs text-gray-300">
                {exercise.difficulty}
              </span>
            </div>

            {/* SETS */}
            <div className="flex items-center justify-between gap-4 border-b border-[#272a2f] px-4 py-3">
              <span className="shrink-0 text-[9px] font-medium uppercase text-gray-500 sm:text-[10px]">
                Sets
              </span>

              <span className="text-right text-xs text-gray-300">
                {exercise.sets}
              </span>
            </div>

            {/* REPS */}
            <div className="flex items-center justify-between gap-4 border-b border-[#272a2f] px-4 py-3">
              <span className="shrink-0 text-[9px] font-medium uppercase text-gray-500 sm:text-[10px]">
                Reps
              </span>

              <span className="text-right text-xs text-gray-300">
                {exercise.reps}
              </span>
            </div>

            {/* DURATION */}
            <div className="flex items-center justify-between gap-4 border-b border-[#272a2f] px-4 py-3">
              <span className="shrink-0 text-[9px] font-medium uppercase text-gray-500 sm:text-[10px]">
                Duration
              </span>

              <span className="text-right text-xs text-gray-300">
                {exercise.duration} min
              </span>
            </div>

            {/* CALORIES */}
            <div className="flex items-center justify-between gap-4 border-b border-[#272a2f] px-4 py-3">
              <span className="shrink-0 text-[9px] font-medium uppercase text-gray-500 sm:text-[10px]">
                Calories
              </span>

              <span className="text-right text-xs text-gray-300">
                {exercise.caloriesBurned} kcal
              </span>
            </div>

            {/* RATING */}
            <div className="flex items-center justify-between gap-4 px-4 py-3">
              <span className="shrink-0 text-[9px] font-medium uppercase text-gray-500 sm:text-[10px]">
                Rating
              </span>

              <span className="text-right text-xs text-gray-300">
                {exercise.rating}
              </span>
            </div>
          </div>

          {/* INSTRUCTIONS */}
          <div className="mt-6 sm:mt-8">
            <h2 className="text-sm font-extrabold uppercase">
              Instructions
            </h2>

            <ol className="mt-3 space-y-3">
              {exercise.instructions.map(
                (instruction: string, index: number) => (
                  <li
                    key={index}
                    className="
                      flex
                      gap-3
                      text-xs
                      leading-6
                      text-gray-400

                      sm:text-sm
                    "
                  >
                    <span className="shrink-0 text-gray-500">
                      {index + 1}.
                    </span>

                    <span className="min-w-0">
                      {instruction}
                    </span>
                  </li>
                )
              )}
            </ol>
          </div>

          {/* BUTTONS */}
          <div
            className="
              mt-7
              flex
              flex-col
              gap-3

              sm:flex-row
              sm:flex-wrap
            "
          >
            <PlanButtons exercise={exercise} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExerciseDetails;

