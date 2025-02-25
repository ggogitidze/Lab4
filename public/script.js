fetch('/hits' + location.pathname + '-page')
    .then(r=>r.text())
    .hen(txt=>{
        document.getElementById('hits').innerText = 
        'Current hits for this page: '+ txt
    }
    );