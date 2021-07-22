import Header from './components/Header'
import Meals from './components/Meals'
import {useState} from 'react'
import AddMeal from './components/AddMeal'
const App = () => {

const[showAddMeal, setShowAddMeal]=useState(false)

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

//Add a meal
const addMeal=(meal)=> {
 const id = Math.floor(Math.random()*10000)+1 //random number za id
 const newMeal = {id,...meal}
 setMeals([...meals, newMeal])
}


//Delete a Meal
const deleteMeal = (id)=> {
 setMeals(meals.filter((meal)=>meal.id !== id))
}

//Toggle Reminder
const toggleReminder =(id)=> {
  setMeals(
    meals.map((meal)=>
    meal.id===id ? {...meal, reminder:
      !meal.reminder} :meal)
  )
  
}


// <Meals meals={meals} onDelete={deleteMeal}/>
  return (
    <div className="container">
     <Header onAdd ={() => setShowAddMeal
       (!showAddMeal)}
       showAdd={showAddMeal}
       />
     {showAddMeal && <AddMeal onAdd={addMeal} />}

    {meals.length >0 ? (
      <Meals meals ={meals} onDelete={deleteMeal}
      onToggle={toggleReminder}/>
    ) : (
      'No Meals To Show'
    )}

    </div>
  )
}

//provjeriti da li on ovo ima opet sam rfce umjesto rafce koristila
export default App;
