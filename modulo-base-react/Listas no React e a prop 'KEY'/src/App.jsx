import './App.css'
import Card from './components/Card'
const cardTitles = ['Título 1', 'Título 222', 'Título 3']

function App() {
  return (
    <div>
        {cardTitles.map((cardTitle, index) => (
          <Card key={index}>
            <h3>{cardTitle}</h3>
            <p>Texto padrão para o Card</p>
          </Card>
        ))}
    </div>
  )
}

export default App;
