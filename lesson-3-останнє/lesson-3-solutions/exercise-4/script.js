const products = [
    {
        name: "Acer Swift 3",
        price: 18000
    },
    {
        name: "Lenovo X120S",
        price: 12000
    },
    {
        name: "Huawei MateBook D",
        price: 23000
    }
];

const getMinPrice = (products)=>{
    const prices = [];
    for(const {price} of products){
        prices.push(price);
    }
   const minPrice = Math.min(...prices);
   return minPrice;
}

const productsMinPrice = getMinPrice(products);
console.log(productsMinPrice);