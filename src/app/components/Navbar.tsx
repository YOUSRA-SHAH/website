export default function Navbar(){
    
    return(
        <div>
        <nav className="flex w-full bg-black h-32">


            <div className="justify-center w-1/5 items-center">
                <img src="./logo.png" alt="logo" className="w-32 h-200"/>
                </div> 


                    <div className="flex justify-center text-white items-center w-4/5">
                    <div className="flex gap-8">
                        
                        <div className="">NEW CARS</div>
                        <div className="">USED CARS</div>
                        <div className="">SERVICE</div>
                        <div className="">About US</div>
                        <div className="">FORUMS</div>
                        <div className="">BLOG</div>
                        <div className="">BIKES</div>
                        <div className="">MORE</div>
                    <div>
                        <form className="flex gap-5 justify-center items-center">
                            <button className="py-5 px-7 justify-center rounded-lg bg-orange-700">Post an Add</button>
                        </form>
                    </div>

                    </div>

                </div>
            </nav>
        </div>
    )
}