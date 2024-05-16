function vigenereCipher(text, keyword, encrypt = true) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const textArray = text.toUpperCase().split('');
    const keywordArray = keyword.toUpperCase().split('');
    let result = '';

    for (let i = 0, j = 0; i < textArray.length; i++) {
        const currentLetter = textArray[i];
        if (alphabet.includes(currentLetter)) {
            const textIndex = alphabet.indexOf(currentLetter);
            const keywordIndex = alphabet.indexOf(keywordArray[j % keywordArray.length]);
            const shift = encrypt ? keywordIndex : -keywordIndex;
            const cipherIndex = (textIndex + shift + alphabet.length) % alphabet.length;
            result += alphabet[cipherIndex];
            j++;
        } else {
            result += currentLetter;
        }
    }
    return result;
}

function encryptMessage() {
    const message = document.getElementById('message').value;
    const keyword = document.getElementById('keyword').value;
    const encryptedMessage = vigenereCipher(message, keyword, true);
    document.getElementById('result').value = encryptedMessage;
}

function decryptMessage() {
    const message = document.getElementById('message').value;
    const keyword = document.getElementById('keyword').value;
    const decryptedMessage = vigenereCipher(message, keyword, false);
    document.getElementById('result').value = decryptedMessage;
}
