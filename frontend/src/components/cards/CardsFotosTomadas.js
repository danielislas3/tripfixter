/* eslint-disable array-callback-return */
import React,{useState,useEffect} from 'react'
import { Card } from 'semantic-ui-react'
import Axios from 'axios'
const base_url='http://localhost:4000/api'
//const [fotosURL, setFots] = useState([])


export default function CardExampleColumnCount (props) {
    const [fotos,setFotos] = useState([])
    useEffect(()=>{
        Axios.get(`${base_url}/photosAll/${props.match.params.id}`)
    .then(({data}) => {
       
        setFotos(prevState=>(
            [...prevState,...data.photos]
        ))  
    })
    .catch(err=>console.log(err))
    },[props.match.params.id])

    if(!fotos) return <p>loading</p>

    return(
    <>   
       
        
 {  fotos.map((foto,i) =>{

            if(foto._creator===props.match.params.id){
                return(
                    <Card key={i} raised image={foto.img} src={foto.img} alt={foto.img}/>
                   )
            }
           
        })}
        
        
        
        
    </>)
}

