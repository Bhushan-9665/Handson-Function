// // Define your function
// function myFunction() {
//     // Perform some action
//     console.log("Button clicked!");
//   }
  
//   // Get reference to the div element
//   var myDiv = document.getElementById("Q1");
  
//   // Attach a click event listener to the div
//   myDiv.addEventListener("click", myFunction);

// Que-1 --------------------------------------------------


var Que1 = document.getElementById("Q1") 
function printMessage() {
  Q1 = Que1.textContent = ("Hello, World!")
  console.log(Q1);
}



// Que-2 --------------------------------------------------
function printSum(a, b) {
  const result = a + b;
  // console.log(`Sum of ${a}, ${b} is ${result}`);
  document.getElementById("result").innerText = `Sum of ${a}, ${b} is ${result}`;
}

printSum(3, 4);


// Que-3 --------------------------------------------------

  const calculateSquare = (num) => {
    return num * num;
  };

  const result = calculateSquare(5);
  console.log(result); 



// Que-4 --------------------------------------------------
  
