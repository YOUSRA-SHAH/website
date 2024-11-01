import Link from "next/link";
export default function Payment(){
    return(
        <div>
            <h1 className="text-5xl font-bold text-center uppercase">
                Enter Your Details
            </h1>
        <div>
        <form className=" mt-10 flex gap-5 justify-center items-center flex-col">
            <input type="text" className="border-orange-800 py-2 w-2/6 text-black rounded-2xl" placeholder="Enter Your Name" />
            <input type="email" className="border-orange-800 py-2 w-2/6 text-black rounded-2xl" placeholder="Enter Your Email" />
            <input type="Password" className="border-orange-800 py-2 w-2/6 text-black rounded-2xl" placeholder="Enter Your Password" />
            <input type="Password" className="border-orange-800 py-2 w-2/6 text-black rounded-2xl" placeholder="Enter Your Card Number" />
            <input type="Password" className="border-orange-800 py-2 w-2/6 text-black rounded-2xl" placeholder="Enter Your PIN" />
            <Link href="/thanks">
            <button className="bg-blue-900 text-white rounded-lg py-3 px-7">
               
                Pay Now
                </button>
                </Link>
              

        </form>
     </div>
     </div>
    )
}
