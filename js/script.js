//Creare un form per chiedere all'utente Nome Cognome, chilometri da percorrere e età del passeggero
const formBtn = document.getElementById("form-btn");
console.log(formBtn);
formBtn.addEventListener("click",
    function() {
        //prelevo gli input dall'utente
        const userFullName = document.getElementById("user-full-name").value;
        
        const userKm = parseInt(document.getElementById("user-km").value);
        
        const userAge = document.getElementById("user-age").value;
        
        //Calacolare il prezzo della tratta (0.21€ al km)
        const userPrice = 0.21 * userKm;
        //Applicare lo sconto del 20% ai minorenni;
        //Applicare lo sconto del 40% per gli over 65;
        let priceDiscounted = userPrice;

        if (userAge === 'Minorenne') {
            priceDiscounted = userPrice - (userPrice * 20) / 100;
        } else if (userAge === 'Over65') {
            priceDiscounted = userPrice - (userPrice * 40) / 100;
        }

        console.log("prezzo finale: ", priceDiscounted);

        //Stampare l'output dei dati finali sul display (prezzo massimo due decimali)
        const priceFormatted = priceDiscounted.toFixed(2);
        console.log(priceFormatted);
        //Offerta dedicata all'utente

        let userOffer = 'Offerta Standard';
        
        if (userAge === 'Minorenne') {
            userOffer = 'Offerta per i minorenni'
        } else if (userAge === 'Over65') {
            userOffer = 'Offerta per gli Over 65'
        }
        
        console.log(userOffer);
        //Generare numero vagone
        const wagonNumber = Math.floor(Math.random() * 12) + 1;
        console.log("carrozza: ", wagonNumber);
        //Generare codice CP 
        const cpCode = Math.floor(Math.random() * 100000) + 80000;
        console.log("cp: ", cpCode);
        
        //inserire i dati forniti dall'utente e i dati generati dal programma negli appositi blocchi
		const nameResponse = document.querySelector(".result h3");
		nameResponse.innerHTML = `${userFullName}`;
        
        const offerResponse = document.querySelector(".result  h5#my-offer");
        offerResponse.innerHTML = `${userOffer}`;
        
        const cpCodeResponse = document.querySelector(".result h5#my-cp");
        cpCodeResponse.innerHTML = `${cpCode}`;
        
        const wagonNumberResponse = document.querySelector(".result h5#my-wagon");
        wagonNumberResponse.innerHTML = `${wagonNumber}`;

        const priceResponse = document.querySelector(".result h5#my-ticket");
        priceResponse.innerHTML = `${priceFormatted}`;

        //Far apparire il risultato generato schiaccando il bottone "genera"
        const resultContainer = document.querySelector(".container-result");
        resultContainer.classList.remove("d-none");
    }
);

const formClearBtn = document.getElementById("form-clear-btn");
console.log(formClearBtn);

formClearBtn.addEventListener("click", 
    function() {

        // Nascondo result container
        const resultContainer = document.querySelector(".container-result");
        resultContainer.classList.add("d-none");

        // Ripulsco i campi
        const userClearName = document.getElementById("user-full-name");
        userClearName.value = "";

        const userClearKm = document.getElementById("user-km");
        userClearKm.value = "";

        const userClearAge = document.getElementById("user-age");
        userClearAge.value = "";
    }
); 
    

