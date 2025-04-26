// "use client";
// import { Button } from "@/components/ui/button";
// import { useEffect, useRef, useState } from "react";
// import { useToast } from "@/components/ui/use-toast";
// import { useForm } from "react-hook-form";
// import { ToastAction } from "@/components/ui/toast";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Loader2 } from "lucide-react";
// import * as yup from "yup";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Sora, Kanit } from "next/font/google";
// import Link from "next/link";
// import Image from "next/image";
// import OtpVerification from "./OtpVerification";
// import { registerUser } from "@/lib/actions/UserActions/UserActions";

// function validateIndianPhoneNumber(phoneNumber: string) {
//   // Regular expression for Indian phone numbers
//   const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
//   // Test the provided phone number against the regex
//   return phoneRegex.test(phoneNumber);
// }
// const sora = Sora({
//   weight: ["400", "500", "700"],
//   style: ["normal"],
//   subsets: ["latin"],
//   display: "swap",
// });
// const kanit = Kanit({
//   weight: ["400", "500", "900", "700"],
//   style: ["normal"],
//   subsets: ["latin"],
//   display: "swap",
// });

// const schema = yup.object().shape({
//   name: yup.string().required("Name is required"),
//   email: yup.string().required("Email is required").email("Invalid Email"),
//   mobile: yup
//     .string()
//     .required("Mobile Number is required")
//     .test({
//       test(value, ctx) {
//         if (!validateIndianPhoneNumber(value)) {
//           return ctx.createError({ message: "Invalid Mobile Number" });
//         } else {
//           return true;
//         }
//       },
//     }),
//   password: yup.string().required("Password is required").min(6).max(20),
// });

// export type RegisterUserFormFields = yup.InferType<typeof schema>;

// const RegisterUser = () => {
//   const { toast } = useToast();
//   const [loading, setLoading] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const form = useForm<RegisterUserFormFields>({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       name: "",
//       email: "",
//       mobile: "",
//       password: "",
//     },
//   });

//   const formRef = useRef<HTMLFormElement | null>(null);

//   useEffect(() => {
//     const handleClickOutsideForm = (event: MouseEvent) => {
//       if (formRef.current && !formRef.current.contains(event.target as Node)) {
//         form.clearErrors();
//       }
//     };

//     document.addEventListener("click", handleClickOutsideForm);

//     return () => {
//       document.removeEventListener("click", handleClickOutsideForm);
//     };
//   }, [formRef, form]);

//   const onMyFormSubmit = async (values: yup.InferType<typeof schema>) => {
//     setLoading(true);
//     // console.log(values);
//     const res = await registerUser(values);
//     if (res?.success) {
//       setEmail(values.email);
//       setPassword(values.password);
//       setOtpSent(true);
//       toast({
//         variant: "success",
//         title: res?.message,
//       });
//       form.reset();
//     } else {
//       toast({
//         variant: "destructive",
//         description: res?.message,
//         action: <ToastAction altText="Try again">Try again</ToastAction>,
//       });
//     }

//     setLoading(false);
//   };

//   return (
//     <div className='bg-[url("/login/bg_light.png")] bg-cover bg-no-repeat w-full bg-gray-900'>
//       <div className="pb-6 md:pb-12">
//         <div className="h-[5.8rem] lg:h-[10.5rem]"></div>
//         <div className="text-white flex justify-center items-center flex-col">
//           <h1
//             className={` ${kanit.className} text-[2.6rem] md:text-5xl font-[500] tracking-wide text-center px-2`}
//           >
//             Register to Continue
//           </h1>
//         </div>

//         <div className="flex justify-center items-center flex-col lg:flex-row gap-6 lg:gap-12 px-4 py-8 bg-slate-100 w-[90%] lg:w-[80%] mx-auto rounded-xl mt-8">
//           <div className="w-full lg:flex-1 flex justify-center items-center p-2">
//             <Image
//               src={"/register/1.svg"}
//               alt="register now"
//               height="400"
//               width="400"
//             />
//           </div>

