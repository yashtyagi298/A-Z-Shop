import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";


const VerifyEmail = () => {
    const [otp,setOtp]=useState<string[]>(["","","","","",""]);
    const inputRef = useRef<any>([]);
    const navigate=useNavigate();
    const [loading,setLoading]= useState<boolean>(true)
    const handleChange=(index:number,value:string)=>{
        if(/^[a-zA-Z0-9]$/.test(value)|| value ===""){
            const newOtp= [...otp];
            newOtp[index]=value;
            setOtp(newOtp);
        }
        // move to the next input field if a digit is entered
        if(value !== "" && index<5){
            inputRef.current[index+1].focus();
        }
    }
        // Handle keyDown to detect Backspace press
const handleKeyDown=(index:number,event:React.KeyboardEvent<HTMLInputElement>)=>{
  if(event.key ==="Backspace" && otp[index]==="" &&index>0){
    inputRef.current[index-1].focus();
}
};
    
  return ( 
   <div className="flex items-center justify-center min-h-screen w-full p-5">
    <div className="p-8 rounded-md w-full max-w-md flex-col gap-10 border border-gray-200">
        <div className="text-center">
            <h1 className="font-bold text-2xl">Verify Your Email</h1>
            <p className="text-sm text-gray-600">Enter the 6 digit code sent to your email address</p>
        </div>
        <form>
            <div className=" flex justify-between my-6 ">
              {
               otp.map((letter:string,idx:number)=>(
                <Input 
                type="text"
                key={idx}
                value={letter}
                ref={(e)=>(inputRef.current[idx]=e)}
                maxLength={1}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleChange(idx,e.target.value)}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(idx,e) }
                className="md:w-13 md:h-13 w-10 h-10 text-center text-lg font-semibold md:text-2xl  md:font-bold  rounded-lg focus:outline-none focus:ring-2  focus:ring-indigo-500"
                />
               ))
              }
            </div>
            {
                loading?(<Button disabled className="bg-orange hover:bg-hoverOrange w-full "><Loader2 className="animate-spin w-4 h-4 mr-2"></Loader2>Please wait...</Button>)
                :(<Button className="bg-orange hover:bg-hoverOrange w-full">Verify</Button>)
            }
        </form>
    </div>
   </div>
  )
}


export default VerifyEmail