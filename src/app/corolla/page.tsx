import Link from "next/link";
export default function corolla(){
    return(
        <div>
            <div className="text-center">

                <div className="text-black text-5xl font-bold py-2">TOYOTA COROLLA X 2025</div>
                <div className="flex justify-center items-center py-10 px-10">
                    <img src="./download-2.jpng" alt="Corolla Car" width="420" className="border-black" />
                </div>
                <div>

                    <span className="py-5 px-5">This is Toyota Corolla X Car 2025. Good in Looks, Good in Moves!.The engine in Altis X Grande provides you an exhilarating 138 HP and 175 Nm of Torque. </span>
                </div>

                <div className="text-3xl text-green-500 font-semibold py-2 px-2">
                    <span>
                        PKR 7,555,000
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