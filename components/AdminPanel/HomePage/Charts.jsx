'use client'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



const Charts = ({ data }) => {

    const orderData = {
        labels: ['Total Orders', 'Total Orders Cancelled', 'Total Orders Delivered', 'Total Orders Under Processing',
        ],
        datasets: [
            {
                label: 'Number of Orders',
                data: [data?.total_number_of_orders, data?.total_orders_Cancelled, data?.total_orders_Delivered, data?.total_orders_under_processing],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    // 'rgba(153, 102, 255, 0.6)',
                    // 'rgba(255, 159, 64, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const salesData = {
        labels: ['Total Sales', 'Total Online Payment Sales', 'Total COD Payment Sales',
        ],
        datasets: [
            {
                label: 'sales',
                data: [data?.total_sales, data?.total_amount_of_online_payment_sales, data?.total_amount_of_cod_sales],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const overallData = {
        labels: [ 'Total Users', 'Total Orders',
        ],
        datasets: [
            {
                label: '',
                data: [data?.totalUsers, data?.total_number_of_orders],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="flex justify-between flex-col lg:flex-row items-center gap-6 lg:gap-12">
            <div className="mb-4">
                <p className={`text-2xl text-blue-800 text-center font-[600] tracking-wide uppercase mb-2 `}>
                Dashboard Data
                </p>
                <Pie data={overallData} />
            </div>
            <div className="mb-4">
                <p className={`text-2xl text-blue-800 text-center font-[600] tracking-wide uppercase mb-2 `}>
                Orders Data
                </p>
                <Pie data={orderData} />
            </div>
            <div className="mb-4">
                <p className={`text-2xl text-blue-800 text-center font-[600] tracking-wide uppercase mb-2 `}>
                Sales Data
                </p>
                <Pie data={salesData} />
            </div>
        </div>
    )
}

export default Charts