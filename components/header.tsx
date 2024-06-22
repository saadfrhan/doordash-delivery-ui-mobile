import { LuArrowLeft } from "react-icons/lu";

export default function Header({
  label,
  label2
}: {
  label: string;
  label2: string;
}) {
  return <header className="flex px-2.5">
  <LuArrowLeft className="w-6 h-6 mt-4" />
  <div className="flex gap-y-1 justify-center py-2 items-center w-full flex-col">
    {label2 && <p className="text-muted-foreground font-bold">{label2}</p>}
    <h1 className="text-xl font-bold">{label}</h1>
  </div>
</header>
}
