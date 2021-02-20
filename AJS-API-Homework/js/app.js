//API call by using AJAX for posts and their title and body

// let btnGet = document.getElementById('btnGet');

// btnGet.addEventListener('click', function () {
//     console.log('Getting posts from API, please wait...');
//     $.ajax({
//         url: 'https://jsonplaceholder.typicode.com/posts',
//         method: 'GET', //if not specified default value is GET
//         success: function (data) {  // response
//             console.log(data);
//             let posts = data;
//             for (const post of posts) {
//                 console.log(post.title + "" + post.body);
//             }
//         },
//         error: function (error) {
//             if (error.status === 404) {
//                 console.log("ERROR 404. Not found.")
//             } else {
//                 console.log("Oooops! Something went terribly wrong.")
//             }
//             console.log(error); // data - error
//         }

//     });
// });


//API call by using fetch() method - BONUS ****************************************************************

let btnShow = document.getElementById('btnShow');
let nextBtn = document.getElementById('nextBtn');
let prevBtn = document.getElementById('prevBtn');

let mainPage = 1;

btnShow.addEventListener('click', function () {
    console.log('Getting planets from API, please wait...');

    fetch('http://swapi.dev/api/planets/')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            for (const planet of data.results) {
                console.log(data.results);
            }
            tabledResults(data.results);
        })
        .catch(error => {
            console.log(error);
        });
});

nextBtn.addEventListener('click', function () {
    console.log('Getting planets from API, please wait...');

    fetch(`http://swapi.dev/api/planets/?page=${mainPage + 1}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            for (const planet of data.results) {
                console.log(data.results);
            }
            tabledResults(data.results);
        })
        .catch(error => {
            console.log(error);
        });
    mainPage++;
});



prevBtn.addEventListener('click', function () {
    console.log('Getting planets from API, please wait...');

    fetch(`http://swapi.dev/api/planets/?page=${mainPage - 1}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            for (const planet of data.results) {
                console.log(data.results);
            }
            tabledResults(data.results);
        })
        .catch(error => {
            console.log(error);
        });
    mainPage--;
});



function tabledResults(data) {
    for (let i = 0; i < data.length; i++) {
        let name = data[i].name;
        let table = $("tbody");
        table.append(`<tr>
            <td>${i + 1} . ${name}</td>
        </tr>`)
    }
}



// Solution 2 **************************************************************************************

// let btnShow = document.getElementById('btnShow');
// let nextBtn = document.getElementById('nextBtn');
// let prevBtn = document.getElementById('prevBtn');

// let mainPage = 1;

// btnShow.addEventListener('click', function () {
//     console.log('Getting planets from API, please wait...');

//     fetch('http://swapi.dev/api/planets/')
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//             for (const planet of data.results) {
//                 table.innerHTML += `<tr>
//         <td>${planet.name}</td>
//         <td>${planet.rotation_period}</td>
//         <td>${planet.orbital_period}</td>
//         <td>${planet.diametar}</td>
//         <td>${planet.climate}</td>
//         </tr>`
//             }
//         })
//         .catch(error => {
//             console.log(error);
//         });
// });

// nextBtn.addEventListener('click', function () {
//     console.log('Getting planets from API, please wait...');

//     fetch(`http://swapi.dev/api/planets/?page=${mainPage + 1}`)
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//             for (const planet of data.results) {
//                 table.innerHTML += `<tr>
//         <td>${planet.name}</td>
//         <td>${planet.rotation_period}</td>
//         <td>${planet.orbital_period}</td>
//         <td>${planet.diametar}</td>
//         <td>${planet.climate}</td>
//         </tr>`
//             }
//         })
//         .catch(error => {
//             console.log(error);
//         });
//     mainPage++;
// });

// prevBtn.addEventListener('click', function () {
//     console.log('Getting planets from API, please wait...');

//     fetch(`http://swapi.dev/api/planets/?page=${mainPage - 1}`)
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//             for (const planet of data.results) {
//                 table.innerHTML += `<tr>
//         <td>${planet.name}</td>
//         <td>${planet.rotation_period}</td>
//         <td>${planet.orbital_period}</td>
//         <td>${planet.diametar}</td>
//         <td>${planet.climate}</td>
//         </tr>`
//             }
//         })
//         .catch(error => {
//             console.log(error);
//         });
//     mainPage--;
// });


let getBtn = document.getElementById("btnGet"); 
let btnNext = document.getElementById("btnNext"); 
let btnPrevious = document.getElementById("btnPrevious"); 
let tbody = document.getElementById("tbody"); 

let pageNumber = 1;

getBtn.addEventListener('click', function(){
    console.log("Getting data from the StarWars api, please wait...")
    fetch('https://swapi.dev/api/starships/')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        let results = data.results;
        for (const result of results) {
            console.log(result.name);
        }
        generateTable(results);
    })
    .catch(error => {
        if(error == 404){
            console.log("Error 404. Not Found")

        }
        else{
            console.log("UPS! Something went wrong!");
        }
    })
});

btnNext.addEventListener('click', function(){
    if(pageNumber > 3){
        return;
    }
    console.log("Getting the next page, please wait...")
        fetch(`http://swapi.dev/api/starships/?page=${pageNumber + 1}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            let results = data.results;
            for (const result of results) {
                console.log(result.name);
            }
            generateTable(results);
        })
        .catch(error => {
            if(error.toString().includes("TypeError")){
                console.log("Error 404. Not Found!")
            }
            else{
                console.log("UPS! Something went wrong!");
            }
        })
        pageNumber++;
})


btnPrevious.addEventListener('click', function(){
    if(pageNumber < 2){
        return;
    }
    console.log("Getting the next page, please wait...")
        fetch(`http://swapi.dev/api/starships/?page=${pageNumber - 1}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            let results = data.results;
            for (const result of results) {
                console.log(result.name);
            }
            generateTable(results);
        })
        .catch(error => {
            if(error == 404){
                console.log("Error 404. Not Found")
            }
            else{
                console.log("UPS! Something went wrong!");
            }
        })
        pageNumber--;
})


function generateTable(data){
    tbody.innerHTML = "";
    for(let i = 0; i < data.length; i++){
        let name = data[i].name;
        table = $("tbody");
        table.append(`<tr>
            <td>${name}</td>
        </tr>`)
    }
}