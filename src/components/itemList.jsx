import Item from "./item";

const itemList = ({items}) => {
    return (
        <>
        {items.map(item => (
            <Item key={item.id} item={item} />
        ))}
        </>
    )

}

export default itemList; 