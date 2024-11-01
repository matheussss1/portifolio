import { ArrowUpRight } from "./icon-arrow-up-right";

export function JobCard(props: {
  stack: string[];
  companyIcon: React.ReactNode;
  duration: string;
}) {
  return (
    <div className="flex gap-6 hover:bg-slate-500/20 p-2 rounded-md">
      <div className="flex-grow space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <div className="flex-shrink-0 w-16 h-16 mt-1">
              <div className="bg-slate-950 rounded-full size-12 place-content-center grid">
                {props.companyIcon}
              </div>
            </div>
            <span className="text-sm">{props.duration}</span>
          </div>
          <div className="flex items-center">
            <h3 className="text-[#87abed] text-lg font-medium mr-1">
              Backend Developer · Remote
            </h3>
            <ArrowUpRight />
          </div>
        </div>
        <h4 className="text-[#c2c9d6] text-base">
          Mr. Healer Health Solution Ltd.
        </h4>
        <p className="text-sm leading-relaxed">
          As a backend developer at Mr. Healer, I worked on their Node.js-based
          systems, ensuring smooth operation and efficiency. Recently, I led the
          development of a new Laravel-based backend infrastructure.
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {props.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-[#1a2332] text-[#87abed] text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
