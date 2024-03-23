import Image from "next/image";

Image
export default function Page(){
    return (
        <main >
      <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16">

<div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
    <a href="#"
        className="text-xl sm:text-4xl font-semibold inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">About us</a>

    <div className="relative">
        <a href="#">
        <Image
           
           src="/image/company1.jpg"
           width="2432" height="1442" className="w-full"
           alt="Picture of the author"
         />
        </a>
        

       

    </div>
    <p className="text-gray-300 py-5 text-base leading-8">
        Machu Picchu is a 15th-century Inca citadel situated on a mountain ridge 2,430 metres (7,970 ft) above sea
        level. It is located in the Cusco Region, Urubamba Province, Machupicchu District in Peru, above the Sacred
        Valley, which is 80 kilometres (50 mi) northwest of Cuzco and through which the Urubamba River flows.
    </p>
    

</div>

</div>
    </main>
       

    );
}