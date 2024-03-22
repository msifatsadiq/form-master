import { useState } from "react";

const StatefulForm = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);
    const [error, setError] = useState('');


    const handelSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be 6 or more character')
        } else {
            setError('');
            console.log(name, email, password);
        }

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
                <input onChange={handelPasswordChange} type="password" name="password" required />
                <br />
                <input type="submit" value="Submit" />

            </form>
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default StatefulForm;