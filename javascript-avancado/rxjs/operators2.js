const { XMLHttpRequest } = require('xmlhttprequest')
const { ajax } = require('rxjs/ajax')

const { concatAll, map } = require('rxjs/operators')

const users = ['rocketseat', 'cod3rcursos']

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

const getAllRepo = fn => {    
    return (users || []).forEach(data => fn(data))
}

getAllRepo(repositorys)