"use client"
import React from 'react'
import Link from 'next/link'
import { Roboto, Poppins } from 'next/font/google'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loader2 } from "lucide-react"
import * as yup from "yup";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { loginAdmin } from '@/lib/actions/AdminActions/loginAdmin';
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const roboto = Roboto({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const poppins = Poppins({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const schema = yup
  .object().shape({
    email: yup.string().required("Email is required").email("Invalid Email"),
    password: yup.string().required("Password is required"),
  });

  export type AdminLoginFormFields = yup.InferType<typeof schema>;

export default function Page() {

  const { toast } = useToast();
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const form = useForm<AdminLoginFormFields>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
        const handleClickOutsideForm = (event: MouseEvent) => {
            if (formRef.current && !formRef.current.contains(event.target as Node)) {
                form.clearErrors();
            }
        };

        document.addEventListener('click', handleClickOutsideForm);

        return () => {
            document.removeEventListener('click', handleClickOutsideForm);
        };
    }, [formRef, form]);

  const onMyFormSubmit = async (values: yup.InferType<typeof schema>) => {
    setLoading(true);
    const res = await loginAdmin(values);
    if(res?.success){
      toast({
        variant: "success",
        title: res.message,
      });
      router.push('/en/admin/dashboard')
    }
    else{
      toast({
        variant: "destructive",
        description: res?.message,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
    setLoading(false);
    form.reset();
  };

  return (
    <div className="flex min-h-screen w-full">
        <div className="flex-1 hidden lg:flex justify-center items-center bg-red-400">
        <Link href="/">
            <Image
              src="/logo.png"
              alt="DODEV"
              height={200}
              width={200}
              className="rounded-full"
            />
        </Link>
        </div>

        <div className="flex-1 flex justify-center items-center px-4">
        <Form {...form}>
          <form
            ref={formRef}
            onSubmit={form.handleSubmit(onMyFormSubmit)}
            className={`w-full lg:w-[70%] flex flex-col gap-8  ${poppins.className}`}> 
              <h2 className=" text-xl md:text-3xl text-center font-[600] mb-6">
                Login to Continue
              </h2>           
              <FormField
                control={form.control}
                name="email"
                render={(
                  { field }
                ) => (
                  <FormItem >
                    <FormLabel className="text-base md:text-lg">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" disabled={loading} className="focus:border-blue-500" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={(
                  { field }
                ) => (
                  <FormItem>
                    <FormLabel className="text-base md:text-lg">Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Password" disabled={loading} type="password" className="focus:border-blue-500" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            <Button disabled={loading} type="submit" className="w-full mt-5 bg-red-600 hover:bg-red-800">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Login
            </Button>
          </form>
        </Form>

        </div>
    </div>
  )
}
