document.addEventListener("DOMContentLoaded",function(){let rnd=getRound();try{autofillRound(rnd,"current"),autofillRound(rnd,"next")}catch{}fillDates(),rdFrstNm(),jsFill()});const weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dateInfo={},strD=new Date(2025,0,19),rdL=7,rdLs=[2,2,2,2,2,2],frstC=-5,nRounds=6,diW=7;function getRound(){let d=new Date,strY=strD.getFullYear(),yD=d.getFullYear()-strY,lYD=daysIntoYear(new Date(strY,11,31)),diny=daysIntoYear(d),dinl=diny-daysIntoYear(strD)+yD*lYD,round=null,nrP=0;for(let i=0;i<nRounds;i++)nrP+=diW*rdLs[i];if(dinl<frstC||dinl>rdL*rdLs.reduce((a,b)=>a+b,0))return"null";for(let i=nRounds;i>-1;i--){nrP-=diW*rdLs[i-1];let ofg=rdLs.slice(0,i).reduce((a,b)=>a+b,0);switch(!0){case dinl<ofg*diW:round=i;break}}if(diny<73)return 2;try{dateInfo.round=round}catch{}return round}function daysIntoYear(date){return(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate())-Date.UTC(date.getFullYear(),0,0))/24/60/60/1e3}function autofillRound(r,rl){rl=="next"&&r!=="null"&&(r=r+1);try{let crds=byAttr(rl+"round");for(let i=0;i<crds.length;i++)!r==0&&(crds[i].innerHTML=crds[i].innerHTML.replace(/null/g,"")+r),crds[i].value=crds[i].innerHTML}catch(ex){console.error(ex)}}function offsetDate(g){g||(g=0),strD||(strD=new Date);var today=new Date,reldate=new Date(strD.getFullYear(),strD.getMonth(),strD.getDate()+g),dd=String(today.getDate()+g).padStart(2,"0"),rdd=String(reldate.getDate()).padStart(2,"0"),mm=String(today.getMonth()+1).padStart(2,"0"),rmm=String(reldate.getMonth()+1).padStart(2,"0"),yyyy=today.getFullYear(),ryyyy=reldate.getFullYear(),today=mm+"/"+dd+"/"+yyyy,reldate=rmm+"/"+rdd+"/"+ryyyy;return[today,reldate]}