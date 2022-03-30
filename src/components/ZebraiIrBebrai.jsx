export default function ZebraiIrBebrai({tikVienasArbaDu}){
    let spalva = tikVienasArbaDu ==1 ? 'blue' : 'red';
   
    return(
        <>
        <h1 style={{color: spalva}}>“Zebrai ir Bebrai”</h1>
        {/* <h1 style={{color: tikVienasArbaDu==1 ? 'blue' : 'red'}}>“Zebrai ir Bebrai”</h1> */}
        </>
        
    )
}