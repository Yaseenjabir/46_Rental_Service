"use client";
import { IoIosSearch } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormMessage } from "@/components/ui/form";
import { brands, locations, vehicleTypes } from "@/app/utils/utilInfo";
import { z } from "zod";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  location: z.enum(
    locations.map((item) => item.value) as [string, ...string[]]
  ),
  vehicleType: z.enum(
    vehicleTypes.map((item) => item.value) as [string, ...string[]]
  ),
  brand: z.enum(brands.map((item) => item.value) as [string, ...string[]]),
});

export default function Search() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const router = useRouter();

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(
      `/fleets?location=${values.location}&brand=${values.brand}&vehicleType=${values.vehicleType}`
    );
    setInterval(() => {
      form.reset({
        location: "",
        vehicleType: "",
        brand: "",
      });
    }, 1000);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full bg-white border border-black rounded-xl py-3 px-2 text-center text-gray-700 flex flex-col gap-3 lg:flex-row lg:items-center max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] xl:rounded-full xl:px-5"
      >
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <div className="w-full">
              <h1>Choose Location</h1>
              <Select {...field} onValueChange={field.onChange}>
                <SelectTrigger className="w-full rounded-full py-5 bg-slate-50 outline-none">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </div>
          )}
        />
        <FormField
          control={form.control}
          name="vehicleType"
          render={({ field }) => (
            <div className="w-full">
              <h1>Choose Vehicle Type</h1>
              <Select {...field} onValueChange={field.onChange}>
                <SelectTrigger className="w-full rounded-full py-5 bg-slate-50 outline-none">
                  <SelectValue placeholder="Vehicle" />
                </SelectTrigger>
                <SelectContent>
                  {vehicleTypes.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </div>
          )}
        />
        <FormField
          control={form.control}
          name="brand"
          render={({ field }) => (
            <div className="w-full">
              <h1>Brand</h1>
              <Select {...field} onValueChange={field.onChange}>
                <SelectTrigger className="w-full rounded-full py-5 bg-slate-50 outline-none">
                  <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent>
                  {brands.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </div>
          )}
        />
        <div className="flex gap-5 lg:gap-2 lg:mt-5">
          <button
            onClick={() => form.handleSubmit(onSubmit)()}
            aria-label="Find"
            className="rounded-full w-full py-2 px-4 pr-6 bg-ghostWhite flex items-center justify-center gap-2 font-semibold text-tropicalIndigo border border-transparent hover:border-gray-700 hover:bg-transparent hover:text-gray-700 transition-all ease-in-out duration-300"
          >
            <IoIosSearch className="text-2xl" />
            Find
          </button>
        </div>
      </form>
    </Form>
  );
}
