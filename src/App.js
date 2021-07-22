import Header from './components/Header'
import Meals from './components/Meals'
import {useState} from 'react'
function App() {

  const [meals, setMeals] =useState([
    {
    id:1,
    text: 'Chicken Piccata Pasta',
    day: 'July 22nd at 6:15pm',
    reminder: true,
    },
    {
    id:2,
    text: 'Lime Beef and Basil Stir Fry',
    day: 'July 23rd at 6:15pm',
    reminder: true,
    },
    {
    id:3,
    text: 'Thai Chicken Coconut and Rice',
    day: 'July 24th at 6:15pm',
    reminder: false,
     },
])

//Delete Meal
const deleteMeal = (id)=> {
 setMeals(meals.filter((meal)=>meal.id !== id))
}



// <Meals meals={meals} onDelete={deleteMeal}/>
  return (
    <div className="container">
     <Header />
    {meals.length >0 ? (
      <Meals meals ={meals} onDelete={deleteMeal}/>
    ) : (
      'No Meals To Show'
    )}

    </div>
  )
}

export default App;
