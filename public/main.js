
let update = document.getElementById('update')

update.addEventListener('click',function(){
    fetch('quotes',{
        method: 'put',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            'name': 'Infinity War',
            'quote': "It's marvel movie and updated"
        })
    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .then(data => {
        console.log(data)
        window.location.reload(true)
    })
})