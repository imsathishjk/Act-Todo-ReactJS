import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom";


function Login(props) {
    const navigate = useNavigate();

    const [eusername, setEusername] = useState("");
    const [euserpass, setEuserpass] = useState("");
    const [ruser, setruser] = useState(true);

    const users = props.users;

    function handleUinput(event) {
        setEusername(event.target.value)
    }
    function hanldeUpassInput(event) {
        setEuserpass(event.target.value)
    }
    function checkuser() {
        users.forEach(function (item) {
            if (item.username === eusername && item.password === euserpass) {
                console.log("Login Success")
                navigate("/Landing", { state: { user: eusername } })
            } else {
                setruser(false)
            }
        })
    }
    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md  ">
                <h1 className="text-3xl">Hey Hi</h1>
                {ruser ? <p>I help you here to manage your activities after you login</p> : <p className="text-red-500">Please signup before you login</p>}
                <div className="flex flex-col gap-2 my-2">
                    <input className="w-52 border-black p-1 bg-transparent border rounded-md" type="text" placeholder="Username" onChange={handleUinput} />
                    <input className="w-52 border-black p-1 bg-transparent border rounded-md" type="text" placeholder="Password" onChange={hanldeUpassInput} />
                    <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkuser}>Login</button>
                    <p>Don't have an account? <Link to={"/Signup"} className="underline">Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Login