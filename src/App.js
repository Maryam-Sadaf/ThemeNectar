import React from 'react';
import Header from './Screen/Header';
import { Route, Routes } from 'react-router-dom';
import SubmitTicket from './Screen/Submitticket/SubmitTicket';
import Herosection from './Screen/Herosection';
import PublicTickets from '../src/Screen/PublicTickets/PublicTickets'
import Ticket from './Screen/PublicTickets/Ticket';
const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Herosection />} />
                    <Route path="/submitTicket" element={<SubmitTicket />} />
                    <Route path="/publicTicket" element={<PublicTickets/>} />
                    <Route path="ticket/:id" element={<Ticket />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
