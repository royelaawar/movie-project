// import { useParams, Link } from "react-router-dom";


// function MovieProfile({ movies }) {

//     //need to get movie
//     const {id} = useParams();

//     const movie = movies.find(m => {
//         return m.id === Number(id);
//     });

//     // const { name, image, category, description, year_released, box_office_earnings, director, main_cast_members } = movie;

//     if(!movie) {
//         return <h1>Error: Movie Not Found!</h1>
//     }


//     return (
//         <div>
//             <li>
//                 <h1 class='movie-title'>{movie.name}</h1>
//                     <iframe
//                     width="560"
//                     height="315"
//                     src={movie.trailer}
//                     title={movie.name}
//                     frameborder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                     allowfullscreen
//                     ></iframe>
//                 {/* <img src={movie.image} alt={movie.name} />     */}
//                 <h1>Category: {movie.category}</h1>
//                 <h2>Description: {movie.description}</h2>
//                 <h2>Year Released: {movie.year_released}</h2>
//                 <h3>Box Office Earnings: {movie.box_office_earnings}</h3>
//                 <h3>Director: {movie.director}</h3>
//                 <h4>Main Cast: {movie.main_cast_members}</h4>

//             </li>
//             <br></br>
//             <Link to="/movies" >Back to Movies</Link>
//             {/* <Link id="trailer-button" to={`${movie.trailer}`} target="_blank">Watch Trailer</Link> */}
//         </div>
//     )
// }




import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, CardBody } from "react-bootstrap";

function MovieProfile({ movies }) {

    //need to get movie
    const { id } = useParams();

    const movie = movies.find(m => {
        return m.id === Number(id);
    });

    if (!movie) {
        return <h1>Error: Movie Not Found!</h1>
    }


    // return (
    // <div>
    //     <li>
    //         <h1>{movie.name}</h1>
    //         <img src={movie.image} alt={movie.name} />
    //         <h1>Category: {movie.category}</h1>
    //         <h2>Description: {movie.description}</h2>
    //         <h2>Year Released: {movie.year_released}</h2>
    //         <h3>Box Office Earnings: {movie.box_office_earnings}</h3>
    //         <h3>Director: {movie.director}</h3>
    //         <h4>Main Cast: {movie.main_cast_members}</h4>
    //     </li>
    //     <br></br>
    //     <Link to="/movies" >Back to Movies</Link>
    // </div>
    // )
    return (
        <Card className= 'card-darker'>
            <Card.Body>
                <Card.Title><h2><strong>{movie.name}</strong></h2></Card.Title>
                <iframe
                    width="560"
                    height="315"
                    src={movie.trailer}
                    title={movie.name}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </Card.Body>
            {/* <Card.Body> */}
                {/* <Card.Title><h2><strong>{movie.name}</strong></h2></Card.Title> */}
                {/* <Card.Text>{movie.description}</Card.Text> */}
            {/* </Card.Body> */}
            <ListGroup className="list-group-flush">
                {/* <ListGroup.Item><strong>Title: </strong>{movie.name}</ListGroup.Item> */}
                <ListGroup.Item><strong>Category: </strong>{movie.category}</ListGroup.Item>
                <ListGroup.Item><strong>Year Released: </strong>{movie.year_released}</ListGroup.Item>
                <ListGroup.Item><strong>Box Office Earnings: </strong>{movie.box_office_earnings}</ListGroup.Item>
                <ListGroup.Item><strong>Director: </strong>{movie.director}</ListGroup.Item>
                <ListGroup.Item><strong>Main Cast: </strong>{movie.main_cast_members}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                {/* <Card.Link href="/movies">Go to Movies</Card.Link> */}
                <Button variant="primary" href="/movies">Back to Movies</Button>
                {/* <Card.Link to={`/movies`} id="profileLink" style={{color: "white"}} >Back to Movies</Card.Link> */}
            </Card.Body>
        </Card>
    );
}


export default MovieProfile;