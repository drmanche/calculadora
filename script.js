window.addEventListener('load',() =>{
  const keypadButtons = document.getElementsByClassName('keypad-button');
  const display = document.querySelector('.calculator-display');

  const keypadbuttonsArray = Array.from(keypadButtons);

  keypadbuttonsArray.forEach ( (button) => {
    button.addEventListener('click', ()=>{
      calculadora(display, button)
      //console.log(button);
    });
  });
});

function calculadora(display, button){
  switch (button.innerHTML){
    case 'C':
      clear(display)
      break;
    case '=':
      calcular(display);
      break;
    case 'del':
      delLast(display);
      break;
    default:
      update(display, button);
      break;
  }
}

function clear(display){
  display.innerHTML = '';
}

function calcular(display){
  if (display.innerHTML === '0'){
    clear(display);
  }  else if (display.innerHTML != ''){
    display.innerHTML = eval(display.innerHTML);
  }
}

function delLast(display){
  display.innerHTML = (display.innerHTML).slice(0, -1);
}

function update(display, button){
  if (button.innerHTML === '.' && display.innerHTML === ''){
    display.innerHTML += '0';
  }else if (button.innerHTML === '/' && display.innerHTML === '/'){
    clear(display);
  }else {display.innerHTML += button.innerHTML;}
}
