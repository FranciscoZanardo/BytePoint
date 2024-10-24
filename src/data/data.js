
const productos = [
    {
        id:"DKs223",
        name:"Auriculares Redragon Scylla H901 PC",
        description:"dadsdasdsad",
        stock:2,
        price:25500,
        image:"/img/auricular-1.webp",
        category:"accesorios",
    },  
    {
        id:"DKs453",
        name:"Auriculares Inalambricos Logitech G733 Lightspeed RGB White",
        description:"dasdadsd",
        stock:2,
        price:230900,
        image:"/img/auricular-2.webp",
        category:"accesorios",
    },
    {
        id:"DKs145",
        name:"Auriculares Redragon Zeus X H510 RGB Surround",
        description:"asdasd",
        stock:2,
        price:74500,
        image:"/img/auricular-3.png",
        category:"accesorios",
    },
    {
        id:"RSTs100",
        name:"Teclado Mecanico Redragon Kumara K552 RGB Outemu Red",
        description:"dasdadsd",
        stock:2,
        price:43000,
        image:"/img/teclado-1.png",
        category:"accesorios",
    },
    {
        id:"RSTs142",
        name:"Teclado Redragon Harpe PRO K503 RGB ESP",
        description:"dasdadsd",
        stock:2,
        price:28000,
        image:"/img/teclado-2.png",
        category:"accesorios",
    },
    {
        id:"RSTs150",
        name:"Teclado Mecanico Redragon Draconic K530W White RGB Wireless Switch Brown 60%",
        description:"dasdadsd",
        stock:2,
        price:64700,
        image:"/img/teclado-3.png",
        category:"accesorios",
    },    {
        id:"MSTs430",
        name:"Mouse Redragon Griffin M607 RGB Black",
        description:"dasdadsd",
        stock:2,
        price:20500,
        image:"/img/mouse-1.jpg",
        category:"accesorios",
    },
    {
        id:"MSTs124",
        name:"Mouse Logitech G903 Lightspeed Wireless HERO 25K",
        description:"dasdadsd",
        stock:2,
        price:115600,
        image:"/img/mouse-2.png",
        category:"accesorios",
    },{
        id:"MSTs502",
        name:"Mouse Logitech G502 Lightspeed Wireless RGB Lightsync",
        description:"dasdadsd",
        stock:2,
        price:98500,
        image:"/img/mouse-3.jpg",
        category:"accesorios",
    },
]

const traerProducts = () => {
    return new Promise((resolve, eject) => {
        setTimeout( () => {
            resolve(productos)
        }, 1000)
    })
}

export {traerProducts}