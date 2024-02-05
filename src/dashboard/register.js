import React, {useState} from 'react'

export default function Register() {
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const handleRegister = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();
        console.log(data);

        // You can handle success or error messages here
    } catch (error) {
        console.error('Error during registration:', error);
    }
    };


  return (
    <div>
        <form onSubmit={handleRegister}>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button type="submit">Register</button>
        </form>
    </div>
  )
}
