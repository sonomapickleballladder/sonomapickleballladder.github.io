let isal = true;
try {if(Boolean(localStorage.getItem('enable_analytics'))) {isal = localStorage.getItem('enable_analytics')}} catch(ex) {}
if(location.href.indexOf('al=false')>-1) {isal = false; try{localStorage.setItem('enable_analytics', false)} catch(ex){}}
console.log(isal);
if(isal) {
    let lnk = document.getElementsByTagName('a');
    for (let i = 0; i < lnk.length; i++) {
        try {if(lnk[i].getAttribute('href').indexOf('://')<0 && location.protocol.indexOf('https')>-1) {lnk[i].removeAttribute('rel'); lnk[i].href=lnk[i].href.replace(/(.html)/g,'')}} catch (ex) {     
        }
    }

    let al = document.createElement('script');
     al.src = 'https://analytics.projectsegfau.lt/js/script.js';
     al.setAttribute('data-domain', 'sonomapickleballladder.github.io');
     al.setAttribute('defer', '');
     document.head.appendChild(al)}