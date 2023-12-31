import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import { useState } from "react";

// function MovieForm({updateFormData, addMovie}){

//     const navigate = useNavigate()

//     return <form onSubmit={(event) => {
//         addMovie(event)
//         navigate('/movies')
//     }}>
//         <input onChange={updateFormData} name="name" placeholder="Name"/>
//         <input onChange={updateFormData} name="image" placeholder="Image"/>
//         <input onChange={updateFormData} name="category" placeholder="Category"/>
//         <input onChange={updateFormData} name="description" placeholder="Description"/>
//         <input type="submit"/>
//     </form>
// }

// export default MovieForm

function MovieForm({ updateFormData, addMovie }) {


    const navigate = useNavigate();

    const [ section, updateSection] = useState(0);

    return (
        <div className="new-movie-form" style={{display: 'inline-block'}}>
            <Card style={{ width: '35rem', marginTop:'4rem', marginBottom: '4rem'}} >
                <Card.Body>
                    <Card.Title><strong>Add a Movie:</strong></Card.Title>
                </Card.Body>
                <Form onSubmit={(event) => {
                    addMovie(event)
                    navigate("/movies")
                }} >
                    <div className="formSections" is-active={( section === 0 ).toString( )}>
                    <Form.Group className="mb-3" controlId="ControlInput1">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control required type="text" placeholder="Enter movie name..." onChange={updateFormData} name="name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInput2">
                        <Form.Label>Image:</Form.Label>
                        <Form.Control required type="text" placeholder="Enter Image URL..." onChange={updateFormData} name="image" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInput3">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control required as="textarea" rows={3} placeholder="Enter description..." onChange={updateFormData} name="description" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInput4">
                        <Form.Label>Category:</Form.Label>
                        <Form.Control required type="text" placeholder="Enter Category..." onChange={updateFormData} name="category" />
                    </Form.Group>
                    
                    </div>
                    <div className="formSections" is-active={( section === 1 ).toString( )}>
                    <Form.Group className="mb-3" controlId="ControlInput5">
                        <Form.Label>Director:</Form.Label>
                        <Form.Control required type="text" placeholder="Enter Director..." onChange={updateFormData} name="director" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInput6">
                        <Form.Label>Main Cast:</Form.Label>
                        <Form.Control required type="text" placeholder="Enter Main Cast..." onChange={updateFormData} name="main_cast_members" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInput7">
                        <Form.Label>Year Released:</Form.Label>
                        <Form.Control required type="text" placeholder="Enter Year Released..." onChange={updateFormData} name="year-released" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInput8">
                        <Form.Label>Box Office Earnings:</Form.Label>
                        <Form.Control required type="text" placeholder="Enter Box Office Earnings..." onChange={updateFormData} name="box_office_earnings" />
                    </Form.Group>
                    </div>

                
                    <div id="formNaviBtnHolster">
                        <button className="formNavBtns" display-on={( section > 0 ).toString( )} onClick={( e ) => { e.preventDefault( ); updateSection( section-1 )}}>Back</button>
                        <button className="formNavBtns" display-on={( section < 1 ).toString( )} onClick={( e ) => { e.preventDefault( ); updateSection( section+1 )}}>Next</button>                    
                        <button className="formNavBtns" display-on={( section === 1 ).toString( )} type='submit'>Add Movie</button>
                        {/* <button onClick={() => validateForm( )}/> */}
                    </div>
                </Form>
            </Card>
            {/* <form onSubmit={(event) => {
                addMovie(event)
                navigate("/movies")
            }}>
                <input onChange={updateFormData} type="text" name="name" placeholder="Movie name" />
                <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" />
                <input onChange={updateFormData} type="text" name="category" placeholder="Category" />
                <input onChange={updateFormData} type="text" name="description" placeholder="Description" />
                <input onChange={updateFormData} type="number" name="year_released" placeholder="Release year" />
                <input onChange={updateFormData} type="text" name="box_office_earnings" placeholder="Earnings" />
                <input onChange={updateFormData} type="text" name="director" placeholder="Director" />
                <input onChange={updateFormData} type="text" name="main_cast_members" placeholder="Cast" />
                <button type="submit">Add Movie</button>
            </form> */}
        </div>
    )
}


export default MovieForm