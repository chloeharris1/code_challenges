// JavaScript Code Challenges: Classes 

// TODO: Create a class ShiftCipher that takes the numerical value of the shift as a constructor parameter. 

// The class should have two methods: 
// encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.

// decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.

// In both methods, any character outside the alphabet should remain the same. But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other side.

class ShiftCipher {
    // contructor parameter is the shift value
    constructor(value) {
        this.value = value; 
    }
    // take a plain text string and return a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
    encrypt(plainString){
      // variable that will store the encrypted string
      let encryptString = '';
      // convert string to upper case
      const tempString = plainString.toUpperCase(); 
      // loop through the string 
      for(let i=0; i < tempString.length; i++) {
        // get the Unicode of the character at the current index
        let charNum = tempString.charCodeAt(i);
        
        // unicode code points for Latin upper case characters
        // 90 = Z, 65 = A
        if (charNum <= 90 && charNum >= 65) {
            // shift forward in the alphabet using the shift value
            charNum += this.value;
            // if the character shifts outside of the Unicode code points for capitalized letters, wrap around to the other side
            if (charNum > 90) {
                charNum -= 26;
            }
        }
        // save result to the encryptString variable
        encryptString += String.fromCharCode(charNum);
      }
        // return encryptedString
        return encryptString;
    }

    // taking the encrypted string and returning a lower case string with each letter shifted back in the alphabet based on the set shift value.
    decrypt(encryptString) {
        // variable that will store the decrypted string
        let decryptString = ''; 
        // convert encrypted string to lower case
        const tempString = encryptString.toLowerCase();

        // loop through the string
        for (let i=0; i < tempString.length; i++) {
            // get the Unicode of the character at the current index
            let charNum = tempString.charCodeAt(i);

            // unicode code points for Latin lower case characters
            // 122 = z, 97 = a
            if (charNum <= 122 && charNum >= 97) {
                // shift backwards in the alphabet using the shift value
                charNum -= this.value;
                // if the character shifts outside of the Unicode code points for lowercase letters, wrap around to the other side
                if (charNum < 97) {
                    charNum += 26;
                }
            }
            // save result to the decryptString variable
            decryptString += String.charCodeAt(charNum);
        }
        // return the decrypted string
        return decryptString;
    }
}

// testing the function by creating a new instance of the ShiftCipher class 
const cipher = new ShiftCipher(2);
cipher.encrypt('I love to code!'); // returns 'K NQXG VQ EQFG!'
cipher.decrypt('K <3 OA RWRRA'); // returns 'i <3 my puppy'