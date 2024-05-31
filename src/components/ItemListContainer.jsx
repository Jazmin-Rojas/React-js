import { useEffect, useState } from "react";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from '../components/loading';
import defaultValues from '../components/json/productos.json';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [visible, setVisible] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false); 
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "item");
        const queryCollection = id ? query(itemCollection, where("categoria", "=", id)) : itemCollection;

        getDocs(queryCollection).then(snapshot => {
            if (snapshot.size > 0) {
                setItems(snapshot.docs.map(item => ({ id: item.id, ...item.data() })));
                setIsEmpty(false);
            } else {
                setIsEmpty(true);
                
                console.log('No se encontraron elementos. Cargando datos por defecto...');
                loadDefaultValues(itemCollection);
            }
            setVisible(false);
        });
    }, [id]);

    const loadDefaultValues = async (itemCollection) => {
        const promises = defaultValues.map(item => addDoc(itemCollection, item));
        const docs = await Promise.all(promises);
        console.log(docs)

        const savedItems = docs.map(doc => ({
            id: doc.id,
            ...defaultValues.find(item => item.id === doc.data().id) 
        }));

        setItems(savedItems);
        setIsEmpty(savedItems.length === 0);
    };

    return (
        <div className="container">
            <div className="row">
                {visible && <Loading />}
                {!visible && isEmpty && <div>No se encontraron elementos.</div>} 
                {!visible && !isEmpty && <ItemList items={items} />}
            </div>
        </div>
    );
}

export default ItemListContainer;
