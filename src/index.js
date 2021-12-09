import './scss/index.scss'

async function start() {
    return await Promise.resolve('promise resolved')
}

start().then(console.log)