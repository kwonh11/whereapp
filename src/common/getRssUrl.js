import rss from './rss.json';
import ko from './toKorean';

export default function logging () {
    console.log(JSON.stringify(rss));
    console.log(ko("google"));
    console.log(ko("hani"));
}