"use client";
import { Input } from "@/components/ui/input";
import React, { useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";
import { AlertDialogAction } from "@radix-ui/react-alert-dialog";
import { FaArrowRotateRight } from "react-icons/fa6";
import { useToast } from "@/hooks/use-toast";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const dialogRef = useRef<HTMLButtonElement>(null);
  const [errorMsg, setErrMsg] = useState("");
  const { toast } = useToast();
  const router = useRouter();

  console.log("h");

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setLoader(true);
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error(`Please enter valid email and password`);
      }
      toast({
        description: "You're now logged In",
      });
      router.push("/studio");
    } catch (ex) {
      setErrMsg(ex.message);
      dialogRef.current?.click();
    } finally {
      setLoader(false);
    }
  }

  return (
    <>
      <section className="w-full h-screen flex items-center justify-center px-5">
        <form
          onSubmit={login}
          className="w-full rounded-md py-7 px-4 flex items-center justify-center flex-col gap-5 bg-white shadow-lg max-w-[400px] mx-auto"
        >
          <div className="w-full">
            <label htmlFor="email" className=" text-sm text-gray-500 px-2">
              Email
            </label>
            <Input
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              placeholder="Enter email"
              className="bg-white"
            />
          </div>
          <div className="w-full">
            <label htmlFor="password" className=" text-sm text-gray-500 px-2">
              Password
            </label>
            <Input
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              id="password"
              placeholder="Enter password"
              className="bg-white"
            />
          </div>
          {loader ? (
            <button
              type="button"
              className="w-full bg-tropicalIndigo text-white text-sm font-semibold py-2 rounded-md border border-transparent flex items-center justify-center hover:bg-transparent hover:border-tropicalIndigo hover:text-tropicalIndigo transition-all ease-in-out duration-300 gap-1"
            >
              <FaArrowRotateRight className="animate-spin" />
              Logging
            </button>
          ) : (
            <button
              type="submit"
              className="w-full bg-tropicalIndigo text-white text-sm font-semibold py-2 rounded-md border border-transparent hover:bg-transparent hover:border-tropicalIndigo hover:text-tropicalIndigo transition-all ease-in-out duration-300"
            >
              Login
            </button>
          )}
        </form>
        <AlertDialog>
          <AlertDialogTrigger ref={dialogRef}></AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Something went wrong!</AlertDialogTitle>
              <AlertDialogDescription>{errorMsg}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="gap-2">
              <AlertDialogAction className="border px-3 py-1 rounded-md w-min mx-auto sm:mx-0 sm:py-2">
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </section>
    </>
  );
}
