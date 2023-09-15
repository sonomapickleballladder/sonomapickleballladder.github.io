document.addEventListener("DOMContentLoaded",function() {
    jsFill();
    getSubs();
    lsWarning();
})

function getSubs() {
let ud = byAttr('sublist');
for (let i = 0; i < ud.length; i++) {
    ptc('subs','*','round',getRound()?getRound():1).then(function(res){
      res = res.data
        try{displaySubs(res);}catch(ex){byAttr('sublist')[0].innerHTML=`<p>No one yet...</p>`};
    })
}
}
function displaySubs(sb) {
   // console.log(sb);

   sb = sb.reverse();

    try{
      sb = sb.filter((value, index, self) => {
        return self.findIndex(v => v.name === value.name) === index;
      });
    }
    catch(ex){console.error(ex);};

    try{
      sb = sb.filter((value, index, self) => {
       return self.findIndex(v => v.email === value.email) === index;

      });
    }
    catch(ex){console.error(ex);}



   //  console.log(sb);

    if(sb.length<1) {yAttr('sublist')[0].innerHTML=`<p>
    No one yet...
  </p>`; return false}
    let map = {true: "Yes", false: "No", null: "No info", "": "No info"}
    if(debug) console.log(sb);
    byAttr('sublist')[0].innerHTML = '';
    for (let i = 0; i < sb.length; i++) {
    let name = sb[i].name, email = sb[i].email, phone = sb[i].phone, skill = sb[i].skill, in_ladder = sb[i].in_ladder, already_playing = sb[i].already_playing, week1days=sb[i].week1days, week2days=sb[i].week2days;
    skill||(skill=map[skill])
    phone&&(phone=`<a href='tel:${phone}'>${phone}</a>`)
    phone||(phone=map[phone])
    week1days||(week1days=map[week1days])
    week2days||(week2days=map[week2days])
    let judge="";
    if(in_ladder==false) {judge="psx"}
    else if(already_playing==true) {judge="psy"}
    else if(already_playing==false) {judge="psz"}
    byAttr('sublist')[0].innerHTML += `<details class="${judge}"><summary>${name}</summary><p class="infop">Email: <a href="mailto:${email}">${email}</a></p>
    <p class="infop">Phone: ${phone}</p><p class="infop">Skill Level: ${skill}</p><p class="infop">In Ladder: ${map[in_ladder]}</p>
    <p class="infop">Playing this Round: ${map[already_playing]}</p>
    <p class="infop">Days available in Round: ${week1days}</p></details>`;
    
}
}

