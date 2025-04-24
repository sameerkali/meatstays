// import Header from '@/components/global/Navbar/Header';
// import Footer from '@/components/global/Footer/Footer';
// import ContactForm from '@/components/ContactForm/ContactForm';
// import { cookies } from 'next/headers'

// export default function Home() {
//   const cookieStore = cookies()
//   const usertoken = cookieStore.get('usertoken')
//   return (
//     <>
//       <Header usertoken={usertoken} />
//       <div className='h-[5.8rem] lg:h-[10.5rem] bg-red-600'></div>
//       <div className="min-h-[80vh] flex justify-center items-center px-3 py-3">
//         <h1 className="text-3xl md:text-6xl font-[800] text-red-600 tracking-wide">
//             Coming Soon
//         </h1>
//       </div>
//       <Footer />
//     </>

//   );
// }



// import Image from "next/image";
// import Header from '@/components/global/Navbar/Header';
// import Footer from '@/components/global/Footer/Footer';
// import { cookies } from 'next/headers';
// import meatImage from '@/public/images/meat-header.png'; // Save your image here or update the path accordingly

// export default function MeatSaysExpress() {
//   const cookieStore = cookies();
//   const usertoken = cookieStore.get('usertoken');

//   return (
//     <>
//       <Header usertoken={usertoken} />
//       <div className="h-[5.8rem] lg:h-[10.5rem] bg-red-600" />

//       <div className="bg-[#fef7f3] text-center">
//         {/* Header Image Section */}
//         <div className="relative w-full max-w-6xl mx-auto">
//           <Image
//             src={meatImage}
//             alt="Meat and Sausages"
//             width={1024}
//             height={600}
//             className="w-full object-cover"
//             priority
//           />
//         </div>

//         {/* Cloud Kitchen Section */}
//         <div className="py-8 px-4">
//           <h2 className="text-2xl md:text-4xl font-extrabold text-black mb-4">
//             OUR CLOUD KITCHEN MODEL IS COMING SOON
//           </h2>
//           <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded-md text-sm hover:bg-red-700 transition">
//             LEARN MORE
//           </button>
//         </div>

//         {/* Franchise Section */}
//         <div className="bg-white py-10 px-4">
//           <h3 className="text-2xl md:text-3xl font-bold mb-4">
//             Apply for a Franchise
//           </h3>
//           <p className="max-w-2xl mx-auto text-base text-gray-700 mb-6">
//             Join forces with MeatSays and benefit from our innovative cloud kitchen model.
//             We’re looking for passionate partners to help expand our brand and bring quality
//             meat to more customers.
//           </p>
//           <button className="bg-red-600 text-white font-bold px-8 py-3 rounded-md text-base hover:bg-red-700 transition">
//             APPLY NOW
//           </button>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }







// import Image from "next/image";
// import Header from '@/components/global/Navbar/Header';
// import Footer from '@/components/global/Footer/Footer';
// import { cookies } from 'next/headers';
// import meatImage from '@/public/images/meat-header.png';
// // /Users/admin/Downloads/Meatsays-client-master 2/public/images/kitchen-promo.mp4

// export default function MeatSaysExpress() {
//   const cookieStore = cookies();
//   const usertoken = cookieStore.get('usertoken');

//   return (
//     <>
//       <Header usertoken={usertoken} />
//       <div className="h-[5.8rem] lg:h-[10.5rem] bg-red-600" />

//       <div className="bg-[#fef7f3] text-center">
//         {/* Header Image Section - full width, better scaling */}
//         <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
//           <Image
//             src={meatImage}
//             alt="Meat and Sausages"
//             layout="fill"
//             objectFit="cover"
//             priority
//           />
//         </div>

//         {/* Video Section */}
//         <div className="py-10 px-4">
//           <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black">
//             Discover Our Meat Quality Process
//           </h2>
//           <div className="relative w-full max-w-4xl mx-auto aspect-video">
//             {/* <iframe
//               className="w-full h-full rounded-xl shadow-lg"
//               src="https://www.youtube.com/embed/Z9AYPxH5NTM"
//               title="Meat Quality Process"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe> */}
//          <video
//   src="/images/kitchen-promo.mp4"
//     className="w-full h-full rounded-xl shadow-lg object-cover"
//   controls
//   autoPlay
//   muted
//   loop
//   playsInline
// />
//           </div>
//         </div>

//         {/* Cloud Kitchen Section */}
//         <div className="py-8 px-4">
//           <h2 className="text-2xl md:text-4xl font-extrabold text-black mb-4">
//             OUR CLOUD KITCHEN MODEL IS COMING SOON
//           </h2>
//           <p className="max-w-2xl mx-auto text-base text-gray-700 mb-6">
//           We are revolutionizing meat delivery with our advanced cloud kitchen concept.
//             Centralized cooking, consistent taste, top-notch hygiene, and faster delivery
//             – all in one powerful model.
//           </p>
//           <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded-md text-sm hover:bg-red-700 transition">
//             LEARN MORE
//           </button>
//         </div>

