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
      <article
        className="
          h-full
          overflow-hidden
          rounded-lg
          border
          border-[#272a2f]
          bg-[#15171b]
          transition
          duration-200
          hover:border-[#453a3a]
        "
      >

        <div
          className="
            relative
            h-[180px]
            w-full
            overflow-hidden

            sm:h-[190px]
            lg:h-[200px]
          "
        >
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 1024px) 50vw,
              33vw
            "
            className="object-cover transition duration-300 hover:scale-105"
          />
        </div>
        <div
          className="
            px-4
            py-5

            sm:px-5
            sm:py-6
          "
        >
          <div className="mb-4 flex flex-wrap gap-1.5 sm:gap-2">
            {exercise.muscleGroups.map((muscle: string) => (
              <span
                key={muscle}
                className="
                  rounded
                  bg-[#c8ff00]
                  px-2
                  py-1
                  text-[9px]
                  font-bold
                  uppercase
                  text-black

                  sm:px-2.5
                  sm:text-[10px]
                "
              >
                {muscle}
              </span>
            ))}

            <span
              className="
                rounded
                bg-[#c8ff00]
                px-2
                py-1
                text-[9px]
                font-bold
                uppercase
                text-black

                sm:px-2.5
                sm:text-[10px]
              "
            >
              {exercise.difficulty}
            </span>
          </div>

          <h2
            className="
              text-[15px]
              font-extrabold
              uppercase
              leading-tight
              text-white

              sm:text-[16px]
            "
          >
            {exercise.name}
          </h2>

          <p
            className="
              mt-1.5
              text-[11px]
              text-gray-500

              sm:text-[12px]
            "
          >
            {exercise.equipment}
          </p>

 
          <div
            className="
              mt-5
              flex
              flex-wrap
              items-center
              gap-x-3
              gap-y-2
              text-[10px]
              text-gray-400

              sm:mt-6
              sm:gap-x-4
              sm:text-[11px]
            "
          >
            <span className="whitespace-nowrap">
              ◷ {exercise.duration} min
            </span>

            <span className="whitespace-nowrap">
              🔥 {exercise.caloriesBurned} kcal
            </span>

            <span className="whitespace-nowrap">
              ▣ {exercise.sets} sets
            </span>

            <span className="whitespace-nowrap">
              ★ {exercise.rating}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ExerciseCard;

