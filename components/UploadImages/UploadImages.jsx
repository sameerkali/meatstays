"use client"
import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import ClipboardJS from 'clipboard';
import { apiConnector, BASE_URL, ImagesRoutes_API } from '@/lib/services/apis';
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { Loader2 } from "lucide-react";
import { Poppins } from 'next/font/google'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from 'next/image';

const poppins = Poppins({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const UploadImages = () => {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false)
    const fileInputRef = useRef();
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageChange = (e) => {
        const files = e.target.files;
        setSelectedImages([...selectedImages, ...files]);
    };


    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        try {
            const formData = new FormData();
            selectedImages.forEach((image) => {
                formData.append('images', image);
            });

            let response = await apiConnector({
                method: "POST",
                url: `${BASE_URL}${ImagesRoutes_API.uploadImages}`,
                bodyData: formData,
            });
            if (response.data.success) {
                toast({
                    variant: "success",
                    title: response?.data?.message,
                });
            }
        } catch (error) {
            if (error?.response?.data?.error) {
                toast({
                    variant: "destructive",
                    description: error?.response?.data?.error,
                    action: <ToastAction altText="Try again">Try again</ToastAction>,
                })
            }
        }
        setSelectedImages([]);
        fileInputRef.current.value = '';
        setLoading(false);
        getData();
    }

    const [data, setData] = useState([]);
    const [pageNo, setPageNo] = useState(1)
    const [totalPages, setTotalPages] = useState();

    const getData = async (pageNo = 1, pageSize = 10) => {
        try {
            const response = await apiConnector({ method: "GET", url: BASE_URL + ImagesRoutes_API.fetchAllImages + `?pageNo=${pageNo}&pageSize=${pageSize}` })
            // console.log(response.data)
            const urls = response.data.data.map(obj => obj.urls).flat();
            setData(urls)
            setTotalPages(Math.ceil(response.data.count / pageSize))
        } catch (error) {
            if (error?.response?.data?.error) {
                toast({
                    variant: "destructive",
                    description: error?.response?.data?.error,
                    action: <ToastAction altText="Try again">Try again</ToastAction>,
                })
            }
        }
    }

    useEffect(() => {
        const getData = async (pageNo = 1, pageSize = 10) => {
            try {
                const response = await apiConnector({ method: "GET", url: BASE_URL + ImagesRoutes_API.fetchAllImages + `?pageNo=${pageNo}&pageSize=${pageSize}` })
                // console.log(response.data)
                const urls = response.data.data.map(obj => obj.urls).flat();
                setData(urls)
                setTotalPages(Math.ceil(response.data.count / pageSize))
            } catch (error) {
                if (error?.response?.data?.error) {
                    toast({
                        variant: "destructive",
                        description: error?.response?.data?.error,
                        action: <ToastAction altText="Try again">Try again</ToastAction>,
                    })
                }
            }
        }
        getData();
    }, [toast])

    const increasePageNo = (pageNo) => {
        if (pageNo < totalPages && pageNo > 0) {
            setPageNo(pageNo = pageNo + 1)
            getData(pageNo)
        }
    }

    const descreasePageNo = (pageNo) => {
        if (pageNo !== 0 && pageNo > 0 && pageNo !== 1) {
            setPageNo(pageNo = pageNo - 1)
            getData(pageNo)
        }
    }

    const handleClick = (item) => {
        const clipboard = new ClipboardJS('.copy-button', {
            text: () => item,
        });

        clipboard.on('success', (e) => {
            toast({
                variant: "success",
                title: 'copied to clipboard',
            });
            clipboard.destroy();
        });

        clipboard.on('error', (e) => {
            toast({
                variant: "destructive",
                description: 'Unable to copy text to clipboard',
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
            clipboard.destroy();
        });

        clipboard.onClick({ currentTarget: document.getElementById('copy-button') });
    };


    return (
        <div>

            {/* Upload IMages Form */}
            <div className={`bg-white rounded-xl w-full text-gray-900 mt-5 flex justify-center items-center px-4 ${poppins.className}`}>
                <form onSubmit={handleSubmit} className='w-full md:w-[60%]'>


                    <div>
                        <p className='mt-4 text-2xl mb-2 leading-6 text-center text-gray-900 font-[500] pb-1'>
                            Upload Images
                        </p>
                        <Input className="focus:border-blue-500 tracking-wide"
                            type="file"
                            id="formFileMultiple"
                            accept='image/*'
                            multiple
                            onChange={handleImageChange}
                            ref={fileInputRef}
                        />
                    </div>


                    <div className='my-3 flex flex-col relative'>
                        <Button disabled={loading} type="submit" className={`bg-blue-700 hover:bg-blue-800 w-full mt-5 ${poppins.className} tracking-wide text-base`}>
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Upload
                        </Button>
                    </div>
                </form>
            </div>

            {/* display all images */}
            <div className='mt-6 md:mt-12 px-4'>
                <h2 className='text-2xl  text-center text-gray-900 font-[500] pb-4 tracking-wide'>Available Images</h2>

                {
                    data?.length > 0 ?
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-8 py-6'>
                            {
                                data?.map((item, index) => (
                                    <div key={index} className="h-[300px] group w-[300px] relative border border-blue-700 p-1 rounded-lg">

                                        <div className='copy-button z-[20] px-2 py-1 border border-blue-700 text-white bg-blue-700  absolute right-2 top-2 rounded-full p-1 flex justify-center items-center cursor-pointer opacity-0 duration-300 group-hover:opacity-100 text-sm'
                                            id="copy-button" onClick={() => handleClick(item)}
                                        >
                                            {/* <FaCode className='text-lg ' /> */}
                                            Copy
                                        </div>
                                        <Image fill={true} src={item} className="h-full w-full object-contain" alt="" />

                                    </div>
                                ))
                            }
                        </div>
                        :
                        <>
                            <h2 className='text-2xl  text-center text-red-600 font-[500] pb-4 tracking-wide'>No Images Found</h2>
                        </>
                }

            </div>


            <div className='w-full h-full bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
                <div className='w-[90%] mx-auto flex justify-between items-center px-4 py-4 '>
                    <div className='flex justify-between items-center gap-6'>
                        <button className='bg-blue-700 text-white text-sm px-4 py-1.5 rounded-md' onClick={() => descreasePageNo(pageNo)}>
                            <p className=' font-[400] flex justify-center items-center'><AiOutlineLeft className='mr-2' />Prev </p>
                        </button>
                        <button className='bg-blue-700 text-white text-sm px-4 py-1.5 rounded-md' onClick={() => increasePageNo(pageNo)}>
                            <p className=' font-[400] flex justify-center items-center'>Next <AiOutlineRight className='ml-2' /></p>
                        </button>
                    </div>
                    <div >
                        <p className='bg-gray-100  text-gray-900 '>{pageNo} of {totalPages}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UploadImages
