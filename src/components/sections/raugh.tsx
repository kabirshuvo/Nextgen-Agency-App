// // about section code:
// // return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex space-x-4 border-b-2">
//         <button
//           className={`py-2 px-4 ${
//             selectedTab === "about" ? "border-b-2 border-blue-500" : ""
//           }`}
//           onClick={() => setSelectedTab("about")}
//         >
//           About Us
//         </button>
//         <button
//           className={`py-2 px-4 ${
//             selectedTab === "services" ? "border-b-2 border-blue-500" : ""
//           }`}
//           onClick={() => setSelectedTab("services")}
//         >
//           Services
//         </button>
//         <button
//           className={`py-2 px-4 ${
//             selectedTab === "experience" ? "border-b-2 border-blue-500" : ""
//           }`}
//           onClick={() => setSelectedTab("experience")}
//         >
//           Experience
//         </button>
//       </div>

//       <div className="mt-4">
//         {selectedTab === "about" && (
//           <div className="space-y-4">
//             {servicesData[0].data.map((info, index) => (
//               <div key={index} className="flex flex-col space-y-2">
//                 {isAboutDataItem(info) ? (
//                   <>
//                     <div className="text-lg font-semibold">
//                       Company: {info.companyName}
//                     </div>
//                     <div>Country: {info.registeredCountry}</div>
//                     <div>Established: {info.establishedAt}</div>
//                   </>
//                 ) : null}
//               </div>
//             ))}
//           </div>
//         )}

//         {selectedTab === "services" && (
//           <div className="space-y-4">
//             {servicesData[1].data.map((service, index) => (
//               <div key={index}>
//                 {isServiceDataItem(service) ? (
//                   <>
//                     <h3 className="text-xl font-semibold">{service.service}</h3>
//                     <p>{service.description}</p>
//                   </>
//                 ) : null}
//               </div>
//             ))}
//           </div>
//         )}

//         {selectedTab === "experience" && (
//           <div className="space-y-4">
//             {experiencesData.map((experience, index) => (
//               <div key={index} className="flex flex-col space-y-2">
//                 <h3 className="text-xl font-semibold">{experience.title}</h3>
//                 {experience.data.map((item, itemIndex) => (
//                   <div key={itemIndex} className="flex flex-col space-y-2">
//                     {"name" in item && <div>{item.name}</div>}
//                     {"yearsOfExperience" in item && (
//                       <div>{item.yearsOfExperience}</div>
//                     )}
//                     {"happyClients" in item && <div>{item.happyClients}</div>}
//                     {"imagePath" in item && (
//                       <div className="w-10 h-10">
//                         <Image
//                           src={item.imagePath}
//                           alt="tool"
//                           width={40}
//                           height={40}
//                         />
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
