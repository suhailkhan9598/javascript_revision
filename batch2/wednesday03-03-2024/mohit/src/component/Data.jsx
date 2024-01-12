import React, { useEffect, useState } from "react";
import axios from "axios";

const Data = () => {
    const [item, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const getData = async () => {
        try {
            let res = await axios.get("https://fakestoreapi.com/products");
            setData(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    // const handleChange = (event) => {
    //     const selectedCategory = event.target.value;
    //     const filtered = data.filter(
    //         (ele) => ele.category === selectedCategory
    //     );
    //     setFilteredData(filtered);
    useEffect(() => {
        getData();
    }, []);
    console.log(item);
    console.log(filteredData);

    return (
        <div>
            <div>
                <select>
                    <option value="men's clothing">Men</option>
                    <option value="women's clothing">Women</option>
                    <option value="jewelery">Jewelry</option>
                    <option value="electronics">Electronics</option>
                </select>
            </div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "30px",
                }}>
                {item.map((ele, index) => (
                    <div key={index} style={{ border: "1px solid green" }}>
                        <img style={{ width: "50%" }} src={ele.image} alt="" />
                        <p>{ele.price}</p>
                        <h1>{ele.category}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Data;
