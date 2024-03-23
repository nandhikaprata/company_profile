import Image from "next/image";

export default function Home() {
  return (
    <main >
      
    {/*  Home*/}
      <div className="py-12 sm:py-24 bg-gray-900">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                SecureCloud Backup Solution
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
                Introducing our cutting-edge SecureCloud Backup Solution, the ultimate safeguard for your critical data.
                In today's rapidly evolving IT landscape, data security and disaster recovery have never been more
                crucial.
            </p>
           
        </div>
        <div className="mt-10 flow-root sm:mt-20">
            <div
                className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
               <Image
           
            src="/image/company1.jpg"
            width="2432" height="1442" className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
            alt="Picture of the author"
          />
                
            </div>
        </div>
    </div>
</div>
{/* overview */}
<ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 bg-gray-900">
    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                <span className="mb-1 block text-sm leading-6 text-indigo-500">History</span>Completely unstyled, fully
                accessible UI components</h3>
            <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                <p>Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind
                    CSS.</p>
            </div>
        </div>
        <Image
           
            src="/image/company1.jpg"
            width="1216" height="640" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
            alt="Picture of the author"
          />
         
    </li>
    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                <span className="mb-1 block text-sm leading-6 text-purple-500">Teams</span>Beautiful hand-crafted SVG
                icons, by the makers of Tailwind CSS.</h3>
            <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                <p>A set of 450+ free MIT-licensed SVG icons. Available as basic SVG icons and via first-party React and
                    Vue libraries.</p>
            </div>
        </div> 
        <Image
           
            src="/image/company1.jpg"
            width="1216" height="640" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
            alt="Picture of the author"
          />
    </li>
    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                <span className="mb-1 block text-sm leading-6 text-cyan-500">Cultures</span>Seamless SVG background
                patterns by the makers of Tailwind CSS.</h3>
            <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                <p>A collection of over 100 free MIT-licensed high-quality SVG patterns for you to use in your web
                    projects.</p>
            </div>
        </div> 
        <Image
           
            src="/image/company1.jpg"
            width="1216" height="640" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
            alt="Picture of the author"
          />
    </li>
</ul>
     

{/* Services */}
<div className="pt-5 bg-gray-900" id="pricing">
  <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-4xl text-center">
      <h1 className="text-base font-semibold leading-7 text-indigo-400">Services</h1>
      <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Whether it's just you, or your entire
        team - we've got you covered.</p>
    </div>
    <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">Choose the product that works best</p>
    <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {/* <!-- First Product --> */}
      <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
        <div className="flex items-center justify-between gap-x-4">
          <h2 id="product1" className="text-lg font-semibold leading-8 text-white">Product Type 1</h2>
        </div>
        <p className="mt-4 text-sm leading-6 text-gray-300">Product details for Product Type 1</p>
        <p className="mt-6 flex items-baseline gap-x-1">
          <span className="text-4xl font-bold tracking-tight text-white">€ 10 / unit</span><span className="text-sm font-semibold leading-6 text-gray-300"></span>
        </p>
        <a href="/order" aria-describedby="product1"
          className="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Order
          Now</a>
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>40 units</li>
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>1 feature</li>
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>Fast delivery</li>
        </ul>
      </div>

      {/* <!-- Second Product --> */}
      <div className="bg-white/5 ring-2 ring-indigo-500 rounded-3xl p-8 xl:p-10">
        <div className="flex items-baseline justify-between gap-x-4">
          <h2 id="product2" className="text-lg font-semibold leading-8 text-white">Product Type 2</h2>
          <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">Most popular</p>
        </div>
        <p className="mt-4 text-sm leading-6 text-gray-300">The most popular choice. Product details for Product Type 2</p>
        <p className="mt-6 flex items-baseline gap-x-1">
          <span className="text-4xl font-bold tracking-tight text-white">€ 20 / unit</span><span className="text-sm font-semibold leading-6 text-gray-300"></span>
        </p>
        <a href="/order" aria-describedby="product2"
          className="bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Order
          Now</a>
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>120 units</li>
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>3 different features</li>
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>Fast delivery</li>
        </ul>
      </div>

      {/* <!-- Third Product --> */}
      <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
        <div className="flex items-center justify-between gap-x-4">
          <h2 id="product3" className="text-lg font-semibold leading-8 text-white">Product Type 3</h2>
        </div>
        <p className="mt-4 text-sm leading-6 text-gray-300">Product details for Product Type 3</p>
        <p className="mt-6 flex items-baseline gap-x-1">
          <span className="text-4xl font-bold tracking-tight text-white">€ 50 / unit</span><span className="text-sm font-semibold leading-6 text-gray-300"></span>
        </p>
        <a href="/order" aria-describedby="product3"
          className="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Order
          Now</a>
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>240 units</li>
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>6 different features</li>
          <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true" className="h-6 w-5 flex-none text-white">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"></path>
            </svg>Fast delivery</li>
        </ul>
      </div>
    </div>
  </div>
</div>

    {/* testimonials */}
    <section id="testimonies" className="py-20 bg-slate-900">
    <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
    
    <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="mb-12 space-y-5 md:mb-16 md:text-center">
                <div
                    className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                    Words from Others
                </div>
                <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
                    It's not just us.
                </h1>
                <p className="text-xl text-gray-100 md:text-center md:text-2xl">
                    Here's what others have to say about us.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <ul className="space-y-8">
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/kanyewest" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4">
                                <Image
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West"
                                        src="/image/company1.jpg"
                                        width={1000}
                                        height={1000}
                                        
                                />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Kanye West</h3>
                                        <p className="text-gray-500 text-md">Rapper &amp; Entrepreneur</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Find God.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/tim_cook" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4">
                                <Image
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West"
                                        src="/image/company1.jpg"
                                        width={1000}
                                        height={1000}
                                      
                                />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Tim Cook</h3>
                                        <p className="text-gray-500 text-md">CEO of Apple</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                                    fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                                    aliquam malesuada bibendum.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/kanyewest" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4">
                                <Image
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West"
                                        src="/image/company1.jpg"
                                        width={1000}
                                        height={1000}
                                       
                                />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Kanye West</h3>
                                        <p className="text-gray-500 text-md">Rapper &amp; Entrepreneur</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Find God.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/tim_cook" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4">
                                <Image
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West"
                                        src="/image/company1.jpg"
                                        width={1000}
                                        height={1000}
                                        
                                />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Tim Cook</h3>
                                        <p className="text-gray-500 text-md">CEO of Apple</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                                    fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                                    aliquam malesuada bibendum.</p>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>
            <ul className="space-y-8">
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/kanyewest" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4">
                                <Image
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West"
                                        src="/image/company1.jpg"
                                        width={1000}
                                        height={1000}
                                        
                                />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Kanye West</h3>
                                        <p className="text-gray-500 text-md">Rapper &amp; Entrepreneur</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Find God.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/tim_cook" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4">
                                <Image
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West"
                                        src="/image/company1.jpg"
                                        width={1000}
                                        height={1000}
                                      
                                />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Tim Cook</h3>
                                        <p className="text-gray-500 text-md">CEO of Apple</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                                    fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                                    aliquam malesuada bibendum.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/kanyewest" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4">
                                <Image
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West"
                                        src="/image/company1.jpg"
                                        width={1000}
                                        height={1000}
                                       
                                />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Kanye West</h3>
                                        <p className="text-gray-500 text-md">Rapper &amp; Entrepreneur</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Find God.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/tim_cook" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4">
                                <Image
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West"
                                        src="/image/company1.jpg"
                                        width={1000}
                                        height={1000}
                                        
                                />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Tim Cook</h3>
                                        <p className="text-gray-500 text-md">CEO of Apple</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                                    fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                                    aliquam malesuada bibendum.</p>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>
            <ul className="space-y-8">
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/kanyewest" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4">
                                <Image
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West"
                                        src="/image/company1.jpg"
                                        width={1000}
                                        height={1000}
                                        
                                />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Kanye West</h3>
                                        <p className="text-gray-500 text-md">Rapper &amp; Entrepreneur</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Find God.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/tim_cook" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4">
                                <Image
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West"
                                        src="/image/company1.jpg"
                                        width={1000}
                                        height={1000}
                                      
                                />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Tim Cook</h3>
                                        <p className="text-gray-500 text-md">CEO of Apple</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                                    fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                                    aliquam malesuada bibendum.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/kanyewest" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4">
                                <Image
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West"
                                        src="/image/company1.jpg"
                                        width={1000}
                                        height={1000}
                                       
                                />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Kanye West</h3>
                                        <p className="text-gray-500 text-md">Rapper &amp; Entrepreneur</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Find God.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/tim_cook" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4">
                                <Image
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West"
                                        src="/image/company1.jpg"
                                        width={1000}
                                        height={1000}
                                        
                                />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Tim Cook</h3>
                                        <p className="text-gray-500 text-md">CEO of Apple</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                                    fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                                    aliquam malesuada bibendum.</p>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </section>

    </main>
  );
}
