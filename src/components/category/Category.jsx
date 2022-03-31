import React, { useState, useEffect } from "react";
import axios from "axios";
import "./category.css";
import { Link } from "react-router-dom";
const Category = () => {
  const [error, setError] = useState();
  const [cateogory, setCateogory] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("api/categories");
        setCateogory(data.categories);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);
  const cateogoryList = cateogory.map((item) => (
    <div key={item.id} className="category-item">
      <Link to="/somewhere">
        <img
          loading="lazy"
          className="image-responsive"
          src={item.imgURL}
          alt="headphones"
        />

        <div className="category-overlay text-center">{item.categoryName}</div>
      </Link>
    </div>
  ));
  return <>{cateogoryList}</>;
};

export { Category };
