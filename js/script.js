// question 1
const cat = {
	complain: function () {
		console.log("Moew!")
	}
};

// question 2
const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

console.log(heading.innerHTML);

// question 3
heading.style = "font-size: 2em";


//question 4
heading.className = ("subheading");

console.log(heading.className);


// uestion 5 
const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {

	paragraphs[i].style.color = "red";
};


// question 6 
const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";

resultsContainer.style.backgroundColor = "yellow";


// question 7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


function catsNames(list) {
    
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name)
    }
}

catsNames(cats);

// question 8
function crateCats(cats) {

    let listNames = "";

    let listAge = "";

    for (let i = 0; i < cats.length; i++) {
        
        listNames = listNames + "<h5>" + cats[i].name + "</h5>"; 
        // console.log(listNames);
        
        listAge = listAge + "<p>" + cats[i].age + "<p>"; 
        // console.log(listAge);

        if (!cats[i].age) {
            listAge = "Age unknown";
        }

    }

    const finalHtmlName = "<h5>" + listNames + "</h5>";
    // console.log(finalHtmlName);

    const finalHtmlAge = "<p>" + listAge + "</p>";
    // console.log(finalHtmlAge);

    return finalHtmlName + finalHtmlAge;
    
};

const htmlInWeb = crateCats(cats);

console.log(htmlInWeb);

const catContainer = document.querySelector(".cat-container");

catContainer.innerHTML = htmlInWeb;
