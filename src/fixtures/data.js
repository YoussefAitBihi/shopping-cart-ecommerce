import { faker } from "@faker-js/faker";
import { supabase } from "../../lib/api";

const products = [];
const images = [];

for (let i = 0; i < 20; i++) {
  const product = {
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price({ min: 35.1, max: 120.12 }),
    thumbnail: faker.image.url({ width: 1000, height: 1000 }),
    discount: faker.number.int({ min: 30, max: 70 }),
  };

  products.push(product);

  for (let j = 0; j < 4; j++) {
    const carousel = {
      id: faker.string.uuid(),
      image: faker.image.url({ width: 1000, height: 1000 }),
      product_id: product.id,
    };

    images.push(carousel);
  }
}

// Generate 30 products

async function insertProducts() {
  const { errorProducts } = await supabase.from("products").upsert(products);
  const { errorImages } = await supabase.from("images").upsert(images);

  if (errorProducts || errorImages)
    throw new Error("We can't insert these products");
}

// insertProducts();
