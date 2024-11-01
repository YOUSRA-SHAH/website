import Link from "next/link";
export default function cultus(){
    return(
        <div>
            <div className="text-center">
                <div className="text-black text-5xl font-bold py-2">Suzuki Cultus 2025</div>
                <div className="flex justify-center items-center py-10 px-10">
                    <img src="./download-3.jpng" alt="Honda Civic" width="420" className="border-black" />
                </div>
                <div>

                    <span className="py-5 px-5">The Price of Suzuki Cultus 2024 in Pakistan ranges from PKR 8,659,000 for the base variant Oriel to PKR 9,899,000 for the top variant.These Prices of Honda Civic in Pakistan are ex-factory.</span>
                </div>

                <div className="text-3xl text-green-500 font-semibold py-2 px-2">
                    <span>
                        PKR 9,899,000
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