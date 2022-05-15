import './Tours.css';
import Tour from './tour/Tour';
const tour = require('../../data/db.json')
function Tours(props){
return(
    <Tour tour = {tour}/>
)
}
export default Tours;