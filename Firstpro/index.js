


const Searchfun=()=>{
    
    const filtesr=document.getElementById('searchs').value.toUpperCase();
    const Mytable= document.getElementById('mytable')
    let tr =Mytable.getElementsByTagName('tr');
    console.log(tr.length)
    // const td = tr[1].getElementsByTagName('td')[0];

    // td.filter((x)=>x===filtesr)?style.display='':tr[2].style.display='';
    
    for (let i = 0; i<=tr.length; i++) {
        const td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            const textvalue =td.innerHTML ||td.textContent
            if (textvalue.toUpperCase().indexOf(filtesr)>-1) {

                tr[i].style.display="";
               
                

                
            }else{
                tr[i].style.display="none";

            }
            
        }
       
       
        
    }

}


var a;
const show_hides=()=>{

    if (a==1) {
        document.getElementById('images').style.display='inline';
        return a=0;
        
    }else{
        document.getElementById('images').style.display='none';
        return a=1


    }




}