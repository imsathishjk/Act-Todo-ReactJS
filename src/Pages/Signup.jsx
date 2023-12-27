import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup(props) {
    const Navigate = useNavigate();

    const users = props.users;
    const setusers = props.setusers;
    const [eusername, setEusername] = useState("");
    const [euserpass, setEuserpass] = useState("");

    function handleUinput(event) {
        setEusername(event.target.value)
    }
    function hanldeUpassInput(event) {
        setEuserpass(event.target.value)
    }
    function addUser() {
        setusers([...users, { username: eusername, password: euserpass }])
        Navigate("/")
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md  ">
                <h1 className="text-3xl">Hey Hi</h1>
                <p>I help you here to manage your activities after you login :)</p>

                <div className="flex flex-col gap-2 my-2">
                    <input className="w-52 border-black p-1 bg-transparent border rounded-md" type="text" placeholder="Username" onChange={handleUinput} />
                    <input className="w-52 border-black p-1 bg-transparent border rounded-md" type="text" placeholder="Password" onChange={hanldeUpassInput} />
                    <input className="w-52 border-black p-1 bg-transparent border rounded-md" type="text" placeholder="ConfirmPassword" />
                    <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUser}>Signup</button>
                    <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
                </div>


            </div>


        </div>
    )
}
export default Signup