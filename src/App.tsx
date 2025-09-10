import "./App.css";
import AgeInfo from "./components/AgeInfo/AgeInfo";
import DogCard from "./components/DogCard/DogCard";
import Goodbye from "./components/Goodbye/Goodbye";
import Greeting from "./components/Greeting/Greeting";
import ProfileCard from "./components/ProfileCard/ProfileCard";

function App() {
  return (
    <>
      {/* <p>Hello, React</p> */}
      <Greeting />
      <DogCard />
      <ProfileCard
        avatar={
          "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
        }
        name={"Avatar"}
        description={
          "Figure: a white, faceless human silhouette—oval head with no features, short neck, broad rounded shoulders; torso as a rounded trapezoid—centered on a blue gradient square background."
        }
      />
      {/* Комментарий
      <Goodbye name={"Bob"}/>
      <Goodbye name={"John"}/>
      <AgeInfo age={23} name={"Andrey"} />
      <AgeInfo age={26} name={"Fred"}/> */}
    </>
  );
}

export default App;

// Создайте компонент, который выводит на экран фразу
// It was nice to see you!
// назовите компонент Goodbye
// 1. Создать папку под компонент
// 2. Создать в ней файл tsx с таким же имменем
// 3. Написать компонент - функиция
// 4. Воспользоваться компонентом - в другом месте программы
