import { useContext } from "react"
import  styles from "./App.module.scss"
import { LoginBox } from "./componentes/LoginBox"
import { MessageList } from "./componentes/MessageList"
import { SendMessageForm } from "./componentes/SendMessageForm/index.tsx"
import { AuthContext } from "./context/auth"
export function App() {
  const { user } = useContext(AuthContext)
  return (
    
    <main className={`${styles.contentWrapper} ${!!user? styles.contentSigned: ''}`}>
      <MessageList />
      
      {!!user ? <SendMessageForm /> : <LoginBox />}
    </main>
      
  )
}
