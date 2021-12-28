const jokes = document.querySelector('#joke');
const jokesBtn = document.querySelector('#jokeBtn');
const url = 'https://icanhazdadjoke.com'
const getJokes = () => {

    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }
    fetch(url, setHeader)
        .then((res) => res.json())
        .then((data) => {
            jokes.innerHTML = data.joke;
        })
        .catch((error) => {
            console.log(error);
        });
}

jokesBtn.addEventListener('click', getJokes);
getJokes();

// ***************Using httpRequest**************************************
const population = document.querySelector('#population');
const capital = document.querySelector('#capital');
const countryImg = document.querySelector('#countryImg');

const request = new XMLHttpRequest();
request.open('GET',"https://restcountries.com/v2/alpha/in");
request.send();

request.addEventListener('load',function(){
    const data = JSON.parse(this.responseText);
    console.log(data);
    population.innerHTML = data.population;
    capital.innerHTML = data.capital;
    countryImg.src = data.flag;
});

// Covid API using async await method
const url2 ='https://data.covid19india.org/v4/min/data.min.json';
const confirmed = document.querySelector('#confirmed');
const recovered = document.querySelector('#recovered');
const active = document.querySelector('#active');
const decesead = document.querySelector('#decesead'); 
async function covid (){
    const resp = await fetch (url2);
    const data1 = await resp.json(); 
    console.log(data1)
    confirmed.innerHTML = data1.TT.total.confirmed;
    recovered.innerHTML = data1.TT.total.recovered;
    decesead.innerHTML = data1.TT.total.deceased;
};
document.addEventListener('load', covid);
covid();
