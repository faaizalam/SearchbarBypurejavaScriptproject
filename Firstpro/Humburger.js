
    let a;
const showlong=()=>{
    if (a==0) {
        document.getElementById("mainh").style.height="200px"
        document.getElementById("logo").style.margin="auto"
        document.getElementById("humbut").style.marginBottom="150px"
        // document.getElementById("logo").style.marginBottom="200px"
        document.getElementById("logos").style.marginBottom="200px"
        document.getElementById("logos").style.display="flex"
        document.getElementById("logos").style.flexDirection="column"
        // document.getElementById("logos").style.display="block"
        return a=1;
        
    }else{
        document.getElementById("humbut").style.marginBottom="0px"
        document.getElementById("mainh").style.height="70px"
        document.getElementById("logos").style.display="none"
        document.getElementById("logo").style.margin="initial"
        return a=0;
        
    }




}