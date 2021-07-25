
import { RiCloseCircleLine } from 'react-icons/ri';
const Meal = ({meal, onDelete, onToggle}) => {
    return (
        <div 
        className={`meal ${meal.reminder?
        'reminder': ''}`}
        onDoubleClick={()=> onToggle(meal.id)}>

<h3>
{meal.text}{' '}
            <div className='icons'>
        <RiCloseCircleLine
          onClick={() => onDelete (meal.id)}
          className='delete-icon'
        />
        </div>
        </h3>
        <p class="datum" >{meal.day}</p>
           
        </div>
    )
}        

export default Meal
