export default function Calcular(props){
    const fcalcular=(p,a,sr)=>{
        return sr(p/(a*a))
    }

    return(
        <div>
            <button onClick={()=>fcalcular(props.peso,props.altura,props.setRes)}>Calcular</button>
        </div>
    )
}