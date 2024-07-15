function beforesubmit(){
    let inputdate = document.querySelector(".inputdate");
    let outputdate = document.querySelector(".outputdate");
    let inputdatedata = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = inputdatedata;
}