function clickAdd(){
    let dauvao1 = parseFloat(document.getElementById("id1").value)
    let dauvao2 = parseFloat(document.getElementById("id2").value)
     let tong = dauvao1 + dauvao2;
    document.getElementById("output").innerHTML=tong

    console.log(dauvao1)
    console.log(dauvao2)
    console.log("tong la:"+tong)
}
function clickSub(){
    let dauvao1 = parseFloat(document.getElementById("id1").value)
    let dauvao2 = parseFloat(document.getElementById("id2").value)
    let hieu = dauvao1 - dauvao2;
    document.getElementById("output").innerHTML=hieu

    console.log(dauvao1)
    console.log(dauvao2)
    console.log("hieu la:"+hieu)
}
function clickMul(){
    let dauvao1 = parseFloat(document.getElementById("id1").value)
    let dauvao2 = parseFloat(document.getElementById("id2").value)
    let tich = dauvao1 * dauvao2;
    document.getElementById("output").innerHTML=tich

    console.log(dauvao1)
    console.log(dauvao2)
    console.log("tich la:"+tich)
}
function clickDiv(){
    let dauvao1 = parseFloat(document.getElementById("id1").value)
    let dauvao2 = parseFloat(document.getElementById("id2").value)
    let thuong = dauvao1 / dauvao2;
    document.getElementById("output").innerHTML=thuong

    console.log(dauvao1)
    console.log(dauvao2)
    console.log("thuong la:"+thuong)
}
function clickreset() {
    document.getElementById("id1").value = ""
    document.getElementById("id2").value = ""

}
