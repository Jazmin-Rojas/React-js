import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import Loading from './loading'; 

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams(); 

    useEffect(() => {
        const fetchItem = async () => {
            const db = getFirestore();
            const itemCollection = collection(db, "item");
            const itemQuery = query(itemCollection, where("id", "==", Number(id))); 

            try {
                const querySnapshot = await getDocs(itemQuery);
                if (!querySnapshot.empty) {
                    const docSnap = querySnapshot.docs[0]; 
                    console.log("Documento encontrado:", docSnap.data()); 
                    setItem({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log("No existe el documento con ese id");
                }
            } catch (error) {
                console.error("Error obteniendo el documento:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchItem();
        } else {
            setLoading(false);
        }
    }, [id]);

    return (
        <div className="container">
            <div className="row justify-content-center"> 
                <div className="col-md-6"> 
                    <div className="text-center"> 
                        {loading ? <Loading /> : item ? <ItemDetail item={item} /> : <h2>Producto no encontrado</h2>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailContainer;
