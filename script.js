function insert(num) {
    document.querySelector('p').innerHTML += num;
}

function clean() {
    document.querySelector('p').innerHTML = '';
}

function remover() {
    let r = document.querySelector('p').innerHTML;
    document.querySelector('p').innerHTML = r.substring(0, r.length - 1);
}

function total() {
    let t = document.querySelector('p').innerHTML;
    document.querySelector('p'). innerHTML = eval(t)
}