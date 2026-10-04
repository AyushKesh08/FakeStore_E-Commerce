import Categories from './components/categories/Categories.jsx'
import { categoryData } from './app.js';
import './App.css'

function App(){

  return (
    <div>
      <h1>Everything You Buy Is Here.</h1>

      <Categories data={categoryData} />
    </div>
  )
}

export default App;