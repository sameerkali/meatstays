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
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { Sora, Kanit } from "next/font/google";
// import Link from "next/link";
// import { loginUser } from "@/lib/actions/UserActions/UserActions";

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
//   email: yup.string().required("Email is required").email("Invalid Email"),
//   password: yup.string().required("Password is required").min(6).max(20),
// });

// export type LoginUserFormFields = yup.InferType<typeof schema>;

// const LoginUserForm = () => {
//   const router = useRouter();
//   const { toast } = useToast();
//   const [loading, setLoading] = useState(false);
//   const form = useForm<LoginUserFormFields>({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       email: "",
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
//     const res = await loginUser(values);
//     if (res?.success) {
//       toast({
//         variant: "success",
//         title: res.message,
//       });
//       router.push("/");
//     } else {
//       toast({
//         variant: "destructive",
//         description: res?.message,
//         action: <ToastAction altText="Try again">Try again</ToastAction>,
//       });
//     }
//     setLoading(false);
//     form.reset();
//   };

//   return (
//     <div className='bg-[url("/login/bg_light.png")] bg-cover bg-no-repeat w-full bg-gray-900'>
//       <div className="pb-6 md:pb-12">
//         <div className="h-[5.8rem] lg:h-[10.5rem]"></div>
//         <div className="text-white flex justify-center items-center flex-col">
//           <h1
//             className={` ${kanit.className} text-[2.6rem] md:text-5xl font-[500] tracking-wide text-center px-2`}
//           >
//             Login to Continue
//           </h1>
//         </div>

//         <div className="flex justify-center items-center flex-col lg:flex-row gap-6 lg:gap-12 px-4 py-8 bg-slate-100 w-[90%] lg:w-[80%] mx-auto rounded-xl mt-8">
//           <div className="w-full lg:flex-1 flex justify-center items-center p-2">
//             <Image
//               src={"/register/3.svg"}
//               alt="login now"
//               height="400"
//               width="400"
//             />
//           </div>

//           <div className="w-full lg:flex-1">
//             <Form {...form}>
//               <form
//                 ref={formRef}
//                 onSubmit={form.handleSubmit(onMyFormSubmit)}
//                 className={`w-full ${sora.className} flex flex-col gap-5`}
//               >
//                 <FormField
//                   control={form.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="tracking-wide">Email</FormLabel>
//                       <FormControl>
//                         <Input
//                           placeholder="Email"
//                           disabled={loading}
//                           className="focus:border-red-600 tracking-wide"
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="password"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="tracking-wide">Password</FormLabel>
//                       <FormControl>
//                         <Input
//                           placeholder="Password"
//                           disabled={loading}
//                           type={"password"}
//                           className="tracking-wide focus:border-red-600 "
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <Button
//                   disabled={loading}
//                   type="submit"
//                   className={`bg-red-600 hover:bg-red-700 w-full mt-5 ${sora.className} tracking-wide text-base`}
//                 >
//                   {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
//                   Continue
//                 </Button>

//                 <div className="flex flex-col text-sm justify-center lg:flex-row lg:justify-between items-center">
//                   <p>
//                     Don&apos;t have an account?{" "}
//                     <Link
//                       href="/register-user"
//                       className="font-[500] ml-1 text-blue-800"
//                     >
//                       Sign Up
//                     </Link>
//                   </p>
//                   <p>
//                     <Link
//                       href="/register-user/verify-account"
//                       className="font-[500] ml-1 text-blue-800"
//                     >
//                       Verify Exisitng Account
//                     </Link>
//                   </p>
//                 </div>
//               </form>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginUserForm;

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
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { Sora, Kanit } from "next/font/google";
// import Link from "next/link";
// import { loginUser } from "@/lib/actions/UserActions/UserActions";
// import { auth } from "@/lib/firebase";
// import {
//   getAuth,
//   signInWithPhoneNumber,
//   RecaptchaVerifier,
// } from "firebase/auth";

// const sora = Sora({
//   weight: ["400", "500", "700"],
//   style: ["normal"],
//   subsets: ["latin"],
// });
// const kanit = Kanit({
//   weight: ["400", "500", "900", "700"],
//   style: ["normal"],
//   subsets: ["latin"],
// });

