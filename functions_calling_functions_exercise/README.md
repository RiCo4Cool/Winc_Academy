# Functions calling functions: exercise

In this exercise we're going to call functions from other functions.

## Hey kiddo

We're going to write two functions, one that greets and another that checks if someone is an adult.

1. create a function that has one parameter: the age
2. this function should return true if the age is >= 18, false in all other cases
3. think of a good name for the function and the parameter
4. create a second function that has one parameter: the age
5. think of a good name for the function and the parameter
6. this second function uses (calls) the first function, giving it the age, to check if we get an adult age
7. if it's an adult the second function should return "Hello there"
8. if it's not an adult it should return "Hey kiddo"
9. use console.log to display the return value of the second function
10. experiment so you're sure your function works

## VAT calculations

In this exercise we're going to let you figure out the steps a bit more.

On almost everything you buy you pay VAT: Value Added Taxes. This is one way for the government to put taxes on sold goods. The amount of VAT varies per kind of purchase. In the Netherlands you pay 21% VAT on most goods, 9% VAT on food and 0% on some types of purchases.

To calculate the VAT for a product with 21% VAT: baseprice \* 0.21.

For example, the price for a computer without VAT is 1000. The VAT percentage for a computer is 21%. The VAT would be: 1000 _ 0.21, so 210. The price including VAT would be: 1000 _ 1.21, so 1210.

For example, the price for a loaf of bread without VAT is 2. The VAT percentage for a loaf of bread is 9%. The VAT would be: 2 _ 0.09, so 0.18. The price including VAT would be: 2 _ 1.09, so 2.18.

To calculate the VAT and base price from a product that you bought with VAT you can do the reverse calculation.

If you paid 1210 (including VAT) for a computer you can do: - 1210 / 1.21 to get the baseprice - 1210 - (1210 / 1.21) to get the VAT of 210

If you paid 2.18 (including VAT) for a loaf of bread you can do: - 2.18 / 1.09 to get the baseprice - 2.18 - (2.18 / 1.09) to get the VAT of 0.18

## VAT exercise 1

Now let's write some code. First let's write a function that takes the base price and the VAT percentage and returns the price including VAT. You must do the calculation of the VAT amount in a separate function. So, in the spirit of the lesson: we have a main function that does the main calculation and another function that we call from this main function.

Make sure your functions work by testing them with different values and checking the result with a calculator or pen and paper.

## VAT exercise 2

In this exercise we're going to calculate the base price and VAT amount. The main function you make should take the amount including VAT and the VAT percentage. The return value should be an array with two elements: base price and VAT amount. Again: make sure you use two functions, where the main one calls another function to do part of the calculation.

Make sure your functions work by testing them with different values and checking the result with a calculator or pen and paper.
