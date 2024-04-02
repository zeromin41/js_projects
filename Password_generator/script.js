const pwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lenEl = document.getElementById('len');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const upperLetters = "ABCDEFGHIJKLMNOPQRSUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrsuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_+-=/";

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];   //Math.floor는 소수점이하에서 내림
}

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    const len = lenEl.value;

    let password = '';

    for(let i=0; i<len; i++) {
        const x = generateX();
        password += x;
    }

    pwEl.innerText = password;
}

function generateX() {
    const xs = [];

    if(upperEl.checked) {
        xs.push(getUppercase());
    }

    if(lowerEl.checked) {
        xs.push(getLowercase());
    }

    if(numberEl.checked) {
        xs.push(getNumber());
    }

    if(symbolEl.checked) {
        xs.push(getSymbol());
    }

    if (xs.length == 0) return " ";

    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener('click',generatePassword);  //클릭할때마다 generatePassword 실행

copyEl.addEventListener('click', async () => {
    const password = pwEl.innerText;

    if (!password) return;

    try {
        await navigator.clipboard.writeText(password);
        alert('클립보드에 복사됐습니다!');
    } catch (err) {
        console.error('클립보드 복사 실패: ', err);
    }
});
