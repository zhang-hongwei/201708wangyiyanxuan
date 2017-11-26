//上拉加载更多
export function upPull(element,callback) {
    let timerID=null;
    element.addEventListener("scroll",function () {
        console.log('scroll');
        if (timerID) clearTimeout(timerID);
        timerID=setTimeout(function () {
            let scrollTop=element.scrollTop
            let clientHeight=element.clientHeight
            let scrollHeight=element.scrollHeight
            if(scrollTop+clientHeight+30>scrollHeight){
                callback()
            }
        },80)
    })
}