import Link from 'next/link'
import LoginCard from "../src/components/loginCard/loginCard"
import styles from "../styles/Login.module.css"
import Input from "../src/components/input/input"
import Button from "../src/components/button/button"

import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function LoginPage() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const [error, setError] = useState('')
    const router = useRouter()

    const handleFormEdit = (event, name) => {
        setFormData({
            ...formData,
            [name]: event.target.value
        })
    }

    const handleForm = async (event) =>{
        try{
            event.preventDefault()
            const response = await fetch(`/api/user/login`, {
                method: 'POST',
                body: JSON.stringify(formData)
            })

            const json = await response.json()
            if (response.status !== 200) throw new Error(json)

            setCookie('authorization', json)
            router.push('/')

        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className={styles.background}>
            <div className={styles.background}>
            <LoginCard title="Entre em sua conta">
                <form onSubmit={handleForm} className={styles.form}>
                    <Input type="email" placeholder="Seu e-mail" require value={formData.email} onChange={(e) => handleFormEdit(e, 'email')} />
                    <Input type="password" placeholder="Sua senha" require value={formData.password} onChange={(e) => handleFormEdit(e, 'password')} />
                    <Button>Entrar</Button>
                    {error && <p className={styles.error}>{error}</p>}
                    <Link href="/cadastro">Ainda não sou cadastrado!</Link>
                </form>                
            </LoginCard>
        </div>
        </div>
    )
}