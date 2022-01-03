// ваше событие здесь!!!

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll(".img-12-min");
const img = document.querySelector(".img-12-max");
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelector(".next");
next.onclick = nextFunction;
next.touchstart = nextFunction;

const prev = document.querySelector(".prev");
prev.onclick = prevFunction;
prev.touchstart = prevFunction;

function nextFunction() {
    if (count == images.length - 1) {
        count = 0;
    } else {
        count++;
    }
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove("active-img");
        if (count == i) {
            images[i].classList.add("active-img");
            img.setAttribute("src", images[i].getAttribute("src"));
        }
    }
}

function prevFunction() {
    if (count == 0) {
        count = images.length - 1;
    } else {
        count--;
    }
    for (let i = images.length - 1; i > -1; i--) {
        images[i].classList.remove("active-img");
        if (count == i) {
            images[i].classList.add("active-img");
            img.setAttribute("src", images[i].getAttribute("src"));
        }
    }
}
