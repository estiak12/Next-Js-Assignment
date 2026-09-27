const MyPlan = () => {
  return (
    <main className="min-h-screen bg-[#0c0d0f] px-4 py-7 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1232px]">

        {/* PAGE HEADER */}
        <div>
          <h1 className="text-2xl font-extrabold uppercase tracking-tight">
            My Plan
          </h1>

          <p className="mt-1 text-[11px] text-gray-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* STATS */}
        <div className="mt-5 grid grid-cols-1 overflow-hidden rounded-xl border border-[#252930] bg-[#15181e] sm:grid-cols-3">

          {/* EXERCISES */}
          <div className="px-4 py-5 sm:border-r sm:border-[#252930]">
            <p className="text-[9px] text-gray-500">
              Exercises
            </p>

            <p className="mt-1 text-2xl font-extrabold text-[#c8ff00]">
              2
            </p>
          </div>

          {/* MINUTES */}
          <div className="px-4 py-5 sm:border-r sm:border-[#252930]">
            <p className="text-[9px] text-gray-500">
              Minutes
            </p>

            <p className="mt-1 text-2xl font-extrabold text-white">
              23
            </p>
          </div>

          {/* CALORIES */}
          <div className="px-4 py-5">
            <p className="text-[9px] text-gray-500">
              Calories
            </p>

            <p className="mt-1 text-2xl font-extrabold text-white">
              190
            </p>
          </div>

        </div>

        {/* FILTER / SORT BAR */}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          {/* TABS */}
          <div className="flex w-fit rounded-md border border-[#252930] bg-[#15181e] p-1">

            <button className="rounded px-3 py-1.5 text-[9px] text-gray-500">
              Today's Plan
            </button>

            <button className="rounded bg-[#252a31] px-5 py-1.5 text-[9px] font-semibold text-white">
              Saved
            </button>

          </div>

          {/* SORT */}
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-gray-500">
              Sort By
            </span>

            <button className="flex items-center gap-2 rounded-md border border-[#292e35] bg-[#15181e] px-3 py-2 text-[10px] text-gray-300">
              Duration

              <span className="text-gray-500">
                ˅
              </span>
            </button>
          </div>

        </div>

        {/* EMPTY STATE */}
        <div className="mt-4 flex min-h-[205px] flex-col items-center justify-center rounded-lg border border-dashed border-[#252930] bg-[#0d0f12] px-5 text-center">

          <h2 className="text-sm font-extrabold uppercase">
            Nothing Here Yet
          </h2>

          <p className="mt-1 text-[9px] text-gray-500">
            Browse the library and add a lift to get today moving.
          </p>

          <button className="mt-4 rounded-full bg-[#c8ff00] px-5 py-2 text-[9px] font-bold text-black transition hover:bg-[#b7ed00]">
            Go to workouts
          </button>

        </div>

      </div>
    </main>
  );
};

export default MyPlan;