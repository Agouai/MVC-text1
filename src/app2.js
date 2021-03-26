import $ from 'jquery'
import './app2.css'

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $('#app2 .tab-content')

$tabBar.on("click", "li", e=>{
    const $li = $(e.currentTarget);
    const index = $li.index()
    $li
        .addClass('selected')
        .siblings().removeClass('selected')
    console.log(index)
    $tabContent
        .children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')//不要使用shou hide 和css的api （.css({display:'block})不要用js去操作css样式和功能分离
})

$tabBar.children().eq(0).trigger('click')