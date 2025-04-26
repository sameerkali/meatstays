"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { ToastAction } from "@/components/ui/toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loader2 } from "lucide-react";
import * as yup from "yup";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useRouter } from "next/navigation";
import { Sora, Kanit } from "next/font/google";
import { createUserAfterPhoneVerification } from "@/lib/actions/UserActions/UserActions";

const sora = Sora({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const kanit = Kanit({
  weight: ["400", "500", "900", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const schemaNewUser = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export type NewUserFormFields = yup.InferType<typeof schemaNewUser>;

const NewUserForm = ({ phone }: { phone: string }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<NewUserFormFields>({
    resolver: yupResolver(schemaNewUser),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onFormSubmit = async (values: NewUserFormFields) => {
    setLoading(true);
    try {
      const res = await createUserAfterPhoneVerification({
        ...values,
        phone,
      });

      if (res?.success) {
        toast({
          variant: "success",
          title: res?.message || "Account created successfully",
        });
        form.reset();
        router.push("/"); // or redirect to dashboard page
      } else {
        toast({
          variant: "destructive",
          description: res?.message || "Failed to create account",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Something went wrong. Please try again.",
      });
    }
    setLoading(false);
  };

  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const handleClickOutsideForm = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        form.clearErrors();
      }
    };

    document.addEventListener("click", handleClickOutsideForm);

    return () => {
      document.removeEventListener("click", handleClickOutsideForm);
    };
  }, [formRef, form]);

  return (
    <Form {...form}>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(onFormSubmit)}
        className={`w-full ${sora.className} flex flex-col gap-5`}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="tracking-wide">Name</FormLabel>
              <FormControl>
                <Input placeholder="Full Name" disabled={loading} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="tracking-wide">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Email address"
                  disabled={loading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="tracking-wide">Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Password"
                  type="password"
                  disabled={loading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={loading}
          type="submit"
          className={`bg-red-600 hover:bg-red-700 w-full mt-5 ${sora.className} tracking-wide text-base`}
        >
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Create Account
        </Button>
      </form>
    </Form>
  );
};

export default NewUserForm;
