import './App.css';
import { useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import { getUser } from '../../utilities/users-service';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import ContactUsPage from '../ContactUsPage/ContactUsPage';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
      <Elements stripe={stripePromise}>
        <Routes>
          <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser}/>} />
          <Route path="/orders/" element={<OrderHistoryPage user={user} setUser={setUser}/>} />
          <Route path="/contact/" element={<ContactUsPage user={user} setUser={setUser}/>} />
          <Route path="/*" element={<Navigate to="/orders/new" />} />
        </Routes>
        </Elements>
        :
        <AuthPage setUser={ setUser }/>
      }
    </main>
  );
}

