import $ from 'jquery'
import "./app3.css"

const $square = $('#app3 .square')

$square.on('click', ()=> {
    $square.toggleClass('active')//没有就加class 有就删除class
})
console.log($square)