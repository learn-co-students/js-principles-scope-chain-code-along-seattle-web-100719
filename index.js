/* Your code goes here */
var customerName = "bob";

function upperCaseCustomerName()
{
    customerName = customerName.toUpperCase();
}

function setBestCustomer()
{
    bestCustomer = "not bob";
}

function overWriteBestCustomer()
{
    bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "what?";

function changeLeastFavoriteCustomer()
{
    leastFavoriteCustomer = "who?";
}

function attemptTwoFavoriteCustomers()
{
   throw SyntaxError;
}
