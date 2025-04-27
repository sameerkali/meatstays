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
import Link from "next/link";
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

// Validation schema (UPDATED)
const schemaCreateUser = yup.object().shape({
  name: yup.string().required("Name is required").min(2).max(50),
  email: yup.string().required("Email is required").email("Invalid Email"),
  phone: yup
    .string()
    .required("Phone is required")
    .matches(/^\d{10}$/, "Phone must be 10 digits"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

// Infer type
export type CreateUserFormFields = yup.InferType<typeof schemaCreateUser>;

const CreateUserForm = ({ phone }: { phone: string }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const createUserForm = useForm<CreateUserFormFields>({
    resolver: yupResolver(schemaCreateUser),
    defaultValues: {
      name: "",
      email: "",
      phone: phone,
      password: "",
    },
  });

  const onFormSubmit = async (values: CreateUserFormFields) => {
    setLoading(true);

    
    const res = await createUserAfterPhoneVerification(values);

    if (res?.success) {
      toast({
        variant: "success",
        title: res?.message || "Account created successfully!",
      });
      createUserForm.reset();
      router.push("/");
    } else {
      toast({
        variant: "destructive",
        description: res?.message || "Something went wrong",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
    setLoading(false);
  };

  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const handleClickOutsideForm = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        createUserForm.clearErrors();
      }
    };

    document.addEventListener("click", handleClickOutsideForm);

    return () => {
      document.removeEventListener("click", handleClickOutsideForm);
    };
  }, [formRef, createUserForm]);

  return (
    <Form {...createUserForm}>
      <form
        ref={formRef}
        onSubmit={createUserForm.handleSubmit(onFormSubmit)}
        className={`w-full ${sora.className} flex flex-col gap-5`}
      >
        {/* Name Field */}
        <FormField
          control={createUserForm.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="tracking-wide">Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your name"
                  disabled={loading}
                  className="focus:border-red-600 tracking-wide"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email Field */}
        <FormField
          control={createUserForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="tracking-wide">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  disabled={loading}
                  className="focus:border-red-600 tracking-wide"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone Field (Disabled) */}
        <FormField
          control={createUserForm.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="tracking-wide">Phone</FormLabel>
              <FormControl>
                <Input
                  disabled
                  className="focus:border-red-600 tracking-wide bg-gray-100"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password Field (NEW) */}
        <FormField
          control={createUserForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="tracking-wide">Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  disabled={loading}
                  className="focus:border-red-600 tracking-wide"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button
          disabled={loading}
          type="submit"
          className={`bg-red-600 hover:bg-red-700 w-full mt-5 ${sora.className} tracking-wide text-base`}
        >
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Create Account
        </Button>

        <div className="flex flex-col text-sm justify-center lg:flex-row lg:justify-between items-center">
          <p>
            Already have an account?{" "}
            <Link href="/login-user" className="font-[500] ml-1 text-blue-800">
              Login
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
};

export default CreateUserForm;
