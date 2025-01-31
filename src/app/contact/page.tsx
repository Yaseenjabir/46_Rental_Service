"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { FaArrowRotateRight } from "react-icons/fa6";
import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

const formSchema = z.object({
  name: z.string().min(6).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(1024),
  number: z.string().length(9, { message: "Phone number must be 13 digits" }),
});

const ContactUs = () => {
  const [phone, setPhone] = useState("");
  const dialogRef = useRef<HTMLButtonElement | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 9) {
      value = value.slice(0, 10);
    }

    let formattedValue = value;

    if (formattedValue.length === 0) {
      formattedValue = "";
    } else if (formattedValue.length <= 2) {
      formattedValue = `(${formattedValue}`;
    } else if (formattedValue.length <= 5) {
      formattedValue = `(${formattedValue.slice(0, 2)}) ${formattedValue.slice(2)}`;
    } else {
      formattedValue = `(${formattedValue.slice(0, 2)}) ${formattedValue.slice(2, 5)}-${formattedValue.slice(5, 10)}`;
    }

    setPhone(formattedValue);
    setValue("number", value);
  };

  const { reset, setValue } = form;
  const countryCode = "+971";

  const [loading, setLoading] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const modifiedValues = {
      ...values,
      number: `${countryCode} ${phone}`,
      _type: "contact",
    };
    try {
      setLoading(true);
      await client.create(modifiedValues);
    } catch (error) {
      toast({
        description: "Something went wrong",
      });
    } finally {
      setLoading(false);
      reset({
        name: "",
        email: "",
        message: "",
        number: "",
      });
      setPhone("");
      toast({
        title: "Submitted",
        description: "Your form has been submitted succesfully",
      });
    }
  }

  return (
    <section className="bg-white w-full">
      <section className="w-full py-10 px-5 max-w-[700px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto md:mb-10 md:px-0">
        {/* Contact us description  */}
        <div className="text-titleColor flex flex-col gap-2 md:py-10 md:px-0 lg:gap-3 xl:gap-5">
          <h1 className="text-4xl font-light lg:text-5xl lg:text-titleColor md:font-medium lg:font-light">
            Contact Us
          </h1>
          <p className="md:font-semibold md:text-gray-600 md:max-w-[620px] md:text-lg lg:font-normal lg:text-base">
            Please fill out the form below with your details, including the type
            of vehicle you are interested in. Let us know if you have any
            specific queries or need assistance with a door reference. We will
            get back to you as soon as possible!
          </p>
        </div>
        {/* Contact us form  */}
        <div className="w-full flex flex-col mt-10 items-center justify-center bg-[#fafafa70] md:flex-row-reverse md:h-[740px] lg:gap-5">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full flex flex-col py-5 items-center justify-center px-5 h-full"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white w-full"
                        placeholder="Enter full name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white w-full"
                        placeholder="Enter your email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <div
                    className="w-full flex gap-1 relative pt-5 pb-2"
                    id="checking"
                  >
                    <Select defaultValue="+971">
                      <SelectTrigger className="w-min mt-2 bg-white">
                        <SelectValue placeholder="Country Code" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={countryCode}>
                          <span className="pr-4 flex flex-row items-center gap-1">
                            <Image
                              width={20}
                              height={12}
                              src={"/assets/UAELogo.png"}
                              className="mt-[2px]"
                              alt="us-flag"
                            />
                            {countryCode}
                          </span>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormItem className="w-full">
                      <FormLabel className="absolute top-0 left-0">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="bg-white"
                          placeholder="Enter your phone number"
                          value={phone}
                          onChange={handlePhoneChange}
                          maxLength={13}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        className="bg-white"
                        rows={6}
                        placeholder="Enter your message"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Contact us, our team will reach out to you through your
                      phone number or email
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {loading ? (
                <div
                  aria-label="Submitting"
                  className="bg-tropicalIndigo w-full border border-tropicalIndigo hover:text-tropicalIndigo hover:bg-transparent text-white flex items-center justify-center gap-2 text-sm rounded-lg py-2 hover:border-tropicalIndigo"
                >
                  <FaArrowRotateRight className="animate-spin text-lg" />
                  Submitting
                </div>
              ) : (
                <Button
                  aria-label="Submit"
                  className="bg-tropicalIndigo w-full border border-tropicalIndigo hover:text-tropicalIndigo hover:bg-transparent hover:border-tropicalIndigo"
                  type="submit"
                >
                  Submit
                </Button>
              )}
            </form>
          </Form>
          <div className="w-full bg-white md:h-full flex flex-col items-center justify-center">
            <Image
              width={490}
              height={520}
              src={"/assets/contactus.jpg"}
              alt="contact-us"
              className="w-full h-full md:h-[60%] lg:h-[70%]"
              layout="responsive"
            />
          </div>
        </div>
        <Dialog>
          <DialogTrigger className="hidden" ref={dialogRef}>
            Open
          </DialogTrigger>
          <DialogContent className="w-[95%]">
            <DialogHeader>
              <DialogTitle>Thank you for reaching out!</DialogTitle>
              <DialogDescription>
                We haveve successfully received your email. Our team will review
                your request and get back to you as soon as possible.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </section>
    </section>
  );
};

export default ContactUs;
