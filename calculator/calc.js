var calcScreen = document.querySelector('#screen');
var displayable = document.querySelectorAll('.displayable');
var td = document.querySelectorAll('td');
var timenode = document.querySelectorAll('.time span');


var powerOutput = true;
td.forEach(function (vall){
    vall.addEventListener('click', (e) =>{
        calcScreen.style.fontSize = '20px'
    })
})
displayable.forEach(function (val){
    val.addEventListener('click', (e) =>{
        if(powerOutput){
            let targetClicked = e.target;
            calcScreen.value += targetClicked.innerHTML
        }else
        {
            return;
        }
    })
});

function resolve()
{
        if(calcScreen.value.includes('p'))
        {
            let x = []
            let y = []
            checking_permute(x, y)
        }else if(calcScreen.value.includes('c'))
        {
            let x = []
            let y = []
            checking_combine(x, y)
        }
        else{
        let resolved = eval(calcScreen.value);
        calcScreen.value = resolved;
        }
}
function permut()
{   
    calcScreen.value += 'p';
}
function combi()
{
     calcScreen.value += 'c';
}
function checking_permute(n_parent, r_parent)
{
    let t = Array.from(calcScreen.value);
    var n_parent = t.slice(0,t.indexOf('p'))
    var r_parent = t.slice(t.indexOf('p')+1);
    let n_parent_joined = n_parent.join('')
    let r_parent_joined = r_parent.join('');
    permutation(n_parent_joined, r_parent_joined)
}
function checking_combine(n_parent, r_parent)
{
    let t = Array.from(calcScreen.value);
    var n_parent = t.slice(0,t.indexOf('c'))
    var r_parent = t.slice(t.indexOf('c')+1);
    let n_parent_joined = n_parent.join('')
    let r_parent_joined = r_parent.join('');
    combination(n_parent_joined, r_parent_joined)
}
function sin()
{
    calcScreen.value = Math.sin(calcScreen.value * Math.PI /180);
}
function percentage()
{
    calcScreen.value = calcScreen.value/100;
}
function pi()
{
    calcScreen.value = Math.PI;
}
function cos()
{
    calcScreen.value = Math.cos(calcScreen.value * Math.PI /180);
}
function tan()
{
    calcScreen.value = Math.tan(calcScreen.value * Math.PI /180);
}
function squareroot()
{
    calcScreen.value = Math.sqrt(calcScreen.value);
}
function factorial(){
    let number = Math.round(calcScreen.value);
    var r = [];
    fact();
    function fact(){
    if(number > 0)
    {
        r.push(number);
        number--;
        fact();
    }
}
calcScreen.value = r.reduce(function (total , value){return total*value});
r = [];
}
function ace()
{
    return calcScreen.value = '',
    calcScreen.style.background = '#4b4b4b75',
    calcScreen.placeholder = '0',
    powerOutput = true;
}
function off()
{
    return calcScreen.value = '',
    calcScreen.style.background = '#333',
    calcScreen.placeholder = '',
    powerOutput = false;
}
function ce()
{   let x = Array.from(calcScreen.value);
    x.splice(x.length-1, 1)
   calcScreen.value = x.join('');
}
//setInterval(datetime, 1000)
function datetime()
{
    let y = new Date()
    timenode[0].innerHTML = y.getHours() + ':'
    timenode[1].innerHTML = y.getMinutes() + ':'
    timenode[2].innerHTML = y.getSeconds()
}
//TEST BASE CALCULATOR SECITON

function b_two()
{
    var number = Math.round(calcScreen.value);
let result = []
var r;
bin();
function bin()
{
    if(number > 1){
     number = number/2;
     let t = number.toFixed(2)-Math.floor(number);
     number = number-t;
     result.unshift(t/.5)
     console.log(result,number);
     bin();
    }

}
    result.unshift(1);
    r = result.join('');
    calcScreen.value = r;
    result = [];
}
function b_eight()
{
    var base = 8;
    dec_conv(base);
}
function b_seven()
{
    var base = 7;
    dec_conv(base);
}
function b_six()
{
    var base = 6;
    dec_conv(base);
}
function b_three()
{
    var base = 3;
    dec_conv(base);
}
function b_four()
{
    var base = 4;
    dec_conv(base);
}
function b_five()
{
    var base = 5;
    dec_conv(base);
}
function b_nine()
{
    var base = 9;
    dec_conv(base);
}
function dec_conv(base)
{
    let result = [];
    var r;
    var number = Math.round(calcScreen.value);
    let stringified = number.toString();
    let p = stringified.split('');
    p.reverse();
    p.forEach(function (value, index){
        let t = Number(value)*Math.pow(base , index);
        result.unshift(t);
    })
    r = result.reduce(function (total, value){return total + value})
    calcScreen.value = r
}
//PERMUTATION SECTION
function permutation(n,r)
{
    var n;
    var r;
    var r_inti = [];
    var r_final = [];
    let resolved = n - r;
    final();
    initial();

    function initial(){
    if(n > 0)
    {
        r_inti.push(n);
        n--;
        initial();
    }
    }

    function final()
    {
    
    if(resolved > 0)
    {
        r_final.push(resolved);
        resolved--;
        final();
    }
    }
let permute_top = r_inti.reduce(function (total , value){return total * value})
let permute_down = r_final.reduce(function (total , value){return total * value})
calcScreen.value = permute_top/permute_down
}
//COMBINATION SECTION
function combination(n,r)
{
    var n;
    var r;
    var r_inti = [];
    var r_final = [];
    let resolved = n - r;
    final_two();
    final();
    initial();

    function initial(){
    if(n > 0)
    {
        r_inti.push(n);
        n--;
        initial();
    }
    }

    function final()
    {
    
    if(resolved > 0)
    {
        r_final.push(resolved);
        resolved--;
        final();
    }
    }
    function final_two()
    {
    
    if(r > 0)
    {
        r_final.push(r);
        r--;
        final_two();
    }
    }
let combine_top = r_inti.reduce(function (total , value){return total * value})
let combine_down = r_final.reduce(function (total , value){return total * value})
calcScreen.value = combine_top/combine_down
}