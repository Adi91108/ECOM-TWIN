import axios from "axios";
import data from "./data.json";

export const fetchData = async (page) => {
  try {
    // const res = await axios.get(
    //   "https://catalog-management-system-dev-ak3ogf6zea-uc.a.run.app/cms/products",
    //   {
    //     headers: {
    //       Referer: "https://catalog-management-system-dev-ak3ogf6zea-uc.a.run.app",
    //       Origin: "https://catalog-management-system-dev-ak3ogf6zea-uc.a.run.app",
    //     },
    //   }
    // );

    // const data = await res.json();
    // const data = await fetch("/data.json");
    // console.log(data);
    
    const products = data.products;

    const prettifiedProducts = products.map((product) => {
      return {
        id: product.sku_code,
        img: "https://fastly.picsum.photos/id/606/200/200.jpg?blur=5&hmac=yPzw2cEREt2W8cuwXRKY0FNCvlGfKq6uY1lVLUSer_o",
        name: product.name,
        price: product.mrp.mrp,
        category: product.main_category,
      };
    });

    console.log("prettifiedProducts", prettifiedProducts);
    return {
      totalItems: data.totalResults,
      items: prettifiedProducts,
    };
  } catch (error) {
    console.log('gy:',error);
  }
};
