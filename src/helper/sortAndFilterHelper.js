const sortedFilterHelper = (product, bySort) => {
  if (bySort === "PRICE_LOW_TO_HIGH")
    return product.sort((a, b) => a.discountPrice - b.discountPrice);
  else if (bySort === "PRICE_HIGH_TO_LOW")
    return product.sort((a, b) => b.discountPrice - a.discountPrice);
  else return product;
};
const priceFilterHelper = (product, byPrice) =>
  product.filter((item) => item.discountPrice <= byPrice);

const ratingFilterHelper = (product, byRating) =>
  product.filter((item) => item.rating >= Number(byRating));

const categoryFilterHelper = (product, catergory) => {
  const catergoryFilterArr = [];
  if (Object.values(catergory).every((item) => item === false)) return product;

  if (catergory.camera) {
    let newProductsArr = product.filter(
      (item) => "camera" === item.categoryName
    );
    catergoryFilterArr.push(...newProductsArr);
  }
  if (catergory.smartphone) {
    let newProductsArr = product.filter(
      (item) => "smartphones" === item.categoryName
    );
    catergoryFilterArr.push(...newProductsArr);
  }
  if (catergory.laptop) {
    let newProductsArr = product.filter(
      (item) => "laptop" === item.categoryName
    );
    catergoryFilterArr.push(...newProductsArr);
  }
  if (catergory.headphones) {
    let newProductsArr = product.filter(
      (item) => "headphones" === item.categoryName
    );
    catergoryFilterArr.push(...newProductsArr);
  }

  return catergoryFilterArr;
};

export {
  categoryFilterHelper,
  priceFilterHelper,
  ratingFilterHelper,
  sortedFilterHelper,
};
