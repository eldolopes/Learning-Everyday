const { XMLHttpRequest } = require('xmlhttprequest')
const { ajax } = require('rxjs/ajax')

const { concatAll, map } = require('rxjs/operators')

const user = 'rocketseat'
const repositorys = user => ajax({
    createXHR: () => new XMLHttpRequest(),
    url: `https://api.github.com/users/${user}/repos`
})
    .pipe(
        map(data => JSON.parse(data.xhr.responseText)),
        concatAll(),
        map(data => data.name)
    )
    .subscribe(console.log)

repositorys(user)