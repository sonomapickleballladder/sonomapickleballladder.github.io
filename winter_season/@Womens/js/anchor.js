setTimeout(function(){if(location.search.indexOf("t=")>-1){{let m=mquig("t=");if(byId(m).scrollIntoView(),location.search.indexOf("bg=")>-1){console.log(64);let nhz=mquig("bg=");byId(m).style.backgroundColor=nhz}}}else if(location.href.indexOf("#")>-1){let m=location.href.split("#")[1].split("&")[0].split("?")[0];byId(m).scrollIntoView()}},10);function mquig(g){return location.search.split(g)[1].split("&")[0].split("?")[0]}