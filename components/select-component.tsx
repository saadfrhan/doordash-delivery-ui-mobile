import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectComponent({
  placeholder,
  values,
  onValueChange
}: {
  placeholder: string;
  onValueChange: (value: string) => void;
  values: {
    group: number;
    groupLabel?: string;
    values: string[];
  }[];
}) {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {values.map((value, index) => (
          <SelectGroup key={index}>
            {value.groupLabel && <SelectLabel>{value.groupLabel}</SelectLabel>}
            {value.values.map((val, idx) => (
              <SelectItem key={idx} value={val}>
                {val}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}
