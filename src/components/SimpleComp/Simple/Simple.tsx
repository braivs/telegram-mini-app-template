import {Header} from "@/components/SimpleComp/Header.tsx"
import {Counter} from "@/components/SimpleComp/Counter.tsx"
import s from './Simple.module.css'

export const Simple = () => {
  return (
    <div className={s.component}>
        <Header />
        <Counter />
    </div>
  )
}