import React from 'react'
import './adminSidebar.css'
import { Link } from 'react-router-dom'
function AdminSidebar() {
    return (
        <aside id="sidebar" className='sidebar'>
            <ul className="sidebar-nav" id='sidebar-nav'>
                <li className="nav-item">
                    <Link to="/Admin" className='nav-link a'>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Admin/userManage" className='nav-link collapsed'>
                        <span>User Management</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/UserDashboard/user/required_inform" className='nav-link collapsed'>
                        <span>Vendor Management</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="" className='nav-link collapsed a' data-bs-target="#components-nav" data-bs-toggle="collapse" >
                        <span>Access Management</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id='components-nav'
                        className='nav-content collapse'
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <Link to="/UserDashboard/user/get_quote" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>Roles</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/UserDashboard/user/get_quote" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>Permission</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link to="" className='nav-link collapsed a' data-bs-target="#components-nav1" data-bs-toggle="collapse" >
                        <span>Enquiry Management</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id='components-nav1'
                        className='nav-content collapse'
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <Link to="/UserDashboard/user/get_quote" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>User</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/UserDashboard/user/get_quote" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>Vendor</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link to="/UserDashboard/user/user_history" className='nav-link collapsed'>
                        <span>Push Notification</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="" className='nav-link collapsed a' data-bs-target="#forms-nav" data-bs-toggle="collapse" >
                        <span>Quote Management</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id='forms-nav'
                        className='nav-content collapse'
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <Link to="/UserDashboard/user/user_order_status" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>Vendor-Quote(Received)</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/UserDashboard/user/user_order_status" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>Edit Quote (Admin)</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/UserDashboard/user/user_order_status" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>User Quote (Forward)</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link to="/" className='nav-link collapsed'>
                        <span>Order Management</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="" className='nav-link collapsed a' data-bs-target="#forms-nav1" data-bs-toggle="collapse" >
                        <span>Delivery Management</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id='forms-nav1'
                        className='nav-content collapse'
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <Link to="/UserDashboard/user/user_order_status" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>User</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/UserDashboard/user/user_order_status" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>Vendor</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <Link to="/" className='nav-link collapsed'>
                        <span>Reports & Analytics</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="" className='nav-link collapsed a' data-bs-target="#forms-nav2" data-bs-toggle="collapse" >
                        <span>Configuration Settings</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id='forms-nav2'
                        className='nav-content collapse'
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <Link to="/UserDashboard/user/user_order_status" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>Business Setup</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/UserDashboard/user/user_order_status" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>Payment Method</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/UserDashboard/user/user_order_status" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>Social Media</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/UserDashboard/user/user_order_status" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>Mail configuration</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <Link to="/" className='nav-link collapsed'>
                        <span>Logout</span>
                    </Link>
                </li>

            </ul>
        </aside>
    )
}

export default AdminSidebar