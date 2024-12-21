// components/Home.js
import React from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const Home = () => {
    const products = [
        {
            id: 1,
            name: "OnePlus Nord CE 3",
            amount: 24999,
            image: "/Oneplus.jpg",
            description: "8GB RAM, 128GB Storage, 5G Android Smartphone",
        },
        {
            id: 2,
            name: "boAt Rockerz 450 Pro",
            amount: 1999,
            image: "/Boat.jpg",
            description:
                "Bluetooth Wireless Over Ear Headphones with 70H Playtime",
        },
        {
            id: 3,
            name: "Fire-Boltt Ninja Smart Watch",
            amount: 1499,
            image: "/Firebolt.jpg",
            description: "Bluetooth Calling, 1.39 Display, SpO2 Tracking",
        },
        {
            id: 4,
            name: "Mi PowerBank 3i",
            amount: 1999,
            image: "/Mi.jpg",
            description: "20000mAh Lithium Polymer, 18W Fast Charging",
        },
        {
            id: 5,
            name: "Echo Dot (4th Gen)",
            amount: 4499,
            image: "/Echo.jpg",
            description: "Smart Speaker with Alexa (Black)",
        },
    ];

    const checkOutHandler = async (product) => {
        const { key } = await axios.get("http://localhost:4000/api/v1/get-key");

        const response = await axios.post(
            "http://localhost:4000/api/v1/checkout",
            { product }
        );
        console.log(response.data);

        const options = {
            key,
            amount: response.data.order.amount,
            currency: "INR",
            name: "Pratyush Sharma",
            description: "Test Transaction",
            image: "https://avatars.githubusercontent.com/u/176136804?v=4",
            order_id: response.data.order.id,
            callback_url: "http://localhost:4000/api/v1/payment-verification",
            prefill: {
                name: "Pratyush Sharma",
                email: "pratyushsharma2374@gmail.com",
                contact: "9999999999",
            },
            notes: {
                address: "Mumbai, Maharashtra",
            },
            theme: {
                color: "#3399cc",
            },
        };
        const razorpay = new window.Razorpay(options);
        razorpay.open()
    };

    return (
        <div className="home">
            <header className="header">
                <h1>TechKart</h1>
                <p>Your One-Stop Shop for Premium Electronics</p>
            </header>

            <section className="featured-section">
                <h2>Featured Products</h2>
                <div className="products-grid">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            checkOutHandler={checkOutHandler}
                        />
                    ))}
                </div>
            </section>

            <footer className="footer">
                <p>© 2024 TechTrove India. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
