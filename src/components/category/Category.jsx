import React, { useState, useEffect } from "react";
import axios from "axios";
import "./category.css";
import { Link } from "react-router-dom";
import { useSortAndFilter } from "../../contexts";
const Category = () => {
  const { state, dispatch } = useSortAndFilter();
  const { bySort, byCategories, byPrice, byRating } = state;
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
    dispatch({ type: "CLEAR" });
  }, []);
  const cateogoryList = cateogory.map((item) => (
    <div
      key={item._id}
      className="category-item"
      onClick={() => dispatch({ type: item.categoryName.toUpperCase() })}
    >
      <Link to="/products">
        <img
          loading="lazy"
          className="image-responsive"
          src={item.imgURL}
          alt="category"
        />

        <div className="category-overlay  text-center">{item.categoryName}</div>
      </Link>
    </div>
  ));
  return <>{cateogoryList}</>;
};

export { Category };
