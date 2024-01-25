import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const [tecnologiaData, setTecnologiaData] = useState([]);
  const {id} =useParams()

  useEffect(() => {
      const db = getFirestore();
      const tecnologiaDoc = doc(db, "Tecnologia", id);
      getDoc(tecnologiaDoc)
      .then((resp)=> {
        setTecnologiaData(
          {...resp.data(), id:resp.id}
        )
      })
    }, [id])
    console.log(tecnologiaData)

  

  return (
    
    <div>
    {tecnologiaData && <ItemDetail productos={tecnologiaData} />};
    </div>
    
  )}


export default ItemDetailContainer;