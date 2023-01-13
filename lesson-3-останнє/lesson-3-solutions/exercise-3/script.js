const getBasicInfo = function({name, img, price}){
    const basicInfo = {
        name,
        img: img[0],
        price
    };

    return basicInfo;
};

const product = {
    name: "iphone X",
    img: ["./i.jpg", "./2.jpg", "./3.jpg"],
    price: 14500,
    article: 23324,
    reviews: [{
        name: "Александра",
        date: "12-03-2020",
        text: "Работает как часы"
    }],
    techSpec: [{
        name: "Процессор",
        value: "M1"
    }]
};

const productBasicInfo = getBasicInfo(product);