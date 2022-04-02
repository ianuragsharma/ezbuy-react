import "./filter.css";
import { useSortAndFilter } from "../../contexts";
const Filter = () => {
  const { state, dispatch } = useSortAndFilter();
  const { bySort, byCategories, byPrice, byRating } = state;
  return (
    <>
      <aside className="product-aside flex-column">
        <div className="flex-row justify-spacebw">
          <h4 className="fw-500 text-xl">Filters</h4>
          <button
            className="btn btn-icon text-base text-black btn-clear"
            onClick={() => dispatch({ type: "CLEAR" })}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
        <div className="filter-list">
          <p className="fw-700">Sort By</p>
          <div>
            <input
              type="radio"
              id="low"
              name="price-sort"
              checked={bySort === "PRICE_LOW_TO_HIGH"}
              onChange={() => dispatch({ type: "PRICE_LOW_TO_HIGH" })}
            />
            <label htmlFor="low">Price - Low to High</label>
          </div>
          <div>
            <input
              type="radio"
              id="high"
              name="price-sort"
              checked={bySort === "PRICE_HIGH_TO_LOW"}
              onChange={() => dispatch({ type: "PRICE_HIGH_TO_LOW" })}
            />
            <label htmlFor="high">Price - High to low</label>
          </div>
        </div>
        <div className="filter-list">
          <p className="fw-700">Price</p>
          <div className="slider-container">
            <div className="flex-row justify-spacebw text-sm">
              <span></span>
              <span>0</span>
              <span>20k</span>
              <span>40k</span>
              <span>60k</span>
              <span>80k</span>
              <span>100k</span>
            </div>
            <input
              type="range"
              min="0"
              max="100000"
              step="20000"
              value={byPrice}
              onChange={(event) =>
                dispatch({ type: "PRICE", payload: event.target.value })
              }
            />
          </div>
        </div>
        <div className="filter-list">
          <p className="fw-700">Category</p>
          <div>
            <input
              type="checkbox"
              id="smartphone"
              value="smartphone"
              checked={byCategories.smartphone}
              onChange={() => dispatch({ type: "SMARTPHONE" })}
            />
            <label htmlFor="smartphone">Smartphone</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="laptop"
              value="laptop"
              checked={byCategories.laptop}
              onChange={() => dispatch({ type: "LAPTOP" })}
            />
            <label htmlFor="laptop">Laptop</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="camera"
              value="camera"
              checked={byCategories.camera}
              onChange={() => dispatch({ type: "CAMERA" })}
            />
            <label htmlFor="camera">Camera</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="headphones"
              value="headphones"
              checked={byCategories.headphones}
              onChange={() => dispatch({ type: "HEADPHONES" })}
            />
            <label htmlFor="headphones">Headphones</label>
          </div>
        </div>
        <div className="filter-list">
          <p className="fw-700">Rating</p>
          <div>
            <input
              type="radio"
              id="four"
              name="Rating"
              value="4"
              checked={byRating === "4"}
              onChange={(event) =>
                dispatch({ type: "RATING", payload: event.target.value })
              }
            />
            <label htmlFor="four">4 stars & above</label>
          </div>
          <div>
            <input
              type="radio"
              id="three"
              name="Rating"
              value="3"
              checked={byRating === "3"}
              onChange={(event) =>
                dispatch({ type: "RATING", payload: event.target.value })
              }
            />
            <label htmlFor="three">3 Stars & above</label>
          </div>
          <div>
            <input
              type="radio"
              id="two"
              name="Rating"
              value="2"
              checked={byRating === "2"}
              onChange={(event) =>
                dispatch({ type: "RATING", payload: event.target.value })
              }
            />
            <label htmlFor="two">2 Stars & above</label>
          </div>
          <div>
            <input
              type="radio"
              id="one"
              name="Rating"
              value="1"
              checked={byRating === "1"}
              onChange={(event) =>
                dispatch({ type: "RATING", payload: event.target.value })
              }
            />
            <label htmlFor="one">1 Stars & above</label>
          </div>
        </div>
      </aside>
    </>
  );
};

export { Filter };