//           <div className="w-full lg:flex-1">
//             {!otpSent ? (
//               <Form {...form}>
//                 <form
//                   ref={formRef}
//                   onSubmit={form.handleSubmit(onMyFormSubmit)}
//                   className={`w-full ${sora.className} flex flex-col gap-5`}
//                 >
//                   <FormField
//                     control={form.control}
//                     name="name"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="tracking-wide">Name</FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="Name"
//                             disabled={loading}
//                             className="focus:border-red-600 tracking-wide"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="tracking-wide">Email</FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="Email"
//                             disabled={loading}
//                             className="focus:border-red-600 tracking-wide"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="password"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="tracking-wide">
//                           Password
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="Password"
//                             disabled={loading}
//                             type={"password"}
//                             className="tracking-wide focus:border-red-600 "
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="mobile"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="tracking-wide">
//                           Mobile Number
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="Mobile Number"
//                             disabled={loading}
//                             className="tracking-wide focus:border-red-600"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <Button
//                     disabled={loading}
//                     type="submit"
//                     className={`bg-red-600 hover:bg-red-700 w-full mt-5 ${sora.className} tracking-wide text-base`}
//                   >
//                     {loading && (
//                       <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                     )}
//                     Continue
//                   </Button>

//                   <div className="flex flex-col text-sm justify-center lg:flex-row lg:justify-between items-center">
//                     <p>
//                       Already have an account?{" "}
//                       <Link
//                         href="/login-user"
//                         className="font-[500] ml-1 text-blue-800"
//                       >
//                         Login
//                       </Link>
//                     </p>
//                     <p>
//                       <Link
//                         href="/register-user/verify-account"
//                         className="font-[500] ml-1 text-blue-800"
//                       >
//                         Verify Exisitng Account
//                       </Link>
//                     </p>
//                   </div>
//                 </form>
//               </Form>
//             ) : (
//               <OtpVerification Email={email} Password={password} />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterUser;

// "use client";

// import { Button } from "@/components/ui/button";
// import { useEffect, useRef, useState } from "react";
// import { useToast } from "@/components/ui/use-toast";
// import { useForm } from "react-hook-form";
// import { ToastAction } from "@/components/ui/toast";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Loader2 } from "lucide-react";
// import * as yup from "yup";

// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";

// import { Sora, Kanit } from "next/font/google";
// import Link from "next/link";
// import Image from "next/image";

// // import { auth } from "@/lib/firebase";
// import { app } from "@/lib/firebase";
// import { registerUser } from "@/lib/actions/UserActions/UserActions";

// import {
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
//   ConfirmationResult,
//   getAuth,
// } from "firebase/auth";

// function validateIndianPhoneNumber(phone: string) {
//   const re = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
//   return re.test(phone);
// }

// const sora = Sora({
//   weight: ["400", "500", "700"],
//   style: ["normal"],
//   subsets: ["latin"],
//   display: "swap",
// });
// const kanit = Kanit({
//   weight: ["400", "500", "900", "700"],
//   style: ["normal"],
//   subsets: ["latin"],
//   display: "swap",
// });

// const schema = yup.object().shape({
//   name: yup.string().required("Name is required"),
//   email: yup.string().required("Email is required").email("Invalid Email"),
//   password: yup.string().required("Password is required").min(6).max(20),
//   mobile: yup
//     .string()
//     .required("Mobile Number is required")
//     .test({
//       test(value, ctx) {
//         if (!validateIndianPhoneNumber(value || "")) {
//           return ctx.createError({ message: "Invalid Mobile Number" });
//         }
//         return true;
//       },
//     }),
// });

// export type RegisterUserFormFields = yup.InferType<typeof schema>;

// export default function RegisterUser() {
//   const { toast } = useToast();
//   const [sendingOtp, setSendingOtp] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);
//   const [confirmation, setConfirmation] = useState<ConfirmationResult | null>(
//     null
//   );
//   const [otp, setOtp] = useState("");
//   const [verifying, setVerifying] = useState(false);

//   const methods = useForm<RegisterUserFormFields>({
//     resolver: yupResolver(schema),
//     defaultValues: { name: "", email: "", password: "", mobile: "" },
//   });

//   const formRef = useRef<HTMLFormElement | null>(null);
//   useEffect(() => {
//     const onClickOutside = (e: MouseEvent) => {
//       if (formRef.current && !formRef.current.contains(e.target as Node)) {
//         methods.clearErrors();
//       }
//     };
//     document.addEventListener("click", onClickOutside);
//     return () => document.removeEventListener("click", onClickOutside);
//   }, [methods]);

//   // 1️⃣ Send OTP
//   const handleSendOtp = async () => {
//     // first, validate mobile field
//     const valid = await methods.trigger("mobile");
//     if (!valid) return;

