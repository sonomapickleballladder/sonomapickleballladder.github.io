function vrfrd(m,k){let nrd=getRound()+1,g=byId("round").value,tx=g.replace(/[0-9]/g,""),prd=parseInt(g.replace(tx,""));if(isNaN(nrd))return event.preventDefault(),calert(!1,"Hang on!","Confirming availability is currently disabled as this Ladder season is not yet active (or has finished). It will be enabled "+Math.abs(frstC)+" days before the first round starts.","notice",0,0,0,0,"1.5em"),!1;if(prd<nrd)return event.preventDefault(),calert(!1,"Error","You cannot confirm availability for a current or previous round.",0,0,0,0,0,"1.5em"),!1;if(prd>nrd)return event.preventDefault(),calert(!1,"Error","You may only confirm availability for the next round. Please wait until "+byId("round").children[byId("round").selectedIndex-1].value+" to confirm for "+byId("round").value+".",0,0,0,0,0,"1.5em"),!1;if(m)try{try{if(!byId("agree1").checked)return calert(0,'<span style="font-size: x-large">Hang on!</span>',`<span style="font-size: large">You must <a onclick="remvel('.modal__overlay')" href="#attention">understand</a></span>`,0,0,"50%",0,0,"0.75em"),!1}catch{}let emes=`mailto:SPLconfirmations@riseup.net?subject=${thisLadder} Ladder | Yes for ${byId("round").value}&body=Confirming that I (${lsdciph(localStorage.getItem(ladderId.ls+"logged_in_user")).name}) am available for ${byId("round").value}.`;k==!1&&(emes=`mailto:SPLconfirmations@riseup.net?subject=${thisLadder} Ladder | No for ${byId("round").value}&body=I (${lsdciph(localStorage.getItem(ladderId.ls+"logged_in_user")).name}) am no longer available for ${byId("round").value}.`),byId("emailconfirmlink").href=emes}catch{calert(!1,"Ah Shucks!","Unknown error.","error")}return!0}function vrfid(tmd){Boolean(tmd)||(tmd=!0),document.activeElement.blur();let vf=vrfrd();if(!vf)return!1;try{if(!byId("agree1").checked&&tmd)return calert(0,'<span style="font-size: x-large">Hang on!</span>',`<span style="font-size: large">You must <a onclick="remvel('.modal__overlay')" href="#attention">understand</a></span>`,0,0,"50%",0,0,"0.75em"),!1}catch{}let angm="serviceWorkers",bw=lsdciph(localStorage.getItem(ladderId.ls+"logged_in_user")),wname=bw.name.replace(/(\s)/g,"").toLowerCase(),rnd=parseInt(byId("round").value.split(" ").pop().trim()),cky=cipher(LZString.decompressFromEncodedURIComponent(bw.expires)),gso=cky(`${rnd}/${wname}`),cgso=cky(`${rnd}/${wname}/${tmd}`),injson={round:rnd,name:bw.name,smvig:bw.token,encoding:gso,encoding3:cgso,is_available:tmd},kf=confirm(`By clicking okay, you are confirming that you (${bw.name}) are available (as defined above) for ${byId("round").value}.\r
 \r
If you are not, please hit cancel.`);if(!kf)return!1;setTimeout(function(){saveData("availability2.0",injson).then(function(dn){if(dn.error)calert(0,"Server Error","Could not proccess your request. Please confirm by email instead.");else{checkstatus();let usrt=lsdciph(localStorage.getItem(brick("$_authenticated_user"+ladderSeason)),0,laddersOffered.Open.ls);try{usrt=JSON.parse(usrt)}catch{}try{let nyj={true:{n:"Womens",ur:"@Womens/"},false:{n:"Open",ur:"../"}};if(usrt.ladder.includes("Open")&&usrt.ladder.includes("Womens")){let nf=nyj[thisLadder=="Open"];calert(0,`<span style="font-size: large">Successfully confirmed</span>`,`<span style="font-size: larger">Click <a href="${nf.ur}confirm_availability${protoMap[location.protocol]}">here</a> if you wish to also confirm your availability for the ${nf.n} Ladder.</span>`,"notice",0,0,0,0,"1.5em")}}catch{}}})},500)}function checkstatus(){setTimeout(checkstatus,864e5);let kp=lsdciph(localStorage.getItem(ladderId.ls+"logged_in_user"));ptc("availability2.0","encoding3","smvig",kp.token).then(function(res){if(res=res.data,res&&res.length>0){let rsje;try{rsje=parseInt(byId("round").value.split(" ")[1])}catch{rsje=getRound()+1}function filter_byround(event){return event.round==getRound()}let dcip=decipher(LZString.decompressFromEncodedURIComponent(kp.expires));for(let i=0;i<res.length;i++)try{let fa=dcip(res[i].encoding3);if(parseInt(fa.split("/")[0].trim())===rsje)return acwom=res[i].encoding3,showstatus(fa),!1;if(i==res.length-1)return showstatus("blablabla/giberish/false"),!1}catch{}}else return showstatus("blablabla/giberish/false"),!1})}let acwom;function showstatus(h){typeof h!="boolean"?h=h.split("/")[2]:h=JSON.stringify(h),byId("confirmationstatus").innerHTML=map.status[h][0],byId("confirmationstatus").style.backgroundColor=map.status[h][1],byId("webconfirm").innerHTML=map.webconfirm[h][0],byId("webconfirm").style.backgroundColor=map.webconfirm[h][1],byId("emailconfirmlink").innerHTML=map.emailconfirm[h][0],byId("emailconfirmlink").parentNode.style.backgroundColor=map.emailconfirm[h][1],byId("emailconfirmlink").parentNode.setAttribute("onclick",`vrfrd('email', ${map.emailconfirm[h][2]})`);try{cfstatus=JSON.parse(h)}catch{}acwom&&byId("webconfirm").setAttribute("onclick","unvrfid()")}function unvrfid(tmd){cfstatus||(cfstatus=!1),Boolean(tmd)||(tmd=!cfstatus),document.activeElement.blur();let vf=vrfrd();if(!vf)return!1;try{if(!byId("agree1").checked&&tmd)return calert(0,'<span style="font-size: x-large">Hang on!</span>',`<span style="font-size: large">You must <a onclick="remvel('.modal__overlay')" href="#attention">understand</a></span>`,0,0,"50%",0,0,"0.75em"),!1}catch{}let angm="serviceWorkers",bw=lsdciph(localStorage.getItem(ladderId.ls+"logged_in_user")),wname=bw.name.replace(/(\s)/g,"").toLowerCase(),rnd=parseInt(byId("round").value.split(" ").pop().trim()),cky=cipher(LZString.decompressFromEncodedURIComponent(bw.expires)),cgso=cky(`${rnd}/${wname}/${tmd}`),injson={encoding3:cgso,is_available:tmd},mgea=`By clicking okay, you are confirming that you (${bw.name}) are available (as defined above) for ${byId("round").value}.\r
 \r
If you are not, please hit cancel.`;tmd||(mgea=`By clicking okay, you (${bw.name}) are withdrawing your availability for ${byId("round").value}.\r
 \r
If you do not wish to proceed, please hit cancel.`);let kf=confirm(mgea);if(!kf)return!1;try{byId("confirmationstatus").innerHTML="pending...",byId("confirmationstatus").style.backgroundColor=""}catch{}setTimeout(function(){declareData("availability2.0",injson,"encoding3",acwom).then(function(dn){if(dn.error)calert(0,"Server Error","Could not proccess your request. Please confirm by email instead.");else{checkstatus();let usrt=lsdciph(localStorage.getItem(brick("$_authenticated_user"+ladderSeason)),0,laddersOffered.Open.ls);try{usrt=JSON.parse(usrt)}catch{}try{let nyj={true:{n:"Womens",ur:"@Womens/",tp:"confirm"},false:{n:"Open",ur:"../",tp:"withdraw"}};if(usrt.ladder.includes("Open")&&usrt.ladder.includes("Womens")){let nf=nyj[thisLadder=="Open"];calert(0,`<span style="font-size: large">Successfully updated</span>`,`<span style="font-size: larger">Click <a href="${nf.ur}confirm_availability${protoMap[location.protocol]}">here</a> if you wish to also update your availability for the ${nf.n} Ladder.</span>`,"notice",0,0,0,0,"1.5em")}}catch{}}})},500)}function dateRound(r){try{if(parseInt(r.value.split(" ")[1])==getRound()+1){let nyh=rdLs.slice(0,parseInt(r.value.split(" ")[1]-1)).reduce((a,b)=>a+b,0)*diW,fyh=rdLs.slice(0,parseInt(r.value.split(" ")[1])).reduce((a,b)=>a+b,0)*diW-1;byId("dates").innerHTML=`&nbsp;${offsetDate(nyh)[1]} – ${offsetDate(fyh)[1]}`;let amef="";byId("rdlength").innerHTML=`&nbsp;<b>(${(Math.round(rdLs[parseInt(r.value.split(" ")[1])-1]*2)/2).toFixed(1)} Week Round${amef})</b>`}else byId("dates").innerHTML="",byId("rdlength").innerHTML=""}catch{}}document.addEventListener("DOMContentLoaded",function(){try{lgifnolg();try{byId("wkcalc").value=`Round ${JSON.parse(getRound())+1}`,byId("wkcalc").innerHTML=`Round ${JSON.parse(getRound())+1}`}catch{}try{let sja={1:"By confirming below, you are attesting that you will be able to offer <b><i>a number of possible time-windows</i></b> in which to play, and that you will <b>not</b> be absent (traveling or otherwise unavailable) for <b><i>any significant chunk of the round</i></b>.",2:"By confirming below, you are attesting that you will be able to offer <b><i>a number of possible time-windows</i></b> in which to play, and that you will <b>not</b> be absent (traveling or otherwise unavailable) for <b><i>any significant chunk of the round</i></b>."};sja[rdLs[getRound()]]?byId("atmsg").innerHTML=sja[rdLs[getRound()]]:byId("atmsg").innerHTML=sja[1]}catch{}try{paywall()}catch(ex){console.error(ex)}try{checkstatus()}catch(ex){console.error(ex)}try{localStorage.removeItem("niwmeMIennc3p")}catch{}try{dateRound(byId("round"))}catch{}}catch{alert("Fatal Error. This Page is not working properly.")}});let map={status:{true:["Successfully Confirmed","#46b264"],false:["Not Confirmed","red"]},webconfirm:{true:["Withdraw Confirmation","red"],false:["Confirm via Website (preferable)",""]},emailconfirm:{true:["Withdraw Confirmation via Email","red",!1],false:["Confirm via Email","",!0]}},cfstatus;function paywall(nosh,nopy){let bw=lsdciph(localStorage.getItem(ladderId.ls+"logged_in_user")),johm=bw.name.replace(/(\s)/g,"").toLowerCase(),gr=cipher("limit"),sai=gr(johm);ptc("pard","*","afaf",sai).then(function(res){!res.error&&(res=res.data),res.length>0&&bag(res,nosh,nopy,bw.name)})}function bag(r,nosh,nopy,nam){if(r=r[0],r.bool==!1&&!nopy){let dif=864e5;(!Boolean(localStorage.getItem(ladderId.ls+"payalert"))||Date.now()-localStorage.getItem(ladderId.ls+"payalert")>dif)&&(localStorage.setItem(ladderId.ls+"payalert",Date.now()),calert(0,'<span style="font-size: large">Payment Alert</span>',`<span style="font-size: large">Hi ${lsdciph(localStorage.getItem(ladderId.ls+"logged_in_user")).name.split(" ")[0]}. According to our records, it looks like you still need to pay your <a style="color: palevioletred" target="_blank" href="../signup${protoMap[location.protocol]}?ladder=Womens#price">administrative fees</a> for the ${thisLadder} Ladder. If you have already paid, please let us know by <a style="color: palevioletred" target="_blank" href="mailto:SPLInfo+payment@riseup.net?subject=Winter Season | ${thisLadder} Ladder Payment&body=I%20(${nam})%20paid%20[person%20you%20paid]%20[amount%20you%20paid]%20on%20[date%20you%20paid]%20via%20[payment method]">email</a> (including when and who you paid, plus the amount). If not, please visit <a style="color: palevioletred" target="_blank" href="../pay_options${protoMap[location.protocol]}">the payment options page</a>, which includes an up to date list of times you can pay in person.</span>`,"error",0,"50%","black","rgb(231, 247, 16)","1em"))}let nj=document.getElementsByClassName("modal__window").length;if(r.ineg){let jm=r.ineg.split(",");for(let i=0;i<jm.length;i++){parseInt(jm[i])==getRound()+1&&!nosh&&(nj<1?palert():(window.addEventListener("keydown",function(e){e.which==27&&palert()},{once:!0}),window.addEventListener("click",function(){setTimeout(function(){document.getElementsByClassName("modal__window").length<1&&palert()},500)},{once:!0})));function palert(){calert(0,'<span style="font-size: large">Ineligibility Alert</span>',`<span style="font-size: large">Hi ${lsdciph(localStorage.getItem(ladderId.ls+"logged_in_user")).name.split(" ")[0]}. Unfortunately you may not play for Round ${getRound()+1} because you have reportedly <a style="color: palevioletred" target="_blank" href="how_it_works${protoMap[location.protocol]}?r=p&t=1cbfaaa387e84e01f80fb5e333911ba69b7b16033a59ede4310e5cc002dec49e&bg=darkorange">failed to show up</a> for your match in Round ${getRound()}. Please wait until Round ${getRound()+2}, and do not forget about your matches in the future.</span>`,"error",0,"50%","black","rgb(231, 247, 16)","1em")}}}}