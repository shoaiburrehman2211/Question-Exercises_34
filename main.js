/*
Think of at least three kinds of your favorite pizza. Store these pizza names in an array, and
then use a for loop to print the name of each pizza.
• Modify your loop to print a sentence using the name of the pizza instead of printing just the name of
the pizza. For each pizza you should have one line of output containing a simple statement like I like
pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The
output should consist of three or more lines about the kinds of pizza, you like and then an additional
sentence, such as I really love pizza!
*/
var myPizza = ["Cheeza Pizza", "Pepperoni Pizza", "Vegeterian Pizza"];
// print only name pizza
for (var i = 0; i < myPizza.length; i++) {
    console.log(myPizza[i]);
}
// printing name and sentence/message
for (var i = 0; i < myPizza.length; i++) {
    console.log("I like to eat ".concat(myPizza[i]));
}
console.log("\nI really like to eat Pizza. Pizza come in a variety of flavprs\n and toopings, allowing individials to customize is to their liking");
