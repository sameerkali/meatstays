// // "use client";

// import Image from "next/image";
// import Header from "@/components/global/Navbar/Header";
// import Footer from "@/components/global/Footer/Footer";
// import { cookies } from "next/headers";
// import meatImage from "@/public/images/meat-header.png";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";

// export default function MeatSaysExpress() {
//   const cookieStore = cookies();
//   const usertoken = cookieStore.get("usertoken");

//   let images = [
//     {
//       src: "/home/Section1/1.jpeg",
//     },
//     {
//       src: "/home/Section1/2.jpeg",
//     },
//     {
//       src: "/home/Section1/3.jpeg",
//     },
//     {
//       src: "/home/Section1/4.jpeg",
//     },
//   ];

//   return (
//     <>
//       <Header usertoken={usertoken} />
//       <div className="h-[5.8rem] lg:h-[10.5rem] bg-red-600" />

//       <div className="bg-[#fef7f3] text-center">
//         {/* Header Image Section */}
//         <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
//           {/* <Image
//             src={meatImage}
//             alt="Meat and Sausages"
//             layout="fill"
//             objectFit="cover"
//             priority
//           /> */}
//           <Swiper>
//             {images.map((image, index) => (
//               <SwiperSlide key={index}>
//                 <Image
//                   src={image.src}
//                   alt={`Slide ${index + 1}`}
//                   className="w-full h-full object-cover"
//                   width={1920}
//                   height={1080}
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Video Section */}
//         <div className="py-10 px-4">
//           <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black">
//             Discover Our Meat Quality Process
//           </h2>
//           <p className="max-w-2xl mx-auto text-gray-700 text-base mb-6">
//             From farm to fork — watch how MEATSAYS maintains the highest quality
//             and hygiene standards in every cut of meat we deliver.
//           </p>
//           <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl aspect-video border-4 border-red-600">
//             <video
//               src="/images/kitchen-promo.mp4"
//               className="w-full h-full object-cover"
//               controls
//               autoPlay
//               muted
//               loop
//               playsInline
//             />
//           </div>
//         </div>

//         {/* Cloud Kitchen Info Section */}
//         <div className="bg-white py-10 px-6 text-left max-w-4xl mx-auto">
//           <h2 className="text-3xl font-extrabold text-black mb-4">
//             Introducing MEATSAYS Express – Your Neighbourhood Cloud Kitchen!
//           </h2>
//           <p className="text-lg text-gray-800 mb-4">
//             🚀 <strong>Fresh. Fast. From Farm to Fork.</strong>
//             <br />
//             We’re thrilled to bring you <strong>MEATSAYS Express</strong>, our
//             new-age <strong>cloud kitchen</strong> model that brings premium
//             farm-fresh meat right to your doorstep!
//           </p>
//           <p className="text-lg text-gray-800 mb-4">
//             Whether you're craving juicy chicken, tender goat meat, or fresh
//             fish – MEATSAYS Express is gearing up to serve you hot, hygienic,
//             and high-quality meat-based meals prepared with love and
//             authenticity.
//           </p>
//           <p className="text-lg text-gray-800 mb-6">
//             🛵{" "}
//             <strong>Coming Soon: Order from the comfort of your home!</strong>
//             <br />
//             Get ready to experience a whole new level of convenience as we
//             launch our <strong>online ordering platform</strong>. Just a few
//             clicks, and your favorite MEATSAYS dishes will be on their way to
//             you – straight from the <strong>farm to your fork</strong>.
//           </p>
//           <p className="italic text-red-700 text-base">
//             Stay tuned. The kitchen is heating up!
//           </p>
//         </div>

