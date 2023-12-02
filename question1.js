// 1. (3p) Använd forEach för att skapa en funktion, calculateAverage,
// som tar en array av tal som input och returnerar medelvärdet
// av dessa tal.
// tips: Googla hur man räknar ut medelvärdet av ett antal tal

function calculateAverage(numbers) {
  // Kontrollera om arrayen är tom
  if (numbers.length === 0) {
    return 0; // Om arrayen är tom är medelvärdet 0
  }

  let sum = 0;
  // Loopa över varje tal i arrayen och lägg till det i summan
  numbers.forEach((number) => {
    sum += number;
  });

  // Dela summan med antalet tal för att få medelvärdet
  const average = sum / numbers.length;

  return average;
}

// Exempelanvändnings
const numbersArray = [5, 10, 15, 20];
const averageResult = calculateAverage(numbersArray);
console.log(`Medelvärdet är: ${averageResult}`);
