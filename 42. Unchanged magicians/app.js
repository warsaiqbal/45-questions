var magicians = ["Magician 1", "Magician 2", "Magician 3"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("".concat(magician, " the Great"));
    });
    return greatMagicians;
}
var greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