// const emailSchema = yup.object().shape({
//   email: yup.string().required("Email is required").email("Invalid Email"),
//   password: yup.string().required("Password is required").min(6).max(20),
// });

// type LoginUserFormFields = yup.InferType<typeof emailSchema>;

// const LoginUserForm = () => {
//   const router = useRouter();
//   const { toast } = useToast();
//   const [loading, setLoading] = useState(false);
//   const [usePhoneLogin, setUsePhoneLogin] = useState(false);

//   // Firebase related
//   const [otpSent, setOtpSent] = useState(false);
//   const [confirmation, setConfirmation] = useState<any>(null);
//   const recaptchaVerifierRef = useRef<any>(null);
//   const [otp, setOtp] = useState("");
//   const [phone, setPhone] = useState("");
//   const [verifyingOtp, setVerifyingOtp] = useState(false);

//   const emailForm = useForm<LoginUserFormFields>({
//     resolver: yupResolver(emailSchema),
//     defaultValues: { email: "", password: "" },
//   });

//   const sendOtp = async () => {
//     if (!phone || phone.length < 10) {
//       toast({ variant: "destructive", title: "Enter a valid phone number" });
//       return;
//     }

//     try {
//       if (!recaptchaVerifierRef.current) {
//         recaptchaVerifierRef.current = new RecaptchaVerifier(
//           auth,
//           "recaptcha-container",
//           {
//             size: "invisible",
//           }
//         );
//       }

//       const confirmationResult = await signInWithPhoneNumber(
//         auth,
//         "+91" + phone,
//         recaptchaVerifierRef.current
//       );
//       setConfirmation(confirmationResult);
//       setOtpSent(true);
//       toast({ variant: "success", title: "OTP sent to your phone" });
//     } catch (err: any) {
//       toast({
//         variant: "destructive",
//         title: "OTP Error",
//         description: err.message,
//       });
//     }
//   };

//   const verifyOtp = async () => {
//     if (!otp || otp.length < 6 || !confirmation) return;

//     try {
//       setVerifyingOtp(true);
//       const result = await confirmation.confirm(otp);
//       const firebaseUser = result.user;

//       toast({ variant: "success", title: "OTP Verified!" });

//       // ✅ Placeholder for backend login — to be handled next
//       // const idToken = await firebaseUser.getIdToken();
//       // const phone = firebaseUser.phoneNumber;

//       // Send to backend: { idToken } or { phone }

//       setVerifyingOtp(false);
//       router.push("/"); // or wherever needed
//     } catch (err: any) {
//       toast({
//         variant: "destructive",
//         title: "Invalid OTP",
//         description: err.message,
//       });
//       setVerifyingOtp(false);
//     }
//   };

//   const handleEmailLogin = async (values: LoginUserFormFields) => {
//     setLoading(true);
//     const res = await loginUser(values);
//     if (res?.success) {
//       toast({ variant: "success", title: res.message });
//       router.push("/");
//     } else {
//       toast({
//         variant: "destructive",
//         description: res?.message,
//         action: <ToastAction altText="Try again">Try again</ToastAction>,
//       });
//     }
//     setLoading(false);
//     emailForm.reset();
//   };

//   return (
//     <div className='bg-[url("/login/bg_light.png")] bg-cover bg-no-repeat w-full bg-gray-900'>
//       <div className="pb-6 md:pb-12">
//         <div className="h-[5.8rem] lg:h-[10.5rem]"></div>
//         <div className="text-white flex justify-center items-center flex-col">
//           <h1
//             className={`${kanit.className} text-[2.6rem] md:text-5xl font-[500] tracking-wide text-center px-2`}
//           >
//             Login to Continue
//           </h1>
//         </div>

//         <div className="flex justify-center items-center flex-col lg:flex-row gap-6 lg:gap-12 px-4 py-8 bg-slate-100 w-[90%] lg:w-[80%] mx-auto rounded-xl mt-8">
//           <div className="w-full lg:flex-1 flex justify-center items-center p-2">
//             <Image
//               src={"/register/3.svg"}
//               alt="login now"
//               height="400"
//               width="400"
//             />
//           </div>

