import { cn } from "@/lib/utils";
import { ChevronRight, LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export default function DetailItem({
  label,
  label2,
  icon: Icon,
  icon2: Icon2,
  textOnRight,
  className,
  allowArrow = true
}: {
  label: string;
  label2?: string;
  icon: LucideIcon | IconType;
  icon2?: LucideIcon | IconType;
  textOnRight?: string | React.ReactNode;
  className?: string;
  allowArrow?: boolean;
}) {
  return (
    <div className="max-md:px-3.5">
      <div className={cn("flex justify-between items-center w-full cursor-pointer border-t pr-3 py-4", className)}>
        <div className="flex gap-5 items-center">
          <Icon className="w-6 h-6 text-muted" />
          <div className="flex flex-col">
            <p className="font-medium">{label}</p>
            {label2 && (
              <div className="flex gap-1 items-center">
                <p className="text-muted font-medium">{label2}</p>
                {Icon2 && <Icon2 className="text-muted w-3.5 h-3.5" />}
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-3">
        {
          textOnRight && <div className="font-medium">{textOnRight}</div> }

          {allowArrow && <ChevronRight className="w-6 h-6 text-muted" />
        }
        </div>
      </div>

    </div>
  );
}