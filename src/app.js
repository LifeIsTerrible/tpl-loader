console.log('welcome webpack');

import tpl from './info.tpl';

const info = {
    name:'lisa',
    age:12,
    hobby:'swiming'
}

const tplHtml = tpl(info)
console.log(tplHtml);
let root = document.getElementById('app');
root.innerHTML = tplHtml;
