document.addEventListener("DOMContentLoaded",function() {
    lsWarning();
    

    try{let mbt = JSON.parse(localStorage.getItem('niwmeMIennc3p')); byId('name').value = mbt.name; byId('skey').value=mbt.key; checkid();}catch(ex){}

    getrankings();
})

function getrankings() {
  //console.log('refreshing...');
  clearTimeout(getrankings);
  setTimeout(getrankings,60000)
    ptc('testrankings', '*').then(function(res){
        //console.log(res);
        //console.log(res[res.length-1])
        

        for (let i = 0; i < res.length; i++) {
            bnsuawe.push(res[i].mwbn);
            wnieai.push(parseInt(res[i].id));
        }

        //
      //console.log(Math.min(...wnieai));
        awMisen = res.filter(obj => {
            return obj.id === Math.min(...wnieai)
          });

          //console.log(awMisen);

        wbicewom = res.filter(obj => {
            return obj.id === Math.max(...wnieai)
          });
       awMisen=awMisen[0];
       wbicewom=wbicewom[0]
          //console.log(wbicewom);

          let plr = wbicewom.order.split(',');

        renderorder(wbicewom, plr);

    

        
    })
}

function renderorder(al, ord) {
    byId('order').innerHTML = '';
    try{byId('goup').removeAttribute('id');byId('godown').removeAttribute('id');}catch(ex){}
    let orord = awMisen.order.split(',');
    let name = byId('name').value;
    for (let i = 0; i < ord.length; i++) {
        let orind = orord.indexOf(ord[i]);
        let controls = "";
        if(name.toLowerCase().trim()==ord[i].toLowerCase().trim() && checkid()[1]) {controls= `&nbsp;<button id="goup" onclick="moveUp(this.parentNode,${i+1},${orind+1})">Up &uarr;</button>&nbsp;<button id="godown" onclick="moveDown(this.parentNode,${i+1},${orind+1})">Down &darr;</button>`;}
        byId('order').innerHTML+=`<li><span style="cursor:pointer" onclick="if(byId('login').innerHTML.indexOf('✅')<0){byId('name').value=this.innerHTML}">${ord[i]}</span>${controls}</li>`;
     }

    colorcodeorder(); 
    
}

window.addEventListener('keydown', function keydownup(event){
    if(event.which ==40 || event.which ==39) {try{event.preventDefault(); byId('godown').click()}catch(ex){}}
    if(event.which ==37 || event.which ==38) {try{event.preventDefault(); byId('goup').click()}catch(ex){}}

 })



function moveUp(element,p1,p0) {
    if(element.previousElementSibling) {
        let vert = Array.from(element.parentNode.children).indexOf(element) - p0;
      let indchange =  Math.abs(vert);
      if(-maxmove>vert) return false;
      element.parentNode.insertBefore(element, element.previousElementSibling);
      colorcodeorder();

      
    }
  }
function moveDown(element,p1,p0) {
    if(element.nextElementSibling) {
        let vert = Array.from(element.parentNode.children).indexOf(element) - p0 +2;
        let indchange =  Math.abs(vert);
      if(vert>maxmove) return false;
      element.parentNode.insertBefore(element.nextElementSibling, element);
      colorcodeorder();
    }
      
  }


  let clrsup = ["auto","#ffc285", "#ffbb7e", "#ffb478", "#ffad71", "#ffa56a", "#ff9e64", "#ff975d", "#ff9056", "#ff8950", "#ff8249", "#ff7a42", "#ff733c", "#ff6c35", "#ff652f", "#ff5e28", "#ff5721", "#ff501b", "#ff4814", "#ff410d", "#ff3a07","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300","#ff3300"]
  let clrsdown = ["auto","#ccccff","#c9c4ff","#c7bdff","#c4b5ff","#c2adff","#bfa6ff","#bd9eff","#ba96ff","#b88fff","#b587ff","#b280ff","#b078ff","#ad70ff","#ab69ff","#a861ff","#a659ff","#a352ff","#a14aff","#9e42ff","#9c3bff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff","#9933ff"]
  //let clrs = ['orange', 'orange','orange','orange', 'orange','inherit','purple','purple','purple','purple','purple']
      

  let maxmove = 20;

