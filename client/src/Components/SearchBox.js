import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



const SearchBox = () => {
    const [number, setNumber] = useState('');
    const history = useNavigate();
   

    const submitHandler = (e) => {
        e.preventDefault(); 
        console.log("hhh");
        history(`/admin/reservationslist/${number}`)
    }
    return (
        <Form onSubmit={submitHandler} className='d-flex' >
            <Form.Control type='text' name='q' onChange={(e) =>{setNumber(Number(e.target.value))}} placeholder='Search Ticket Numbers'
             className='mr-sm-2 ml-sm-5'
            ></Form.Control>
            <Button type='submit' variant='outline-success' className='p-2'>Search</Button>
        </Form>
    )
} 

export default SearchBox