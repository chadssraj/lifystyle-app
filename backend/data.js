import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Raja",
      email: "raja@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Raj",
      email: "raj@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    }
  ],

  products: [
    {
     
      name: "Nike Slim Shirt",
      category: "shirts",
      image: "/images/product-1.jpg",
      peice: 120,
      brand: "Nike",
      rating: 4.2,
      numReview: 10,
      countInStock: 0,
      description: "high quality product",
    },
    {
      
      name: "Adidas Fit  Shirt",
      category: "shirts",
      image: "/images/product-2.jpg",
      peice: 150,
      brand: "Adidas",
      rating: 4.5,
      numReview: 6,
      countInStock: 30,
      description: "high quality product",
    },
    {
    
      name: "Lacoste Free Shirt",
      category: "shirts",
      image: "/images/product-3.jpg",
      peice: 100,
      brand: "Lacoste",
      rating: 4.8,
      numReview: 4,
      countInStock: 30,
      description: "high quality product",
    },
    {
    
      name: "Nike Slim Pant",
      category: "Pants",
      image: "/images/product-4.jpg",
      peice: 80,
      brand: "Nike",
      rating: 4.2,
      numReview: 12,
      countInStock: 30,
      description: "high quality product",
    },
    {
    
      name: "Puma Slim pant",
      category: "Pants",
      image: "/images/product-5.jpg",
      peice: 180,
      brand: "Puma",
      rating: 4.2,
      numReview: 13,
      countInStock: 30,
      description: "high quality product",
    },
    {
      name: "Adidas Slim pant",
      category: "Pants",
      image: "/images/product-7.jpg",
      peice: 70,
      brand: "Adidas",
      rating: 4.2,
      numReview: 30,
      countInStock: 30,
      description: "high quality product",
    },
    {
    
      name: "Lee Slim pant",
      category: "Pants",
      image: "/images/product-7.jpg",
      peice: 70,
      brand: "Lee",
      rating: 4.2,
      numReview: 30,
      countInStock: 30,
      description: "high quality product",
    },
  ],
};

export default data;