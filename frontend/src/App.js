import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Launch from './pages/Launch';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Main from './pages/Main';
import { useState } from 'react';
import AuthContext from './store/auth-context';
import HotelContext from './store/hotel-context';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import PaymentContext from './store/payment-context';

function App() {
  const [isLoggedInVar,setIsLoggedInVar] = useState(localStorage.getItem('isLoggedIn'))
  const [currentHotel,setCurrentHotel] = useState({})
  const [payment, setPayment] = useState({})
  const [user, setUser] = useState({})
  const toggler = () =>
  {
    setIsLoggedInVar(!isLoggedInVar)
    console.log(isLoggedInVar)
  }
  return (

    <AuthContext.Provider value={{
      isLoggedIn:isLoggedInVar,
      toggleIsLoggedIn:toggler
    }}>
    <HotelContext.Provider value={[currentHotel,setCurrentHotel]}>
      <PaymentContext.Provider value={[payment,setPayment]}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Launch/>} />
        <Route path= '/home' element={<Main/>}/>
        <Route path='/about' element={<About />} exact></Route>
        <Route path='/login' element={<Login />} exact></Route>
        <Route path='/signup' element={<Signup />} exact></Route>
        <Route path='/checkout' element={<Checkout />} exact></Route>
        <Route path='/payment' element={<Payment />} exact></Route>
      </Routes>
    </BrowserRouter>
    </PaymentContext.Provider>
    </HotelContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
