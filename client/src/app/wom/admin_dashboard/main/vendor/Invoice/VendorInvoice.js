import React from 'react'
import { Table } from 'antd';
import { Link } from 'react-router-dom';
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: '1',
    name: '5-speed R151 manual 6-speed AC60 automatic',
    createdDate: 'Dec-07-2023',
    deliveryDate: 'Jan-15-2024',
    code: '2TR-FE',
    amount:"₹ 5000"
  },
  {
    key: '2',
    name: '5-speed R151 manual 6-speed RC60 manual',
    createdDate: 'Dec-20-2024',
    deliveryDate: 'Jan-10-2024',
    code: '2GD-FTV',
    amount:"₹ 5000"
  },
  {
    key: '3',
    name: '6-speed AC60 automatic',
    createdDate: 'Jan-8-2024',
    deliveryDate: 'Jan-24-2024',
    code: '2GD-FTV',
    amount:"₹ 5000"
  },
  {
    key: '4',
    name: '5-speed R151 manual 6-speed RC60 manual 6-speed AC60 automatic',
    createdDate: 'Jan-15-2024',
    deliveryDate: 'Feb-2-2024',
    code: '1GD-FTV',
    amount:"₹ 5000"
  },
];

const VendorInvoice = () => {
  return (
    <>
       <div className='navbar'>
      <ul className='flex-list'>
        <li><Link to="/admin/vendorManage" className='list-head'>Vendor</Link> </li>
        <li><Link to="/vendor/acknow" className='list-head'>Acknowledgement</Link> </li>
        <li><Link to="/vendor/status" className='list-head'>Status</Link> </li>
        <li><Link to="/vendor/history" className='list-head'>History</Link> </li>
        <li><Link to="/vendor/invoice" className='list-head'>Invoice</Link> </li>
        <li><Link to="/vendor/payment" className='list-head'>Payment</Link> </li>
      </ul>
    </div> 
    <hr />
    <h2 style={{textAlign:'center', fontSize:'16px'}}>Vendor Invoice History</h2>
    <hr />
   
   <Table dataSource={data}>
     <Column title="Name" dataIndex="name" key="name" />
     <Column title="Engine Code" dataIndex="code" key="code" />
   <ColumnGroup title="Date">
     <Column title="Created Date" dataIndex="createdDate" key="createdDate" />
     <Column title="Delivery Date" dataIndex="deliveryDate" key="deliveryDate" />
   </ColumnGroup>
   <Column title="Amoount" dataIndex="amount" key="amount" />
 </Table>
 </>
  )
}

export default VendorInvoice