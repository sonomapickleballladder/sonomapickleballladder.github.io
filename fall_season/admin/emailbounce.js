function convertEmail(e){let ec=`<h2>${e.split("<h2>")[1]}`;ec=ec.split('<a href=3D"')[1].split('">')[0],ec=ec.replace(/(=)/g,"").replace(/(3D)/g,"="),ec=decodeURIComponent(ec);let to=e.split("To: ")[1].split(`
`)[0].replace("+_"+`${ladderSeasonNameLowercase}_${ladderYear}`,""),subj=e.split("Subject: ")[1].split(`
`)[0],emb=`Confirm your signup

Please follow this link: ${encodeURI(ec)} to confirm your email address and complete your registration.

Note: There was an error delivering your automatically generated confirmation email, which is why you aren't receiving this earlier.`,mailto=`mailto:${to}?subject=${subj}&body=${encodeURIComponent(emb)}`,mt=document.createElement("a");mt.href=mailto,mt.innerHTML=`Send confirmation email to <b>${to}<b>`,mt.addEventListener("click",()=>{document.body.removeChild(mt.parentElement),document.querySelector("textarea").value=""});let p=document.createElement("p");p.appendChild(mt),document.body.appendChild(p),mt.click(),console.log(ec)}