"use client"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast"
import { useForm } from "react-hook-form";
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
import { Sora } from "next/font/google";
import { useDispatch } from 'react-redux';
import { setAddress } from '@/GlobalRedux/address.slice';
import { useSelector } from 'react-redux';

const sora = Sora({
    weight: ['400', '500', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

function validateIndianPhoneNumber(phoneNumber: string) {
    // Regular expression for Indian phone numbers
    const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    // Test the provided phone number against the regex
    return phoneRegex.test(phoneNumber);
}

const schema = yup
    .object().shape({
        name: yup.string().required("Name is required"),
        email: yup.string().required("Email is required").email("Invalid Email"),
        mobile: yup.string().required("Mobile Number is required")
            .test(
                {
                    test(value, ctx) {
                        if (!validateIndianPhoneNumber(value)) {
                            return ctx.createError({ message: 'Invalid Mobile Number' })
                        }
                        else {
                            return true;
                        }
                    }
                }
            ),
        address: yup.string().required("Address is required"),
        landmark: yup.string().required("Lankmark is required"),
        pincode: yup.string().required("Pincode is required"),
    });

type FormFields = yup.InferType<typeof schema>;

const Address = () => {
    const address = useSelector((state: any) => state.address);
    const [open, setOpen] = useState(false);
    const { toast } = useToast();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const form = useForm<FormFields>({
        resolver: yupResolver(schema),
        defaultValues: {
            name: address?.name || "",
            email: address?.email || "",
            mobile: address?.mobile || "",
            address: address?.address || "",
            landmark: address?.landmark || "",
            pincode: address?.pincode || "",
        },
    });

    const onMyFormSubmit = async (values: yup.InferType<typeof schema>) => {
        setLoading(true);
        // console.log(values);
        dispatch(setAddress(values));
        toast({
            variant: "success",
            title: "Address Updated",
        });
        setOpen(false);
        setLoading(false);
    };

    return (
        <div className="flex items-start flex-wrap justify-between mt-5">
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <button className="text-white bg-red-600 text-sm px-5 py-2 rounded-md">
                        {address && address?.address.length !== 0 ? 'Edit Address' : 'Add Address'}
                    </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onMyFormSubmit)}
                            className={`w-full ${sora.className} flex flex-col gap-5`}>
                            <FormField
                                control={form.control}
                                name="name"
                                render={(
                                    { field }
                                ) => (
                                    <FormItem >
                                        <FormLabel className="tracking-wide">Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Name" disabled={loading} className="focus:border-red-600 tracking-wide" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={(
                                    { field }
                                ) => (
                                    <FormItem >
                                        <FormLabel className="tracking-wide">Email</FormLabel>
                                        <FormControl>
                                            <Input  disabled={loading} className="focus:border-red-600 tracking-wide" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <FormField
                                control={form.control}
                                name="mobile"
                                render={(
                                    { field }
                                ) => (
                                    <FormItem >
                                        <FormLabel className="tracking-wide">Mobile Number</FormLabel>
                                        <FormControl>
                                            <Input  disabled={loading} className="tracking-wide focus:border-red-600" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="address"
                                render={(
                                    { field }
                                ) => (
                                    <FormItem >
                                        <FormLabel className="tracking-wide">Address</FormLabel>
                                        <FormControl>
                                            <Input  disabled={loading} className="tracking-wide focus:border-red-600" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="landmark"
                                render={(
                                    { field }
                                ) => (
                                    <FormItem >
                                        <FormLabel className="tracking-wide">Landmark</FormLabel>
                                        <FormControl>
                                            <Input  disabled={loading} className="tracking-wide focus:border-red-600" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="pincode"
                                render={(
                                    { field }
                                ) => (
                                    <FormItem >
                                        <FormLabel className="tracking-wide">Pincode</FormLabel>
                                        <FormControl>
                                            <Input disabled={loading} className="tracking-wide focus:border-red-600" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <Button disabled={loading} type="submit" className={`bg-red-600 hover:bg-red-700 w-full mt-5 tracking-wide text-base`}>
                                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Add Address
                            </Button>

                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Address;