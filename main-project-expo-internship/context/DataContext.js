
// context/DataContext.js
import React, { createContext, useState, useEffect } from 'react';

// Sample product data
const products = [
     {
        id: 1,
        title: " packed idli-sambar.",
        price: 5,
        description:
          "Made of whole wheat grain with added spices to it.Makes a wealth and health option for your meal",
        category: "veg",
        image: "https://www.sharmispassions.com/wp-content/uploads/2016/11/30355094594_3933f279e1_o.jpg",
      },
      {
        id: 2,
        title: " packed samosa",
        price: 10,
        description:
          " world's major breakfast. world wide famous full of carbohydrates , sugar ,energy etc. ",
        category: "veg",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvYe10xwM-YcKB5jf_T0pPYJDFhBuhQCw3A&s",
      },
      {
        id: 3,
        title: "packed panner",
        price: 55.99,
        description:
          "full of proteins etc.Give you a healthy lifestyle. ",
        category: "veg",
        image: "https://cdn.dotpe.in/longtail/store-items/8656779/TD5rRrMy.webp",
      },
      {
        id: 4,
        title: "packed Aloo jeera",
        price: 15.99,
        description:
          "homestyle making of childhood mom's style aloo jeera, mesmerizing taste bring you back to your childhood memories.",
        category: "veg",
        image: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/02/Jeera-Aloo-Recipe-500x500.jpg",
      },
      {
        id: 5,
        title:
          " packed chicken- butter masala",
        price:500,
        description:
          "Best dish for non vegetarians",
        category: "nonveg",
        image: "https://static.toiimg.com/thumb/53205522.cms?imgsize=302803&width=800&height=800",
      },
      {
        id: 6,
        title: " packed dried fish",
        price:120,
        description:
          "A tastier snack for all type of non vegetarians contains high content of sodium ,omega-3,energy",
        category: "nonveg",
        image: "https://www.bigbasket.com/media/uploads/p/xxl/40249725_1-fresho-dry-fish-nathli-anchovies-big-salted-cut-cleanedfor-accompaniment-with-meals.jpg",
      },
      {
        id: 7,
        title: "packed nonveg salad ",
        price: 9.99,
        description:
          "to acheive a healthy life your intake of nutrients be full-filled. blessing for gym rats. ",
        category: "nonveg",
        image: "https://cdn.shopify.com/s/files/1/0280/8820/5444/files/Malabar_Crab_Salad_1.jpg",
      },
      {
        id: 8,
        title: "chicken nuggets",
        price: 10.99,
        description:
          "enjoy a cheatmeal,with your homeies",
        category: "nonveg",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFbf6Zc5cMBnwfEAgVcyZMiuv93Pya4JTRSQ&s",
      },
      {
        id: 9,
        title: "Apples-1/2kg",
        price: 64,
        description:
          "Apple a day keeps a doctor away",
        category:"fruits-veges",
        image: "https://images.finegardening.com/app/uploads/2018/06/03145924/165GE-897S5581_DS-e1528393242664-1-thumb-1x1.jpg",
      },
      {
        id: 10,
        title: "Grapes-1/2kg",
        price: 109,
        description:
          "Green, purple, or dark blue, grapes are a fruit available in many different colors and tastes—including a cotton candy flavor. They're grown all over the world and may come with or without seeds. With so much variety, the fruit may have you wondering, Are grapes good for you?—and the answer is yes.",
        category: "fruits-veges",
        image: "https://www.heart.org/-/media/Images/News/2023/December-2023/1220EIOLIGrapes_SC.jpg",
      },
      {
        id: 11,
        title:"combo-onion,potato,tomato,cabbage,carrot-each contains-1/2kg",
        price: 109,
        description:
          "A delightful combo contains a package of nuitrients and minerals",
        category: "fruits-veges",
        image: "https://cdn.britannica.com/17/196817-159-9E487F15/vegetables.jpg",
      },
      {
        id: 12,
        title:
          "strawberries 1 packet",
        price: 114,
        description:
          "the nuitritious fruit present on earth",
        category: "fruits-veges",
        image: "https://www.allrecipes.com/thmb/1c99SWam7_FM6vUzpDDzIKffMR4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-strawberry-fruit-or-vegetable-f6dd901427714e46af2d706a57b9016f.jpg",
      },
      {
        id: 13,
        title: "combo of banana,oranges,lemon,pineapple. ",
        price: 599,
        description:
          "Pineapples and oranges both contain a lot of fiber, water, and vitamin C which boosts your immune system and keeps you hydrated. They're also loaded with vitamin A, vitamin K, calcium, iron, and folate. The health benefits of drinking pineapple orange juice include: Stronger bones and teeth.",
        category: "fruits-veges",
        image: "https://i0.wp.com/munchmealsbyjanet.com/wp-content/uploads/2021/12/Pineapple-Orange-Prep-1.jpg?resize=720%2C960&ssl=1",
      },
      {
        id: 14,
        title:
          " combo-cucumber,ginger,coriander,lemon,beetroot ",
        price: 999.99,
        description:
          "It is most essential for your skin you can also add this to your diet and skin routine . it reduces the fat with ease.",
        category: "fruits-veges",
        image: "https://cdn.foodaciously.com/static/recipes/87330bc7-7c8a-4c89-b716-b3174cc70c3b/step/sliced-cucumber-ginger-and-lemon-60311815879b8af995ae2bd1828bbe0f-1920.jpg",
      },
      {
        id: 15,
        title: "oats,honey,sugar,salt",
        price: 56.99,
        description:
          "bring your own health in your hands",
        category: "Grocery",
        image: "https://www.cleaneatingwithkids.com/wp-content/uploads/2019/05/oats-and-honey-.png",
      },
      {
        id: 16,
        title:
          "combo-milk products :1-litres,paneer-1/2kg,curd-250gram",
        price: 129.95,
        description:
          "Calcium-rich, low-fat powdered milk contains potassium and magnesium, which are helpful nutrients that assist in lowering blood pressure. Also important to your cardiovascular health is limiting your saturated fat intake. Fat-free dry milk contains just 0.2 grams of fat per serving and only 0.3 gram of saturated fat.",
        category: "Grocery",
        image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/9685/iStock-544807136.jpg",
      },
      {
        id: 17,
        title: "Spices",
        price: 39.99,
        description:
          "Add tastes to your food",
        category: "Grocery",
        image: "https://images.squarespace-cdn.com/content/v1/5d7a7d46c113fa5724db2604/1657201279487-VYBITML569O97J1CXKLY/Spice+packets+indiv.jpg?format=1500w",
      },
      {
        id: 18,
        title: "fresh packed chicken",
        price: 99.85,
        description:
          "red meat increases your energy level and boost your organs to work properly",
        category: "Grocery",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcY-iG3HjOP-CC6xmAzqYyaDYtdjgmZjzgTQ&s",
      },
      {
        id: 19,
        title: "biscuits combo of - oreo,buorbon,nuitrichoice",
        price: 17.95,
        description:
          "Time for snacks",
        category: "Grocery",
        image: "https://makanaka.wordpress.com/wp-content/uploads/2014/02/rg_201402_biscuits_brands.jpg",
      },
      {
        id: 20,
        title: " combo-candies/mixture/maggie/chocos/cornflakes",
        price: 12.99,
        description:
          "Time to toast your boring",
        category: "Grocery",
        image: "https://media.istockphoto.com/id/458250835/photo/closeup-of-a-variety-chocolate-bars.jpg?s=612x612&w=0&k=20&c=C35H7-L71_IqUhtv-L7ZoWCDcd9ZiSj87_v8kw-ANR8=",
      },

      {
      id: 21,
        title: "Mushroom",
        price: 15.99,
        description:
          "homestyle making of childhood mom's style mushroom, mesmerizing taste bring you back to your childhood memories.",
        category: "veg",
        image: "https://www.funfoodfrolic.com/wp-content/uploads/2020/04/Mushroom-Masala-Thumbnail.jpg",
      },
{
      id: 22,
        title: "salad.",
        price: 150,
        description:
          "enjoy the meal",
        category: "veg",
        image: "https://www.thespruceeats.com/thmb/2GoDt7juuaU7lxtQDq-_IjEr6t8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-our-favorite-simple-green-salad-recipe-7370448-hero-01-4ca9788a0a3c4d53b70f1d07f8382b7f.jpg",
      },
  
  
];

// Create context
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [productData, setProductData] = useState(products);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const addToWishlist = (product) => {
    // Check if the product is already in the wishlist
    const isProductInWishlist = wishlist.some((item) => item.id === product.id);

    if (!isProductInWishlist) {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
    } else {
      console.log('Product is already in the wishlist');
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== productId));
  };

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (!isProductInCart) {
      setCart((prevCart) => [...prevCart, product]);
    } else {
      console.log('Product is already in the cart');
    }
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };
  return (
    <DataContext.Provider value={{ productData, wishlist, cart, addToWishlist, removeFromWishlist, addToCart, removeFromCart, clearCart }}>
      {children}
    </DataContext.Provider>
  );
};