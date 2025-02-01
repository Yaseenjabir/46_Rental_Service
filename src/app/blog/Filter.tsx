"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { locations } from "../utils/utilInfo";
import { useRouter } from "next/navigation";

export default function Filter() {
  const router = useRouter();

  const handleValueChange = (value: string) => {
    if (value === "clear") {
      router.push(`/blog`);
    } else {
      router.push(`/blog?category=${value}`);
    }
  };

  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter by category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="clear">Clear All</SelectItem>
        {locations.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
