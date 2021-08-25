import Item from "./Item";

export default function ItemList({productos}) {
  

  console.log("productos-->"+productos);
  
  
 
  
    return (
      <>
        <div className="App">
          <h1>Productos</h1>
          <div className="row container-fluid">
            {productos.map((eachProduct) => (
              <Item item={eachProduct} />
            ))}
          </div>
        </div>
      </>
    );
  }

