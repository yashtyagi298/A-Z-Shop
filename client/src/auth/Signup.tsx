import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator";
import { SignupInputSatate, userSignupSchema } from "@/schema/userSchema";
import { Eye, EyeOff, Loader2, LockKeyhole, Mail, PhoneCall, User } from "lucide-react"
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
//type define 
// type SignupInputState={
//     fullname:string,
//     email:string;
//     password:string,
//     contact:string,
// }

const Signup = () => {

  const [input ,setInput]=useState<SignupInputSatate>({
   fullname:"",
    email:"",
    password:"",
    contact:""  
  });
const [error , setError]= useState<Partial<SignupInputSatate>>({})
const [showPassword , setShowPassword]= useState<boolean>(false);
const togglePasswordVisibility=()=>{
    setShowPassword(!showPassword)
}
  const changeEventHandler=(e:ChangeEvent<HTMLInputElement>)=>{
   const {name,value}=e.target;
   setInput({...input,[name]:value})
  }
  const signupSubmitHandler= (e:FormEvent)=>{
        e.preventDefault();
        // form validation check start 
        const result = userSignupSchema.safeParse(input);
        if(!result.success){
            const failedError = result.error.formErrors.fieldErrors;
            setError(failedError as Partial<SignupInputSatate>)
            return ;
        }
        // signup api implementtation 
        console.log(input);
  }

    const loading= false;
    
    return ( 
        <div className="flex items-center justify-center min-h-screen p-5">
            <form onSubmit={signupSubmitHandler} className="md:p-8 w-full max-w-md md:border border-gray-200 rounded-lg mx-4">
                <div className="mb-4">
                    <h1 className="font-bold text-2xl text-center">EazyEats</h1>
                </div>
                <div className="mb-4">
                <div className="relative">
                    <Input
                        type="text"
                        placeholder="Full Name"
                        name="fullname"
                        value={input.fullname}
                        onChange={changeEventHandler}
                        className="pl-10 focus-visible:ring-1"

                    />
                    <User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"/>
                    {error && <span className="text-sm text-red-500">{error.fullname}</span>}
                </div>
                </div>

                <div className="mb-4">
                <div className="relative">
                    <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={input.email}
                        onChange={changeEventHandler}
                        className="pl-10 focus-visible:ring-1"

                    />
                    <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"/>
                    {error && <span className="text-sm text-red-500">{error.email}</span>}

                </div>
                </div>
                <div className="mb-4">
                <div className="relative">
                    <Input
                        type="text"
                        placeholder="Contact"
                        name="contact"
                        value={input.contact}
                        onChange={changeEventHandler}
                        className="pl-10 focus-visible:ring-1"

                    />
                    <PhoneCall className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"/>
                    {error && <span className="text-sm text-red-500">{error.contact}</span>}

                </div>
                </div> 

               <div className="mb-4">
               <div className="relative">
                    <Input
                        type={showPassword?"text":"password"}
                        placeholder="Password"
                        name="password"
                        value={input.password}
                        onChange={changeEventHandler}
                        className="pl-10 focus-visible:ring-1"

                    />
                    <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"/>
                    <div onClick={togglePasswordVisibility}className="absolute inset-y-2 cursor-pointer right-2">
                            {
                                showPassword?(
                                    <Eye className="text-gray-500"/>
                                ):(
                                    <EyeOff className="text-gray-500"/>
                                )
                            }
                    </div>
                    {error && <span className="text-sm text-red-500">{error.password}</span>}

                </div>
               </div>
                <div className="mb-10">
                    {
                        loading?<Button disabled type="submit" className=" w-auto bg-orange hover:bg-hoverOrange"><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait..</Button>:  <Button className=" w-full bg-orange hover:bg-hoverOrange">Signup</Button>
                    }
                   
                </div>
            <Separator/>
            <p className="mt-2 text-center">
                Already have an account?
                <Link to="/login" className="text-blue-500">Login</Link>
            </p>
            </form>
        </div>
    )
}

export default Signup