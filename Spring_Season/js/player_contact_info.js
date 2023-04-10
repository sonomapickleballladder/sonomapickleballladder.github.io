
function reverseString(e){let r="";for(let t=e.length-1;t>=0;t--)r+=e[t];return r}

function get_password() {
  let orig_pass;
  try {
    orig_pass = reverseString(lsdciph(localStorage.getItem(ladderId.ls+'session6')))
  } catch (ex) {
    orig_pass = prompt("Enter password","")
  }

  if (orig_pass!=null && orig_pass!="")

  password = new Array(orig_pass.length);

  for(i=0; i<orig_pass.length; i++) {

    password[i] = orig_pass.charCodeAt(i);

  }

  return password;

}



password = get_password();

orig = unescape("iupt%3Dmh%3Cuetm%20n-mm-to-%20oOdbhc%3Clc%22pe%3E%20t%22f%20%20%3DIU%20a%3D%3Et%20th%20mlerote-n%20mn%3DcdnbeA%22%20%20smieonmeTao%22al%3C%20%2Cr%22m8lfo%20e%20%3Etmgm%20mtmmCte%20%22qm%3En%20aoP%22tnCrymfvSat%3Dd%20n%20l%20Dlt%20oeE%7CnlklemnmC%20cPcdltlmemadLi/i%20mnan%22%3C%20a%20d%3Debt%3Dn%20mllhtimoeoe%20%20e%20ryt%20a%20es%3Epssr%3C%20mms%3Dnc%3Ehss%20te.el/tbm%20mmI%3C%20e%3CP%20%3Eak%20%20%20mh%20%3Ci%3E%22e%3Di%20mm%20%22rsafaatimut%20ldet%20%20km%20me%22nmgm%20mclm%20%3C%3Dm%3Crysi%3Aaa-%3Dm%22hxd%3Et%21o%21%20rn%22rpaime%20%22ndttsit%20%3Ea0mw%20uoi%22d%20ht%20%3C%20%22fptida%3An%20%20prbe%3Cod%22moplarf%20llaor%22%20sS%20rmwssomshim%22r.%20eetmaece%20%20lcresn%20%20Ec%3Ensio%20m%3Crhdr%20a%20ist%3Cae%3Cspt%22lepm%3Ermes/%22%3D%22jimmmr%22/eimt/mm%3E/hmsb%3Edte%20thspeeyliih%22%22%20soxolb%3Em%20%20%3C.%3C/%22%20tolt%20ipdi%22%3Dv%20lX%20%3Coc%20%201%20%20tiY%3DmjtznPrhnms.ea1nosd%22%3D/lco%3B%3Bk%3E%3Eel%20i%3Ca%20J%20ydo%3Em%20/m%20it%3E");
orig = orig.split("");



passnum = orig.length % password.length;

for(i=orig.length-1; i>=0; i--) {



  passnum--;

  if (passnum == -1) passnum = password.length - 1;



  pos1 = i;

  pos2 = i + password[passnum];



  if (pos2 >= orig.length) continue;



  char1 = orig[pos1];

  char2 = orig[pos2];



  orig[pos2] = char1;

  orig[pos1] = char2;



}



orig1 = "";

for(i=0;i<orig.length;i++) {

  orig1 = orig1 + orig[i];

}

orig1 = orig1.replace(/mmm/g,"\r\n");

if(orig1.charAt(0)=='<') {try{localStorage.setItem(ladderId.ls+'session6', lsciph(reverseString(orig_pass)))}catch(ex){}; document.write(orig1);}

else {try{localStorage.removeItem(ladderId+'session6')}catch(ex){};}





window.addEventListener('keydown', function(e) {
  if(e.ctrlKey&&e.altKey&&e.which==73){event.preventDefault();}if(e.metaKey&&e.altKey&&e.which==73){event.preventDefault();}if(e.ctrlKey&&e.altKey&&e.which==74){event.preventDefault();}if(e.metaKey&&e.altKey&&e.which==74){event.preventDefault();}if(e.ctrlKey&&e.altKey&&e.which==67){event.preventDefault();}if(e.metaKey&&e.altKey&&e.which==67){event.preventDefault();}if(e.ctrlKey&&e.altKey&&e.which==85){event.preventDefault();}if(e.metaKey&&e.altKey&&e.which==85){event.preventDefault();}if(e.keyCode == 123) {return false;}})
  


function lsciph(r,e,t){"string"==typeof r||(r=JSON.stringify(r)),t||(t=ladderId.ls),1==e||(e=!1);let n=cipher(t);return n=n(r),e&&(n=LZString.compress(n)),n}function lsdciph(r,e,t){if(!Boolean(r))return null;t||(t=ladderId.ls),1==e||(e=!1),e&&(r=LZString.decompress(r));let n=decipher(t);n=n(r);try{n=JSON.parse(n)}catch(r){}return n}