import { useState } from "react"

const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
        isCheckbox: false,
    });

    const clearForm = () => {
        setForm({
            email: "",
            password: "",
            isCheckbox: false,
            })
    }

    const handleInput = (event) => {
        const { name, value, checked, type } = event.target.value;
        setForm((_form) => ({
            ..._form,
            [name]: type === "checkbox" ? checked : value,
        }));
    };
// cum legam input cu state? adaugam value care va lega input cu form handleInput 
    const handleSubmit = (event) => {
        event.preventDefault()
        alert({email, password})

        //clearForm()
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" value={form.email} onInput={handleInput}/>
                <input type="password" name="password"  value={form.password} onInput={handleInput}/>
                <input type="checkbox" name="isCheckbox" checked={form.isCheckbox} onInput={handleInput} />
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login