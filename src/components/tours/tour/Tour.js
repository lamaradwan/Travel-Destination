import './Tour.css';
import { Link } from 'react-router-dom';
import { Card , Button} from 'react-bootstrap';
function Tour(props){
return(
    <>
    {
        props.tour.map((cntry) =>{
            return(
                // <Link to={`/city/${cntry.id}`} key={cntry.id} >
                // <div>
                //     <h2>{cntry.name}</h2>
                //     <img src={cntry.image} alt={cntry.name}/>
                // </div>
                // </Link>
        <div className='cityCards' key={cntry.id}>
        <Card style={{ width: '28rem' }}>
        <Card.Img variant="top" src={cntry.image} />
        <Card.Body>
        <Card.Title>{cntry.name}</Card.Title>
        <Link to={`/city/${cntry.id}`} >
        <Button variant="secondary">Explore More</Button>
        </Link>
        </Card.Body>
        </Card>
        </div>
            )
        })

    }
    </>
)
}
export default Tour;