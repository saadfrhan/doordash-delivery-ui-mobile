import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

export default function Price({
  price,
  label,
  className,
  newPrice,
  priceInfo,
  options,
}: {
  label: string;
  price: number;
  priceInfo?: boolean;
  newPrice?: number;
  className?: string;
  options?: (number | "Other")[];
}) {
  return (
    <div className={className}>
      <div className="py-1.5 flex justify-between font-medium">
        <div
          className={cn({
            "text-primary-1 flex gap-1 items-center": priceInfo,
          })}
        >
          <p>{label}</p>

          {priceInfo && (
            <Info className="text-foreground w-[1.15rem] h-[1.15rem]" />
          )}
        </div>
        <div className="flex gap-3 items-center">
          <p
            className={cn({
              "text-muted line-through": priceInfo,
            })}
          >
            ${price.toFixed(2)}
          </p>
          {newPrice !== undefined && (
            <p className="text-primary-1">${newPrice.toFixed(2)}</p>
          )}
        </div>
      </div>
      {options && (<div className="flex justify-center items-center w-full flex-col pt-4">

        <div className="rounded-full bg-secondary font-extrabold w-fit flex">
          {options.map((option, i) => {
            return (
              <div
                key={i}
                className={cn("flex px-6 py-1.5 w-fit", {
                  "text-background rounded-full bg-foreground": option === price,
                })}
              >
                {option !== "Other" && "$"}{option}
              </div>
            );
          })}
        </div>
      </div>
      )}
    </div>
  );
}
