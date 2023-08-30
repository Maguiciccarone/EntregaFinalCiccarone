const products = [
    //navegación
    { id: "1", name: "Lobo, faro y pájaro", price: "1000", img: "../public/img/portadas/lobofaropajaro.jpg", category: "navegacion" },
    { id: "2", name: "Pingüinera + navegación", price: "2000",img: "../public/img/portadas/pinguineraynavegacion.jpg" ,category: "navegacion" },
    { id: "3", name: "Pingüinera", price: "3000",img: "../public/img/portadas/pinguinera.jpg",category: "navegacion" },
    { id: "4", name: "Cruce a pw", price: "4000", img: "../public/img/portadas/cruceapw.jpg",category: "navegacion" },

    //trekking
    { id: "5", name: "Vinciguerra", price: "5000",img: "../public/img/portadas/vinciguerra.jpg", category: "trekking" },
    { id: "6", name: "Laguna Esmeralda", price: "6000",img: "../public/img/portadas/lagunaesmeralda.jpg", category: "trekking" },
    { id: "7", name: "Glaciar Martial", price: "7000", img: "../public/img/portadas/glaciarmartial.jpg",category: "trekking" },
    { id: "8", name: "Parque Nacional", price: "8000", img: "../public/img/portadas/parquenacional.jpg",category: "trekking" },

    //tours
    { id: "9", name: "Lagos 4x4", price: "9000",img: "../public/img/portadas/lagos4x4.jpg", category: "tours" },
    { id: "10", name: "Tren del fin del Mundo", price: "10000", img: "../public/img/portadas/trendelfindelmundo.jpg",category: "tours" },
    { id: "11", name: "Lago convencional", price: "11000", img: "../public/img/portadas/lagoconvencional.jpg",category: "tours" },
    { id: "12", name: "Sunset Kayak", price: "12000", img: "../public/img/portadas/sunsetkayak.jpg",category: "tours" },
]

// get product

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // buscamos el producto por id
            const product = products.find((p) => p.id === id);

            // si existe el producto
            if (product) {
                resolve(product);
            } else {
                reject("No existe el producto");
            }
        }, 1000);
    });
};

export const getProducts = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productsFiltered = category ? products.filter((product) => product.category === category) : products;

            resolve(productsFiltered);

        }, 1000);
    });
}