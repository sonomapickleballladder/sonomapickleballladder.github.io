const ovuw = {aa: 'Basic MGJiMjNkOTktMzhmOC00YjYyLWExNjYtMmE5MzI0N2RiMzUw', bb: 'f2c2c916-b99a-4b1d-8fb1-12453a49b8d8', ab: '10e8e0fc-ca3a-4162-bc6d-a46ef136072c'}


/*async function upsertUser(json) {
    const options = {
        method: 'POST',
        headers: {accept: 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({
          app_id: ovuw.ab,
          device_type: 11,
          identifier: JSON.parse(localStorage.getItem(sb.client.storageKey)).user.email,
          external_user_id: JSON.parse(localStorage.getItem(sb.client.storageKey)).user.id,
          language: 'en',
          tags: {
            first_name: JSON.parse(localStorage.getItem(sb.client.storageKey)).user.user_metadata.name.split(' ')[0],
            last_name: JSON.parse(localStorage.getItem(sb.client.storageKey)).user.user_metadata.name.split(' ')[1]
          }
        })
      };
      
      fetch('https://onesignal.com/api/v1/players', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  }*/

async function snEm(json) {
    let emsub = json.subject; if(!Boolean(emsub)) {emsub = 'No Subject'}
    let embod = json.bod; if(!Boolean(embod)) {emsub = 'No Body'}
    let emfn = json.from_name; if(!Boolean(emfn)) {emfn = 'Nobody'}
    let emfe = json.from_email; if(!Boolean(emfe)) {emfe = ''}
    let emrpl = json.reply_to; if(!Boolean(emrpl)) {emrpl = ''}
    let scheduled = json.send_at;

    
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        Authorization: ovuw.aa,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        app_id: ovuw.ab,
        include_email_tokens: json.email,
        email_subject: emsub,
        email_body: embod,
        email_reply_to_address: emrpl,
        include_unsubscribed: true,
        disable_email_click_tracking: true
      })
    };

    if(Boolean(scheduled)) {
      let amey = JSON.parse(options.body)
      amey.send_after = scheduled;
      options.body = JSON.stringify(amey);
    }

    //console.log(options);

    //return false;
    
    fetch('https://onesignal.com/api/v1/notifications', options)
      .then(response => response.json())
      .then(response => { if(response.recipients>1){localStorage.setItem('lastNTFId', response.id)}})
      .catch(err => console.error(err));
  }

  /*async function scheduleNotification(json) {
    console.log(json);
    let mnth = json.date.split(' ')[1].split(' ')[0].trim(),
        dat = json.date.split(' ')[0].trim(),
        yr = json.date.split(' ')[2].trim();
    let wnd = `${mnth} ${dat-1} ${yr} ${formatTime(json.json.timeselect)}:00 GMT-0700`;
    console.log(wnd);
    let lnt = 'hours'; if(parseFloat(json.json.durselect.replace(/[a-zA_Z]/g,''))==1) {lnt = 'hour'}
    let ewvxw = `Hi ${json.booked_by.name.split(' ')[0]},\nThis is a reminder that you booked a ${json.json.typeselect} session tomorrow (${json.json.dateselect} ${json.date}) at ${formatTime(json.json.timeselect, 1)} for ${json.json.durselect.replace(/[a-zA_Z]/g,'')} ${lnt}.\nTheo`;
    console.log(ewvxw);
    sendEmail({email: [json.booked_by.email, 'pbtheo@riseup.net'], subject: (`${json.json.typeselect} Session Reminder`).replace(/(^\w|\s\w)/g, m => m.toUpperCase()), bod: ewvxw, reply_to: 'pbtheo@riseup.net', send_at: wnd})
        
  }



  async function cancelNotification(id) {
    const options = {
      method: 'DELETE',
      headers: {accept: 'application/json', Authorization: ovuw.aa}
    };
    
    fetch(`https://onesignal.com/api/v1/notifications/${id}?app_id=${ovuw.ab}`, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }*/