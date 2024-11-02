import { useState } from "react"
import { Input } from "./input"
import { Search } from "lucide-react";
import { Button } from "./button";
import Heroimage from "../../assets/hero_pizza.png"


const HeroSection = () => {
    const [searchText, setSearchText] = useState<string>("");
    return (
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg items-start justify-center m-4 gap-10 ">
            {/* <!-- Text Section --> */}
            <div className="flex flex-col gap-5 md:w-[40%] md:mt-32">
                <div className="flex flex-col gap-5 r">
                    <h1 className="font-bold md:font-extrabold md:text-5xl text-4xl ">
                        Order Food anytime & anywhere
                    </h1>
                    <p className="text-gray-500 text-base">Hey! Our Delicious food is waiting for you , we are always near to You.</p>
                </div>
                <div className="relative flex items-center gap-2 w-full">
                   
                    <Input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder=""
                        className="pl-10 shadow-lg"
                    />
                    <Search className="text-gray-600 absolute inset-y-2 left-2"/>
               
                <Button className="bg-orange hover:bg-hoverOrange shadow-lg">Search</Button>
                </div>


            </div>
            <div>
                <img src={Heroimage} alt="" 
                className="object-cover max-h-[500px]  w-full"></img>
            </div>

        </div>


    )
}

export default HeroSection