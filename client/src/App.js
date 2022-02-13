import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import BusesScreen from './Screens/BusesScreen';
import SearchResultsScreen from './Screens/SearchResultsScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ReservationScreen from './Screens/ReservationScreen';
import TicketScreen from './Screens/TicketScreen';
import ReservationsListScreen from './Screens/ReservationsListScreen';
import BusCreateScreen from './Screens/BusCreateScreen';
import BusScreen from './Screens/BusScreen';

function App() {
  return (
  <Router>
   <Header/>
    <main>
      <Container>
         <Routes>
           <Route path='/' element={<HomeScreen/>} exact></Route>
           <Route path='/admin/reservationslist' element={<ReservationsListScreen/>} exact></Route>
           <Route path='/admin/createbus' element={<BusCreateScreen/>} exact></Route>
           <Route path='/admin/reservationslist/:number' element={<ReservationsListScreen/>} exact></Route>
           <Route path='/buses' element={<BusesScreen/>} exact></Route>
           <Route path='/login' element={<LoginScreen/>} ></Route>
           <Route path='/register' element={<RegisterScreen/>} exact></Route>
           <Route path='/tickets' element={<TicketScreen/>} ></Route>
           <Route path='/search/:firstkeyword/:secondkeyword' element={<SearchResultsScreen/>} exact></Route>
           <Route path='/reservation/:id' element={<ReservationScreen/>} exact></Route>
           <Route path='/bus/:id' element={<BusScreen/>} exact></Route>
         </Routes>
      </Container>
    </main>
    <Footer></Footer>
    </Router>
  );
}

export default App;
