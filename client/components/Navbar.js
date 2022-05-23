import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div key = "navbar">
            <nav>Shopify Backend
                <Link to = "/add-product">Add Item</Link>
                <Link to = "/inventory"> Inventory</Link>
            </nav>
        </div>
    )
}

export default Navbar;
