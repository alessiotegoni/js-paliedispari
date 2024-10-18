const getUserPrompt = () => prompt("Inserisci una parola");

function checkPalindromicWord() {
  const userWord = getUserPrompt();

  let reversedString = "";
  let isPalindromic = false;

  if (!userWord) return isPalindromic;

  for (let i = userWord.length - 1; i >= 0; i--) {
    reversedString += userWord.charAt(i);
  }

  if (reversedString === userWord) isPalindromic = true;

  return isPalindromic;
}

checkPalindromicWord();
