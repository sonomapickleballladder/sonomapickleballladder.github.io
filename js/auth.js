const init = {
  f_u: 'https://oqpiiqfveroswwanvkzu.supabase.co',
  f_a: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xcGlpcWZ2ZXJvc3d3YW52a3p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMwMzMwNjEsImV4cCI6MTk4ODYwOTA2MX0.zEzrbDtrxxbMxev8qEQ9XZ_ftqn3D-wC-Y9woleli0U'
}

const sb = {
  client: supabase.createClient(init.f_u, init.f_a)
}

var debug = location.search.indexOf('debug')>-1;

async function ptc(t,s,e,m,x,z,thenfunction){
  const { data, error } = await sb.client
  .from(t)
  .select(s)
  .eq(e, m)


if(error&&debug) console.log(error);

try{executeFunctionByName(thenfunction, window, data);}catch(ex){return data}


//return data

  
}

async function saveData(t, e, thenfunction) {
 const { data, error } = await sb.client
  .from(t)
  .insert([
    e
  ])

  if(error) return "Error";

  try{executeFunctionByName(thenfunction, window, data);}catch(ex){return data}

  /*if(error) {byId('status').innerHTML='<details><summary>Error</summary><p>'+errorAlter(error.message)+'</p></details>'+byId('status').innerHTML}
  else {try{byId('status').innerHTML='<p>'+sucms+': Recipe is now published at <a target="_blank" href="'+location.protocol+'//'+location.host+'/recipes.html?'+e.recipe_url+'">'+location.protocol+'//'+location.host+'/recipes.html?'+e.recipe_url+'</a></p>'+byId('status').innerHTML}catch(ex){}}*/
}

async function upsertData(t, e, thenfunction) {
  const { data, error } = await sb.client
   .from(t)
   .upsert([
     e
   ])
 
   if(error) return "Error";
 
   try{executeFunctionByName(thenfunction, window, data);}catch(ex){return data}
}

function mk() {
  let ud = document.getElementsByClassName('scd');
  for (let i = 0; i < ud.length; i++) {
    let t=ud[i].getAttribute('t'),s=ud[i].getAttribute('s'),e=ud[i].getAttribute('e'),m=ud[i].getAttribute('m'),y=ud[i].getAttribute('y'),r=false;
    ptc(t,s,e,m).then(function(rc) {
      if(y){rc[0][s]=LZString.decompressFromUTF16(rc[0][s])}
      try {if(Boolean(rc[0][s])){ud[i].innerHTML=rc[0][s]}} catch (error) {}
      gbstr.fd=new Date().getTime();
      if(debug) console.log('loaded in '+JSON.stringify(gbstr.fd - gbstr.sd)+' milliseconds');
  })
    }
}


function validateEmail(email) {
  const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(String(email).toLowerCase());
}

function disallow(h) {
  let jrks = ['ferrick', 'ferick', 'kerst', 'reed f', 'ambasaddor'];
  for (let i = 0; i < jrks.length; i++) {
    if(h.toLowerCase().indexOf(jrks[i])>-1) {return true}
    
  }
}