//         {/* Franchise Section */}
//         <div className="bg-[#fff3ef] py-12 px-6 text-left max-w-4xl mx-auto">
//           <h3 className="text-3xl font-bold text-black mb-4">
//             Partner With Us – Join the MEATSAYS Franchise Family!
//           </h3>
//           <p className="text-lg text-gray-800 mb-4">
//             🔥 <strong>Be a Part of the Meat Revolution!</strong>
//             <br />
//             MEATSAYS is not just a brand – it’s a movement towards cleaner,
//             traceable, and sustainable meat solutions in Uttarakhand and beyond.
//             And now, <strong>you</strong> can be a part of this journey!
//           </p>
//           <p className="text-lg text-gray-800 mb-4">
//             We’re offering <strong>franchise opportunities</strong> across
//             various formats:
//           </p>
//           <ul className="list-disc text-gray-700 text-base pl-6 mb-6">
//             <li>
//               🏪 <strong>Retail Outlets</strong>
//             </li>
//             <li>
//               🍴 <strong>MEATSAYS Express (Cloud Kitchens)</strong>
//             </li>
//             <li>
//               🚚 <strong>Meat on Wheels (Mobile Units)</strong>
//             </li>
//             <li>
//               🧊 <strong>Cold Storage & Distribution Points</strong>
//             </li>
//           </ul>
//           <p className="text-base text-gray-800 mb-6">
//             <strong>Why partner with MEATSAYS?</strong>
//             <br />
//             ✅ Strong brand presence
//             <br />
//             ✅ End-to-end supply chain support
//             <br />
//             ✅ Training & operational guidance
//             <br />✅ High demand & growing market
//           </p>
//           <div className="text-center">
//             <button className="bg-red-600 text-white font-bold px-8 py-3 rounded-md text-base hover:bg-red-700 transition">
//               APPLY NOW
//             </button>
//             <p className="mt-3 italic text-sm text-gray-600">
//               📩 Let’s grow together — sustainably, profitably, and deliciously.
//             </p>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }
"use client";

import Image from "next/image";
import Header from "@/components/global/Navbar/Header";
import Footer from "@/components/global/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

interface Props {
  usertoken: string | null;
}

export default function MeatSaysExpressClient({ usertoken }: Props) {
  const images = [{ src: "/home/slider1.jpg" }, { src: "/home/slider2.jpg" }];

  return (
    <>
      <Header usertoken={usertoken} />
      <div className="h-[5.8rem] lg:h-[10.5rem] bg-red-600" />

      <div className="bg-[#fef7f3] text-center">
        {/* Swiper Header Image */}
        <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
          <Swiper
            slidesPerView={1}
            grabCursor={true}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {images.map((item, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={item.src}
                  alt={`Banner ${i + 1}`}
                  unoptimized={true}
                  width={1400}
                  height={340}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Video Section */}
        <div className="py-10 px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black">
            Discover Our Meat Quality Process
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700 text-base mb-6">
            From farm to fork — watch how MEATSAYS maintains the highest quality
            and hygiene standards in every cut of meat we deliver.
          </p>
          <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl aspect-video border-4 border-red-600">
            <video
              src="/images/kitchen-promo.mp4"
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>

        {/* Info & Franchise Sections */}
        <div className="bg-white py-10 px-6 text-left max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-black mb-4">
            Introducing MEATSAYS Express – Your Neighbourhood Cloud Kitchen!
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            🚀 <strong>Fresh. Fast. From Farm to Fork.</strong>
            <br />
            We’re thrilled to bring you <strong>MEATSAYS Express</strong>...
          </p>
          {/* (Shortened for clarity - keep your original text here) */}
          <p className="italic text-red-700 text-base">
            Stay tuned. The kitchen is heating up!
          </p>
        </div>

        <div className="bg-[#fff3ef] py-12 px-6 text-left max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-black mb-4">
            Partner With Us – Join the MEATSAYS Franchise Family!
          </h3>
          <ul className="list-disc text-gray-700 text-base pl-6 mb-6">
            <li>
              🏪 <strong>Retail Outlets</strong>
            </li>
            <li>
              🍴 <strong>MEATSAYS Express (Cloud Kitchens)</strong>
            </li>
            <li>
              🚚 <strong>Meat on Wheels (Mobile Units)</strong>
            </li>
            <li>
              🧊 <strong>Cold Storage & Distribution Points</strong>
            </li>
          </ul>
          <div className="text-center">
            <button className="bg-red-600 text-white font-bold px-8 py-3 rounded-md text-base hover:bg-red-700 transition">
              APPLY NOW
            </button>
            <p className="mt-3 italic text-sm text-gray-600">
              📩 Let’s grow together — sustainably, profitably, and deliciously.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
