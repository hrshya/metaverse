import axios from "axios"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config";
import { MoveRight } from "lucide-react";


export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState({
        username: "",
        password: "",
        role: ""
    });

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        } catch(e) {
            alert("Error while signing up")
        }
    }
    
    return <div className="h-screen flex justify-center flex-col p-32">
        <div className="flex h-full flex-col items-center justify-between">
            <div>
                <div className="px-10">
                    <div className="text-6xl font-BaseNeue">
                        {type === "signup" ? "Create an Account" : "Login to Your Account"}
                    </div>
                    <div className="text-slate-500">
                        {type === "signin" ? "Don't have an account?" : "Already have an account?" }
                        <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                            {type === "signin" ? "Sign up" : "Sign in"}
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between p-16 w-[100%]">
                <div className="w-[50%]">
                        {type === "signup" ? 
                        <div className="relative mb-4 max-w-lg flex w-full flex-col rounded-full bg-white shadow">
                            <nav className="flex min-w-[240px] flex-row gap-1 p-2">
                            {/* Admin Option */}
                            <div
                                role="button"
                                className="flex w-full items-center rounded-full p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                            >
                                <label
                                htmlFor="admin-horizontal"
                                className="flex w-full cursor-pointer items-center px-3 py-2"
                                >
                                <div className="inline-flex items-center">
                                    <label
                                    className="relative flex items-center cursor-pointer"
                                    htmlFor="admin-horizontal"
                                    >
                                    <input
                                        name="role-horizontal"
                                        type="radio"
                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                                        id="admin-horizontal"
                                        value="Admin"
                                        onChange={(e) =>
                                        setPostInputs((prev) => ({
                                            ...prev,
                                            role: e.target.value,
                                        }))
                                        }
                                    />
                                    <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                                    </label>
                                    <label
                                    className="ml-2 text-slate-600 cursor-pointer text-sm"
                                    htmlFor="admin-horizontal"
                                    >
                                    Admin
                                    </label>
                                </div>
                                </label>
                            </div>
                        
                            {/* User Option */}
                            <div
                                role="button"
                                className="flex w-full items-center rounded-full p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                            >
                                <label
                                htmlFor="user-horizontal"
                                className="flex w-full cursor-pointer items-center px-3 py-2"
                                >
                                <div className="inline-flex items-center">
                                    <label
                                    className="relative flex items-center cursor-pointer"
                                    htmlFor="user-horizontal"
                                    >
                                    <input
                                        name="role-horizontal"
                                        type="radio"
                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                                        id="user-horizontal"
                                        value="User"
                                        onChange={(e) =>
                                        setPostInputs((prev) => ({
                                            ...prev,
                                            role: e.target.value,
                                        }))
                                        }
                                    />
                                    <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                                    </label>
                                    <label
                                    className="ml-2 text-slate-600 cursor-pointer text-sm"
                                    htmlFor="user-horizontal"
                                    >
                                    User
                                    </label>
                                </div>
                                </label>
                            </div>
                            </nav>
                        </div> : null}
                        <LabelledInput placeholder="Email" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                username: e.target.value
                            })
                        }} />
                        <LabelledInput type={"password"} placeholder="Passcode" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                password: e.target.value
                            })
                        }} />
                        <button onClick={sendRequest} type="button" className="w-full hover:shadow-lg active:shadow-lg focus:shadow-lg flex justify-between items-center text-white bg-[#000000] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-4 px-8 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Create Your Account" : "Login to Your Account"} <MoveRight /> </button>
                </div>
                <div className="text-3xl">
                    /
                </div>
                <div className="w-[45%]">
                    <LabelledInput placeholder="Email" onChange={(e) => e.target } />
                    <LabelledInput placeholder="Email" onChange={(e) => e.target } />
                    <LabelledInput placeholder="Email" onChange={(e) => e.target } />
                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType {
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-[#FFFFFF] mb-3 border border-[#EEEEEE] text-[#000000] hover:shadow-lg active:shadow-lg focus:shadow-lg outline-none placeholder-[#000000] font-medium text-sm rounded-full block w-full p-4 px-8" placeholder={placeholder} required />
    </div>
}