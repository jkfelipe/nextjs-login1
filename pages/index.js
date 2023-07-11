import { getCookie } from 'cookies-next'
import { verifica } from '../services/user'

export default function Home() {

  return (
    <div>
      Página segura, perfil do usuário
    </div>
  )
}

export const getServerSideProps = async ({req, res}) => {
  try {
    const token = getCookie('authorization', {req, res})
    
    if(!token) throw new Error('Token Inválido')

    verifica(token)
    
    return{
      props: {}
    }

  } catch (error) {

    return{
      redirect: {
        permanent: false, 
        destination: '/login'
      },
      props: {}
    }
    
  }
}