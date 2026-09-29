import { Suspense } from "react";
import MyPlanContent from "./MyPlanContent";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-8 text-white">Loading...</div>}>
      <MyPlanContent />
    </Suspense>
  );
}