import Link from 'next/link'
import LoginCard from "../src/components/loginCard/loginCard"
import styles from "../styles/Login.module.css"
import Input from "../src/components/input/input"
import Button from "../src/components/button/button"

export default function LoginPage() {
    return (
        <div className={styles.background}>
            <div className={styles.background}>
            <LoginCard title="Entre em sua conta">
                <form className={styles.form}>
                    <Input type="email" placeholder="Seu e-mail" />
                    <Input type="password" placeholder="Sua senha" />
                    <Button>Entrar</Button>
                    <Link href="/cadastro">Ainda não sou cadastrado!</Link>
                </form>                
            </LoginCard>
        </div>
        </div>
    )
}