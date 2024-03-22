import { useState } from "react";

const StatefulForm = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);


    const handelSubmit = e => {
        e.preventDefault();
        console.log(name, email, password);

    }

    const handelEmailChange = e => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handelPasswordChange = e => {
        setPassword(e.target.value);
    }
    const handelNameChange = e => {
        setName(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input onChange={handelNameChange} type="text" name="name" />
                <br />
                <input onChange={handelEmailChange} type="email" name="email" />
                <br />
                <input onChange={handelPasswordChange} type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default StatefulForm;