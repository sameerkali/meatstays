"use client"
"use client"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast"
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { fetchAllCategory } from '@/lib/actions/CategoryActions/CategoryActions';
import { updateProduct } from "@/lib/actions/ProductActions/ProductActions";
import {useRouter} from 'next/navigation'

const poppins = Poppins({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})


const schema = yup
    .object().shape({
        name: yup.string().required('Name is required'),
        desc: yup.string().required('Desc is required'),
        quantity: yup.string().required('Quantity is required'),
        price: yup.string().required('Price is required'),
        brand: yup.string().required('Brand is required'),
        category: yup.string().required('Category is required'),
        images: yup.array().of(
            yup.object().shape({
                name: yup.string().required("Image is required"),
            })
        ),
    });

type FormFields = yup.InferType<typeof schema>;

export default function EditProduct({preData}: {preData: any}) {
  const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

     const reversedImages: { name: string }[] = preData?.images?.map((image: any) => ({ name: image }));

    let form = useForm<FormFields>({
        resolver: yupResolver(schema),
        defaultValues: {
            name: preData?.name || '',
            desc: preData?.desc || '',
            quantity: preData?.quantity || '',
            price: preData?.price || '',
            brand: preData?.brand || '',
            category: preData?.category?._id ||  '',
            images: reversedImages ||  [{ name: '' }]
        },
    });

    const [data, setData] = useState([]);
    const [prevBrand, setPrevBrand] = useState('')

    const getData = async (brand: string) => {
        let pageNo = 1;
        let pageSize = 100
        let res = await fetchAllCategory({ pageNo, pageSize, brand });
        if (res.success && res.data) {
            setData(res.data);
        }
    }


    useEffect(() => {
        const singleValue = form.getValues("brand");

        if (singleValue && singleValue !== prevBrand) {
            setPrevBrand(singleValue);
            getData(singleValue);

        }
    }, [form, getData, prevBrand]);


    const formRef = useRef<HTMLFormElement | null>(null);

    // Use the useFieldArray hook to manage dynamic arrays of fields for requirements
    const { fields: requirementsFields, append: appendRequirement, remove: removeRequirement } = useFieldArray({
        control: form.control,
        name: 'images', // Provide the name of the array field to manage
    });


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

    const processForm: SubmitHandler<FormFields> = async (fData) => {
        setLoading(true);

        let images: String[] | undefined = fData?.images?.map((item: any) => item.name);

        const res = await updateProduct({ ...fData, images }, preData.slug);
        if (res?.success) {
            toast({
                variant: "success",
                title: res?.message,
            });
            form.reset();
            router.push('/en/admin/dashboard/manage-products');
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
                        Update PRODUCT
                    </p>

                    <FormField
                        control={form.control}
                        name="name"
                        render={(
                            { field }
                        ) => (
                            <FormItem
                                className="mt-4"
                            >
                                <FormLabel className="tracking-wide">Name</FormLabel>
                                <FormControl>
                                    <Input disabled={loading} className="focus:border-blue-500 tracking-wide" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <FormField
                        control={form.control}
                        name="desc"
                        render={(
                            { field }
                        ) => (
                            <FormItem
                                className="mt-4"
                            >
                                <FormLabel className="tracking-wide">Description</FormLabel>
                                <FormControl>
                                    <Input disabled={loading} className="focus:border-blue-500 tracking-wide" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="quantity"
                        render={(
                            { field }
                        ) => (
                            <FormItem
                                className="mt-4"
                            >
                                <FormLabel className="tracking-wide">Quantity</FormLabel>
                                <FormControl>
                                    <Input disabled={loading} className="focus:border-blue-500 tracking-wide" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="price"
                        render={(
                            { field }
                        ) => (
                            <FormItem
                                className="mt-4"
                            >
                                <FormLabel className="tracking-wide">Price</FormLabel>
                                <FormControl>
                                    <Input disabled={loading} className="focus:border-blue-500 tracking-wide" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <>
                        <p className='mt-1 text-sm leading-6 text-gray-900 font-[500] pb-1 border-b border-gray-300 shadow-sm'>
                            Images
                        </p>
                        {
                            requirementsFields.map((field, index) => {
                                return (
                                    <div className="flex   flex-col gap-2" key={field.id}>

                                        <FormField
                                            control={form.control}
                                            name={`images.${index}.name`}
                                            render={(
                                                { field }
                                            ) => (
                                                <FormItem >
                                                    <FormControl>
                                                        <Input className="focus:border-blue-500 tracking-wide" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        {
                                            index > 0 &&
                                            <button type="button" className="bg-red-700 rounded-md px-4 text-sm py-1 text-white duration-300 max-w-fit hover:bg-red-800" onClick={() => removeRequirement(index)}>Remove</button>
                                        }
                                    </div>
                                )
                            })
                        }
                        <button type="button" className=" bg-blue-700 rounded-md px-4 text-sm py-1 text-white duration-300 max-w-fit hover:bg-blue-800" onClick={() => appendRequirement({ name: '' })}>Add</button>

                    </>

                    <FormField
                        control={form.control}
                        name="brand"
                        render={(
                            { field }
                        ) => (
                            <FormItem className="mt-4">
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
                            <FormItem className="flex-1">
                                <FormLabel>Category</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Category" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {
                                            data && data?.map((item: any, i: any) => (
                                                <SelectItem key={i} value={item?._id}>{item?.category}</SelectItem>
                                            ))
                                        }
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />



                    <Button disabled={loading} type="submit" className={`bg-blue-700 hover:bg-blue-800 w-full mt-5 ${poppins.className} tracking-wide text-base`}>
                        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Update
                    </Button>

                </form>
            </Form>
        </div>
    )
}
