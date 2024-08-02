//const baseURL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const baseURL2 = "https://v6.exchangerate-api.com/v6/86a87f805d7c5e1312f94e42/latest/";
const dropdowns = document.querySelectorAll(".dropdown select");

const btn = document.querySelector("button");

let fromcurr = document.querySelector(".from select");
let tocurr = document.querySelector(".to select");

const txt = document.querySelector(".amount input");

const msg = document.querySelector(".msg");

for(select of dropdowns){
    for(codes in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = codes;
        newOption.value = codes;
        if(select.name === "from" && codes === "USD"){
            newOption.selected = "selected";
        }else if(select.name === "to" && codes === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change" , (evt) => {
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    let currcode = element.value;
    let countrycode = countryList[currcode];
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
};

btn.addEventListener("click",(evt) => {
    evt.preventDefault();         //to prevent reload of web page and other operations
    exchangerate();
})

const exchangerate = async () => {
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;
    if(amtval === "" || amtval < 1){
        amtval = 1;
        amount.value = "1";
    }

    let URL = `${baseURL2}/${fromcurr.value.toLowerCase()}`;
    let response = await fetch(URL); 
    let data = await response.json();
    let rate = data.conversion_rates[tocurr.value];

    // console.log(rate);
    let currval = txt.value;
    txt.value = currval * rate;

    msg.innerText = `1 ${fromcurr.value} = ${rate} ${tocurr.value}`;
}