let wbicewom, awMisen, bnsuawe = [], wnieai = [];

async function ptc(t,s,e,m,x,z,thenfunction){
    const { data, error } = await sb.client
    .from(t)
    .select(s)
  
  
  if(error&&debug) console.log(error);
  
  try{executeFunctionByName(thenfunction, window, data);}catch(ex){return data}
  
  
  //return data
  
    
  }


  function checkid() {
    document.activeElement.blur();
    //let mseno = 'MYdgrATApgDAbAZgGZSRAjJsAWKATA7BGAIwE44Q8T0oETQzgyBDPBMYB2ROEpLnjAhBADnQgANFBCiGSMlDgKwMJAiJkSYAUgY04ovFBZkJTMDIYIIa4HhAgKikUhZR0EEDBaSfJURgYdDx0MDh0ORoIbAc+Fhh6RB9LTDQ8CDAGdAQ4Q3IvdGwtZjIkEOwYbHRJIhCyTJZDfBiIeiyINBYnVDC2hVFcKOwY9GBIMll2YGJgTvwED0dJWW8cqBIQMeQZmhQWUQR0ODxsEggvPGBI0ToQZVvI2SgybEO5CDIycIpRMgQEJJWFRWDBwl4LnBOBQ4NgWCRKh13CwwFo+A0ZkgqKJRG44RgoMB1CMGNgQCw3hBJKpxqcIMBYBT0DBWGSwHJYWRRJQvkhAlUoNgiVQkGpPiw3ElwgoEF9sNgkGAEL4iglcVBAnDtJxIOxDG12OIKBACMAhUgLXx7qwvCwuN17GSEMAqgpQdSSCiqrgKAzZIstiALlAQ2B0Cx3DMfMBceTjOJEGAEhASDQEEIFYqokowJJTokYE4KXaJfYDoL1sIY8Uq+V7MYrjBRKBNkg+LBiiBlViRA4Tb4mmHCXyYqnsKiLXahjHjgw8HzU+mXnWiOdoJY7eS/nA5jA8CzgBFqdAEDiNXBuplOorF+VgpYcf8UHuoEqfCA4eosWgGsrznohBIGAvFlFZ0EmcIGX+RRlFfNEQCxOhBVkNBYDGMhjEjYQ9GAqEPFpZQUSyMAwGoMhJDYWwnCbQZ0BIOAU3wUxBgQvAojYxwIHcbAoTNa4SJYCAL0E4Jrj3Wwrk2JVc2KeVvllNtlAVFhck8cBImqeEgzBZ1YVODQWTJSJhLUPAJVCWhlHUKhfCQSo5D9EBNhMKp7EQEg6FxQwp0iJMMk2C5dLQKpcSOOjNgoaYSPGJBajBE5yhxC47G0ICPybbQfHYN5vDoCMmFYGgcjJShwMtYp6IpVZXkkOAggyZQERNdhgNXFgwlgCAjDwBpFCUWxDl6uyYFAZlRAQwYSDY1CiRgDwqXJM5qGqOag0ULgGIiLJPSOLQEC2XAzJtYDJ2KRYbFEC5Qh67RlA4exJHDKoIy2YBQDmN5fNIhghPhGCMiKXoeI8V9Fk9LN0DcQUMGQSDPWASQuARU4EIOEQaApRVymdHA8ihUJxxsMwOLOCQbBIDQZkHXCsgIFNwAouy3Aw8YWXgSBIR0DU8DgBoEx5yJMCEOr6XJV8TgQhlC0cIUcm+UQKUkLivkeF1UC7BrKEFIRnwIXFYm8MN01YPpTi0WBgKCM1Tx3CMQlMWrUyEdHSFyyoLSuZU6r0KbyAIK5RFRN42EukjmSVDQbHUZsAkhrFVFqRANBck52rXBXymgID6OoWw8k8YpZtyAEaC5DyTFsN5RT/ENCTwWoY34YCNRCW4MGUQ9wJjYwZCLEw3gNrxWyEyBAnuRxDCMPQ8kuz5qXGWwMPDSIqgvfcinGXm6OEHBD0DyHvHTOj9WQsgwREYCYleODEURrqIymnw92QAhwwYJs9GVEZQB0J28gGRwiQpYshUl4EMUwYjXC7AjZsB0mDxhZKeKaRx8BqFZOpP4bEYzgCDDkBE/g2zsG2tkESxxPiFhWFAGG+B9zshmI4Ei44SJKFyArRIzolBvEGHwOyhoKAHHlEIBwkMlRcU8M6akTY9KcEhmwMyOANhhDhLQZs8IepGAvEZZUuQVASCIDICkfA9yIGKFxNgkhRQ7ksagEiuJ7a5DeAxL45ABDuCDN4XmZIAg4HpNUGKDDlCFmVGUZAgklayG2EgeRgpEgbFFJYSY9kolnC3igLsjh8rMH2tqI40BuanlFAhRBkgjhmkGG4CmRxYRhkDq8VuEYLS4l/FjIoVQeaZiKMXRK3IOAa25CRKkXxkA2BhmUkMJpMCVx6pAEash/j+AvCURSFIMBmC7BsMwOBjDBApuoPwGJUCLHpNQSeOxCQnHOIkemcwBDygUXaAEI0USKk4GSJgHhmSFg7jUVM7w6G2CqBIJoc1pihxjgbICKIHHrKyFwUgSZmA0C7DoeEcAqEIXImtGQhYQzAAOJ4ISLpUx8B0M7eACFxxfG8D1VcqB1CsAoAEegtxJiJAEEJY8CtUCfBGK8W4hNDzdEEl4OEcwiw6WJr1fgqZZA4jacYQ8W45FdjzJ9Oq8ANg8VIiNMkKZuRGFoPtSGqAHB4ubGYP43J/gJBdA0YQiAgwo3JL4RQuTlCQH/PCFFhLkDqByDkI4YJoAj0Do4LgIBUBqnGm0Oqr4/giRxKqroRAw6YAVi9cQSpVbnDDOUOq44nJtEEvRXIpEFYRr/LpOlDg2IUUhumjA4ETC71xHoM+RSjhmScmZC0whk7eAjJ9H2Ea1DnBsDIMRsBwnVBeGwAE+1GHcyDCaGQGFTwXCoLvWSMQFSHC2EAkMDhDZfxoKgOAkh+AECYMwTkXwmjNnCEmNGyANRdRwNXSYH42wmECKRdGsA/j1E2G9dqgIPLkhGjoKgp4KDsi4eODUvTOz0FYLsaoiAe0sjkD4b4Eo5D/HuB2Gg0h7r0XGhhcQsRyikS8AyWgZ90wIiIAOnEypSBkngHNe24EWTAdLR4cxQlKiCSaPcWgCr3oYUUKwXmXYvjfAyamfgB9BQeU+iyF4D4FRlGwSQWqNgEgODqcBYZsnDDuVY9UD8h4eBcHTDzF4DBXCvjhIkWQu5uj4cRsISoHVUQXnNQIqE1dkFHQ8K/ewLpOi4duL07wZp/jHFRKYcMBwLFvR5liAEOgM7cqCGQkIOgigWkFXiiZe5aCQegPCvFE8yk7lhPQPMKlqhrrMJ8BwQQNSOAja+Rwy9PRsTpRINiIwSJubggrccB4UNZAYojCIhY/FqEhmTLu1wFDrzPimGYB8oTLpCP6uiCpEBRMPOaCU0B9zYD8H4nmNF5QXngOwWwxAMBXC6k5WgDA7YWhQIKO6ERTzOgFJwa4v7mQIz0E0c8+0FQ8Q0F+nAEYwxCBGqKcg5wz6GCoCYE4QTKBYg+0I3E9E5jkQVpYRA4XhwKhxQQDoOI3hip5h3McZ8Op4r4IgO0ePXifEONpi0kgDUeJ3NAUADgsbnE9IYBQFoYj7nfjkCk84wSCX5x5QYqAAhEBUh5OYCMYeRAcCpTTChOhQmEIEbQxwRQSBkKeOhEQz6wPteBTn3RD1dXGD851/w8gsicpORAs1dmHDxW9QsdEihnx9GRIwgQ9FNFO1U4rttEaJfDEIMM4NYiEgpij36eLVzjkoKeaonAYh1hDGcI4KlRRCjRZsLY9dKdBlXTMBDVDID0B16n/qPuminFAFxa4kV8BUEMpDBo452DfAuBe8LpJ7AmjbCyNwe4ynwH4FLBsJokVR9eGoe4loXOQyEgCso/wqSiybPSNFJwOBNiKNBmk33N2odFPCPkEbea7X3EoA+EzC2FfFRHsBgGpHQkUAjAugpjhAEhmS+GEGLGBEoHiAYC5EvxTXvChE5GQC6iqxmAsUcA2GdFwFQgjVcTJBjBUlbzbC4kyD7QBDeTHW0n6ioVLHhHpk9CCEBAZy7AUFiGMEsBsE/DegwGCDQEq35wVDDDCF0jhBeA3xUj+CWnAECAiCJFzApjDFwHwFRBf02AkE8CYHIHNlCEgzYi5gIC6ztDGCvkSE/VhB8GVDXwoBF1Jw6jyA4EGASASFUkgDLAlAKQyA5yVwtFmEDglj0U4TYEPGgC0CcAbijgRAiEIHGiEDgjNAQkgFUFuHon7i0GMGUHJCVHkVIAEAyE7XCDUFyBMCAA===';
   let mseno=["ad207908841b62beda9847fd8bbd8772ae465c4c155a26aa201c10d20dcb7535","49449539f66f4fa3612751841ab72053c64d4340947186aa0fdafd11e6ff37da","e35cb6879d814df15d27ce1e903db44370a883a0b47060e1da1909b7c365e1ad","c28aabd0a0d3fdd1abc08fb3a42c75fbbd66f987703ce009a327ee78d24c173c","8a5e63e1decf4f07edd5b28848c27d66fcbb49015eca6b63acea69429834f9ff","6bbd57cb0b70e40ffdc3a60fbbdb9dddc85948ad825510533432f38cb81ff750","a1f8aa2119ea54c8ffb907f031da7bdaff5734e70aa481fbb7e0fb232e72a1e0","c574015e596a8c9a8465f03bd3da9e1dd1cdc02f95a8e35770c4931659a91aa8","5ba5044e96ce783e71722eee51aaec30ac8f7ade81635a02bb13d54ff58bbe65","993f32213c48ee2d11204d9520c78930ab6a9bcf66a4219173eb9154de01b3f3","729e707eeca81226c0bb6b5fd57067f459970d943beff39a96b83b8e9703fc26","fccd6f7335f8afef2001621d5f14ffc6aca2d10d1e0c52e0b5ca776c486c643b","d403079a4acafcda8e413e57c84957cf1cddedc08c7b7f6be04973af77cd72da","7a4bdb410e729ecb62615bba319b3714eda9a202ffa493e32822d1d9b56f35cd","31c484fab331645185941d8aaff8f923f5f1404d64ff14363f18863573d86552","632a0d7941023f36976863b8834174c6e06cb3dd6e9bc7cfe54a0378c20a78b9","600d26fb42dd30243ba15e028dd929ee62083929f40c71087f84bd8f2ecf0e12","0c6d9d124eafe047a4d724e8bbf8b3580d71d6c429f4723d7d6228aec17e80f0","a651ecf824bb459ffac4e8c816bcdf8bb3de9f1c43b22e5eac7a896c20d09c61","f77eb3c4ef2e7efca47c8a371df62a2557333479b23720e62e2afcab2b7ba003","9e3126f52b2fab5fa26c3ff3131331052e2658577cb7efa08872360e589a2088","50864d5c1fadda54eb154a1e8cabd98d6a4713a36f951743e7a46b0d63492aad","2741e9ad3337554e8d722de79d38227d54c494244f837103ceed77053a4b1ef6","a6e18d7a3e95f92f655780b5167df17e73858c61908c75761915eca7eed28c51","fba6e86374f463474f54aa51d50cf0b9b290687dea6d07367f7dc2d5d8fb6c29","af4fa9dc50906522265fe8d692816d61811d5602c7ae56d7fce07774c13958a4","9a7d9a056272265c9664ab405b2aea59b6b92c3f7d88fa4a21ecf342bc47a482","52e388e86a7252ff5bb3f1015e8893fe0de530a74af3f7f2923ab2fbd5b02739","c752e063fef211154eddd430b967db1e3bc79c9ad35cbce0636bfcbd57cbd817","431d925a68ed2423b5b2f2a79ef1523f984e8bb4241c52978d3c30c2fed3e177","787013eb71c3fc3b1fea8316d4b227dc188e376f8e1878e94838b29956968933","2640a2a6761edecc7c9d9e9a6973999577abbbf1f7e4be48109e95e84f9fc87b","4c8bf02e81d8e216fc619c8dee779aea484d727b7f2652807677688dfb668229","14a08fe804ab55c52d36823d381962ddc4cfff6b769a27acba7cd473c04f99a0","cbb4d47fa87cb1a4f5f13c546665d1453291d874b1732b34c3a650265bdd2b75","7e213edd058c377554555e6368a033ce648846bf4d3896a844d5d71f532a123c","bb83858c200417a60ed3c8258cb4d7b0a536473e5bcb0b5ac9b1735fab6e27f9","8a572e79c345ee2523befb63f3e6228ca6d4c72ac196ded7d0941f9245d39522","e78bcf9e6f950f3439b5fcfbcb168dea9179c5e7bc320fcd77969e7cfae1270a","8c7149cde80938bd31ed0f9a475189d8c8757213b40abf6d35bbbc1a20162907","0ab8001d15618bb124d76ba03b630a5e11f2d25bc13668b927149bc99f1d4041","46334ea06da1b228af12eb0b6db20661249cf03633b198beea2048f03abeeecd","2781c3fda5e403ebf05e97408fd4b691fe7377aa9c937b55312ee8d38f07f093","b7aa9366097bffa63cf0b3f83cacc071b14904e9db98d80174a663f31614f6ca","719756ce939e6fe59b67f7e3e478f2e01c9deaec57fb0265e1c5d6fa55b55db9","f408bce77b7ea04cd63be38f68ac4185ad2b7223c6f2048f311bb796d3c55c5f","2c7082c6e6d3508147d350c1eb7d59acf0abf87e69319d0678b24ff71e559cd0","88fb15e663584a0a036152cdaaf38fd2901d0bff30c856d7174e64adc62e9b79","2a998e1c0ef73d2667e4d5fe0dd8f4d70513d9a152d49be00200c4386caa1da9","da3419d39129d700e8777ee5771a1bad8eff17d84255037e598a4509c3b95b62","50c5d42ce0a4109a4758b64986799f8004e4cf7df0f29afa3b656f939944f53a","dd573f94dde5e324afcc2101f21e09424f51153c64ae909fa3894bd758061cf5","528aef2942948e453c6a7a2274ac279a05391d929bfbb788804ddec67a8add73","51c99eaa328b34a55a5209957a4a9a7676babc98262435015656493f280c52c3","be7a0c5f7d38965848845e83574973b9ac3b4163daf098b0a95af8b9376e04b1","d4816006eb465d0c472b868d1e371fefd7ca8c91898693a0c092576372d477aa","be1dbc4cd2df609fa0dc4806bfce0ded2db17cc0940f76ff6e541f262009f932","b3514eed59081b717129cb99bed10c5d85fedd00eac1c24903977640a3a2df96","4056df188220fcb5b07408b50ad34870e3aa9c9ab113476719ff649b6a478794","092cef3e2cdb6883fcec6db2032b7c2fc4454eac330ca5f55c479ce110076fc1","041cd6088446a06d3203021dc287b1ebcaa1fffee46f361383c04e5cc180510c","8d17066c2ec7d7f5fb2ba68f9ff24d0bc013a4df05a2942be84efb843a3bec2c","c9311ad551baf4decb3aa526aca43b456738415c24f1cee4b31a3f04c6eb771d","d4f2a43551118aaa781538e1cb251f160457b23a2b6365d8a7e3ab3c6effd7d8","bfdd9cc964999a68c565aa873fe82854f039774f6ea805d7cbe0891d9b7cca13","1a04aa71cc7c2481855dbc26ab9e6d214ef146e1e53ebaf581fae4213f56cbac","f06cf06ef558f1da36486299b9fcae72706947b8542c41c5f7756f073a9f3fa2","6e3422ad0a141a1ac34ed7290d27a73a2e9116fad12f09135dc594de0548068d"];
    //let anw = LZString.decompressFromBase64(mseno);
    let anw = mseno.toString();
    let hadme  = anw.split(',');
    let v = byId('name').value.replace(/(\s)/g,"").toLowerCase();
   let sk = byId('skey').value;
   let gme = v+sk;
   let aawe = sha256(gme);
   let efnuw = hadme.indexOf(aawe)>-1;
   if(efnuw) {try{localStorage.setItem('niwmeMIennc3p',JSON.stringify({name:byId('name').value, key: sk}))}catch(ex){}; byId('login').innerHTML = 'Signed in ✅'; /*byId('login').innerHTML =   byId('login').innerHTML.replace(/✅/g,'')+' ✅'*/}
   else {alert('Sign-in failed. Invalid credentials it would seem.'); }
   return [{error: 502}, efnuw, {kwm:aawe}];
  }



  function savethisorder() {
    let nord = byId('order').children, narr = [];
    for (let i = 0; i < nord.length; i++) {
        let kj = nord[i].getElementsByTagName('span')[0].innerHTML;
        narr.push(kj);
    }
    let norder = narr.toString();

    if(norder == wbicewom.order) {calert(0,'Error', 'Order has not changed', 0); return false;}

    let smogp = {order: norder, Fz_id: checkid()[2].kwm, mwbn: LZString.compressToUTF16(byId('name').value)}

    saveData('testrankings',smogp).then(function(res){
        location.reload();
    })
    //console.log(narr);
    //console.log(narr.toString());
  }


  function colorcodeorder() {
    let amk = byId('order').children;
    let orord = awMisen.order.split(',');
    //console.log(orord);

    for (let i = 0; i < amk.length; i++) {
        let element = amk[i];
        let nm = element.getElementsByTagName('span')[0].innerHTML;
        if(byId('name').value.toLowerCase().trim()==nm.toLowerCase().trim()) {byId('name').value=nm}
        let lzmn = LZString.compressToUTF16(nm);
        //console.log(bnsuawe.indexOf(lzmn)>-1);
        //let rel = document.createElement('i');
       // rel.innerHTML = Array.from(element.parentNode.children).indexOf(element) -  orord.indexOf(nm);
       // element.after(rel)
       let p0 = orord.indexOf(nm);
        let vert = Array.from(element.parentNode.children).indexOf(element) - p0;
        let namespan = element.getElementsByTagName('span')[0];

        if(bnsuawe.indexOf(lzmn)>-1 || (byId('name').value.toLowerCase().trim()==nm.toLowerCase().trim() && checkid()[1])) {
        let indchange =  Math.abs(vert);
        if(vert>0) {indchange = Math.abs(vert+2)}
        let inp = document.createElement('input');
        //console.log(vert);
        if(vert<0) namespan.style.backgroundColor = clrsup[indchange];
        if(vert>0) namespan.style.backgroundColor = clrsdown[indchange];
        if(vert==0) namespan.style.backgroundColor = "";

        }

        let tg = 'small';

        clearel(element, tg)

        let newNode = document.createElement(tg);
        let invrt = JSON.stringify(-vert);
        if(parseInt(vert)==0) {invrt = ""};
        if(invrt.indexOf('-')>-1) {invrt=invrt.replace(/-/g,'')+'⇓'}
        else if(invrt.length>0) {invrt=invrt+'⇑'}
        newNode.innerHTML= ` ${invrt} `;

        namespan.parentNode.insertBefore(newNode, namespan.nextSibling);

    }

  }



  function clearel(pr, el) {
    var list = pr.getElementsByTagName(el);
    for (var k = list.length - 1; k >= 0; k--) {
      var item = list[k];
      item.parentNode.removeChild(item);
    }
  }