//           <div className="w-full lg:flex-1">
//             {!usePhoneLogin ? (
//               <Form {...emailForm}>
//                 <form
//                   onSubmit={emailForm.handleSubmit(handleEmailLogin)}
//                   className={`${sora.className} flex flex-col gap-5`}
//                 >
//                   {/* Email Login */}
//                   <FormField
//                     control={emailForm.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Email</FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="Email"
//                             disabled={loading}
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={emailForm.control}
//                     name="password"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Password</FormLabel>
//                         <FormControl>
//                           <Input
//                             type="password"
//                             placeholder="Password"
//                             disabled={loading}
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
//                     className="bg-red-600 hover:bg-red-700 w-full mt-2"
//                   >
//                     {loading && (
//                       <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                     )}
//                     Continue with Email
//                   </Button>
//                   <Button
//                     type="button"
//                     variant="outline"
//                     onClick={() => setUsePhoneLogin(true)}
//                   >
//                     Or Login with Phone
//                   </Button>
//                 </form>
//               </Form>
//             ) : (
//               <div className={`${sora.className} flex flex-col gap-4`}>
//                 <Input
//                   placeholder="Enter Mobile Number"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   maxLength={10}
//                   disabled={otpSent}
//                 />
//                 {!otpSent && (
//                   <Button
//                     onClick={sendOtp}
//                     className="bg-red-600 hover:bg-red-700"
//                   >
//                     Send OTP
//                   </Button>
//                 )}
//                 {otpSent && (
//                   <>
//                     <Input
//                       placeholder="Enter OTP"
//                       value={otp}
//                       onChange={(e) => setOtp(e.target.value)}
//                       maxLength={6}
//                     />
//                     <Button onClick={verifyOtp} disabled={verifyingOtp}>
//                       {verifyingOtp && (
//                         <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                       )}
//                       Verify OTP
//                     </Button>
//                   </>
//                 )}
//                 <Button variant="ghost" onClick={() => setUsePhoneLogin(false)}>
//                   Or Login with Email
//                 </Button>
//                 <div id="recaptcha-container"></div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginUserForm;

// new one
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
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { Sora, Kanit } from "next/font/google";
// import Link from "next/link";
// import {
//   loginUser,
//   loginWithFirebaseUser,
// } from "@/lib/actions/UserActions/UserActions";
// import { auth } from "@/lib/firebase";
// import {
//   getAuth,
//   signInWithPhoneNumber,
//   RecaptchaVerifier,
// } from "firebase/auth";
// import CreateUserForm from "./CreateUserForm";

// const sora = Sora({
//   weight: ["400", "500", "700"],
//   style: ["normal"],
//   subsets: ["latin"],
// });
// const kanit = Kanit({
//   weight: ["400", "500", "900", "700"],
//   style: ["normal"],
//   subsets: ["latin"],
// });

// const emailSchema = yup.object().shape({
//   email: yup.string().required("Email is required").email("Invalid Email"),
//   password: yup.string().required("Password is required").min(6).max(20),
// });

// type LoginUserFormFields = yup.InferType<typeof emailSchema>;

// const LoginUserForm = () => {
//   const router = useRouter();
//   const { toast } = useToast();
//   const [loading, setLoading] = useState(false);
//   const [usePhoneLogin, setUsePhoneLogin] = useState(false);

//   // Firebase related
//   const [otpSent, setOtpSent] = useState(false);
//   const [confirmation, setConfirmation] = useState<any>(null);
//   const recaptchaVerifierRef = useRef<any>(null);
//   const [otp, setOtp] = useState("");
//   const [phone, setPhone] = useState("");
//   const [verifyingOtp, setVerifyingOtp] = useState(false);
//   const [sendingOtp, setSendingOtp] = useState(false); // ✅ added

//   // New User Handling
//   const [isNewUser, setIsNewUser] = useState(false);
//   const [verifiedPhone, setVerifiedPhone] = useState("");

//   const emailForm = useForm<LoginUserFormFields>({
//     resolver: yupResolver(emailSchema),
//     defaultValues: { email: "", password: "" },
//   });

