import  styles from "./App.module.scss"
import { LoginBox } from "./componentes/LoginBox"
import { MessageList } from "./componentes/MessageList"
export function App() {
  return (
    <main className={styles.contentWrapper}>
      <MessageList />
      
      <LoginBox/>
    </main>
      
  )
}
