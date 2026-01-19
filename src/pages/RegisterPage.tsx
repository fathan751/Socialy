import { Camera,Check} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import React, { useState } from "react"
import { toast } from "sonner"
import type { RegisterFormTypes } from "@/types/register"
import UseRegister from "@/hooks/UseRegister"


const RegisterPage = () => {

    const {handleRegister,loading} = UseRegister()

    const [form,setForm] = useState<RegisterFormTypes>({
        name: "",
        username: "",
        email: "",
        password: "",
        passwordRepeat: "",
        phoneNumber: "",
        profilePictureUrl: "https://photo-sharing-api-bootcamp.do.dibimbing.id/images/1767762822906-dummy-profile.png"
    })

    const passwordRequirement = [
            {label:"At least 8 characters",met: form.password.length >= 8},
            {label:"Contains a number", met: /\d/.test(form.password)},
            {label:"Contains a Special Char(!@$~)", met: /[^a-z0-9]/i.test(form.password)},
            {label:"Contains a Capital letter", met: /[A-Z]/.test(form.password)},
        ]

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        let hasError = false

        if(form.password!==form.passwordRepeat){
            hasError = true
            toast.error("Password is not match")
        }

        const payload = form

        if(hasError) return

        handleRegister(payload)

    }

  return (
    <>
        <div className="w-screen h-screen grid lg:grid-cols-2">
            <div className="hidden lg:block flex-1 relative">
                <div className="absolute inset-0 gradient-primary opacity-90"/>
                <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=1200&fit=crop" alt="Friends Connecting" className="absolute inset-0 object-cover w-full h-full mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="text-center text-primary-foreground">
                      <h2 className="text-4xl font-serif font-bold mb-4">Join Our Community</h2>
                      <p className="text-lg opacity-90 max-w-md text-white">
                        Create an account and start sharing your unique perspective with the world.
                      </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div className="flex flex-col max-w-xl px-4">
                    <div className="flex gap-3 items-center">
                        <div className="bg-linear-to-r from-[#2463eb] to-[#8249df] rounded-lg p-2">
                            <Camera size={25} className="text-white"/>
                        </div>
                        <span className="font-black text-2xl font-satoshi">Socialy</span>
                    </div>

                    <h1 className="font-black merriweather text-4xl mt-8">Create Account</h1>

                    <p className="font-medium text-gray-600 opacity-80 font-satoshi mt-2">Start your journey with Socialy today</p>

                    <form className="flex flex-col mt-2" onSubmit={onSubmit}>
                        {/* Fullname & username */}
                        <div className="flex gap-4 mt-6">
                            <div className="flex flex-col gap-2 ">
                                <label htmlFor="full-name" className="font-medium">Full Name</label>
                                <input autoComplete="name" type="text" className="border rounded-xl w-full py-2 px-4" placeholder="John Doe" id="full-name" name="name"
                                    value={form.name} onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2 ">
                                <label htmlFor="username" className="font-medium">Username</label>
                                <input autoComplete="username" type="text" className="border rounded-xl w-full py-2 px-4" placeholder="johndoe" id="username" name="username"
                                    value={form.username} onChange={handleChange}
                                />
                            </div>
                        </div>
                        {/* Email */}
                        <div className="flex flex-col gap-2 mt-5">
                            <label htmlFor="phone-number" className="font-medium">Phone Number</label>
                            <input autoComplete="tel-national" type="text" className="border rounded-xl w-full py-2 px-4" id="phone-number" placeholder="1234567890" name="phoneNumber"
                                value={form.phoneNumber} onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-2 mt-5">
                            <label htmlFor="email" className="font-medium">Email</label>
                            <input autoComplete="email" type="email" className="border rounded-xl w-full py-2 px-4" id="email" placeholder="you@example.com" name="email"
                                value={form.email} onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-2 mt-5">
                            <label htmlFor="password" className="font-medium">Password</label>
                            <input autoComplete="new-password" type="password" className="border rounded-xl w-full py-2 px-4" id="password" placeholder="••••••••" name="password" required
                                value={form.password} onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-2 mt-5">
                            <label htmlFor="confirm-password" className="font-medium">Confirm-Password</label>
                            <input autoComplete="new-password" type="password" className="border rounded-xl w-full py-2 px-4" id="confirm-password" placeholder="••••••••" name="passwordRepeat" required
                                value={form.passwordRepeat} onChange={handleChange}
                            />
                        </div>

                        {/* detect password correct */}
                        <div className="flex flex-col gap-1 mt-3">
                            {passwordRequirement.map((req,index) => (
                                <div key={index} className="flex gap-2 items-center">
                                    <Check size={15} className={`${req.met?`bg-green-500 text-white`:`bg-gray-200 text-gray-200`} rounded-full bg-clip-content `}/>
                                    <span className={`text-sm ${req.met?`text-black`:`text-gray-500`} font-medium tracking-wide`}>{req.label}</span>
                                </div>
                            ))}
                        </div>

                        <Button
                            disabled={loading || !passwordRequirement.every( r => r.met)}
                        className="mt-6 py-6 cursor-pointer bg-linear-to-r from-[#2463eb] to-[#8249df] from-10% to-60%"
                        type="submit"
                        >Create Account</Button>

                    </form>

                    <div className="flex gap-2 justify-center mt-10">
                        <span className="text-gray-500 font-medium">Already Have an account?</span>
                        <Link to={"/login"} className="font-medium text-[#134dcc] hover:underline">Sign in</Link>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default RegisterPage