//     const mobile = methods.getValues("mobile");
//     setSendingOtp(true);
//     const auth = getAuth(app);
//     try {
//       const verifier = new RecaptchaVerifier(auth, "recaptcha-container", {
//         size: "invisible",
//       });
//       const result = await signInWithPhoneNumber(
//         auth,
//         "+91" + mobile,
//         verifier
//       );
//       setConfirmation(result);
//       setOtpSent(true);
//       toast({ variant: "success", title: "OTP sent – check your phone" });
//     } catch (err: any) {
//       toast({
//         variant: "destructive",
//         title: "Failed to send OTP",
//         description: err.message || String(err),
//       });
//     }
//     setSendingOtp(false);
//   };

//   // 2️⃣ Verify OTP & register
//   const handleVerifyOtp = async () => {
//     if (!confirmation) return;
//     setVerifying(true);

//     try {
//       await confirmation.confirm(otp);
//       // OTP valid → now call backend to create user
//       const values = methods.getValues();
//       const res = await registerUser(values);
//       if (res?.success) {
//         toast({ variant: "success", title: res.message });
//         methods.reset();
//         setOtpSent(false);
//         setOtp("");
//       } else {
//         toast({
//           variant: "destructive",
//           description: res?.message,
//           action: <ToastAction altText="Retry">Retry</ToastAction>,
//         });
//       }
//     } catch (err: any) {
//       toast({
//         variant: "destructive",
//         title: "Invalid OTP",
//         description: err.message || String(err),
//       });
//     }

//     setVerifying(false);
//   };

//   return (
//     <div className='bg-[url("/login/bg_light.png")] bg-cover bg-no-repeat w-full bg-gray-900'>
//       <div className="pb-6 md:pb-12">
//         <div className="h-[5.8rem] lg:h-[10.5rem]" />
//         <div className="text-white flex justify-center items-center flex-col">
//           <h1
//             className={`${kanit.className} text-[2.6rem] md:text-5xl font-[500] tracking-wide text-center px-2`}
//           >
//             Register to Continue
//           </h1>
//         </div>

//         <div className="flex justify-center items-center flex-col lg:flex-row gap-6 lg:gap-12 px-4 py-8 bg-slate-100 w-[90%] lg:w-[80%] mx-auto rounded-xl mt-8">
//           {/* Illustration */}
//           <div className="w-full lg:flex-1 flex justify-center items-center p-2">
//             <Image
//               src="/register/1.svg"
//               alt="register now"
//               width={400}
//               height={400}
//             />
//           </div>

//           {/* Form */}
//           <div className="w-full lg:flex-1">
//             <Form {...methods}>
//               <form
//                 ref={formRef}
//                 className={`w-full ${sora.className} flex flex-col gap-5`}
//                 onSubmit={(e) => e.preventDefault()}
//               >
//                 <FormField
//                   control={methods.control}
//                   name="name"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="tracking-wide">Name</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Name" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={methods.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="tracking-wide">Email</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Email" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={methods.control}
//                   name="password"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="tracking-wide">Password</FormLabel>
//                       <FormControl>
//                         <Input
//                           type="password"
//                           placeholder="Password"
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={methods.control}
//                   name="mobile"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="tracking-wide">
//                         Mobile Number
//                       </FormLabel>
//                       <FormControl>
//                         <Input placeholder="Mobile Number" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 {/* Send OTP or Verify OTP */}
//                 {!otpSent ? (
//                   <Button
//                     onClick={handleSendOtp}
//                     disabled={sendingOtp}
//                     className={`bg-red-600 hover:bg-red-700 w-full mt-5 ${sora.className} tracking-wide text-base`}
//                   >
//                     {sendingOtp && (
//                       <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                     )}
//                     Verify Phone Number
//                   </Button>
//                 ) : (
//                   <div className="mt-4 space-y-3">
//                     <label className="tracking-wide block">Enter OTP</label>
//                     <Input
//                       placeholder="6-digit OTP"
//                       value={otp}
//                       onChange={(e) => setOtp(e.target.value)}
//                       maxLength={6}
//                       className="focus:border-red-600"
//                     />
//                     <Button
//                       onClick={handleVerifyOtp}
//                       disabled={verifying}
//                       className={`bg-green-600 hover:bg-green-700 w-full ${sora.className} tracking-wide text-base`}
//                     >
//                       {verifying && (
//                         <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                       )}
//                       Verify OTP & Register
//                     </Button>
//                   </div>
//                 )}
//               </form>
//             </Form>

