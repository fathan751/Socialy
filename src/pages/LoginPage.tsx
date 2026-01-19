import { Camera } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import type { LoginFormTypes } from "@/types/login"
import UseLogin from "@/hooks/UseLogin"

const LoginPage = () => {


  const [form,setForm] = useState<LoginFormTypes>({
    email: "",
    password: ""
  })

  const [rememberMe,setRememberMe] = useState<boolean>(false)
  const handleRememberMe = (e:React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked)
  }

  const isFormVaild = form.email && form.password

  const {handleLogin,loading} = UseLogin()

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    
    const {name,value} = e.target

    setForm(prev => ({
      ...prev,
      [name]:value
    }))
    
  }

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()


    handleLogin({
      email:form.email,
      password:form.password,
      rememberMe
    })
  }

  return (
    <>
        <div className="w-screen h-screen grid grid-cols-2">
          {/* left */}
            <div className="flex justify-center items-center">
                <div className="flex flex-col max-w-xl px-4">
                    <div className="flex gap-3 items-center">
                        <div className="bg-linear-to-r from-[#2463eb] to-[#8249df] rounded-lg p-2">
                            <Camera size={25} className="text-white"/>
                        </div>
                        <span className="font-black text-2xl font-satoshi">Socialy</span>
                    </div>

                    <h1 className="font-black merriweather text-4xl mt-8">Welcome Back</h1>

                    <p className="font-medium text-gray-600 opacity-80 font-satoshi mt-2">Enter your credentials to access your account</p>

                    <form onSubmit={onSubmit} className="flex flex-col mt-2" autoComplete="off">
                        {/* Email */}
                        <div className="flex flex-col gap-2 mt-5">
                            <label htmlFor="email" className="font-medium">Email</label>
                            <input autoComplete="off" type="email" className="border rounded-xl w-full py-2 px-4" id="email" placeholder="you@example.com" name="email"
                               value={form.email} onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-2 mt-5">
                            <label htmlFor="password" className="font-medium">Password</label>
                            <input autoComplete="new-password" type="password" className="border rounded-xl w-full py-2 px-4" id="password" placeholder="••••••••" name="password" required
                                value={form.password} onChange={handleChange}
                            />
                        </div>
                        
                        <div className="mt-5 space-x-2">
                          <input type="checkbox" id="remember-me" checked={rememberMe} onChange={handleRememberMe}/>
                          <label htmlFor="remember-me" className="text-gray-500 text-[15px] font-satoshi">Remember me</label>
                        </div>

                        <Button
                        disabled={loading || !isFormVaild}
                        type="submit" className="mt-6 py-6 cursor-pointer bg-linear-to-r from-[#2463eb] to-[#8249df] from-10% to-60%">{loading?"Signing In...":"Sign in"}</Button>

                    </form>

                    <div className="flex gap-2 justify-center mt-10">
                        <span className="text-gray-500 font-medium">Don't Have an account?</span>
                        <Link to={"/register"} className="font-medium text-[#134dcc] hover:underline">Create One</Link>
                    </div>

                </div>
            </div>

          {/* Right */}
            <div className="relative">
              <div className="absolute inset-0 gradient-primary opacity-90"/>
              <img src="https://images.unsplash.com/photo-1767992225724-02410ec164e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" alt="Goa" className="absolute inset-0 object-cover w-full h-full mix-blend-multiply"/>
              <div className="inset-0 absolute w-full h-full flex justify-center items-center">
                <div className="text-center text-primary-foreground">
                      <h2 className="text-4xl font-serif font-bold mb-4">Join Our Community</h2>
                      <p className="text-lg opacity-90 max-w-md text-white">
                        Create an account and start sharing your unique perspective with the world.
                      </p>
                    </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default LoginPage