//   const sendOtp = async () => {
//     if (!phone || phone.length < 10) {
//       toast({ variant: "destructive", title: "Enter a valid phone number" });
//       return;
//     }

//     try {
//       setSendingOtp(true); // ✅ start loading

//       if (!recaptchaVerifierRef.current) {
//         recaptchaVerifierRef.current = new RecaptchaVerifier(
//           auth,
//           "recaptcha-container",
//           {
//             size: "invisible",
//           }
//         );
//       }

//       const confirmationResult = await signInWithPhoneNumber(
//         auth,
//         "+91" + phone,
//         recaptchaVerifierRef.current
//       );
//       setConfirmation(confirmationResult);
//       setOtpSent(true);
//       toast({ variant: "success", title: "OTP sent to your phone" });
//     } catch (err: any) {
//       toast({
//         variant: "destructive",
//         title: "OTP Error",
//         description: err.message,
//       });
//     } finally {
//       setSendingOtp(false); // ✅ stop loading
//     }
//   };

//   // const verifyOtp = async () => {
//   //   if (!otp || otp.length < 6 || !confirmation) return;

//   //   try {
//   //     setVerifyingOtp(true);
//   //     const result = await confirmation.confirm(otp);
//   //     const firebaseUser = result.user;

//   //     toast({ variant: "success", title: "OTP Verified!" });

//   //     // ✅ Placeholder for backend login — to be handled next
//   //     // const idToken = await firebaseUser.getIdToken();
//   //     // const phone = firebaseUser.phoneNumber;

//   //     // Send to backend: { idToken } or { phone }

//   //     setVerifyingOtp(false);
//   //     router.push("/"); // or wherever needed
//   //   } catch (err: any) {
//   //     toast({
//   //       variant: "destructive",
//   //       title: "Invalid OTP",
//   //       description: err.message,
//   //     });
//   //     setVerifyingOtp(false);
//   //   }
//   // };

//   const verifyOtp = async () => {
//     if (!otp || otp.length < 6 || !confirmation) return;

//     try {
//       setVerifyingOtp(true);

//       const result = await confirmation.confirm(otp);
//       const firebaseUser = result.user;
//       const phoneNumber = firebaseUser.phoneNumber || phone;

//       // ✅ Call backend to check if user exists
//       const res = await loginWithFirebaseUser(phoneNumber);

//       console.log(res.data, "res from loginWithFirebaseUser");

//       if (res?.success && res?.data?.newUser === false) {
//         toast({ variant: "success", title: res.message });
//         router.push("/"); // Redirect to homepage
//       } else if (res?.data?.newUser === true) {
//         toast({
//           variant: "default",
//           title: "New User",
//           description: "Please complete registration.",
//         });
//         setVerifiedPhone(phoneNumber);
//         setIsNewUser(true);
//       } else {
//         toast({
//           variant: "destructive",
//           title: "Login Failed",
//           description: res?.message || "Something went wrong",
//         });
//       }
//     } catch (err: any) {
//       toast({
//         variant: "destructive",
//         title: "Invalid OTP",
//         description: err.message,
//       });
//     } finally {
//       setVerifyingOtp(false);
//     }
//   };

//   const handleEmailLogin = async (values: LoginUserFormFields) => {
//     setLoading(true);
//     const res = await loginUser(values);
//     if (res?.success) {
//       toast({ variant: "success", title: res.message });
//       router.push("/");
//     } else {
//       toast({
//         variant: "destructive",
//         description: res?.message,
//         action: <ToastAction altText="Try again">Try again</ToastAction>,
//       });
//     }
//     setLoading(false);
//     emailForm.reset();
//   };

//   return (
//     <div className='bg-[url("/login/bg_light.png")] bg-cover bg-no-repeat w-full bg-gray-900'>
//       <div className="pb-6 md:pb-12">
//         <div className="h-[5.8rem] lg:h-[10.5rem]"></div>
//         <div className="text-white flex justify-center items-center flex-col">
//           <h1
//             className={`${kanit.className} text-[2.6rem] md:text-5xl font-[500] tracking-wide text-center px-2`}
//           >
//             Login to Continue
//           </h1>
//         </div>

