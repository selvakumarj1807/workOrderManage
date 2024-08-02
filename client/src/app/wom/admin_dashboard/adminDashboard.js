import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './adminDashboard.css';
import { Route, Routes, useNavigate } from "react-router-dom";


import Header from './Header';
import AdminSidebar from './sidebar/AdminSidebar';

import Dashboard from "./Dashboard/Dashboard";
import UserManagement from "./Dashboard/UserManagement";

import UserAcknowledge from "./main/user/Acknowledgement/UserAcknowledge";
import UserStatus from "./main/user/OrderStatus/UserStatus";
import UserHistory from "./main/user/OrderHistory/UserHistory";
import UserInvoice from "./main/user/Invoice/UserInvoice";
import UserPayment from "./main/user/Payment/UserPayment";
import UserDelivery from "./main/user/Delivery/UserDelivery";





function UserDashboard() {
  return (
    <div>
      <Header />
      <AdminSidebar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/userManage' element={<UserManagement />} />
        <Route path='/user/acknow' element={<UserAcknowledge />} />
        <Route path='/user/status' element={<UserStatus />} />
        <Route path='/user/history' element={<UserHistory />} />
        <Route path='/user/invoice' element={<UserInvoice />} />        
        <Route path='/user/payment' element={<UserPayment />} /> 
        <Route path='/user/delivery' element={<UserDelivery />} />               
      </Routes>
      
    </div>
  );
}

export default UserDashboard;
