import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator";
import { LoginInputSatate, userLoginSchema } from "@/schema/userSchema";

import { Eye, EyeOff, Loader2, LockKeyhole, Mail } from "lucide-react"
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

//type define 
// type LoginInputState={
//     email:string;
//     password:string;
// }
const Login = () => {

    const [input, setInput] = useState<LoginInputSatate>({
        email: "",
        password: ""
    })
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [error, setError] = useState<Partial<LoginInputSatate>>({});
    const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value })
    }

    const loginSubmitHandler = (e: FormEvent) => {
        e.preventDefault();
        const result = userLoginSchema.safeParse(input);
        if (!result.success) {
            const fieldError = result.error.formErrors.fieldErrors;
            setError(fieldError as Partial<LoginInputSatate>)
            return

        }
        // login api implementation
        console.log(input);
    }
    const togglePasswordVisibility = ()=>{
        setShowPassword(!showPassword)
    }
    const loading =false;

    return (
        <div className="flex items-center justify-center min-h-screen p-5 ">
            <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md md:border border-gray-200 rounded-lg mx-4">
                <div className="mb-4">
                    <h1 className="font-bold text-2xl text-center">EazyEats</h1>
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
                        <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                        {error && <span className="text-sm text-red-500">{error.email}</span>}
                    </div>
                </div>

                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type={showPassword?"text":"password"}// Toggle between 'text' and 'password' based on state
                            placeholder="Password"
                            name="password"
                            value={input.password}
                            onChange={changeEventHandler}
                            className="pl-10 pr-10 focus-visible:ring-1"

                        />
                        <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                        <div
          onClick={togglePasswordVisibility}
          className="absolute inset-y-2 right-2  cursor-pointer"
        >
          {showPassword ? (
            <Eye className="text-gray-500" /> // Icon for hiding password
          ) : (
            <EyeOff className="text-gray-500" /> // Icon for showing password
          )}
        </div>

                        {error && <span className="text-sm text-red-500">{error.password}</span>}
                    </div>
                </div>
                <div className="mb-10 ">
                    {
                        loading ? <Button disabled type="submit" className=" w-auto bg-orange hover:bg-hoverOrange"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please wait..</Button> : <Button className=" w-full bg-orange hover:bg-hoverOrange">Login</Button>
                    }
                    <Link to="/forgetpassword" className="text-sm text-gray-500 hover:underline mt-2 block">Forget Password?</Link>
                </div>
                <Separator />
                <p className="mt-2 text-center">
                    Don't have an account?
                    <Link to="/signup" className="text-blue-500">SignUp</Link>
                </p>
            </form>
        </div>
    )
}

export default Login