//         <div className="flex justify-center items-center flex-col lg:flex-row gap-6 lg:gap-12 px-4 py-8 bg-slate-100 w-[90%] lg:w-[80%] mx-auto rounded-xl mt-8">
//           <div className="w-full lg:flex-1 flex justify-center items-center p-2">
//             <Image
//               src={"/register/3.svg"}
//               alt="login now"
//               height="400"
//               width="400"
//             />
//           </div>

//           <div className="w-full lg:flex-1">
//             {!usePhoneLogin ? (
//               <Form {...emailForm}>
//                 <form
//                   onSubmit={emailForm.handleSubmit(handleEmailLogin)}
//                   className={`${sora.className} flex flex-col gap-5`}
//                 >
//                   {/* Email Login */}
//                   <FormField
//                     control={emailForm.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Email</FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="Email"
//                             disabled={loading}
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={emailForm.control}
//                     name="password"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Password</FormLabel>
//                         <FormControl>
//                           <Input
//                             type="password"
//                             placeholder="Password"
//                             disabled={loading}
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
//                     className="bg-red-600 hover:bg-red-700 w-full mt-2"
//                   >
//                     {loading && (
//                       <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                     )}
//                     Continue with Email
//                   </Button>
//                   <Button
//                     type="button"
//                     variant="outline"
//                     onClick={() => setUsePhoneLogin(true)}
//                   >
//                     Or Login with Phone
//                   </Button>
//                 </form>
//               </Form>
//             ) : (
//               <div className={`${sora.className} flex flex-col gap-4`}>
//                 <Input
//                   placeholder="Enter Mobile Number"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   maxLength={10}
//                   disabled={otpSent}
//                 />
//                 {!otpSent && (
//                   <Button
//                     onClick={sendOtp}
//                     disabled={sendingOtp}
//                     className="bg-red-600 hover:bg-red-700"
//                   >
//                     {sendingOtp && (
//                       <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                     )}
//                     Send OTP
//                   </Button>
//                 )}
//                 {otpSent && (
//                   <>
//                     <Input
//                       placeholder="Enter OTP"
//                       value={otp}
//                       onChange={(e) => setOtp(e.target.value)}
//                       maxLength={6}
//                     />
//                     <Button onClick={verifyOtp} disabled={verifyingOtp}>
//                       {verifyingOtp && (
//                         <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                       )}
//                       Verify OTP
//                     </Button>
//                   </>
//                 )}
//                 <Button variant="ghost" onClick={() => setUsePhoneLogin(false)}>
//                   Or Login with Email
//                 </Button>
//                 <div id="recaptcha-container"></div>
//               </div>
//             )}
//           </div>
//           <CreateUserForm phone="9595974758" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginUserForm;

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
import Image from "next/image";
import { Sora, Kanit } from "next/font/google";
import Link from "next/link";
import {
  loginUser,
  loginWithFirebaseUser,
} from "@/lib/actions/UserActions/UserActions";
import { auth } from "@/lib/firebase";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import CreateUserForm from "./CreateUserForm";

