import Logo from "./componets/Logo"
import ImagenHero from "./assets/images/intro.png"
import Imagen1 from "./componets/Imagen1"
import Imagen2 from "./componets/Imagen2"
import Imagen3 from "./componets/Imagen3"
import Imagen4 from "./componets/imagen4"

const App = () => { 
  return(
<div className="bg-[url('./assets/images/bg-desktop-desinhg')] bg-contain bg-no-repeat bg-gray-800 min-h-screen">
  <header className="container">
    <div className="flex justify-between">
      <button className="p-8"><Logo/></button>
      <div className=" flex  space-x-3 p-8 text-white">
        <p>Features</p>
        <p>Team</p>
        <p>Sing in</p>
      </div>
      
    </div>

  </header>
  <main className="container">
    <div className=" flex justify-center">
    <img src={ImagenHero} alt=""  width="500px"/>
    </div>
    <br />
    <p className="flex justify-center text-3xl text-white"> All your files  in one secure </p>
    <p className="flex justify-center text-3xl text-white">location  accessible anywhere</p>
    <br />
    <p className="flex justify-center text-white">xxxxxxxxxxxxxxxxxxxxxxxx</p>
    <p className="flex justify-center text-white">xxxxxxxxxxxxxxxxxxxxxxxx</p>
    <br />
  <div className="flex justify-center">
      <button className="bg-teal-400  rounded-3xl px-8 py-2 flex ">Get started</button>
  </div>
<br />
<br />
  <div className="flex justify-around">
    <button><Imagen1/></button>
    <button><Imagen2/></button>
    </div>
    <div className="flex justify-around">
    <button><Imagen3/></button>
    <button><Imagen4/></button>
    </div>
   
  </main>
</div>
  )
  
 }
 export default App