import './App.css'
import AgeInfo from './components/AgeInfo/AgeInfo'
import Goodbye from './components/Goodbye/Goodbye'
import Greeting from './components/Greeting/Greeting'

function App() {
  return (
    <>
      <p>Hello, React</p>
      <Greeting />
      {/* Комментарий */}
      <Goodbye name={"Bob"}/>
      <Goodbye name={"John"}/>
      <AgeInfo age={23} name={"Andrey"} />
      <AgeInfo age={26} name={"Fred"}/>
    </>
  )
}

export default App

// Создайте компонент, который выводит на экран фразу
// It was nice to see you!
// назовите компонент Goodbye
// 1. Создать папку под компонент 
// 2. Создать в ней файл tsx с таким же имменем
// 3. Написать компонент - функиция
// 4. Воспользоваться компонентом - в другом месте программы
