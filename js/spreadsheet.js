function  setrefresh() {
    let ld = document.createElement('p');
    ld.id='loader';
    ld.innerHTML = `<span style="position: absolute; top: 0.25em; right: 0.25em; padding: 0.5em; cursor: pointer;" onclick="loadcomplete()">×</span> <br> Loading content. Please be super patient.<span id="view"></span>`;
    let ifr = document.createElement('iframe');
    document.body.appendChild(ifr);
    document.body.appendChild(ld);
    setInterval(refresh, 600000)
    refresh()
    function refresh() {
      let burl = byId('link').getAttribute('url');
      let dt = '?type=grid&mode=embed';
      let urls = {1: {url:burl, view: 'Mobile', text: ' Certain formatting may not render properly with this view.'}, 2: {url:burl+dt, view: 'Desktop', text: ''}}
      if(Boolean(byId('link2'))){urls[1].url=byId('link2').getAttribute('url'); urls[2].url=byId('link').getAttribute('url')+dt;}
      let url = urls[2].url, view, alt = '';
      if(ismobile()||isiPad()) {url=urls[1].url}
      try{if(localStorage.getItem('spreadsheet_view')&&Object.keys(urls).includes(localStorage.getItem('spreadsheet_view'))){url = urls[localStorage.getItem('spreadsheet_view')].url}}catch(ex){}
      if (location.href.indexOf('url=')>-1) {url = urls[parseInt(location.href.split('url=')[1].split('&')[0].split('?')[0])].url;}
      for (let i = 0; i < Object.keys(urls).length; i++) {
        if(url == Object.values(urls)[i].url) {view = Object.keys(urls)[i]; try{localStorage.setItem('spreadsheet_view',view)}catch(ex){}}
        else {alt = ` <a href='?url=${Object.keys(urls)[i]}'>Click here<a> to load the alternative version.`;}
      }
      try{byId('view').innerHTML=`<br><br>You are viewing a version of this page optimized for ${urls[view].view}.${urls[view].text}${alt}`}catch(ex){}
      document.querySelector('iframe').src=url;
      document.querySelector('iframe').addEventListener('load', loadcomplete)
    }
  }
  function loadcomplete() {
    document.getElementById('loader').classList.add('h');
  }

  document.addEventListener("DOMContentLoaded", setrefresh)