const sora = Sora({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});
const kanit = Kanit({
  weight: ["400", "500", "900", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const emailSchema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid Email"),
  password: yup.string().required("Password is required").min(6).max(20),
});

const LoginUserForm = () => {
  const router = useRouter();
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const [usePhoneLogin, setUsePhoneLogin] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [confirmation, setConfirmation] = useState<any>(null);
  const recaptchaVerifierRef = useRef<any>(null);
  const [otp, setOtp] = useState("");
  const [phone, setPhone] = useState("");
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);

  const [isNewUser, setIsNewUser] = useState(false);
  const [verifiedPhone, setVerifiedPhone] = useState("");

  const emailForm = useForm({
    resolver: yupResolver(emailSchema),
    defaultValues: { email: "", password: "" },
  });

  const sendOtp = async () => {
    if (!phone || phone.length < 10) {
      toast({ variant: "destructive", title: "Enter a valid phone number" });
      return;
    }
    try {
      setSendingOtp(true);
      if (!recaptchaVerifierRef.current) {
        recaptchaVerifierRef.current = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          { size: "invisible" }
        );
      }
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        "+91" + phone,
        recaptchaVerifierRef.current
      );
      setConfirmation(confirmationResult);
      setOtpSent(true);
      toast({ variant: "success", title: "OTP sent to your phone" });
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "OTP Error",
        description: err.message,
      });
    } finally {
      setSendingOtp(false);
    }
  };

  const verifyOtp = async () => {
    if (!otp || otp.length < 6 || !confirmation) return;
    try {
      setVerifyingOtp(true);
      const result = await confirmation.confirm(otp);
      const firebaseUser = result.user;
      // const phoneNumber = firebaseUser.phoneNumber || phone;
      const phoneNumber = (firebaseUser.phoneNumber || phone).replace(
        "+91",
        ""
      ); // remove +91
      const res = await loginWithFirebaseUser(phoneNumber);
      if (res?.success && res?.data?.newUser === false) {
        toast({ variant: "success", title: res.message });
        router.push("/");
      } else if (res?.data?.newUser === true) {
        toast({
          variant: "default",
          title: "New User",
          description: "Please complete registration.",
        });
        setVerifiedPhone(phoneNumber);
        setIsNewUser(true);
      } else {
        toast({
          variant: "destructive",
          title: "Login Failed",
          description: res?.message || "Something went wrong",
        });
      }
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Invalid OTP",
        description: err.message,
      });
    } finally {
      setVerifyingOtp(false);
    }
  };

  const handleEmailLogin = async (values: any) => {
    setLoading(true);
    const res = await loginUser(values);
    if (res?.success) {
      toast({ variant: "success", title: res.message });
      router.push("/");
    } else {
      toast({
        variant: "destructive",
        description: res?.message,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
    setLoading(false);
    emailForm.reset();
  };

  return (
    <div className='bg-[url("/login/bg_light.png")] bg-cover bg-no-repeat w-full bg-gray-900'>
      <div className="pb-6 md:pb-12">
        <div className="h-[5.8rem] lg:h-[10.5rem]"></div>
        <div className="text-white flex justify-center items-center flex-col">
          <h1
            className={`${kanit.className} text-[2.6rem] md:text-5xl font-[500] tracking-wide text-center px-2`}
          >
            Login to Continue
          </h1>
        </div>
        <div className="flex justify-center items-center flex-col lg:flex-row gap-6 lg:gap-12 px-4 py-8 bg-slate-100 w-[90%] lg:w-[80%] mx-auto rounded-xl mt-8">
          <div className="w-full lg:flex-1 flex justify-center items-center p-2">
            <Image
              src={"/register/3.svg"}
              alt="login now"
              height="400"
              width="400"
            />
          </div>
          <div className="w-full lg:flex-1">
            {!isNewUser ? (
              !usePhoneLogin ? (
                <Form {...emailForm}>
                  <form
                    onSubmit={emailForm.handleSubmit(handleEmailLogin)}
                    className={`${sora.className} flex flex-col gap-5`}
                  >
                    <FormField
                      control={emailForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Email"
                              disabled={loading}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={emailForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Password"
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
                      className="bg-red-600 hover:bg-red-700 w-full mt-2"
                    >
                      {loading && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      Continue with Email
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setUsePhoneLogin(true)}
                    >
                      Or Login with Phone
                    </Button>
                  </form>
                </Form>
              ) : (
                <div className={`${sora.className} flex flex-col gap-4`}>
                  <Input
                    placeholder="Enter Mobile Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    maxLength={10}
                    disabled={otpSent}
                  />
                  {!otpSent ? (
                    <Button
                      onClick={sendOtp}
                      disabled={sendingOtp}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      {sendingOtp && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      Send OTP
                    </Button>
                  ) : (
                    <>
                      <Input
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        maxLength={6}
                      />
                      <Button onClick={verifyOtp} disabled={verifyingOtp}>
                        {verifyingOtp && (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Verify OTP
                      </Button>
                    </>
                  )}
                  <Button
                    variant="ghost"
                    onClick={() => setUsePhoneLogin(false)}
                  >
                    Or Login with Email
                  </Button>
                  <div id="recaptcha-container"></div>
                </div>
              )
            ) : (
              <CreateUserForm phone={verifiedPhone} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUserForm;
