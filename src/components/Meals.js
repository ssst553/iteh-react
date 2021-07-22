import Meal from './Meal'

const Meals = ({meals, onDelete}) => {

    return (
        <>
            {meals.map((meal)=> (
              //  <h3 key={meal.id}>{meal.text}</h3>
              <Meal key={meal.id} meal={meal}
              onDelete ={onDelete}/>
            ))} 
        </>
    )
}

export default Meals
