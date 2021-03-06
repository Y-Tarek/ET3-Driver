import React, {useState,useEffect} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import  Message  from '../Components/Message';
import  Loader  from '../Components/Loader';
import { FormContainer } from '../Components/FormContainer';
import { register } from '../Actions/UserActions';

const RegisterScreen = () => {
    const [username,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('');
    const [message,setMessage] = useState(null);

    const dispatch = useDispatch();
    const userRegister = useSelector(state => state.userRegister);
    const  {loading, error, userInfo} = userRegister;
    const location = useLocation();
    const history = useNavigate();  
    const redirect = location.search  ? location.search.split('=')[1] : '/';
    useEffect(() => {
        if(userInfo){
          history(redirect)
        }
    },[userInfo,redirect])

    const submitHandler =  (e) => {
        e.preventDefault();
        if(password !== confirmPassword ){
            setMessage('Passwords do not match')
        }else{
            dispatch(register(username,email,password))
        }
        
       }
  return (
    <>
            <h1>Sign Up</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader></Loader>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder='Enter UserName' value={username} onChange={(e) =>setUserName(e.target.value)}>
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) =>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    REGISTER
                </Button>
            </Form>
            <Row className='py-3'>
                <Col>
                Have an account?{''} 
                <Link to={redirect? `/login?redirect=${redirect}`  : '/login'}>
                    Login
                </Link> 
                </Col>
            </Row>
    </>
  )
}

export default RegisterScreen