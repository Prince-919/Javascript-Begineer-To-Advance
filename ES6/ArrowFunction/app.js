

// const shop = {
//     purchase : () =>{
//         console.log(this);
//     }
// }
// shop.purchase();


const btn = document.querySelector('#btn');

const shop = {
    price : 100,
    buy  : function (){
        btn.addEventListener('click', () => {
            console.log('Clicked '+this.price);
        });
    },
}
shop.buy();