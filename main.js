document.getElementById("btn").addEventListener("click", onBtnClick);
let txt1 = document.getElementById('psw');
let txt2 = document.getElementById('prePsw');
let userName = document.getElementById('uname');
let specialKeyName = ["spName1", "spName2", "spName3"];
let msgArray = [];


function onBtnClick() {
    if (txt1.value === txt2.value && txt1.value != "" && txt1.value.indexOf(' ') == 0) {
        chackONeNumber(txt1.value);
        chackLenght(txt1.value, 8, 16);
        oneKeyNamesContarin(txt1.value);
        chackOneUpperString(txt1.value);
        chackOneLowString(txt1.value);
    } else {
        msgArray.push("Passwords and repassword are different or filds are empty or contatin spaces");
    }
    showErrors();
}

function oneKeyNamesContarin(str) {
    for (let i = 0; i <= specialKeyName.length; i++) {
        if (str.includes(specialKeyName[i])) {
            msgArray.push("Password contarin some words such ..wich you use in pass")
            return false;
        } else {
            return true;
        }
    }
}

function chackONeNumber(str) {
    if ((/[a-zA-Z]/).test(str)) {
        return true;
    } else {
        msgArray.push("String does not contains at least one letter");
        return false;
    }
}

function chackLenght(str, minL, maxL) {
    if (str.length >= minL && str.length <= maxL) {
        return true;
    } else {
        msgArray.push("Password will be 8 to 16 chars");
        return false;
    }
}

function chackOneUpperString(str) {
    if (str.match(/^[A-Z]*$/)) {
        return true;
    } else {
        msgArray.msgArray.push("Password have to contain at list one upper case string")
        return false;
    }
}

function chackOneLowString(str) {
    if (str.match(/^[a-z]*$/)) {
        return true;
    } else {
        msgArray.push("Password have to contarin at list one low case string")
        return false;
    }
}

function showErrors() {
    for (let i = 0; i < msgArray.length; i++) {

        document.getElementById('errorMsg').innerHTML = msgArray[i];
    }
}

errorMsges
// function passValidate(str) {
//     // if (onlyLatinCharacters(str) != true) {
//     //     msgArray.push("You have to insert only latin characters(AM, RU)");
//     // }
//     // if (containAnySpeciaWordsOrUname(str) != true) {

//     // }
//     validateLenght(str, 8, 16);
// }

// function validateLenght(str, minL, maxL) {
//     if (str.lenght >= minL && str.lenght <= maxL) {
//         msgArray.push("Your have to inert+" + minL + " to " + maxL + "for userName" + str);
//         alert(minL);
//         return true;
//     } else {
//         alert(maxL + " " + str);
//         return false;
//     }
// }


// function onlyLatinCharacters(str) {
//     return (/^[a-zA-Z]+$/.test(str));
// }

// function containAnySpeciaWordsOrUname(str) {

// }}