//             {/* Invisible reCAPTCHA */}
//             <div id="recaptcha-container"></div>

//             <div className="flex flex-col text-sm justify-center lg:flex-row lg:justify-between items-center mt-6">
//               <p>
//                 Already have an account?{" "}
//                 <Link
//                   href="/login-user"
//                   className="font-[500] ml-1 text-blue-800"
//                 >
//                   Login
//                 </Link>
//               </p>
//               <p>
//                 <Link
//                   href="/register-user/verify-account"
//                   className="font-[500] ml-1 text-blue-800"
//                 >
//                   Verify Existing Account
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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

import { Sora, Kanit } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

import { app } from "@/lib/firebase";
import { registerUser } from "@/lib/actions/UserActions/UserActions";

import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  ConfirmationResult,
  getAuth,
} from "firebase/auth";

function validateIndianPhoneNumber(phone: string) {
  const re = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
  return re.test(phone);
}

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

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email("Invalid Email"),
  password: yup.string().required("Password is required").min(6).max(20),
  mobile: yup
    .string()
    .required("Mobile Number is required")
    .test({
      test(value, ctx) {
        if (!validateIndianPhoneNumber(value || "")) {
          return ctx.createError({ message: "Invalid Mobile Number" });
        }
        return true;
      },
    }),
});

export type RegisterUserFormFields = yup.InferType<typeof schema>;

