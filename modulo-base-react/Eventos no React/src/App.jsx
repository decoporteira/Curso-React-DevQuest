import './App.css'
import Button from './components/Button';
import Card from './components/Card'
const cardTitles = ['Título 1', 'Título 222', 'Título 3']

const showCardColor = (color) => {
  console.log(color)
}
function App() {
  return (
    <div>
        {cardTitles.map((cardTitle, index) => (
          <Card key={index} showCardColor={showCardColor}>
            <h3>{cardTitle}</h3>
            <p>Texto padrão para o Card</p>
          </Card>
        ))}
        <Button></Button>
        <Card color='blue' showCardColor={showCardColor}>
            <h3>Card com fundo azul</h3>
            <p>Texto padrão para o Card</p>
          </Card>
    </div>
  )
}

export default App;
