import { ArrowUpRight } from "./icon-arrow-up-right";

export function JobCard(props: {
  stack: string[];
  duration: string;
  companyName: string;
  role: string;
  type: "Remote" | "Onsite" | "Hybrid";
  level: "Intern" | "Junior" | "Mid" | "Senior";
  companyIcon: React.ReactNode;
}) {
  return (
    <div className="flex gap-6 rounded-md">
      <div className="flex-grow space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="grid place-content-center h-16 w-16 sm:h-12 sm:w-12 rounded-lg overflow-hidden bg-muted dark:bg-gray-900 shrink-0">
            {props.companyIcon}
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold text-lg dark:text-white">
              {props.companyName}
            </h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground dark:text-gray-400">
              <span>{props.duration}</span>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-1">
                <span>{props.role}</span>
                <span className="text-xs">·</span>
                {props.level}
                <span className="hidden sm:inline">•</span>
                {props.type}
                <ArrowUpRight />
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm leading-relaxed">
          As a backend developer at Mr. Healer, I worked on their Node.js-based
          systems, ensuring smooth operation and efficiency. Recently, I led the
          development of a new Laravel-based backend infrastructure.
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {props.stack.map((tech) => (
            <Badge children={tech} key={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary transition-colors hover:bg-primary/20">
    {children}
  </span>
);
