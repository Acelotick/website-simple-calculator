const num_list = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

append = (val, can = true) => {
    const dat = document.getElementById('tab').innerHTML
    
    //зависимости
    if (!Number(val) && dat == '') return
    if (val == '**' && dat.substring(dat.length - 1) == '*') return
    if (val == '*' && dat.substring(dat.length - 2) == '**') return

    //главная зависимость
    if (can === false && dat.substring(dat.length - val.length) === val) {} else {
        document.getElementById('tab').innerHTML = dat + val
    }
}

//=
getvalue = () => document.getElementById('tab').innerHTML = eval(document.getElementById('tab').innerHTML) ?? ''

//C
erase = () => document.getElementById('tab').innerHTML = ''

//B-
backspace = () => document.getElementById('tab').innerHTML = document.getElementById('tab').innerHTML.slice(0, -1)

//-B
backspacel = () => document.getElementById('tab').innerHTML = document.getElementById('tab').innerHTML.substring(1)