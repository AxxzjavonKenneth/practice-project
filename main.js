"use strict";


const cheeses = [
    {
        "name": "Cheddar",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Brie",
        "type": "soft",
        "country_of_origin": "France"
    },
    {
        "name": "Gouda",
        "type": "semi-hard",
        "country_of_origin": "Netherlands"
    },
    {
        "name": "Parmesan",
        "type": "hard",
        "country_of_origin": "Italy"
    },
    {
        "name": "Roquefort",
        "type": "blue",
        "country_of_origin": "France"
    },
    {
        "name": "Camembert",
        "type": "soft",
        "country_of_origin": "France"
    },
    {
        "name": "Manchego",
        "type": "semi-hard",
        "country_of_origin": "Spain"
    },
    {
        "name": "Gruyère",
        "type": "hard",
        "country_of_origin": "Switzerland"
    },
    {
        "name": "Provolone",
        "type": "semi-hard",
        "country_of_origin": "Italy"
    },
    {
        "name": "Mozzarella",
        "type": "soft",
        "country_of_origin": "Italy"
    },
    {
        "name": "Monterey Jack",
        "type": "semi-hard",
        "country_of_origin": "United States"
    },
    {
        "name": "Feta",
        "type": "soft",
        "country_of_origin": "Greece"
    },
    {
        "name": "Edam",
        "type": "semi-hard",
        "country_of_origin": "Netherlands"
    },
    {
        "name": "Colby",
        "type": "semi-hard",
        "country_of_origin": "United States"
    },
    {
        "name": "Gorgonzola",
        "type": "blue",
        "country_of_origin": "Italy"
    },
    {
        "name": "Havarti",
        "type": "semi-soft",
        "country_of_origin": "Denmark"
    },
    {
        "name": "Swiss",
        "type": "hard",
        "country_of_origin": "Switzerland"
    },
    {
        "name": "Pepper Jack",
        "type": "semi-soft",
        "country_of_origin": "United States"
    },
    {
        "name": "Stilton",
        "type": "blue",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Asiago",
        "type": "semi-hard",
        "country_of_origin": "Italy"
    },
    {
        "name": "Cambozola",
        "type": "blue",
        "country_of_origin": "Germany"
    },
    {
        "name": "Fontina",
        "type": "semi-soft",
        "country_of_origin": "Italy"
    },
    {
        "name": "Limburger",
        "type": "semi-soft",
        "country_of_origin": "Germany"
    },
    {
        "name": "Jarlsberg",
        "type": "semi-hard",
        "country_of_origin": "Norway"
    },
    {
        "name": "Danish Blue",
        "type": "blue",
        "country_of_origin": "Denmark"
    },
    {
        "name": "Munster",
        "type": "semi-soft",
        "country_of_origin": "France"
    },
    {
        "name": "Blue Castello",
        "type": "blue",
        "country_of_origin": "Denmark"
    },
    {
        "name": "Brick",
        "type": "semi-soft",
        "country_of_origin": "United States"
    },
    {
        "name": "Ricotta",
        "type": "soft",
        "country_of_origin": "Italy"
    },
    {
        "name": "Queso Fresco",
        "type": "soft",
        "country_of_origin": "Mexico"
    },
    {
        "name": "Cotija",
        "type": "hard",
        "country_of_origin": "Mexico"
    },
    {
        "name": "Wensleydale",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Emmental",
        "type": "hard",
        "country_of_origin": "Switzerland"
    },
    {
        "name": "Double Gloucester",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Cabrales",
        "type": "blue",
        "country_of_origin": "Spain"
    },
    {
        "name": "Pecorino Romano",
        "type": "hard",
        "country_of_origin": "Italy"
    },
    {
        "name": "Red Leicester",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Caerphilly",
        "type": "semi-hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Wensleydale with Cranberries",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Stichelton",
        "type": "blue",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Halloumi",
        "type": "semi-soft",
        "country_of_origin": "Cyprus"
    },
    {
        "name": "Sbrinz",
        "type": "hard",
        "country_of_origin": "Switzerland"
    },
    {
        "name": "Manouri",
        "type": "soft",
        "country_of_origin": "Greece"
    },
    {
        "name": "Taleggio",
        "type": "semi-soft",
        "country_of_origin": "Italy"
    },
    {
        "name": "Cashel Blue",
        "type": "blue",
        "country_of_origin": "Ireland"
    }
];




















alert("Welcome to Cheese Wiz!")
console.log(cheeses)

// let userSearchOption = prompt("Search 'cheese name' or 'country of origin':");
// if (userSearchOption === 'cheese name'){
//     let cheeseNameString=prompt("Enter search string:")
//     while(cheeses.name === cheeseNameString){
//         console.log(cheeses.name)
//     }

// Ask user for search string
// let userSearchOption = prompt(`Enter the ${searchPreference === "name" ? "cheese name" : "country of origin"}:`);
//
//



//
//
// if (userSearchOption !== "name" && userSearchOption !== "country") {
//     // Invalid input
//     alert("Invalid input. Please start again.");
//
//     let userSearchOption = prompt("Search 'cheese name' or 'country of origin':");
//     if (userSearchOption === 'cheese name'){
//         let cheeseNameString=prompt("Enter search string:")
//         while(cheeses.name === cheeseNameString){
//             console.log(cheeses.name)
//         }
//
//     }
//     if (userSearchOption === 'country of origin') {
//         let countryOriginString=prompt("Enter search string:")
//     }else {
//         alert("Invalid input")
//     }
//
//     if (userSearchOption !== "name" && userSearchOption !== "country") {
//         // Invalid input
//         alert("Invalid input. Please start again.");
//     } else {
//         // Optional: Ask user for cheese type filter
//         const cheeseType = prompt("Enter cheese type (hard/soft/semi-hard/all):");
//
//
//         if (userSearchOption !== "name" && userSearchOption !== "country") {
//             // Invalid input
//             alert("Invalid input. Please start again.");}


        // Ask user for search preference
        let userSearchOption = prompt("Do you want to search by cheese name or country of origin?");
        if (userSearchOption !== "name" && userSearchOption !== "country") {
            // Invalid input
            alert("Invalid input. Please start again.");
        } else {
            // Optional: Ask user for cheese type filter
            let cheeseType = prompt("Enter cheese type (hard/soft/semi-hard/all):");

            // Ask user for search string
            let searchString = prompt(`Enter the ${userSearchOption === "name" ? "cheese name" : "country of origin"}:`);

            // Filter cheese
            let endResult = cheeses.filter((cheese) => {
                let typeCondition = cheeseType === "all" || cheese.type.toLowerCase() === cheeseType.toLowerCase();
                let twoSearchCondition =
                    userSearchOption === "name"
                        ? cheese.name.toLowerCase().startsWith(searchString.toLowerCase())
                        : cheese.country_of_origin.toLowerCase().startsWith(searchString.toLowerCase());

                return typeCondition && twoSearchCondition;
                console.log(userSearchOption);
            });


        }
// Display formatted output
if (endResult.length > 0) {
    let formattedOutput = filteredCheeses
        .map((cheese) => `${cheese.name} from ${cheese.country_of_origin} (${cheese.type})`)
        .join("\n");
    alert(formattedOutput)  // Display formatted output
    if (filteredCheeses.length > 0) {
        const output = filteredCheeses
            .map((cheese) => `${cheese.name} from ${cheese.country_of_origin} (${cheese.type})`)
            .join("\n");
        alert(output);
    } else {
        alert("No matching cheeses found.");
    }
}
