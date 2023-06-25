const formele=document.getElementById("form1")
function getFormvalue() {
    //Write your code here
    const fname=formele.elements['fname'].value;
    const lname=formele.elements['lname'].value;
    alert(`${fname} ${lname}`)


}
