import {Link} from 'react-router-dom'

const Links = () => {
    return (
        <div>
            <h4>Links to cooking channels:</h4>
            <a href="https://www.foodiecrush.com/30-dinners-to-make-when-theres-no-time-to-cook/">FoodieCrush</a>
            <br></br>
            <a href="https://www.eatthismuch.com/">Eat this much</a>
            <br></br>
            <Link to='/'>Return</Link>
        </div>
    )
}

export default Links
