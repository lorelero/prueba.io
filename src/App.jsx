import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Mycard from './components/Mycard'
import Tags from './components/tags'
import Bobtail from '.assets/bobtail.jpg'
import Golden from './assets/golden.jpg'
import Salchicha from './assets/salchicha.jpg'
import Pastor from './assets/pastor.jpg'

function App() {
  return (
    <>
    <Header/>
    <div className='container_card'>
    <Mycard
            image={Salchicha}
            name="Mika"
            description="lleno de energia y listo para jugar.¡Dale a bartolo lo que se merece!"
            text="Salchicha"
            color="success"
    />
        <Mycard
            image={Bobtail}
            name="Capataz"
            description="Es jugueton, amigable y se lleva bien con niños y otros animales ¡Haz de Messi parte de tu familia hoy mismo!"
            text="Bobtail"
            color="primary"
    />
        <Mycard
            image={Golden}
            name="Vito"
            description="Un perro de tamaño mediano con un corazon gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!"
            text="Golden"
            color="danger"
    />
        <Mycard
            image={Pastor}
            name="Flo"
            description="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Flo a encontrar su final feliz!"
            text="Pastor"
            color="warning"
    />
    </div>
    <Tags/>
    <Footer/>
    </>
  )
}

export default App