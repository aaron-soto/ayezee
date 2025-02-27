import { WORKS } from "@/data/works";
import { WorkPreview } from "@/components/work-preview";
import { cn } from "@/lib/utils";

export const WorksList = ({ className = "" }: { className?: string }) => {
  return (
    <div className={cn("flex flex-wrap gap-y-20 gap-20 w-full", className)}>
      {WORKS.map((work, idx) => (
        <WorkPreview work={work} featured={work.featured} key={idx} />
      ))}
    </div>
  );
};
