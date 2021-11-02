import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Orders = () => {
    const { user } = useAuth();
    const history = useHistory();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('id_token')}`,
            }
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else if (res.status === 401){
                    history.push('/login');
                }
            })
            .then(data => setOrders(data))
    }, []);
    return (
        <div>
            <h3>Total orders {orders.length}</h3>
            <h4>{user?.email}</h4>
        </div>
    );
};

export default Orders;