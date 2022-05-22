import React, { useEffect, useState } from 'react'
// import jwt_decode from 'jwt-decode'
import Nav from '../components/Dasnav'
import Footer from '../components/Footer'
import Lottie from '../utils/lottie'
import developer from '../assets/groth.json'
import axios from 'axios'

import {
    Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale,
    LinearScale,
    BarElement,
    Title,
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


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
            purchasetime.push(item.createdAt.substring(0, 10))
        })

    })

    console.log(producname)
    console.log(producprice)
    console.log(purchasetime)

    const counts = {};
    const pptime = {};

    for (const num of producname) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    for (const num of purchasetime) {
        pptime[num] = pptime[num] ? pptime[num] + 1 : 1;
    }

    console.log(counts)

    const unpname = []
    const unpcount = []
    const ppdate = []
    const ppcount = []

    for (let key in counts) {
        if (counts.hasOwnProperty(key)) {
            console.log(key, counts[key]);
            unpname.push(key)
            unpcount.push(counts[key])
        }
    };

    for (let key in pptime) {
        if (pptime.hasOwnProperty(key)) {
            console.log(key, pptime[key]);
            ppdate.push(key)
            ppcount.push(pptime[key])
        }
    };
    console.log(ppcount)
    console.log(ppdate)

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        // // console.log(color)
        return color;
    };

    var tagcol = unpname.map(() => { return getRandomColor() })


    const data = {
        labels: unpname,
        datasets: [
            {
                label: '# of Votes',
                data: unpcount,
                backgroundColor: tagcol,
                borderWidth: 1,
            },
        ],
    };

    const labels = ppdate

    const linedata = {
        labels,
        datasets: [
            {
                label: 'Number of Orders',
                data: ppcount,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };



    return (
        <div>
            <Nav />
            <div className="dashome">
                <div className="dashleft">
                    <h1>Product Statistics</h1>
                    <div style={{ width: '500px' }}>
                        <Pie data={data} />
                    </div>
                    <Bar data={linedata} />
                </div>
                <div className="dashright">
                    <Lottie animationData={developer} />
                </div>
            </div>
            <Footer />
        </div>
    )
}
