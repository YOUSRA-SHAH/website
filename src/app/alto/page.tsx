import Link from "next/link";
export default function corolla(){
    return(
        <div>
            <div className="text-center">

                <div className="text-black text-5xl font-bold py-2">Suzuki Alto 2025</div>
                <div className="flex justify-center items-center py-10 px-10">
                    <img src="./download-1.jpng" alt="Suzuki Alto" width="420" className="border-black" />
                </div>
                <div>

             <span className="py-5 px-5"> The 2024 Suzuki Alto is Priced between PKR 2,335,000 and 3,555,000, depending on the variant. The Lowest variant, the Alto VX, starts at around PKR 3,334,000, while the highest variant, the Alto VXL AGS,  goes up to 3,000,000.</span>
                </div>

                <div className="text-3xl text-green-500 font-semibold py-2 px-2">
                    <span>
                        PKR 3,000,000
                    </span>
                    </div>

                    <button className="bg-blue-800 text-black rounded-3xl py-2 px-2">
                    <link href="/Payment">
                    MAKE PAYMENT
                    </link>
                    </button>
                </div>
            </div>
        
    )
}