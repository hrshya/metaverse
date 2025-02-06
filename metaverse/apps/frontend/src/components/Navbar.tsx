
import { Link } from "react-router-dom"
import { Button } from "./ui/Button"


export const Navbar = () => {
  return (
    <div>
        <div className="flex justify-between items-center text-white">
            <h1 className= "tracking-tighter text-3xl font-SyneExtra">CONVO</h1>
            <div className="flex items-center gap-2">
                <ul className="flex items-center gap-16">
                    <li className="font-semibold">Product</li>
                    <li className="font-semibold">Solution</li>
                    <li className="font-semibold">Pricing</li>
                    <li className="font-semibold">Resources</li>
                    <li className="font-semibold">Contact</li>
                    <div className="flex gap-4">
                      <Button name="Get Started" />
                      <Link to={"/signin"} ><Button name="Signin" /></Link>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}
