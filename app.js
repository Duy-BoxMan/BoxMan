
const arr = document.getElementsByClassName("calc")


//B1
function tinh() {
    let sum = 0
    for (let i = 0; i < arr.length; i++)
        sum += arr[i].id * 1

    console.log('Tổng giá trị các id: ' + sum)
}

// Buổi trước không đi học nên chưa hiểu câu 2

//B3
function inID() {
    for (let i = 0; i < arr.length; i++) {
        let value = document.getElementsByClassName("calc")[i].id
        document.getElementById(value).innerHTML = value
    }
}
