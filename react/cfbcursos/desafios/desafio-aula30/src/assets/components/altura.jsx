export default function Altura(props){

    return(
        <div>
        <label>Altura: 
            <input type="text" value={props.altura} onChange={(e)=>{props.setAltura(e.target.value)}}/>
        </label>
        </div>
    )
}