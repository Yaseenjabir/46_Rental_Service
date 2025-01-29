"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaArrowRotateRight, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { companyName, Vehicle } from "@/app/utils/utils";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  guestName: z.string().min(2).max(50),
  contact: z.string().length(13),
  email: z.string().email(),
  serviceType: z.enum(["perHourRental", "fullDayRental", "airportTransfer"]),
  passengers: z.string(),
  child: z.string(),
  pickupLocation: z.string().min(5),
  pickupDate: z.date(),
  pickupTime: z.string(),
  remarks: z.string().max(1024).optional(),
});

export default function FleetForm({
  item,
  setShowDialog,
}: {
  item: Vehicle | undefined;
  setShowDialog?: (val: boolean) => void | undefined;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      guestName: "",
      email: "",
      serviceType: "perHourRental",
      pickupLocation: "",
      pickupDate: new Date(),
      pickupTime: "",
      remarks: "",
      contact: "+971",
      passengers: "1",
      child: "1",
    },
  });

  const { toast } = useToast();
  const [loader, setLoader] = useState(false);

  async function onSubmit(
    values: z.infer<typeof formSchema>,
    e: React.FormEvent
  ) {
    const submitter = (e.nativeEvent as SubmitEvent)
      .submitter as HTMLButtonElement;

    const action = submitter.value;
    const formattedDate = format(values.pickupDate, "yyyy-MM-dd");

    const message = `
    Hi, I want to book this vehicle:
    *${item?.name}*  
  
    _*CUSTOMER NAME*_
    ${values.guestName}
  
    _*CONTACT #*_
    ${values.contact}
  
    _*PICK UP INFORMATION*_
    _location:_ ${values.pickupLocation}
    _date:_ ${formattedDate}
    _time:_ ${values.pickupTime}

    _*PICK UP INFORMATION*_
    _Remarks:_ ${values.remarks ? values.remarks : "none"}
  
    _*${companyName} URL*_  ${process.env.NEXT_PUBLIC_VERCEL_URL}/fleets/${item?.slug}
  `;

    if (action === "whatsapp") {
      const encodedMessage = encodeURIComponent(message);
      const phoneNumber = process.env.NEXT_PUBLIC_ADMIN_PHONE_NUMBER;
      const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
      window.open(whatsappLink, "_blank");
    }
    if (action === "email") {
      setLoader(true);
      try {
        const res = await fetch("/api/sendEmail", {
          method: "POST",
          body: JSON.stringify({
            name: item?.name,
            guestName: values.guestName,
            contact: values.contact,
            location: values.pickupLocation,
            date: formattedDate,
            time: values.pickupTime,
            remarks: values.remarks ? values.remarks : "None",
            email: values.email,
          }),
        });
        if (!res.ok) {
          throw new Error("Something went wrong");
        }

        toast({
          description: "Your mail has been sent successfully",
        });
      } catch (error) {
        toast({
          description: error.message,
        });
      } finally {
        setLoader(false);
      }
    }
    form.reset({
      guestName: "",
      email: "",
      serviceType: "perHourRental",
      pickupLocation: "",
      pickupDate: new Date(),
      pickupTime: "",
      remarks: "",
      contact: "+971",
      passengers: "1",
      child: "1",
    });
    if (setShowDialog) {
      setShowDialog(false);
    }
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {item && (
            <h1 className="font-semibold text-xl text-gray-700 pr-8">
              Booking for - {item.name}
            </h1>
          )}

          {/* Guest Name  */}
          <FormField
            control={form.control}
            name="guestName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Guest Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter full name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* Contact  */}
          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact(Without Spaces)</FormLabel>
                <FormControl>
                  <Input placeholder="+971XXXXXXXX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Email  */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="We will get in touch at your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Service Type  */}
          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Type</FormLabel>
                <FormControl>
                  <Select
                    {...field}
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Service Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="perHourRental">
                        Per Hour Rental
                      </SelectItem>
                      <SelectItem value="fullDayRental">
                        Full Day Rental
                      </SelectItem>
                      <SelectItem value="airportTransfer">
                        Airport Transfer
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between gap-10">
            {/* Passengers  */}
            <FormField
              control={form.control}
              name="passengers"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>Passengers</FormLabel>
                  <FormControl>
                    <Input type="number" defaultValue={1} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Child  */}
            <FormField
              control={form.control}
              name="child"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>Child</FormLabel>
                  <FormControl>
                    <Input type="number" defaultValue={1} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center justify-between gap-10 w-full">
            {/* Pickup Location  */}
            <FormField
              control={form.control}
              name="pickupLocation"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>Pickup Location</FormLabel>
                  <FormControl>
                    <Input
                      // className="w-[80%] border border-green-500"
                      placeholder="Enter pickup location"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Pickup Date  */}
            <FormField
              control={form.control}
              name="pickupDate"
              render={({ field }) => (
                <FormItem className="flex flex-col w-[45%] space-y-4 ">
                  <FormLabel>Pickup Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Pickup time  */}
          <FormField
            control={form.control}
            name="pickupTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pickup Time</FormLabel>
                <FormControl>
                  <Input
                    type="time"
                    placeholder="Enter pickup location"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Remarks */}
          <FormField
            control={form.control}
            name="remarks"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Remarks</FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    placeholder="Please specifiy any special requirements, such as the need for a baby seat, booster seat, child seat, wheerchair, or other accomodations."
                    {...field}
                  ></Textarea>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-3">
            <Button
              name="action"
              value="whatsapp"
              type="submit"
              className="bg-tropicalIndigo py-4 hover:bg-headings w-full flex items-center justify-center gap-1"
            >
              <FaWhatsapp />
              Reserve and book now
            </Button>
            {loader ? (
              <Button
                name="action"
                value="email"
                type="button"
                className="bg-tropicalIndigo py-4 hover:bg-headings w-full flex items-center justify-center gap-1"
              >
                <FaArrowRotateRight className="animate-spin" />
                Submitting
              </Button>
            ) : (
              <Button
                name="action"
                value="email"
                type="submit"
                className="bg-tropicalIndigo py-4 hover:bg-headings w-full flex items-center justify-center gap-1"
              >
                <MdOutlineMail />
                Reserve and book with email
              </Button>
            )}
          </div>
        </form>
      </Form>
    </>
  );
}
