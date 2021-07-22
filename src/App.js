import Header from './components/Header'
import Meals from './components/Meals'
import {useState, useEffect} from 'react'
import AddMeal from './components/AddMeal'
import Footer from './components/Footer'
import Links from './components/Links'
import {BrowserRouter as Router, Route} from 'react-router-dom'
const App = () => {

const[showAddMeal, setShowAddMeal]=useState(false)
const [meals, setMeals] =useState([])

useEffect(()=> {
 const getMeals=async ()=> {
   const mealsFromServer = await fetchMeals()
   setMeals(mealsFromServer)
 }
  getMeals()
},[])

//Fetch Meals
const fetchMeals = async() => {
  const res = await fetch('http://localhost:5000/meals')
  const data = await res.json()
  return data
}

//Fetch a Meal
const fetchMeal = async(id) => {
  const res = await fetch(`http://localhost:5000/meals/${id}`)
  const data = await res.json()

  return data
}


//Add a meal
const addMeal=async (meal)=> {
 const res = await fetch('http://localhost:5000/meals', {
   method:'POST',
   headers: {
     'Content-type': 'application/json',
   },
   body: JSON.stringify(meal),
 })
 const data = await res.json()

 setMeals([...meals,data])
}


//Delete a Meal
const deleteMeal = async(id)=> {
 await fetch(`http://localhost:5000/meals/${id}`, {
   method:'DELETE',
 })

 setMeals(meals.filter((meal)=> meal.id !== id))
}

//Toggle Reminder
const toggleReminder =async (id)=> {
  const mealToToggle = await fetchMeal(id)
  const updMeal = { ...mealToToggle,
  reminder: !mealToToggle.reminder}

const res = await fetch(`http://localhost:5000/meals/${id}`, {
  method:'PUT',
  headers: {
    'Content-type': 'application/json'
  },
  body:JSON.stringify(updMeal)
})
  const data = await res.json()

  setMeals(
    meals.map((meal)=>
    meal.id===id ? {...meal, reminder:
      data.reminder} :meal)
  )
  
}

  return (
    <Router>
    <div className="container">
     <Header onAdd ={() => setShowAddMeal
       (!showAddMeal)}
       showAdd={showAddMeal}
       />
    <Route path='/' exact render={(props)=> (
      <>
       {showAddMeal && <AddMeal onAdd={addMeal} />}

{meals.length >0 ? (
  <Meals meals ={meals} onDelete={deleteMeal}
  onToggle={toggleReminder}/>
) : (
  'No Meals To Show'
)}

      </>
    ) }/>
      <Route path='/links' component={Links}/>
    <Footer />

    </div>
    </Router>
  )
}

export default App
