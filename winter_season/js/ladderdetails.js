const signupsObject={};function getsignups(){ptc("viewable_Signups","*","awx","1").then(res=>{if(res.error)return console.error(res.error),!1;res=res.data;let ldo=Object.keys(laddersOffered);for(let i=0;i<ldo.length;i++){signupsObject[ldo[i]]=res.filter(e=>e.ladder==ldo[i]);let cdu="",star="",abo=" so far",awc="";try{laddersOffered[ldo[i]].min!=0&&(star="*",abo="",awc="line-through",cdu=``)}catch(ex){console.error(ex)}let sci="";signupsObject[ldo[i]].length>0&&(sci=`&nbsp;&nbsp;<button class="cool_button hlfpd" onclick="showSignups('${ldo[i]}')"> View signups &nearr; </button>`);try{byId(`ns-${ldo[i]}`).innerHTML=`${signupsObject[ldo[i]].length==0?"None":signupsObject[ldo[i]].length}${abo}${cdu}${sci}`}catch{}try{byId(`ns-${ldo[i]}`).closest("details").querySelector("summary").innerHTML=byId(`ns-${ldo[i]}`).closest("details").querySelector("summary").innerHTML.split("<")[0].split("*")[0].trim()+`${signupsObject[ldo[i]].length==0?star:star+' <span style="font-size:85%;text-shadow: 0px 1px 2px mediumseagreen;">['+signupsObject[ldo[i]].length+"]</span>"}`}catch{}try{byId(`ns-${ldo[i]}`).closest("details").querySelector("summary").style.textDecoration=awc}catch{}i==ldo.length-1&&console.log(signupsObject)}})}function showSignups(l){document.activeElement.style.cursor="progress";let res=signupsObject[l],pepl="",aox,aslc={true:"s",false:""};res.length>0?(pepl=res.map(a=>`<small><i>${l=="Team"?a.team_name:a.name}</i></small><br>`),pepl=pepl.filter((a,b,c)=>c.indexOf(a)==b),aox=`${pepl.length} ${l=="Team"?"team":"signup"}${aslc[pepl.length>1]} so far:`,pepl=`<div style=''>${pepl.join(`
`)}</div>`):(aox="No signups yet...",pepl="");let child=window.open("about:blank",rdString(10));child.document.write(`<html>
        <head><title>Signups => ${l} Ladder</title><style>html,body{font-size:1.25rem}</style></head>
        <body style='background:${getComputedStyle(document.body).background};color:${getComputedStyle(document.body).color}; font-size:larger'><h2 style='font-family:sans-serif;text-decoration:underline'>${l} Ladder</h2><p>${aox}</p>${pepl}</body>
        </html>`),document.activeElement.style.cursor=""}window.addEventListener("DOMContentLoaded",function(){if(getsignups(),setInterval(getsignups,36e5),location.href.indexOf("ladder=")>-1)try{let lad=location.href.split("ladder=")[1].split("&")[0].split("?")[0].split("#")[0],aa=byId(`ns-${lad}`).closest("details");aa.id=`${lad}_Ladder`,location.href="#",location.href=`#${aa.id}`,aa.open=!0}catch(ex){console.error(ex)}})