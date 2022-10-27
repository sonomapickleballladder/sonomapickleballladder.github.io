let d = new Date();
let year = d.getFullYear();
let month = d.getMonth() + 1;
let day = d.getDate();
let wk;
let wkcalc=document.getElementById('wkcalc');

if (month==9){
  if(day>4&&day<=11){
    wk="1";
  }
  if(day>11&&day<=18){
    wk="2";
  }
  if(day>18&&day<=25){
    wk="3";
  }
  if(day>25){
    wk="4";
  }
}

if (month==10){
  if(day<=2){
    wk="4";
  }
  if(day>2&&day<=9){
    wk="5";
  }
  if(day>9&&day<=16){
    wk="";
  }
  if(day>16&&day<=23){
    wk="6";
  }
  if(day>23&&day<=30){
    wk="7";
  }
  if(day>30){
    wk="8";
  }

}

if (month==11){
  if(day<=6){
    wk="8";
  }

}
