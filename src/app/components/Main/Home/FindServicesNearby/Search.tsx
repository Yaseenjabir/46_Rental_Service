"use client";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { z } from "zod";

const formSchema = z.object({
  location: z.enum(["Sharjah", "Dubai"]),
  vehicleType: z.enum(["bus", "sedan", "car"]),
  transportType: z.enum(["honda", "ford", "nissan"]),
});

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";

export default function Search() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
                  <SelectItem value="dubai">Dubai</SelectItem>
                  <SelectItem value="sharjah">Sharjah</SelectItem>
                </SelectContent>
              </Select>
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
                  <SelectItem value="bus">Bus</SelectItem>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="car">Car</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        />
        <FormField
          control={form.control}
          name="transportType"
          render={({ field }) => (
            <div className="w-full">
              <h1>Brand</h1>
              <Select {...field} onValueChange={field.onChange}>
                <SelectTrigger className="w-full rounded-full py-5 bg-slate-50 outline-none">
                  <SelectValue placeholder="Transport" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="honda">Honda</SelectItem>
                  <SelectItem value="ford">Ford</SelectItem>
                  <SelectItem value="nissan">Nissan</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        />
        <Button type="submit" className="hidden">
          Submit
        </Button>
        <div className="w-full flex gap-5 lg:h-min lg:mt-5 lg:gap-2">
          <button className="rounded-full py-2 w-full bg-ghostWhite flex items-center justify-center gap-2 font-semibold text-tropicalIndigo border border-transparent hover:border-gray-700 hover:bg-transparent hover:text-gray-700 transition-all ease-in-out duration-300">
            <FaWhatsapp className="text-xl" />
            Booking
          </button>
          <button className="rounded-full py-2 w-full bg-ghostWhite flex items-center justify-center gap-2 font-semibold text-tropicalIndigo border border-transparent hover:border-gray-700 hover:bg-transparent hover:text-gray-700 transition-all ease-in-out duration-300">
            <IoIosSearch className="text-2xl" />
            Find
          </button>
        </div>
      </form>
    </Form>
  );
}
