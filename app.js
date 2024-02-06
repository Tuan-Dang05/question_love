var buttonYes = document.querySelector('button[type="submit"]');
var buttonNo = document.querySelector('button[type="button"]');
var lst = ["Chắc chưa?","Thật ko?","chắn chắn chưa?","Có chắc là ko","cho chọn lại","không thật chưa",""] // tham số rỗng: bắt buộc
var a = []
for (let i = 1; i < lst.length; i++){
    a.push(i*20)
}
var padding = a

function handleButtonNo(){
    var element = lst.shift();
    buttonNo.innerHTML = element
    var currentPadding = padding.shift();
    // var arr = []
    buttonYes.style.padding = (currentPadding + currentPadding) + 'px';
    // buttonYes.style.padding = '30px';
    // console.log(lst.length)
    if (lst.length === 0) {
       buttonNo.style.display = 'none';
    }
}
function handleButtonYes(){
    setTimeout(function() {
        location.href = './heart/index.html';
},1000);
}
