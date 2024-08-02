import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'
import { CalendarOutlined, FormOutlined, SnippetsOutlined, UserOutlined } from '@ant-design/icons'
import { FaRupeeSign, FaVideo } from 'react-icons/fa'
import Chart from './charts/Chart'
 
const VendorManage = () => {
  return (
    <div>

    <div className='navbar'>
      <ul className='flex-list'>
        <li><Link to="/admin/vendorManage" className='list-head'>Vendor</Link> </li>
        
        <li><Link to="/vendor/acknow" className='list-head'>Acknowledgement</Link> </li>
        <li><Link to="/vendor/status" className='list-head'>Status</Link> </li>
        <li><Link to="/vendor/history" className='list-head'>History</Link> </li>
        <li><Link to="/vendor/invoice" className='list-head'>Invoice</Link> </li>
        <li><Link to="/vendor/payment" className='list-head'>Payment</Link> </li>
        <li><Link to="/vendor/delivery" className='list-head'>Delivery</Link> </li>
      </ul>
    </div> <br /> <br /> <br />

    <h3 style={{textAlign:"center", fontSize:'16px'}}>Vendor Management</h3>
    <main>
    <div className='main_container'>
        <div className='main_cards'>
            <div className='card'>
            <UserOutlined  className='i text-green' style={{color:"green", padding:'10px'}} />
            <div className='card_inner'>
                <p className='text-primary-p'>
                    Number of Member
                </p>
                <span className='font-bold text_tile'>578</span>
            </div>
            </div>

            <div className='card'>
            <CalendarOutlined className='i text-red' style={{color:"royalblue", padding:'10px'}} />
           
            <div className='card_inner'>
                <p className='text-primary-p'>Times of Watching</p>
                <span className='font-bold text-title'>2465</span>
            </div>
            </div>

            <div className='card'>
            <FaVideo className='i text-red' />
            <FormOutlined className='i text-red' style={{color:"red", padding:'10px'}} />
            <div className='card_inner'>
                <p className='text-primary-p'>Number of User Invoice</p>
                <span className='font-bold text-title'>340</span>
            </div>
            </div>
            
            <div className='card'>
            <SnippetsOutlined className='i text-brown' style={{color:"brown", padding:'10px'}}/>
            <div className='card_inner'>
                <p className='text-primary-p'>Number of Vendor Invoice</p>
                <span className='font-bold text-title'>645</span>
            </div>
            </div>
        </div>

        <div className='charts'>
            <div className='charts_left'>
                <div className='charts_left_title'>
                    <div>
                        <h1>Daily Reports</h1>
                        <p>Dindigul, TamilNadu, IND</p>
                    </div>
                    <FaRupeeSign />
                </div>
                <Chart />
            </div>
            <div className='charts_right'>
                <div className='charts_right_title'>
                    <div>
                        <h1>Status Reports</h1>
                        <p>Dindigul, TamilNadu, IND</p>
                    </div>
                    <FaRupeeSign />
                </div>

                <div className='charts_right_cards'>
                    <div className='card1'>
                        <h1>Income</h1>
                        <p>₹ 75,300</p>
                    </div>
                    <div className='card2'>
                        <h1>Sales</h1>
                        <p>₹ 1,24,800</p>
                    </div>
                    <div className='card3'>
                        <h1>Users</h1>
                        <p>3900</p>
                    </div>
                    <div className='card1'>
                        <h1>Orders</h1>
                        <p>1881</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</main>
    
    </div>
  )
}

export default VendorManage