//         {/* Franchise Section */}
//         <div className="bg-white py-10 px-4">
//           <h3 className="text-2xl md:text-3xl font-bold mb-4">
//             Apply for a Franchise
//           </h3>
//           <p className="max-w-2xl mx-auto text-base text-gray-700 mb-6">
//           Be part of a fast-growing meat-tech brand that combines tradition and innovation.
//             By joining MeatSays, you're tapping into a proven system built for growth,
//             quality, and customer satisfaction.
//           </p>
//           <ul className="list-disc text-left text-sm text-gray-600 max-w-xl mx-auto mb-6 px-4 sm:px-0">
//             <li>Low investment, high return model</li>
//             <li>Training, branding, and supply chain support</li>
//             <li>Fully tech-enabled ordering and logistics system</li>
//             <li>Exclusive territory rights</li>
//           </ul>

//           <button className="bg-red-600 text-white font-bold px-8 py-3 rounded-md text-base hover:bg-red-700 transition">
//             APPLY NOW
//           </button>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }






import Image from "next/image";
import Header from '@/components/global/Navbar/Header';
import Footer from '@/components/global/Footer/Footer';
import { cookies } from 'next/headers';
import meatImage from '@/public/images/meat-header.png';

export default function MeatSaysExpress() {
  const cookieStore = cookies();
  const usertoken = cookieStore.get('usertoken');

  return (
    <>
      <Header usertoken={usertoken} />
      <div className="h-[5.8rem] lg:h-[10.5rem] bg-red-600" />

      <div className="bg-[#fef7f3] text-center">
        {/* Header Image Section */}
        <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
          <Image
            src={meatImage}
            alt="Meat and Sausages"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Video Section */}
        <div className="py-10 px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black">
            Discover Our Meat Quality Process
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700 text-base mb-6">
            From farm to fork — watch how MEATSAYS maintains the highest quality and hygiene standards in every cut of meat we deliver.
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

        {/* Cloud Kitchen Info Section */}
        <div className="bg-white py-10 px-6 text-left max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-black mb-4">
            Introducing MEATSAYS Express – Your Neighbourhood Cloud Kitchen!
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            🚀 <strong>Fresh. Fast. From Farm to Fork.</strong><br />
            We’re thrilled to bring you <strong>MEATSAYS Express</strong>, our new-age <strong>cloud kitchen</strong> model that brings premium farm-fresh meat right to your doorstep!
          </p>
          <p className="text-lg text-gray-800 mb-4">
            Whether you're craving juicy chicken, tender goat meat, or fresh fish – MEATSAYS Express is gearing up to serve you hot, hygienic, and high-quality meat-based meals prepared with love and authenticity.
          </p>
          <p className="text-lg text-gray-800 mb-6">
            🛵 <strong>Coming Soon: Order from the comfort of your home!</strong><br />
            Get ready to experience a whole new level of convenience as we launch our <strong>online ordering platform</strong>. Just a few clicks, and your favorite MEATSAYS dishes will be on their way to you – straight from the <strong>farm to your fork</strong>.
          </p>
          <p className="italic text-red-700 text-base">Stay tuned. The kitchen is heating up!</p>
        </div>

        {/* Franchise Section */}
        <div className="bg-[#fff3ef] py-12 px-6 text-left max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-black mb-4">
            Partner With Us – Join the MEATSAYS Franchise Family!
          </h3>
          <p className="text-lg text-gray-800 mb-4">
            🔥 <strong>Be a Part of the Meat Revolution!</strong><br />
            MEATSAYS is not just a brand – it’s a movement towards cleaner, traceable, and sustainable meat solutions in Uttarakhand and beyond. And now, <strong>you</strong> can be a part of this journey!
          </p>
          <p className="text-lg text-gray-800 mb-4">
            We’re offering <strong>franchise opportunities</strong> across various formats:
          </p>
          <ul className="list-disc text-gray-700 text-base pl-6 mb-6">
            <li>🏪 <strong>Retail Outlets</strong></li>
            <li>🍴 <strong>MEATSAYS Express (Cloud Kitchens)</strong></li>
            <li>🚚 <strong>Meat on Wheels (Mobile Units)</strong></li>
            <li>🧊 <strong>Cold Storage & Distribution Points</strong></li>
          </ul>
          <p className="text-base text-gray-800 mb-6">
            <strong>Why partner with MEATSAYS?</strong><br />
            ✅ Strong brand presence<br />
            ✅ End-to-end supply chain support<br />
            ✅ Training & operational guidance<br />
            ✅ High demand & growing market
          </p>
          <div className="text-center">
            <button className="bg-red-600 text-white font-bold px-8 py-3 rounded-md text-base hover:bg-red-700 transition">
              APPLY NOW
            </button>
            <p className="mt-3 italic text-sm text-gray-600">📩 Let’s grow together — sustainably, profitably, and deliciously.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}









