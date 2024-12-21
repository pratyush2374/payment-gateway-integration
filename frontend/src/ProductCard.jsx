// components/ProductCard.js
import React from "react";

const ProductCard = ({ product, checkOutHandler }) => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
                <h3>{product.name}</h3>
                <p className="description">{product.description}</p>
                <div className="price-section">
                    <span className="rupee">₹</span>
                    <span className="price">
                        {product.amount.toLocaleString()}
                    </span>
                </div>
                <button className="buy-button" onClick={() => checkOutHandler(product)}>Buy now</button>
            </div>
        </div>
    );
};

export default ProductCard;
