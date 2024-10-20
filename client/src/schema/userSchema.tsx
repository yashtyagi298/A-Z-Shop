import {z} from "zod"

export const userSignupSchema=z.object({
    fullname:z.string().min(1,"Fullname is required "),
    email:z.string().email("Invalid email address"),
    password:z.string()
    .min(6, { message: "Password must be at least 6 characters" }),
    contact:z.string().min(10,"contact must be 10 Digit")
});

export type SignupInputSatate= z.infer<typeof userSignupSchema>;

export const userLoginSchema=z.object({
   
    email:z.string().email("Invalid email address"),
    password:z.string()
    .min(6, { message: "Password must be at least 6 characters" })
    
 
   
});

export type LoginInputSatate= z.infer<typeof userLoginSchema>;

export const resetPassword = z.object({
    password:z.string()
    .min(6,"Password must be at least 6 characters")
    
    
})

export type resetPasswordState=z.infer<typeof resetPassword>;