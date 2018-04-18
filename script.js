

var btc_to_usd_price = document.querySelector("#cell2")
var btc_to_eur_price = document.querySelector("#cell3")
var btc_to_gbp_price = document.querySelector("#cell4")
var btc_to_jpy_price = document.querySelector("#cell5")
var btc_to_cad_price = document.querySelector("#cell6")

var main1 = document.querySelector('#extra_row1')
var main2 = document.querySelector('#extra_row2')




class Bitcoin {
    constructor() {

    }
    getPrices() {
        $.ajax({
            url: `https://bitpay.com/api/rates`,


            dataType: "json",
            success: (response) => {
                console.log(response)


               
                btc_to_usd_price.textContent = response[2].rate
                btc_to_eur_price.textContent = response[3].rate
                btc_to_gbp_price.textContent = response[4].rate
                btc_to_jpy_price.textContent = response[5].rate
                btc_to_cad_price.textContent = response[6].rate


            },

            //////// error function///////// 
            error: function () {
                alert('There was an error getting from the API');
                console.log('There was an error getting from the API');
            },
            ////////////////////////////////




        })
    }

    ////////////function add prices////////////
    addPrices()  {
        let new_currency = window.prompt("What is the currency code")
        console.log(new_currency)


        if (crypto_names_array.indexOf(new_currency) > -1) {    //this code i got from here  https://bit.ly/2vtiZvI
            //In the array!
            let k = crypto_names_array.indexOf(new_currency) //  k is The right index of an ellement in array
            console.log(k)
            main1.innerHTML += `<div class="divTableCell">&nbsp;BTC/${new_currency}</div>`
            main2.innerHTML += `<div class="divTableCell">$</div>`
        } else {
            //Not in the array
            console.log("Wrong crypto code")
            alert("Wrong crypto code")
        }


    }
    ////////////////////////////////////////
}

const bitcoin = new Bitcoin()
bitcoin.getPrices()















document.getElementById("get_prices_button").addEventListener("click", function () {
    bitcoin.addPrices()
});

document.getElementById("refresh_button").addEventListener("click", function () {
    bitcoin.getPrices()
    

});
