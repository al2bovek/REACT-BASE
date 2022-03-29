export default function({tikVienasArbaDu}){
    let spalva;
if(tikVienasArbaDu==1) {
spalva = 'blue'
}
else {spalva = 'green'} 
if(tikVienasArbaDu ==2 ) {
    spalva = 'red'}


    

    // const spalva = tikVienasArbaDu => tikVienasArbaDu ? 1==='blue' : 'red';
    return(
         <h1 style={{color: spalva }}>“Zebrai ir Bebrai”</h1>
    )
}