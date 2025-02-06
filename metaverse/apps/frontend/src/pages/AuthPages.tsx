import { Auth } from "../components/Auth"


export const Signin = ()=> {
    return <div className="grid grid-cols-1 lg:grid-cols-1">
        <div>
            <Auth type="signin"/>
        </div>
    </div>
}

export const Signup = ()=> {
    return <div className="grid grid-cols-1 lg:grid-cols-1">
        <div>
            <Auth type="signup"/>
        </div>
    </div>
}