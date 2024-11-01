import Link from "next/link";
export default function urus(){
    return(
        <div>
            <div className="text-center">

                <div className="text-black text-5xl font-bold py-2">Lamborghini Urus</div>
                <div className="flex justify-center items-center py-10 px-10">
                    <img src="./download-5.jpng" alt="Lamborghini Urus" width="420" className="border-black" />
                </div>
                <div>

                    <span className="py-5 px-5">Lamborghini URUS is the first Super Sports Utility Vehicle in the World.Powered by Lamborghini's 4.0-liter twin turbo V8 engine and in the case of the URUS SE a powerful electric motor. </span>
                </div>
                <div className="text-3xl text-green-500 font-semibold py-2 px-2">
                    <span>
                        PKR 7,999,000
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