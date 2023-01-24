const containerRef = document.getElementById('container');
const btnRef = document.getElementById('btn');
const btnRef1 = document.getElementById('btn1');
const btnRef2 = document.getElementById('btn2');

let nameRef= document.getElementById('name');
let flagRef= document.getElementById('flag');
let capitalRef= document.getElementById('capital');
let populationRef= document.getElementById('population');
let nativeLanguageRef= document.getElementById('native-language');
let regionRef= document.getElementById('region');
let subRegionRef= document.getElementById('sub-region');
let dogImgRef= document.getElementById('dogImage');

// JOke 
const generateJokes = ()=> {

    const SetHeader = {
        headers : {
            Accept: "application/json"
        }
    }

    fetch("https://icanhazdadjoke.com",SetHeader)
    .then((res)=>res.json())
    .then((data)=> {
        containerRef.innerHTML = data.joke;
    })
    .catch((err)=>{console.log(err)})
}

btnRef.addEventListener('click', generateJokes);

// Country Data 
const countryData = ()=> {
    fetch("https://restcountries.com/v3.1/name/india")
    .then((res)=>res.json())
    // .then((data)=>console.log(data))
    .then((data)=>{
        console.log(data);
        nameRef.innerHTML= data[0].name.common;
        flagRef.src= "https://flagcdn.com/w320/in.png";
        capitalRef.innerHTML= data[0].capital;
        populationRef.innerHTML= data[0].population;
        nativeLanguageRef.innerHTML= data[0].languages.hin;
        regionRef.innerHTML= data[0].region;
        subRegionRef.innerHTML= data[0].subregion;
    })
    .catch((err)=>{console.log(err)})
}
btnRef1.addEventListener('click', countryData);


// DOG Images
const dogImg = ()=> {
     fetch("https://dog.ceo/api/breeds/image/random")
     .then((res)=>res.json())
     .then((data)=>{
        console.log(data);
dogImgRef.src = data.message;
     })
     .catch((err)=>{console.log(err)})
}
btnRef2.addEventListener('click',dogImg);


// Public Holidays

async function getHolidays()
{
try {
    let res  = await fetch("https://date.nager.at/api/v2/publicholidays/2020/US");
    console.log("1st");
    console.log(res);

    console.log("2nd");
    data = await res.json();
    console.log(data);

    return data;

} 
catch (error) {
    console.log(error);
    
}
}

getHolidays();

async function displayHolidays()
{
    let holidays = await getHolidays();

    let html ="";
    holidays.forEach(holiday=>{
        let htmlElement = `<h3>Holiday Date : ${holiday.date}</h3>
        <h3>Holiday localName : ${holiday.localName}</h3>
        <h3>Holiday Name : ${holiday.name}</h3>
        <h3>Holiday countryCode : ${holiday.countryCode}</h3>
        <h3>Holiday fixed : ${holiday.fixed}</h3>
        <h3>Holiday global : ${holiday.global}</h3>
        <h3>Holiday counties : ${holiday.counties}</h3>
        <h3>Holiday launchYear : ${holiday.launchYear}</h3>
        <h3>Holiday type : ${holiday.type}</h3>`

        html += htmlElement;

    });

    let container = document.getElementById("holidays")
    container.innerHTML = html
}

displayHolidays()


// Astronomy image 

async function getimage()
{
try {
    let res  = await fetch("https://go-apod.herokuapp.com/apod");

    data = await res.json();

    return data;

} 
catch (error) {
    console.log(error);
    
}
}

getimage();

async function displayimage()
{
    let Astronomy = await getimage();

    let html ="";
    Astronomy.forEach(Astronomy=>{
        let htmlElement = `<h3>Image Date : ${Astronomy.date}</h3>
        <h3>Image Expanation : ${Astronomy.expanation}</h3>
        <h3>Image hdurl : ${Astronomy.hdurl}</h3>
        <h3>Image media_type : ${Astronomy.media_type}</h3>
        <h3>Image Service_version : ${Astronomy.service_version}</h3>
        <h3>Image title : ${Astronomy.title}</h3>
        <h3>Image url : ${Astronomy.url}</h3>`

        html += htmlElement;

    });

    let container4 = document.getElementById("astronomyImage")
    container4.innerHTML = html
}

displayimage();

// TV SHOWS  

async function getTVshows()
{
    let url = 'http://api.tvmaze.com/search/shows?q=golden%20girls';
    try
    {
        let res =await fetch(url);
        data = await res.json();
        return data;
    }
    catch(error)
    {
        console.log(error);
    }
}
getTVshows();
async function displayTVshows()
{
    let shows = await getTVshows();

    let html ="";

    shows.forEach((showElement, index)=>{
        let htmlSegment = ` <div class="col-lg-4 col-md-4 col-10 col-xxl-4 mx-auto">
        <div class="card mb-3" style="max-width: 540px;">
          <h4 class="text-capitalize text-center">${showElement.show.name}</h4>
          <img src="${showElement.show.image.medium}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Premier Date : ${showElement.show.premiered}</p>
            <p class="card-text">Show Type : ${showElement.show.type}</p>
            <p class="card-text">Show Status : ${showElement.show.status}</p>
          </div>
        </div>
      </div>`;
      html += htmlSegment;
        })

        let conatiner2= document.getElementById("card");
        conatiner2.innerHTML = html;
}
displayTVshows()