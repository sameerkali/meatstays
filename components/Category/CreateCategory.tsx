"use client"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast"
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastAction } from "@/components/ui/toast"
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
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Poppins } from 'next/font/google'
import { createCategory } from "@/lib/actions/CategoryActions/CategoryActions";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const poppins = Poppins({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})


const schema = yup
    .object().shape({
        brand: yup.string().required('Brand is required'),
        category: yup.string().required('Category is required'),
    });

type FormFields = yup.InferType<typeof schema>;


const CreateCategory = () => {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [longDesc, setLongDesc] = useState('');


    let form = useForm<FormFields>({
        resolver: yupResolver(schema),
        defaultValues: {
           brand: '',
           category: '',
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

    const processForm: SubmitHandler<FormFields> = async (data) => {
        setLoading(true);

        const res = await createCategory(data);
        if (res?.success) {
            toast({
                variant: "success",
                title: res?.message,
            });
            form.reset();
            setLongDesc('');
        }
        else {
            toast({
                variant: "destructive",
                description: res?.message,
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }
        setLoading(false);
    }

    return (
        <div className="w-full  mt-10 overflow-hidden">
            <Form {...form}>
                <form
                    ref={formRef}
                    onSubmit={form.handleSubmit(processForm)}
                    className={`w-full lg:w-[70%] mx-auto ${poppins.className} flex flex-col gap-5 bg-slate-100 p-3 rounded-lg`}>

                    <p className='my-2 text-center text-lg leading-6 text-gray-900 uppercase font-[500]'>
                        Add CATEGORY
                    </p>

                     <FormField
                                        control={form.control}
                                        name="brand"
                                        render={(
                                            { field }
                                        ) => (
                                            <FormItem className="flex-1">
                                                <FormLabel>Brand</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select Brand" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="top_selling">Top Selling</SelectItem>
                                                        <SelectItem value="himala_chicken">Himala Chicken</SelectItem>
                                                        <SelectItem value="bakraw">Bakraw</SelectItem>
                                                        <SelectItem value="uttarafish">Uttarafish</SelectItem>
                                                        <SelectItem value="chick_fresh">Chick Fresh</SelectItem>
                                                        <SelectItem value="add_ons">Add on</SelectItem>
                                                        <SelectItem value="eggs">Eggs</SelectItem>
                                                        <SelectItem value="kababs">Kababs</SelectItem>
                                                        <SelectItem value="salami_and_sausages">Salami and sausages</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                    <FormField
                        control={form.control}
                        name="category"
                        render={(
                            { field }
                        ) => (
                            <FormItem
                                className="mt-4"
                            >
                                <FormLabel className="tracking-wide">Category</FormLabel>
                                <FormControl>
                                    <Input disabled={loading} className="focus:border-blue-500 tracking-wide" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button disabled={loading} type="submit" className={`bg-blue-700 hover:bg-blue-800 w-full mt-5 ${poppins.className} tracking-wide text-base`}>
                        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        ADD
                    </Button>

                </form>
            </Form>
        </div>
    )
}

export default CreateCategory;
