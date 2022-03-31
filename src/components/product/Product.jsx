import "./product.css";
const Product = ({ product }) => {
  const productDiscount = (price) => {
    const discount = product.price - (product.discount * product.price) / 100;
    return discount;
  };

  return (
    <>
      <div className="vertical-card flex-column card-dismiss ">
        <span className="text-center">
          <i className="fa-solid fa-heart"></i>
        </span>
        <img src={product.imgURL} loading="lazy" alt={product.imgAlt} />
        <div className="card-details-container">
          <h3 className="text-base">{product.title}</h3>
          <span className="text-xs">{product.description}</span>
          <p className="card-price-info">
            Rs.{productDiscount()}
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
