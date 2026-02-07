// import Image from "next/image";

// export const metadata = {
//   title: "Why Choose Us | Complete Staffing Solutions",
//   description: "Discover why businesses trust Complete Staffing Solutions for their staffing needs.",
// };

// export default function WhyChooseUsPage() {
//   return (
//     <main className="min-h-screen bg-white">
      
//       {/* Hero Section - WHY USE COMPLETE STAFFING SOLUTIONS */}
//       <section className="py-16 md:py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
            
//             {/* Left Side - Text Content */}
//             <div>
//               <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//                 WHY USE COMPLETE STAFFING SOLUTIONS?
//               </h1>
              
//               <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
//                 At Complete Staffing Solutions, we pride ourselves on our proven approach and deep expertise in connecting businesses with skilled professionals. We understand that the right team drives success, which is why we've built our company on a foundation of quality, reliability, and personalized service. Our team is dedicated to understanding your specific requirements and delivering candidates who meet and exceed your expectations. When you partner with us, you gain more than a staffing service—you gain a strategic ally committed to your growth.
//               </p>
              
//               <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//                 We are committed to finding the perfect match for both employers and job seekers, ensuring long-term success for all parties. Our process is designed to reduce hiring risks, save time, and deliver the highest caliber of talent, tailored to your industry's unique needs.
//               </p>
//             </div>

//             {/* Right Side - Image */}
//             <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
//               <Image
//                 src="/images/why-choose-us-hero.jpg"
//                 alt="Business professionals"
//                 fill
//                 className="object-cover"
//                 unoptimized
//               />
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* Blue Section - WHY USE A STAFFING FIRM */}
//       <section className="py-16 md:py-20 bg-gradient-to-br from-blue-100 to-blue-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           {/* WHY USE A STAFFING FIRM */}
//           <div className="mb-12">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//               WHY USE A STAFFING FIRM
//             </h2>
//             <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//               In today's fast-paced business environment, finding and retaining the right talent can be a significant challenge. A staffing firm serves as a valuable partner in navigating these challenges, offering expertise, resources, and efficiency that in-house recruitment may not always achieve. By working with a staffing agency, businesses gain access to a broader talent pool, specialized industry knowledge, and the ability to respond quickly to changing workforce needs. Whether you need temporary support for seasonal demand, contract workers for specific projects, or permanent employees to strengthen your core team, staffing firms provide flexible solutions tailored to your unique requirements.
//             </p>
//           </div>

//           {/* We serve you values like */}
//           <div>
//             <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
//               We serve you values like...
//             </h3>
//             <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//               Our commitment goes beyond simply filling positions. We focus on understanding your company culture, operational goals, and long-term vision to ensure every candidate we place aligns with your values and contributes to your success. From rigorous screening processes to ongoing support and follow-up, we deliver a level of service that sets us apart in the staffing industry. With Complete Staffing Solutions, you can trust that we'll prioritize quality, compliance, and a seamless experience at every step.
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* Flexible Solutions Section - Cards with Images */}
//       <section className="py-16 md:py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-start">
            
//             {/* Left Side - Image */}
//             <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
//               <Image
//                 src="/images/flexible-solutions-team.jpg"
//                 alt="Team collaboration"
//                 fill
//                 className="object-cover"
//                 unoptimized
//               />
              
//               {/* Overlay Text */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
//                 <h2 className="text-3xl md:text-4xl font-bold text-white">
//                   FLEXIBLE SOLUTIONS
//                 </h2>
//               </div>
//             </div>

//             {/* Right Side - Three Cards */}
//             <div className="space-y-6">
              
//               {/* Card 1 - Temporary Placements */}
//               <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
//                 <div className="flex items-start gap-4">
//                   {/* Green Checkmark Icon */}
//                   <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
//                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
                  
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">
//                       Temporary Placements
//                     </h3>
//                     <p className="text-gray-700 leading-relaxed">
//                       Our temporary staffing is designed for short-term or seasonal needs that don't require a permanent hire. This option is ideal for covering employee absences, managing seasonal spikes, or testing candidates before making a long-term commitment.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Card 2 - Contract Placements */}
//               <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
//                 <div className="flex items-start gap-4">
//                   {/* Green Checkmark Icon */}
//                   <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
//                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
                  
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">
//                       Contract Placements
//                     </h3>
//                     <p className="text-gray-700 leading-relaxed">
//                       Contract staffing offers a balance of flexibility and expertise, perfect for project-based work or specialized roles with defined timelines. This solution helps you access skilled professionals for the duration you need them.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Card 3 - Direct Hire */}
//               <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
//                 <div className="flex items-start gap-4">
//                   {/* Green Checkmark Icon */}
//                   <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
//                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
                  
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">
//                       Direct Hire
//                     </h3>
//                     <p className="text-gray-700 leading-relaxed">
//                       When you're ready to bring talent directly onto your payroll, our direct hire service streamlines the process. We handle sourcing, screening, and presenting top candidates so you can focus on making the right choice for your team.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//             </div>

//           </div>
//         </div>
//       </section>

//       {/* CTA Section - Blue Background (Reused Component) */}
//       <section className="relative py-24 md:py-32 bg-gradient-to-r from-blue-600 to-blue-700">
//         {/* Background Image (Optional) */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center opacity-30"
//           style={{
//             backgroundImage: "url('/images/cta-background.jpg')",
//           }}
//         />
        
//         {/* Blue Overlay */}
//         <div className="absolute inset-0 bg-blue-600/80" />
        
//         {/* Content */}
//         <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10 leading-tight">
//             Connecting businesses with the<br />
//             best talent is our passion.
//           </h2>
          
//           <button className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
//             Find a Job Seeker
//           </button>
//         </div>
//       </section>

//     </main>
//   );
// }
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Page() {
  return <WhyChooseUs />;
}