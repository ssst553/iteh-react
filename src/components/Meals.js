import Meal from './Meal'

const Meals = ({meals, onDelete,onToggle}) => {

    return (
        <>
     
            {meals.map((meal)=> (
               
              
              <Meal 
              key={meal.id} 
              meal={meal}
              onDelete ={onDelete}
              onToggle={onToggle}
              />
            ))} 
           
        </>
    )         
}

export default Meals
