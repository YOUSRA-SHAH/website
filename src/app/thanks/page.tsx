import Link from "next/link";
export default function Thanks(){
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-5xl font-bold text-blue-800 py-10 px-10">THANK YOU FOR YOUR ORDER!!</h1>
            <p className="text-xl"> Your Order will be delievered under 7 days of working.</p><br/>
            <button className="bg-blue-800 rounded-2xl text-black py-4 px-4">
                <Link href="/">
                CONTINUE SHOPPING
                </Link>
            </button>
        </div>
    )
}
