import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { Loader2, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";




const ForgotPassword = () => {
    const [email,setEmail]= useState<string>("");
    const [loading,setLoading]= useState<boolean>(false);
    return (
        <div className="flex item-center justify-center  w-full " >
            <form className="flex flex-col gap-5 md:border md:p-8 w-full max-w-md rounded-lg mx-4">
              <div className="text-center ">
            <h1 className="font-extrabold text-2xl mb-2">Forget Password</h1>
            <p className=" text-small text-gray-600">Enter your email address to reset your password</p>
              </div>
            <div className="relative w-full">
                <Input
                type="text"
                value={email}//inital value which is empty string 
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter your email"
                className="pl-10"
                />
                <Mail className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none"/>
            </div>
            {
                loading?(<Button  disabled className=" bg-orange hover:bg-hoverOrange "><Loader2 className="mr-2 h-4 w-4 animate-spin "></Loader2>Please wait...</Button>)
                :(
                 <Button className="bg-orange hover:bg-hoverOrange " >Send Reset link</Button>   
                )
            }
           <Separator/>
            <span>
                Back to {" "}
                <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
            </span>
            </form>
        </div>
    )
}

export default ForgotPassword;