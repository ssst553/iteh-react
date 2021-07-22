import Meal from './Meal'

const Meals = ({meals, onDelete,onToggle}) => {

    return (
        <>
            {meals.map((meal)=> (
              //  <h3 key={meal.id}>{meal.text}</h3>
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
