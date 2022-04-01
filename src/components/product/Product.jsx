import "./product.css";
const Product = ({ product }) => {
  return (
    <>
      <div className="vertical-card flex-column card-dismiss ">
        <span className="text-xs text-center text-black rating">
          {product.rating}
          <i className="fa-solid fa-star text-primary"></i> |{" "}
          {product.allRating}
        </span>
        <span className="text-center wishlist">
          <i className="fa-solid fa-heart"></i>
        </span>
        <img src={product.imgURL} loading="lazy" alt={product.imgAlt} />
        <div className="card-details-container">
          <h3 className="text-base fw-500">{product.title}</h3>
          <span className="text-xs">{product.description}</span>
          <p className="card-price-info">
            Rs.{product.discountPrice}
            <del className="text-xs"> Rs.{product.price}</del>
          </p>
        </div>
        <div className="card-footer">
          <button className="btn btn-solid-primary buy-button text-white">
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
};

export { Product };
