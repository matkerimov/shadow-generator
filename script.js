// const borderRadius = document.querySelector('.border-radius')
const box = document.querySelector('.box')
const offsetX = document.querySelector('.offsetX')
const offsetY = document.querySelector('.offsetY')
const blur = document.querySelector('.blur')
const spread = document.querySelector('.spread')
const shadowColor = document.querySelector('.box-shadow')
const boxColor = document.querySelector('.box-color')
const out = document.querySelector('.out')
const outset = document.querySelector('.outset')
const inset = document.querySelector('.inset')
// ---------
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
// onchange | после касания
// oninput  | выводит ищменения моментально
// ---------

// output.innerHTML = slider.value;
//
// slider.oninput = function() {
//     output.innerHTML = this.value;
// }
// ----------
slider.oninput = cssGenerator
offsetX.oninput = cssGenerator
offsetY.oninput = cssGenerator
blur.oninput = cssGenerator
spread.oninput = cssGenerator
shadowColor.oninput = cssGenerator
boxColor.oninput = cssGenerator
outset.oninput = cssGenerator
inset.oninput = cssGenerator


function cssGenerator() {
    console.log(outset.checked)
    box.style.borderRadius = slider.value + "%"
    box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}`;
    box.style.backgroundColor = boxColor.value;
    out.innerHTML = `box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} <br>`
    out.innerHTML =  out.innerHTML + `-webkit-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} <br>`;
    out.innerHTML =  out.innerHTML + `-moz-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}`;

    output.innerHTML = slider.value;
    output.innerHTML = slider.value;

}
cssGenerator()