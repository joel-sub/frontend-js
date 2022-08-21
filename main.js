const menucito = document.querySelector('.desktop-menu');
const navEmail = document.querySelector('.navbar-email');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const hamburgerBtn = document.querySelector('.menu');

navEmail.addEventListener('click', toggleMenucito);
hamburgerBtn.addEventListener('click', toggleHamburger);
cartIcon.addEventListener('click', toggleAside);

function toggleMenucito(){
    const asideClosed= aside.classList.contains('inactive');
    if(!asideClosed){
        aside.classList.add('inactive')
    }
    menucito.classList.toggle('inactive');
}

function toggleHamburger(){
    const asideClosed= aside.classList.contains('inactive');
    if(!asideClosed){
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleAside(){
    const menuClosed = mobileMenu.classList.contains('inactive');    
    if(!menuClosed){
        mobileMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive')
}

const listOfProducts = []; 
listOfProducts.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
listOfProducts.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
listOfProducts.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
listOfProducts.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
listOfProducts.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
listOfProducts.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
listOfProducts.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
listOfProducts.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
listOfProducts.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 

for(product of listOfProducts){
    // Se crean los elementos y se le asignan clases y contenido
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.image);
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoContainer = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = `$ ${product.price}`

    const productName = document.createElement('p');
    productName.innerText = product.name

    const figure = document.createElement('figure');

    const figureImage = document.createElement('img');
    figureImage.setAttribute('src', './icons/bt_add_to_cart.svg');

    // se hacen los append correspondientes 
    const productContainer = document.querySelector('.cards-container');

    productContainer.appendChild(productCard)
        productCard.append(productImage, productInfo);
            productInfo.append(productInfoContainer, figure);
                productInfoContainer.append(productPrice, productName);
                figure.appendChild(figureImage);
}
