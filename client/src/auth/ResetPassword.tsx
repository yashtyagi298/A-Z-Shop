import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { resetPassword, resetPasswordState } from "@/schema/userSchema";

import { Eye, EyeOff, Loader2, LockKeyhole,  } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";




const ResetPassword = () => {
    const [newPassword,setNewPassword]= useState<resetPasswordState>({
        password:""
    });
    const [loading,setLoading]= useState<boolean>(false);
    const [showPassword , setShowPassword]= useState<boolean>(false);
    const [error, setError] = useState<Partial<resetPasswordState>>({});
    const togglePasswordVisibility = ()=>{
        setShowPassword(!showPassword);
    }
    const changeEventHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setNewPassword({...newPassword,[name]:value})
    }
    const resetPasswordSubmitHandler =(e:FormEvent)=>{
        e.preventDefault();
        const result= resetPassword.safeParse(newPassword);
        if(!result.success){
            const fieldError = result.error.formErrors.fieldErrors;
            setError(fieldError as Partial<resetPasswordState>)
            return 
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen p-5" >
            <form onSubmit = {resetPasswordSubmitHandler}className="flex flex-col gap-5 md:border md:p-8 w-full max-w-md rounded-lg mx-4">
              <div className="text-center ">
            <h1 className="font-extrabold text-2xl mb-2">Reset Password</h1>
            <p className=" text-small text-gray-600">Enter your new password to reset old one</p>
              </div>
            <div className="relative w-full">
                <Input
                type={showPassword?"text":"password"}
                name="password"
                value={newPassword.password}//inital value which is empty string 
                onChange={changeEventHandler}
                placeholder="Enter your New Password"
                className="pl-10"
                />
               <LockKeyhole className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none"/>
               <div 
               onClick={togglePasswordVisibility}
               className="absolute inset-y-2 right-2  cursor-pointer">
                {showPassword?(
                    <Eye className="text-gray-500"/>
                ):(
                    <EyeOff className="text-gray-500"/>
                )}
               </div>
               {error.password && <span className="text-sm text-red-500">{error.password}</span>}
            </div>
            {
                loading?(<Button  disabled className=" bg-orange hover:bg-hoverOrange " type="submit"><Loader2 className="mr-2 h-4 w-4 animate-spin "></Loader2>Please wait...</Button>)
                :(
                 <Button className="bg-orange hover:bg-hoverOrange "type="submit" >Set Password</Button>   
                )
            }
           <Separator/>
            <span className="text-center">
                Back to {" "}
                <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
            </span>
            </form>
        </div>
    )
}

export default ResetPassword;