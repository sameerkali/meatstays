"use client"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast"
import { useForm } from "react-hook-form";
import { ToastAction } from "@/components/ui/toast"
import { yupResolver } from "@hookform/resolvers/yup";
import { Loader2 } from "lucide-react"
import * as yup from "yup";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'
import Image from "next/image";
import { Sora, Kanit } from 'next/font/google'
import Link from 'next/link'
import { loginUser } from '@/lib/actions/UserActions/UserActions'

const sora = Sora({
    weight: ['400', '500', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})
const kanit = Kanit({
    weight: ['400', '500', '900', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

const schema = yup
    .object().shape({
        email: yup.string().required("Email is required").email("Invalid Email"),
        password: yup.string().required("Password is required").min(6).max(20),
    });

export type LoginUserFormFields = yup.InferType<typeof schema>;


const LoginUserForm = () => {

    const router = useRouter()
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const form = useForm<LoginUserFormFields>({
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
        const res = await loginUser(values);
    if(res?.success){
      toast({
        variant: "success",
        title: res.message,
      });
      router.push('/')
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
      <div className='bg-[url("/login/bg_light.png")] bg-cover bg-no-repeat w-full bg-gray-900'>
            <div className="pb-6 md:pb-12">
                  <div className='h-[5.8rem] lg:h-[10.5rem]'></div>
            <div className='text-white flex justify-center items-center flex-col'>
                <h1 className={` ${kanit.className} text-[2.6rem] md:text-5xl font-[500] tracking-wide text-center px-2`}>
                    Login to Continue
                </h1>
            </div>

            <div className="flex justify-center items-center flex-col lg:flex-row gap-6 lg:gap-12 px-4 py-8 bg-slate-100 w-[90%] lg:w-[80%] mx-auto rounded-xl mt-8">

                <div className="w-full lg:flex-1 flex justify-center items-center p-2">
                    <Image
                        src={'/register/3.svg'}
                        alt="login now"
                        height="400"
                        width="400"
                    />
                </div>

                <div className="w-full lg:flex-1">
                    <Form {...form}>
                        <form
                            ref={formRef}
                            onSubmit={form.handleSubmit(onMyFormSubmit)}
                            className={`w-full ${sora.className} flex flex-col gap-5`}>
                            <FormField
                                control={form.control}
                                name="email"
                                render={(
                                    { field }
                                ) => (
                                    <FormItem >
                                        <FormLabel className="tracking-wide">Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Email" disabled={loading} className="focus:border-red-600 tracking-wide" {...field} />
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
                                        <FormLabel className="tracking-wide">Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Password" disabled={loading} type={"password"} className="tracking-wide focus:border-red-600 " {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button disabled={loading} type="submit" className={`bg-red-600 hover:bg-red-700 w-full mt-5 ${sora.className} tracking-wide text-base`}>
                                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Continue
                            </Button>

                            <div className="flex flex-col text-sm justify-center lg:flex-row lg:justify-between items-center">
                                <p>Don&apos;t have an account? <Link href="/register-user" className="font-[500] ml-1 text-blue-800">Sign Up</Link></p>
                                <p>
                                    <Link href="/register-user/verify-account" className="font-[500] ml-1 text-blue-800">
                                        Verify Exisitng Account
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default LoginUserForm