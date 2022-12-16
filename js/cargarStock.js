function cargarStock(){  //@audit-ok
    //* Entrada de datos
    
    let cargaProd = true;
    let sameCategory = true;
    let producto;
    console.log("¿Carga producto? " + cargaProd);
    
    const productosStock = [];
    class Producto {
        constructor (prodId, prodCategory, prodName, prodStock, prodPrice){
            this.prodId = prodId;
            this.prodName = prodName;
            this.prodCategory = prodCategory;
            this.prodStock = prodStock;
            this.prodPrice = prodPrice;
            this.iva = 0.21;
        }
    /*  applyIVA(){
            this.prodPrice = this.prodPrice + (this.prodPrice * this.iva);
        } */
    }

    //* Carga de productos
    while (cargaProd) { ///@audit-ok 
            do{ //Validación para la categoría del producto
                prodCategory = prompt("Ingrese la categoría del producto(Lubricantes/Electricidad/Otros)").toUpperCase();
                console.log("Categoría: " + prodCategory);
            } while ((prodCategory != "LUBRICANTES") && (prodCategory != "ELECTRICIDAD") && (prodCategory != "OTROS"));
            

        do {    
            do{ //Validación para nombre distinto de vacío
                prodName = prompt("Ingrese el nombre del producto").toUpperCase();
                console.log("Producto: " + prodName);
            } while (prodName == null);

            do{ //Validación stock > 0
                prodStock = parseInt(prompt("Ingrese la cantidad de productos a registrar"));
                console.log("Stock: " + prodStock);
            } while (prodStock < 0); 

            do{ // Validación precio > 0
                prodPrice = parseFloat(prompt("Ingrese el precio del producto"));
                console.log("Precio: " + prodPrice);
            } while (prodPrice < 0 );

            prodId = productosStock.length + 1;
            producto = new Producto(prodId,prodCategory,prodName,prodStock,prodPrice); 
            console.log(producto);
            productosStock.push(producto);
            console.log(productosStock);
            sameCategory = confirm("Desea agregar otro producto de la misma categoría");
        } while (sameCategory);
        prodId = productosStock.length + 1;
        cargaProd = confirm("¿Desea agregar un nuevo producto?"); 
    }

    let prodCargados = "";
        for (let item of productosStock){
            prodCargados += "Id: " + item.prodId + " - " + item.prodName + "    $ " + item.prodPrice + "    Stock: " + item.prodStock +"\n"; 
        }
    alert("SE HAN CARGADO LOS SIGUIENTES PRODUCTOS: \n" + prodCargados);

}