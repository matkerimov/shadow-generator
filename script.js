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
const outputX = document.getElementById("demoX");
const outputY = document.getElementById("demoY");
const outputBlur = document.getElementById("demoBlur");
const outputSpread = document.getElementById("demoSpread");
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
    console.log(inset.checked)
    let shadow = inset.checked ? "" : "inset"
    console.log(`${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} ${shadow};`)
        box.style.borderRadius = slider.value + "%"
        box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} ${shadow}`;
        box.style.backgroundColor = boxColor.value;

        out.innerHTML = `box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} ${shadow};<br>`
        out.innerHTML = out.innerHTML + `-webkit-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} ${shadow};<br>`;
        out.innerHTML = out.innerHTML + `-moz-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} ${shadow};`;

    // --------------
    output.innerHTML = slider.value
    outputX.innerHTML = offsetX.value
    outputY.innerHTML = offsetY.value
    outputBlur.innerHTML = blur.value
    outputSpread.innerHTML = spread.value
}

cssGenerator()