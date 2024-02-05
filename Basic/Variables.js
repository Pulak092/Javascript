const accID= 1444553
let accEmail = "pulak@google.com"
var accPass = "12345"
accCity = "Dhaka"
let accState

/* Prefer Not to use Var. Because of the Scope Issue */

//accID = 2 // not allowed

console.log(accID);

accEmail= "pulak@yahoo.com"
accPass = "5542"
accCity= "Gazipur"

console.table([accID,accEmail,accPass,accCity,accState])