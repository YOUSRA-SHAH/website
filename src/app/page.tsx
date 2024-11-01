import Link from "next/link";
export default function Home() {
  return (
    <main> 
      <div>
       <h1 className="text-5xl text-center font-bold py-16 px-16">
        SELL YOUR CAR AND GETS THE BEST PRICE
       </h1>

       <div className="py-10 px-10">
      <h1 className="text-3xl text-blue-700">Post your Add on PakWheels.</h1>
      <p>.Post Your Add For Free in 3 Easy Steps</p>
      <p>.Get Genuine Offers From Verified Buyers</p>
      <p>.Sell Your Cars At The Best Price</p>
      <button className="bg-purple-600 rounded-xl py-2 px-2">POST YOUR ADD</button>
       <br/>
       </div>
       <div className="font-semibold text-5xl text-gray-500">
        <h1>OR</h1>
       </div>
       <div className="py-10 px-10">
        <h1 className="text-3xl text-blue-600">Try Sell It For Me</h1>
        <p>.Dedicated Sales Expert to Sell Your Car</p>
        <p>.We Bergain for You And Share The Best Offer</p>
        <p>.We Ensure Safe & transaction</p>
        <button className="bg-yellow-600 rounded-xl py-2 px-2">REGISTER YOUR CAR</button>
       </div>
      </div>
      <div>
        <nav>
          <div>
            <div className="text-xl font-bold text-center">Featured New Cars</div>
            <div className="flex justify-start items-start bg-slate-400 border-black">
              <div className="py-2 px-10">POPULAR</div>
              <div className="py-2 px-10">UPCOMING</div>
              <div className="py-2 px-10">NEWLY LAUNCHED</div>
              <div className="py-2 px-10">New Cars by Make</div>
              <div className="py-2 px-10">New Cars by Category</div>
              <div className="py-2 px-10">Cars Insurance Company</div>
              

            </div>


          </div>
        </nav>
      </div>


      <div>

        <div className="bg-white py-4 px-4 h-96 flex justify-between">
          <div className="border-black bg-slate-500 w-40 h-64 py-2 px-2 rounded-xl">
            <Link href="/alto">
            <img src=".\download-1.jpng" width="220" />
            <div className="text-semibold text-blue-500 text-xl">
            Suzuki Alto
            </div>
            <div className="text-xl text-green-500">
              PKR 3,000,000
            </div>
            </Link>
          </div>

          <div className="bg-white py-4 px-4 h-96 flex justify-between">
          <div className="border-black bg-slate-500 w-40 h-64 py-2 px-2 rounded-xl">
            <Link href="/corolla">
            <img src=".\download-2.jpng" width="220" />
            <div className="text-semibold text-blue-500 text-xl">
              Suzuki Wagon R
              </div>
            <div className="text-xl text-green-500">
              PKR 321-37.4Lacs
            </div>
            </Link>
          </div>
          </div>

          <div className="bg-white py-4 px-4 h-96 flex justify-between">
          <div className="border-black bg-slate-500 w-40 h-64 py-2 px-2 rounded-xl">
            <Link href="/cultus">
            <img src=".\download-3.jpng" width="220" />
            <div className="text-semibold text-blue-500 text-xl">
              Suzuki Cultus
            </div>
           <div className="text-xl text-green-500">
            PKR 9,450,000
           </div>
            </Link>
          </div>
          </div>

          <div className="bg-white py-4 px-4 h-96 flex justify-between">
          <div className="border-black bg-slate-500 w-40 h-64 py-2 px-2 rounded-xl">
            <Link href="/swift">
            <img src=".\download-4.jpng" width="220" />
            <div className="text-semibold text-blue-500 text-xl">
              Suzuki Swift
            </div>
            <div className="text-xl text-green-500">
              PKR 5,353,000
            </div>
            </Link>
          </div>
          </div>

          <div className="bg-white py-4 px-4 h-96 flex justify-between">
          <div className="border-black bg-slate-500 w-40 h-64 py-2 px-2 rounded-xl">
            <Link href="/Urus">
            <img src=".\download-5.jpng" width="220" />
            <div className="text-semibold text-blue-500 text-xl">
              Lamborghini Urus
            </div>
            <div className="text-xl; text-green-500">
              PKR 70,999,000
            </div>
            </Link>
          </div>
          </div>

        </div>
      </div>

      
      </main>
  );
}