export default function RegisterUser() {
  const { toast } = useToast();
  const [sendingOtp, setSendingOtp] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [confirmation, setConfirmation] = useState<ConfirmationResult | null>(
    null
  );
  const [otp, setOtp] = useState("");
  const [verifying, setVerifying] = useState(false);

  const methods = useForm<RegisterUserFormFields>({
    resolver: yupResolver(schema),
    defaultValues: { name: "", email: "", password: "", mobile: "" },
  });

  const formRef = useRef<HTMLFormElement | null>(null);
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(e.target as Node)) {
        methods.clearErrors();
      }
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, [methods]);

  const auth = getAuth(app);
  const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null);

  useEffect(() => {
    if (!recaptchaVerifierRef.current) {
      recaptchaVerifierRef.current = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
        }
      );
    }
  }, [auth]);

  // 1️⃣ Send OTP
  // const handleSendOtp = async () => {
  //   const valid = await methods.trigger("mobile");
  //   if (!valid) return;

  //   const mobile = methods.getValues("mobile");
  //   setSendingOtp(true);

  //   // Exponential backoff parameters
  //   let delay = 1000; // Initial delay of 1 second
  //   const maxDelay = 60000; // Maximum delay of 1 minute
  //   const maxRetries = 3; // Maximum number of retries
  //   let retryCount = 0;

  //   while (retryCount < maxRetries) {
  //     try {
  //       const result = await signInWithPhoneNumber(
  //         auth,
  //         "+91" + mobile,
  //         recaptchaVerifierRef.current!
  //       );
  //       setConfirmation(result);
  //       setOtpSent(true);
  //       toast({ variant: "success", title: "OTP sent – check your phone" });
  //       setSendingOtp(false); // Only set to false on success
  //       return; // Exit the function on success
  //     } catch (err: any) {
  //       if (err.code === "auth/too-many-requests") {
  //         retryCount++;
  //         toast({
  //           variant: "warning",
  //           title: "Too many attempts, retrying...",
  //           description: `Waiting ${delay / 1000} seconds before next attempt.`,
  //         });
  //         await new Promise((resolve) => setTimeout(resolve, delay));
  //         delay = Math.min(delay * 2, maxDelay); // Double the delay, but don't exceed maxDelay
  //       } else {
  //         toast({
  //           variant: "destructive",
  //           title: "Failed to send OTP",
  //           description: err.message || String(err),
  //         });
  //         setSendingOtp(false);
  //         return; // Exit the function on other errors
  //       }
  //     }
  //   }

  //   // If we reach here, we've retried too many times
  //   toast({
  //     variant: "destructive",
  //     title: "Failed to send OTP after multiple retries",
  //     description: "Please try again later.",
  //   });
  //   setSendingOtp(false);
  // };

  const handleSendOtp = async () => {
    const valid = await methods.trigger("mobile");
    if (!valid) return;

    const mobile = methods.getValues("mobile");
    setSendingOtp(true);

    try {
      const result = await signInWithPhoneNumber(
        auth,
        "+91" + mobile,
        recaptchaVerifierRef.current!
      );
      setConfirmation(result);
      setOtpSent(true);
      toast({ variant: "success", title: "OTP sent – check your phone" });
    } catch (err: any) {
      let message = "Failed to send OTP. Please try again.";

      if (err.code === "auth/too-many-requests") {
        message = "Failed to send OTP Please try again later.";
      }

      toast({
        variant: "destructive",
        title: "OTP Sending Failed",
        description: message,
      });
    } finally {
      setSendingOtp(false);
    }
  };

  // 2️⃣ Verify OTP & register
  const handleVerifyOtp = async () => {
    if (!confirmation) return;
    setVerifying(true);

    try {
      await confirmation.confirm(otp);
      const values = methods.getValues();
      const res = await registerUser(values);
      if (res?.success) {
        toast({ variant: "success", title: res.message });
        methods.reset();
        setOtpSent(false);
        setOtp("");
      } else {
        toast({
          variant: "destructive",
          description: res?.message,
          action: <ToastAction altText="Retry">Retry</ToastAction>,
        });
      }
    } catch (err: any) {
      let errorMessage = "Something went wrong during OTP verification.";

      if (err.code === "auth/invalid-verification-code") {
        errorMessage = "The OTP you entered is invalid. Please try again.";
      }

      toast({
        variant: "destructive",
        title: "OTP Verification Failed",
        description: errorMessage,
      });
      // toast({
      //   variant: "destructive",
      //   title: "Invalid OTP",
      //   description: err.message || String(err),
      // });
    }

    setVerifying(false);
  };

  return (
    <div className='bg-[url("/login/bg_light.png")] bg-cover bg-no-repeat w-full bg-gray-900'>
      <div className="pb-6 md:pb-12">
        <div className="h-[5.8rem] lg:h-[10.5rem]" />
        <div className="text-white flex justify-center items-center flex-col">
          <h1
            className={`${kanit.className} text-[2.6rem] md:text-5xl font-[500] tracking-wide text-center px-2`}
          >
            Register to Continue
          </h1>
        </div>

        <div className="flex justify-center items-center flex-col lg:flex-row gap-6 lg:gap-12 px-4 py-8 bg-slate-100 w-[90%] lg:w-[80%] mx-auto rounded-xl mt-8">
          {/* Illustration */}
          <div className="w-full lg:flex-1 flex justify-center items-center p-2">
            <Image
              src="/register/1.svg"
              alt="register now"
              width={400}
              height={400}
            />
          </div>

          {/* Form */}
          <div className="w-full lg:flex-1">
            <Form {...methods}>
              <form
                ref={formRef}
                className={`w-full ${sora.className} flex flex-col gap-5`}
                onSubmit={(e) => e.preventDefault()}
              >
                <FormField
                  control={methods.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="tracking-wide">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={methods.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="tracking-wide">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={methods.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="tracking-wide">Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={methods.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="tracking-wide">
                        Mobile Number
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Mobile Number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Send OTP or Verify OTP */}
                {!otpSent ? (
                  <Button
                    onClick={handleSendOtp}
                    disabled={sendingOtp}
                    className={`bg-red-600 hover:bg-red-700 w-full mt-5 ${sora.className} tracking-wide text-base`}
                  >
                    {sendingOtp && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Verify Phone Number
                  </Button>
                ) : (
                  <div className="mt-4 space-y-3">
                    <label className="tracking-wide block">Enter OTP</label>
                    <Input
                      placeholder="6-digit OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      maxLength={6}
                      className="focus:border-red-600"
                    />
                    <Button
                      onClick={handleVerifyOtp}
                      disabled={verifying}
                      className={`bg-green-600 hover:bg-green-700 w-full ${sora.className} tracking-wide text-base`}
                    >
                      {verifying && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      Verify OTP & Register
                    </Button>
                  </div>
                )}
              </form>
            </Form>

            {/* Invisible reCAPTCHA */}
            <div id="recaptcha-container"></div>

            <div className="flex flex-col text-sm justify-center lg:flex-row lg:justify-between items-center mt-6">
              <p>
                Already have an account?{" "}
                <Link
                  href="/login-user"
                  className="font-[500] ml-1 text-blue-800"
                >
                  Login
                </Link>
              </p>
              <p>
                <Link
                  href="/register-user/verify-account"
                  className="font-[500] ml-1 text-blue-800"
                >
                  Verify Existing Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
