document.addEventListener("DOMContentLoaded",function() {
  let rnd = getRound();
  try{autofillRound(rnd,'current');
  autofillRound(rnd,'next')
  }
  catch(ex){}
  fillDates();
  rdFrstNm();
  jsFill();
})

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


const dateInfo = {};

const strD= new Date(2023,9,1);
const rdL= 7;
const rdLs = [2,2,2,2,2,2]
const frstC = -5;
const nRounds = 6;
const diW = 7;


function getRound() {
  let d = new Date(), strY = strD.getFullYear(),
  yD = d.getFullYear() - strY,
  lYD = daysIntoYear(new Date(strY,11,31)),
  diny = daysIntoYear(d), dinl = (diny - daysIntoYear(strD))+(yD*lYD), round=null;
  //console.log(dinl);
  let nrP = 0;
  for (let i = 0; i < nRounds; i++) {
    nrP += diW*rdLs[i]
  }
  //console.log(nrP);
  if(dinl<frstC || dinl > rdL*(rdLs.reduce((a, b) => a + b, 0))) {return 'null';}
  for (let i = nRounds; i > -1; i--) {
    nrP -=  diW*rdLs[i-1]
    //console.log(nrP,rdL*i);
    let ofg = rdLs.slice(0,i).reduce((a, b) => a + b, 0);
    //console.log(ofg*diW, rdL*i);
    switch (true) {
     // case (dinl<rdL*i):
     case (dinl<ofg*diW):
        round = i;
        break;
    }
  }


  try{dateInfo.round = round} catch(ex) {}
  
  return round;


}




function daysIntoYear(date){
  return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
}


function autofillRound(r,rl) {
  if(rl=='next'&&r!=='null') {r=r+1}
  try{
    let crds  = byAttr(rl+'round');
    for (let i = 0; i < crds.length; i++) {
      //console.log(crds);
      if(!r==0) crds[i].innerHTML=crds[i].innerHTML.replace(/null/g,'')+r;
      crds[i].value=crds[i].innerHTML;
    }
    }
    catch(ex){console.error(ex);}
  
}





function offsetDate(g) {
if(!g) {g=0}
if(!strD) {strD=new Date()}
var today = new Date();
var reldate = new Date(strD.getFullYear(),strD.getMonth(),strD.getDate()+g);
var dd = String(today.getDate()+g).padStart(2, '0'), rdd = String(reldate.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'), rmm = String(reldate.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear(), ryyyy = reldate.getFullYear();
today = mm + '/' + dd  + '/' + yyyy, reldate = rmm+'/'+rdd+'/'+ryyyy;
return [today, reldate];
}





