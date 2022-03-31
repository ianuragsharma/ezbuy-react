import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Iphone 13",
    description: "Apple Iphone 13 256GB",
    category: "smartphones",
    brand: "apple",
    imgURL:
      "https://raw.githubusercontent.com/ianuragsharma/hostedIMG/main/ecommerce/productIMG/smartphone/iphone.jpg",
    imgAlt: "iphone 13",
    price: 89000,
    discount: 10,
    inStock: true,
    rating: 4,
  },
  {
    _id: uuid(),
    title: "One Plus Nord 2",
    description: "One Plus Nord 2 128GB",
    category: "smartphones",
    brand: "one plus",
    imgURL:
      "https://raw.githubusercontent.com/ianuragsharma/hostedIMG/main/ecommerce/productIMG/smartphone/oneplus.jpg",
    imgAlt: "oneplus nord",
    price: 25000,
    discount: 15,
    inStock: true,
    rating: 3,
  },
  {
    _id: uuid(),
    title: "Samsung S20 FE",
    description: "Samsung S20 FE 256GB",
    category: "smartphones",
    brand: "samsung",
    imgURL:
      "https://raw.githubusercontent.com/ianuragsharma/hostedIMG/main/ecommerce/productIMG/smartphone/samsung.jpg",
    imgAlt: "samsung s20",
    price: 59000,
    discount: 10,
    inStock: true,
    rating: 4,
  },
  {
    _id: uuid(),
    title: "Redmi Note 11T",
    description: "Redmi Note 11T 256 GB",
    category: "smartphones",
    brand: "redmi",
    imgURL:
      "https://raw.githubusercontent.com/ianuragsharma/hostedIMG/main/ecommerce/productIMG/smartphone/xiaomi.jpg",
    imgAlt: "redmi note11",
    price: 14900,
    discount: 10,
    inStock: true,
    rating: 3,
  },
];
