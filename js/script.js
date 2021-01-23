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
const resultsContainer = document.querySelector(".result");

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


function name(list) {
    
}