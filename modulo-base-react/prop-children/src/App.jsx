import './App.css'
import Card from './components/Card'
import Button from './components/Button'
function App() {
  return (
    <>
     <Card>
      <h3>Titulo</h3>
      <p>Texto corrido</p>
     </Card>
     <Card>
      <h3>Título Card 2</h3>
      <p>Texto corrido de novo</p>
     </Card>
     <Card></Card>
     <Button label='Baixar CV'/>
     <Button />
    </>
   
  )
}

export default App
