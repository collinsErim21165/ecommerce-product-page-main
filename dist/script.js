function openSideBar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'flex';
}

function closeSideBar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'none';
}

// function openAndClose() {
//     const cart = document.getElementById('cart');
//     if (cart.style.display === 'none'){
//         cart.style.display = 'block';
//     } else {
//         cart.style.display = 'none';
//     }
// }

function displayImageOne() {
    const imgOne = document.getElementById('imgOne');
    const imgTwo = document.getElementById('imgTwo');
    const imgThree = document.getElementById('imgThree');
    const imgFour = document.getElementById('imgFour');
    const imgHoverOne = document.getElementById('imgHoverOne');
    const imgHoverTwo = document.getElementById('imgHoverTwo');
    const imgHoverThree = document.getElementById('imgHoverThree');
    const imgHoverFour = document.getElementById('imgHoverFour');
    imgOne.style.display = 'block';
    imgTwo.style.display = 'none';
    imgThree.style.display = 'none';
    imgFour.style.display = 'none';
    imgHoverOne.style.borderWidth = '4px';
    imgHoverOne.style.borderColor = 'rgb(234,88,12)';
    imgHoverTwo.style.borderWidth = '0px';
    imgHoverTwo.style.borderColor = 'transparent';
    imgHoverThree.style.borderWidth = '0px';
    imgHoverThree.style.borderColor = 'transparent';
    imgHoverFour.style.borderWidth = '0px';
    imgHoverFour.style.borderColor = 'transparent';
}

function displayImageTwo() {
    const imgOne = document.getElementById('imgOne');
    const imgTwo = document.getElementById('imgTwo');
    const imgThree = document.getElementById('imgThree');
    const imgFour = document.getElementById('imgFour');
    const imgHoverOne = document.getElementById('imgHoverOne');
    const imgHoverTwo = document.getElementById('imgHoverTwo');
    const imgHoverThree = document.getElementById('imgHoverThree');
    const imgHoverFour = document.getElementById('imgHoverFour');
    imgOne.style.display = 'none';
    imgTwo.style.display = 'block';
    imgThree.style.display = 'none';
    imgFour.style.display = 'none';
    imgHoverOne.style.borderWidth = '0px';
    imgHoverOne.style.borderColor = 'transparent';
    imgHoverTwo.style.borderWidth = '4px';
    imgHoverTwo.style.borderColor = 'rgb(234,88,12)';
    imgHoverThree.style.borderWidth = '0px';
    imgHoverThree.style.borderColor = 'transparent';
    imgHoverFour.style.borderWidth = '0px';
    imgHoverFour.style.borderColor = 'transparent';
}

function displayImageThree() {
    const imgOne = document.getElementById('imgOne');
    const imgTwo = document.getElementById('imgTwo');
    const imgThree = document.getElementById('imgThree');
    const imgFour = document.getElementById('imgFour');
    const imgHoverOne = document.getElementById('imgHoverOne');
    const imgHoverTwo = document.getElementById('imgHoverTwo');
    const imgHoverThree = document.getElementById('imgHoverThree');
    const imgHoverFour = document.getElementById('imgHoverFour');
    imgOne.style.display = 'none';
    imgTwo.style.display = 'none';
    imgThree.style.display = 'block';
    imgFour.style.display = 'none';
    imgHoverOne.style.borderWidth = '0px';
    imgHoverOne.style.borderColor = 'transparent';
    imgHoverTwo.style.borderWidth = '0px';
    imgHoverTwo.style.borderColor = 'transparent';
    imgHoverThree.style.borderWidth = '4px';
    imgHoverThree.style.borderColor = 'rgb(234,88,12)';
    imgHoverFour.style.borderWidth = '0px';
    imgHoverFour.style.borderColor = 'transparent';
   
}


function displayImageFour() {
    const imgOne = document.getElementById('imgOne');
    const imgTwo = document.getElementById('imgTwo');
    const imgThree = document.getElementById('imgThree');
    const imgFour = document.getElementById('imgFour');
    const imgHoverOne = document.getElementById('imgHoverOne');
    const imgHoverTwo = document.getElementById('imgHoverTwo');
    const imgHoverThree = document.getElementById('imgHoverThree');
    const imgHoverFour = document.getElementById('imgHoverFour');
    imgOne.style.display = 'none';
    imgTwo.style.display = 'none';
    imgThree.style.display = 'none';
    imgFour.style.display = 'block';
    imgHoverOne.style.borderWidth = '0px';
    imgHoverOne.style.borderColor = 'transparent';
    imgHoverTwo.style.borderWidth = '0px';
    imgHoverTwo.style.borderColor = 'transparent';
    imgHoverThree.style.borderWidth = '0px';
    imgHoverThree.style.borderColor = 'transparent';
    imgHoverFour.style.borderWidth = '4px';
    imgHoverFour.style.borderColor = 'rgb(234,88,12)';
}




