import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Orders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[]);
    return (
        <div>
            <h3>Total orders {orders.length}</h3>
            <h4>{user?.email}</h4>
        </div>
    );
};

export default Orders;