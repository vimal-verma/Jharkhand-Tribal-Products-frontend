import React, { useEffect, useState } from 'react'
// import jwt_decode from 'jwt-decode'
import Nav from '../components/Dasnav'
import Footer from '../components/Footer'
import Lottie from '../utils/lottie'
import developer from '../assets/groth.json'
import axios from 'axios'

export default function Statistics() {
    var token = localStorage.getItem('token')
    // if (token) {
    //     var decoded = jwt_decode(token)
    //     // console.log(decoded)
    // }
    const [Order, setOrder] = useState([])

    useEffect(() => {
        axios
            .get('/order', {
                headers: { token },
            })
            .then(res => setOrder(res.data))
            .catch(err => console.log(err))
    }, [token])
    console.log(Order)

    const producname = []
    const producprice = []
    const purchasetime = []

    Order.forEach(item => {
        console.log(item.product)
        console.log(item.createdAt)
        item.product.forEach(product => {
            producname.push(product.url)
            producprice.push(product.price)
            purchasetime.push(item.createdAt)
        })

    })

    console.log(producname)
    console.log(producprice)
    console.log(purchasetime)


    return (
        <div>
            <Nav />
            <div className="dashome">
                <div className="dashleft">
                    <h1>Product Statistics</h1>
                </div>
                <div className="dashright">
                    <Lottie animationData={developer} />
                </div>
            </div>
            <Footer />
        </div>
    )
}
