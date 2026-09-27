import { Exercise } from "@/app/type";
import Image from "next/image";
import Link from "next/link";

interface ExerciseCardProps {
  exercise: Exercise;
}

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <Link
      href={`/Exercises/${exercise.id}`}
      className="block h-full"
    >
      <article className="h-full overflow-hidden rounded-lg border border-[#272a2f] bg-[#15171b] transition duration-200 hover:border-[#453a3a]">

        <div className="relative h-[190px] w-full overflow-hidden">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        <div className="px-5 py-6">

          <div className="mb-4 flex flex-wrap gap-2">
            {exercise.muscleGroups.map((muscle: string) => (
              <span
                key={muscle}
                className="rounded bg-[#c8ff00] px-2.5 py-1 text-[10px] font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}

            <span className="rounded bg-[#c8ff00] px-2.5 py-1 text-[10px] font-bold uppercase text-black">
              {exercise.difficulty}
            </span>
          </div>

          <h2 className="text-[16px] font-extrabold uppercase leading-tight text-white">
            {exercise.name}
          </h2>

          <p className="mt-1.5 text-[12px] text-gray-500">
            {exercise.equipment}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-gray-400">
            <span>◷ {exercise.duration} min</span>
            <span>🔥 {exercise.caloriesBurned} kcal</span>
            <span>▣ {exercise.sets} sets</span>
            <span>★ {exercise.rating}</span>
          </div>

        </div>
      </article>
    </Link>
  );
};

export default ExerciseCard;