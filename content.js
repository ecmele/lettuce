// content.js

const meatWords = [
    "animal",
    "steak",
    "bacon",
    "beef",
    "fish",
    "pork",
    "ham",
    "chicken",
    "bologna",
    "flesh",
    "bratwurst",
    "bresaola",
    "butifarra negra",
    "capocollo",
    "caviar",
    "cervelat",
    "chorizo",
    "coppa",
    "culatello",
    "finocchiona",
    "guanciale",
    "hamburger",
    "hot dog",
    "jamon iberico",
    "kabanos",
    "landjager",
    "lap cheong",
    "lard",
    "lardo",
    "liverwurst",
    "lozino",
    "meat",
    "mortadella",
    "nduja",
    "paio",
    "pancetta",
    "pastrami",
    "pepperoni",
    "poultry",
    "prosciutto",
    "ribs",
    "roe",
    "sausage",
    "salami",
    "saucisson d'arles",
    "soppressata",
    "soujouk",
    "veal",
    "venison",
    "zungenwurst",
    "lamb",
    "mutton",
    "ribeye",
    "filet",
    "filet mignon",
    "foie gra",
    "barbacoa",
    "carne",
    "brisket"
];

const vegetableWords = [
    "plant",
    "asian pear",
    "broccoli",
    "asparagus",
    "alfalfa sprout",
    "kumquat",
    "cantaloupe",
    "garlic",
    "apple",
    "apricot",
    "artichoke",
    "atemoya",
    "avocado",
    "bamboo shoot",
    "banana",
    "bean sprout",
    "bean",
    "beet",
    "belgian endive",
    "bell pepper",
    "bitter melon",
    "blackberry",
    "blueberry",
    "bok choy",
    "boniato",
    "boysenberry",
    "broccoflower",
    "brussels sprout",
    "cabbage",
    "cactus pear",
    "carambola",
    "carrot",
    "casaba melon",
    "cauliflower",
    "celery",
    "chayote",
    "cherimoya",
    "cherry",
    "coconut",
    "corn",
    "cranberry",
    "cucumber",
    "dates",
    "dried plum",
    "eggplant",
    "endive",
    "escarole",
    "feijoa",
    "fennel",
    "fig",
    "gooseberry",
    "grapefruit",
    "grape",
    "green bean",
    "green onion",
    "guava",
    "hominy",
    "honeydew melon",
    "horned melon",
    "iceberg lettuce",
    "jerusalem artichoke",
    "jicama",
    "kale",
    "kiwifruit",
    "kohlrabi",
    "leeks",
    "lemon",
    "lettuce",
    "lima bean",
    "limes",
    "longan",
    "loquat",
    "lychee",
    "madarin",
    "malanga",
    "mandarin orange",
    "mangos",
    "mulberry",
    "mushroom",
    "napa",
    "nectarine",
    "okra",
    "onion",
    "orange",
    "papaya",
    "parsnip",
    "passion fruit",
    "peach",
    "pear",
    "peas",
    "peppers",
    "persimmons",
    "pineapple",
    "plantains",
    "plums",
    "pomegranate",
    "potatoes",
    "prickly pear",
    "prunes",
    "pummelo",
    "pumpkin",
    "quince",
    "radicchio",
    "radishes",
    "raisins",
    "raspberries",
    "red cabbage",
    "rhubarb",
    "romaine lettuce",
    "rutabaga",
    "shallot",
    "snow pea",
    "spinach",
    "sprout",
    "squash",
    "strawberry",
    "string bean",
    "sweet potato",
    "tangelo",
    "tangerine",
    "tomatillo",
    "tomato",
    "turnip",
    "ugli fruit",
    "water chestnut",
    "watercress",
    "watermelon",
    "waxed bean",
    "yams",
    "yellow squash",
    "yuca",
    "zucchini squash"
]

var replacementMap = {}
var counter = 0;

meatWords.forEach(element =>{
    replacementMap[element] = vegetableWords[counter];
    counter++;
});

// String alternation of all meat words.
var meatWordString = "";

meatWords.forEach(element => {
    meatWordString += element +'|';
});
meatWordString = meatWordString.slice(0, -1);

/**
 * Get a random vegetable word.
 */
function getRandVegWord() {
    return vegetableWords[Math.floor(Math.random() * vegetableWords.length)];
}

function getReplacementString(input) {
    return replacementMap[input.toLowerCase()];
}

var meatRegex = new RegExp(Object.keys(replacementMap).join('|'), 'igs');

var elementsInBody = [...document.body.getElementsByTagName('*')];

/**
 * Replace all meat words with vegetable words in text elements.
 */
function findAndReplaceMeatWords(){
    elementsInBody.forEach(element =>{
        element.childNodes.forEach(child =>{
            if(child.nodeType === 3){
                child.nodeValue = child.nodeValue.replace(meatRegex, getReplacementString);
            }
        });
    });
}
  
window.onload = findAndReplaceMeatWords();