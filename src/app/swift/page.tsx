import Link from "next/link";
export default function swift(){
    return(
        <div>
            <div className="text-center">

                <div className="text-black text-5xl font-bold py-2">SUZUKI Swift 2025</div>
                <div className="flex justify-center items-center py-10 px-10">
                    <img src="./download-4.jpng" alt="SUZUKI Swift" width="420" className="border-black" />
                </div>
                <div>

                    <span className="py-5 px-5">The Price of SUZUKI Swift 2024 in Pakistan ranges from PKR 4 ,654,000 FOR THE BASE VARIANT GL Manual to PKR 4,757,000 for the top variant. These Prices of SUZUKI Swift in Pakistan are ex-factory.</span>
                </div>
                <div className="text-3xl text-green-500 font-semibold py-2 px-2">
                    <span>
                        PKR 4,654,000
                    </span>
                </div>

                <button className="bg-blue-800 text-black rounded-3xl py-2 px-2">
                    <Link href="/Payment">
                    MAKE PAYMENT
                    </Link>
                </button>
            </div>
        </div>
    )
}