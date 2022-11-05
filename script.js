const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");


const swap = document.getElementById("swap");
let rate = document.getElementById("rate")


function calculate() {
     let currency_one = currencyOne.value;
     fetch(`https://v6.exchangerate-api.com/v6/a40f76ca0a78732395285851/latest/${currency_one}`)
      .then(result =>{
          return result.json()
      }).then(
          data =>{
               var data = data;
               console.log(data)
               let currency_two = currencyTwo.value;
               var rates = data.conversion_rates[currency_two];
               rate.innerText = `1 ${currency_one} is ${rates} ${currency_two}`;
               amountTwo.value = ( amountOne.value * rates ).toFixed(2);
          }
      )
}

swap.addEventListener("click", () =>{
     const temp = currencyOne.value;
     currencyOne.value = currencyTwo.value;
     currencyTwo.value = temp;

     calculate()

})



currencyOne.addEventListener("change", calculate);
currencyTwo.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
amountTwo.addEventListener("input", calculate);

































// function calculate() {
//      const currency_one = currencyOne.value;
//      const currency_two = currencyTwo.value;

//      fetch(`https://v6.exchangerate-api.com/v6/a40f76ca0a78732395285851/latest/${currency_one}`)
//      .then(result=>{
//           return result.json()
//      })
//      .then(data => {
//           var data = data;
//           console.log(data)
//           const rates = data.conversion_rates[currency_two];
//           console.log(rates)
//           rate.innerText = ` 1 ${currency_one} =  ${rates} ${currency_two}`;

//           amountTwo.value = ( amountOne.value * rates ).toFixed(2)
//      })

   

   
// }

// currencyOne.addEventListener("change", calculate);
// currencyTwo.addEventListener("change", calculate);
// amountOne.addEventListener("input", calculate);
// amountTwo.addEventListener("input", calculate);



// swap.addEventListener("click", () =>{
//      const temp = currencyOne.value;
//      currencyOne.value = currencyTwo.value;
//      currencyTwo.value = temp;

//      calculate()

// })
































// fetch("https://v6.exchangerate-api.com/v6/a40f76ca0a78732395285851/latest/NGN")
// .then(result => {
//      console.log(result)
//      return result.json()
// })
// .then(data => {
//      console.log(data)
// })
// .catch(error =>{
//      console.log("time have reach for maintenace")
// })


//async awaits
// async function conversion() {
//     const api =  fetch("https://v6.exchangerate-api.com/v6/a40f76ca0a78732395285851/latest/NGN");

//     const result = await api;
//     const data = await result;

//     console.log(data)
// }

// conversion()









































// function calculate(){
//      const currency_one = currencyOne.value;
//      const currency_two = currencyTwo.value

//      fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
//      .then(res => res.json())
//      .then(data => {
//           const rates = data.rates[currency_two];
//           rate.innerText = ` 1 ${currency_one} =  ${rates} ${currency_two}`;

//           amountTwo.value = ( amountOne.value * rates ).toFixed(2)
//           console.log(amountTwo.value)
//      })
     
// }




// currencyOne.addEventListener("change", calculate)
// currencyTwo.addEventListener("change", calculate)
// amountOne.addEventListener("input", calculate)
// amountTwo.addEventListener("input", calculate)

// swap.addEventListener("click", () =>{
//      const temp = currencyOne.value;
//      currencyOne.value = currencyTwo.value;
//      currencyTwo.value = temp;

//      calculate()

// })

// calculate()