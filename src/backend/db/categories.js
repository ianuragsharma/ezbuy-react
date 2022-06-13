import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "smartphone",
    description:
      "A smartphone is a cell phone that allows you to do more than make phone calls and send text messages.",
    imgURL:
      "https://raw.githubusercontent.com/ianuragsharma/hostedIMG/main/ecommerce/categoryIMG/smartphone.jpg",
  },
  {
    _id: uuid(),
    categoryName: "headphones",
    description:
      "a piece of equipment worn over the ears that makes it possible to listen to music, the radio, etc. without other people hearing it.",
    imgURL:
      "https://raw.githubusercontent.com/ianuragsharma/hostedIMG/main/ecommerce/categoryIMG/headphones.jpg",
  },
  {
    _id: uuid(),
    categoryName: "laptop",
    description:
      "A laptop, laptop computer, or notebook computer is a small, portable personal computer (PC) with a screen and alphanumeric keyboard.",
    imgURL:
      "https://raw.githubusercontent.com/ianuragsharma/hostedIMG/main/ecommerce/categoryIMG/laptop.jpg",
  },
  {
    _id: uuid(),
    categoryName: "camera",
    description:
      "a piece of equipment that you use for taking photographs or moving pictures.",
    imgURL:
      "https://raw.githubusercontent.com/ianuragsharma/hostedIMG/main/ecommerce/categoryIMG/camera.jpg",
  },
];
