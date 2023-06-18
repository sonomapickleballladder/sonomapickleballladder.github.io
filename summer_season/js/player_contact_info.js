
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

orig = unescape("%20n%3C-8%3Ca%22ht%20csgq%20atTmXn--mto%3D%3Dmmeb%3EOttwo%3C%20pu%20%3Dnmv-ndvmAmdmrgalven%20%22%21im%22lePie%3DhEll%22em%22heehe%20a%3Eita%20n%3Cec%22%22%3Dnw.%22o%3Er%20m%20o%3E%22at%20%3DTeleehto%22o%22cm%2C%20oCt%20l%20%3Dii%22m%22dcsi%3Csft1r%3Et%22emarn%20me%3CaxtmmYflaabmp%3Eoic%3Cd%20%20ttlte%7Ctneme%20wor%3Ctrdw%22tnl-md%22O%20%2Ci%20naril%20e/raCe.%3E_0tF/%20a%20%20mtpmane%20%3D%22%3DetrirttirdmnmU_n%3C%22cpu%3Ctesenp%22ost.%20n/lI/ct%20-etsmls%20%20s%22ycadfrnm%3D%20omI%20p%3Enh%20pc%20%3CmL%3Dtcpo%3Citi%20mecinan%20-dl%20pisnpy%22cc-h%20%20mm%3Doshd/ml%20/immmit%3Ebatrpimoit.m%3C%20ashsinbzu%20%3Di7bej%22ncoe/%22o6eci%3Amdleietar1%3EoP210ic%20a48mscd5cepob16mhe22adgdmbf%201i%203co8mt1%22tasze%20lb%20x5au8j%210et5/tmn/7rp%201.0jospuass%22tca%3E%3Beie6%20f1%20b%20iprud%3Cch%20h/lmoih8inlb/6%20smet8mjtep6nsit.3s%3Eash3%3A%3Cbzubl%3E7bea%20%3Ccoef%22m6ec1%3A%20dle%3Eerar1%20od210%20cka48%3Ds%3Dd5cdpsb160he22aoghabf%3B1ii3ct8/%201%22aa/leStbsl5%20r8nf0st54%20J./7alrs.0f/sluaa%20bica7nPke64p%20mba9%20w%20dt2c%20c/i1l%3Cm8dalm%206aes/p8lm%3Eif6h%20%20m%293nyisi3%3E-c%3Emb%20%3Amosasir/%20f%3Eaetj1%20on%20/%3Ein%3Crdciopr-i%28%22m_sar%3D%20pc%20msrhme%3Ceai%20othi%3Eos%22isit.n/emSma/d%20%20%3CtsrcbrjnoJbms4%20rn%3C%3Eapurtmf/%20innaiei%3Cp7moepa4fts%20t9sw%3Ec%202t%20msa1/%3Cmsia.r%3Dseeumssvvciemhpe%20h%22gdbhiroed//mte/t/%20mo8pssat6.n%3Eci8h4cpa6uamh%203efeoo3ealltbc7%20m%20ae4%20trf19eig102sag%3E81.bcacac7m%206emc%20oai%3C6p%20f%3Eed%3D%3Dc%3D%22ais%22e%3A2etraeaepp%22od.olncb/s%22es2t%3Bsip/m%20%3C%20he%3Cmsugdih%22o1dv2i28lppbrahtge%20bane%3Am8l%20red5sdpg07%3A%20r.%200ltc%20rata%22nna.no5%206%20peucf%3Am%3C%20a%3Cer%3Eel%22dr%20n%22r%20tn%3Dps%3Bstcb%3EozPta%20ib%20%D7c%3D%22opnttiet%3Eaaol%3Ci%20tprin%20p%291e%20n5s4reai%3C5Yu%220o1ea%3E%3B%202i.binbv%20%20.e3niice1hb%20%3Areg%3Este5irfop0%20w%20k%3D%3Ce%20od%22m.oze%3Cirtr%3Euauatavc%3Etarg%22%20d%3Ddrp/D%3Dooy%20pi.soahrs%20n%20%3F%3Csion%22%20po%20%20kttk0o%3Ctn%3C%3B%3E%3Eivftnor%3Cl5me%3Crla%3Crsae%3A%3Ee/e%3Emlimaosmaoi%20omah%20l%3Bb%3Emptlemmpeliy1e.msmc%20/%28dmeo%3C/wma%20m%20%3EUl%22bLo%3Eh%3D/g%20DeCmenEvhmle%3Esmrn%20t/lC%3Cinp%3Dh%3Ee%22pdamm%22mtt/f%3Cded%3Csmtma%3E%20mmtamehmrvm");
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