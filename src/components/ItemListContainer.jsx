import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [tecnologia, setTecnologia] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchTecnologia = async () => {
      try {
        const db = getFirestore();
        const tecnologiaCollection = collection(db, "Tecnologia");
        const querySnapshot = await getDocs(tecnologiaCollection);
        const tecnologiaData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTecnologia(tecnologiaData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTecnologia();
  }, []);


  const productosFiltrados = tecnologia.filter((productos) => productos.categoria === id);

  return (
    <div>
      {id ? <ItemList productos={productosFiltrados} /> : <ItemList productos={tecnologia} />}
    </div>
  );
};

export default ItemListContainer;
