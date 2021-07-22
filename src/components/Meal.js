import {FaTimes} from 'react-icons/fa'
const Meal = ({meal, onDelete, onToggle}) => {
    return (
        <div 
        className={`meal ${meal.reminder?
        'reminder': ''}`}
        onDoubleClick={()=> onToggle(meal.id)}>
            <h3>
                {meal.text}{' '}
                <FaTimes 
                    style={{
                    color:'red', cursor:'pointer' }}
                    onClick={() => onDelete (meal.id)}/>
                </h3>
            <p>{meal.day}</p>
        </div>
    )
}        

export default Meal
