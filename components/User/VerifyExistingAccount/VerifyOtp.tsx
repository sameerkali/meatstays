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
import { Sora, Kanit } from 'next/font/google'
import Link from 'next/link'
import { verifyAccount } from '@/lib/actions/UserActions/UserActions'

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

const schemaOtp = yup
    .object().shape({
        email: yup.string().required("Email is required").email("Invalid Email"),
        otp: yup.string().required("OTP is required").min(6).max(6),
    });


export type OtpFormFields = yup.InferType<typeof schemaOtp>;

const VerifyOtp = ({Email}: {Email: string}) => {
    const router = useRouter()
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);

    const otpForm = useForm<OtpFormFields>({
        resolver: yupResolver(schemaOtp),
        defaultValues: {
            otp: '',
            email: Email,
        },
    });


    const onMyFormSubmitOtp = async (values: yup.InferType<typeof schemaOtp>) => {
        setLoading(true);
        const res = await verifyAccount(values);
        if (res?.success) {
            toast({
                variant: "success",
                title: res?.message,
            });
            otpForm.reset();
            router.push('../login-user')
        }
        else {
            toast({
                variant: "destructive",
                description: res?.message,
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }
        setLoading(false);
    };


    const formRef = useRef<HTMLFormElement | null>(null);

    useEffect(() => {
        const handleClickOutsideForm = (event: MouseEvent) => {
            if (formRef.current && !formRef.current.contains(event.target as Node)) {
                otpForm.clearErrors();
            }
        };

        document.addEventListener('click', handleClickOutsideForm);

        return () => {
            document.removeEventListener('click', handleClickOutsideForm);
        };
    }, [formRef, otpForm]);


    return (
        <Form {...otpForm}>
            <form
                ref={formRef}
                onSubmit={otpForm.handleSubmit(onMyFormSubmitOtp)}
                className={`w-full ${sora.className} flex flex-col gap-5`}>
                <FormField
                    control={otpForm.control}
                    name="otp"
                    render={(
                        { field }
                    ) => (
                        <FormItem >
                            <FormLabel className="tracking-wide">OTP</FormLabel>
                            <FormControl>
                                <Input placeholder="OTP" disabled={loading} className="focus:border-red-600 tracking-wide" {...field} />
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
                                        <p>Already have an account? <Link href="/login-user" className="font-[500] ml-1 text-blue-800">Login</Link></p>
                                        <p>
                                            <Link href="../register-user" className="font-[500] ml-1 text-blue-800">
                                            Register Account
                                            </Link>
                                        </p>
                                    </div>
            </form>
        </Form>
    )
}

export default VerifyOtp