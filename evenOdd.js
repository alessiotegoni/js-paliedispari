const allowedWord = ["dispari", "pari"];
const maxNum = 5;

const getUserEvenOdd = () => prompt("Scegli tra dispari o pari")?.trim();

const getUserNum = () => parseInt(prompt(`Scegli un numero tra 1 e ${maxNum}`));
const getComputerNum = () => Math.floor(Math.random() * maxNum);

const sumNums = (userNum, computerNum) => userNum + computerNum;
const checkEvenNum = (num) => num % 2 === 0;

function checkEvenOddWinner() {
  const userEvenOdd = getUserEvenOdd();

  if (!allowedWord.includes(userEvenOdd)) {
    alert("Devi scegliere tra due parole: pari o dispari");
    return;
  }

  const userNum = getUserNum();

  if (!userNum || isNaN(userNum) || userNum > maxNum || userNum < 0) {
    alert(`Inserisci un numero tra 1 e ${maxNum}`);
    return;
  }

  const computerNum = getComputerNum();

  const amount = sumNums(userNum, computerNum);

  const isEven = checkEvenNum(amount);

  let msg = "";

  isEven && userEvenOdd === "pari"
    ? (msg = "Utente ha vinto")
    : !isEven && userEvenOdd === "dispari"
    ? (msg = "Utente ha vinto")
    : (msg = "Computer ha vinto");

  console.log(msg);
}

checkEvenOddWinner();