const images = ['../images/image-product-1.jpg','../images/image-product-2.jpg','../images/image-product-3.jpg','../images/image-product-4.jpg'];
let currentIndex = 0;
const imgTopOne = document.getElementById('imgTopOne');
const sliderImages = document.querySelectorAll('.slider-image');


function showImage(index){
    imgTopOne.src = images[index];
    sliderImages.forEach((image, i) => {
        image.classList.remove('active');
        if (i === index){
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
       });
}

function updateImage(index){
    currentIndex = index;
    showImage(currentIndex);
}

function nextImage(){
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex)
}

function prevImage(){
    currentIndex = (currentIndex - 1) % images.length;
    showImage(currentIndex)
}

showImage(currentIndex);

function showTopImage() {
    const imgOnTop = document.getElementById('imgOnTop');
    imgOnTop.style.display = 'block';
}

function removeTopImage() {
    const imgOnTop = document.getElementById('imgOnTop');
    imgOnTop.style.display = 'none';
}


let quantity = 0;

document.getElementById('add').addEventListener('click', function() {
    quantity++;

    document.getElementById('quantity').innerText = quantity;
});

document.getElementById('subtract').addEventListener('click', function() {
    if (quantity > 0){
        quantity--;

        document.getElementById('quantity').innerText = quantity;
    }
});

const quantityNumber = document.getElementById('quantity');
const cartContentHome = document.getElementById('cartContentHome');

function updateCartDisplay() {
    const currentNumber = parseInt(quantityNumber.innerText)
    if (currentNumber === 0 ){
        cartContentHome.style.display = 'none';
    } else  {
        cartContentHome.style.display = 'block';
    }
}

updateCartDisplay()
quantityNumber.addEventListener('change', updateCartDisplay);

document.getElementById('addToCart').addEventListener('click', function() {
    const cartCount = document.getElementById('cartCount');
    const cartBackground = document.getElementById('cartBackground')
    const cartCountNumber = document.getElementById('cartCountNumber')
    const currentNumber = parseInt(quantityNumber.innerText)
    const padding = document.getElementById('padding')

    padding.style.display = 'none';
    cartCount.classList.remove('hidden');
    cartBackground.classList.remove('hidden');
    cartBackground.style.display = 'flex';
    cartCount.innerText = quantity;
    cartCountNumber.innerText = quantity;
    const total = quantity * 125.00;

    if (currentNumber === 0){
      cartContentHome.style.display = 'none';
    } else {
        cartContentHome.style.display = 'block';
    }

    document.getElementById('total').innerText = ` $${total.toFixed(2)}`;
});


document.getElementById('cart').addEventListener('click', function() {
    document.getElementById('cartContent').classList.toggle('hidden');
});

document.getElementById('delete').addEventListener('click', function() {
    const cartContentHome = document.getElementById('cartContentHome')
    const cartBackground = document.getElementById('cartBackground')
    const padding = document.getElementById('padding')
    padding.style.display = 'block';
    cartBackground.style.display = 'none';
    cartContentHome.style.display = 'none';
    quantity = 0;
    document.getElementById('quantity').innerHTML = quantity;
   
})


const imagesMobile = ['../images/image-product-1.jpg','../images/image-product-2.jpg','../images/image-product-3.jpg','../images/image-product-4.jpg'];
let currentIndexMobile = 0;
const imgTopOneMobile = document.getElementById('imgTopOneMobile');


function nextImageMobile(){
    currentIndexMobile = (currentIndexMobile + 1) % imagesMobile.length;
    imgTopOneMobile.src = imagesMobile[currentIndexMobile]
}

function prevImageMobile(){
    currentIndexMobile = (currentIndexMobile - 1) % imagesMobile.length;
    imgTopOneMobile.src = imagesMobile[currentIndexMobile]
}


