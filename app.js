const input = document.querySelector('input');
const alert = document.querySelector('.alert');
const submitBtn = document.querySelector('button');
const triesEl = document.querySelector('.tries');

let tries = 10;
let randomNum = Math.floor(Math.random() * 100);

submitBtn.addEventListener('click', () => {
    if (!input.value) {
        alert.textContent = `Input is empty`;
        alert.style.backgroundColor = `#ff0000`;
    } else {
        if (randomNum == input.value) {
            alert.innerHTML = `Congrats. You Found it. <br> The Number was ${randomNum}
            <br><br> Refresh the page to play more.`;
            alert.style.backgroundColor = `#00a000`;
            triesEl.style.display = 'none';
            input.style.display = 'none';
            submitBtn.style.display = 'none';
        } else {
            if (input.value <= randomNum) {
                alert.textContent = `The number you submitted is too low.`;
            } else {
                alert.textContent = `The number you submitted is too high.`;
            }
            alert.style.backgroundColor = `#ff0000`;
            tries--;
            triesEl.textContent = `Tries Left: ${tries}`;
            if (tries < 1) {
                triesEl.textContent = `No Tries Left`;
                alert.textContent = `You Lost. Refresh the page to try again.`;
                input.style.display = 'none';
                submitBtn.style.display = 'none';
            }
        }
    }
})