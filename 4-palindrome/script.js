function isPalindrome(x) {
    // Los negativos no pueden ser palíndromos
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversed = 0;
    while (x > reversed) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    // En números impares, ignoramos el dígito central dividiendo reversed / 10
    palindrome = x === reversed || x === Math.floor(reversed / 10);

    if(palindrome){
        console.log("Si es palindromo")
        return
    }else{
        console.log("No es palindromo")
    }
     
}

isPalindrome(123)