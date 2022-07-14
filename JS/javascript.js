let carritoInicial = 0;
let resultado = carritoInicial;

function sumar (i){
    resultado = resultado + i;
}

function siQuieres(a){
        console.log(a);
        let siono = prompt('Lo quieres?');
        if (siono === 'si'){
            sumar (a.precio)
            listaProductos.push(a.nombre);
            console.log(a.nombre + ' fue agregado');
        }else{
            alert('Opcion incorrecta');
        }
    }

const listaProductos = []

class Mates{
    constructor(nombre, material, forrado, tipo, precio){
        this.nombre = nombre.toUpperCase();
        this.material = material.toUpperCase();
        this.forrado = forrado.toUpperCase();
        this.tipo = tipo.toUpperCase(); 
        this.precio = parseFloat(precio); 
    }
}

const mate0 = new Mates('Mate Comun' , 'Calabaza',  'Cuero oscuro', 'Camionero', '2500');
const mate1 = new Mates('Mate Dragon Imperial' , 'Calabaza',  'Cuero teñido de Rojo', 'Imperial', '3500');
const mate2 = new Mates('Mate Leñador' , 'Madera',  'Tallado', 'Camionero', '4000');
const mate3 = new Mates('Mate Arcoiris' , 'Vidrio',  'Plastico Holografico', 'Mediano', '2000');

class Termos{
    constructor(nombre, material, capacidad, precio){
    this.nombre = nombre.toUpperCase();
    this.material = material.toUpperCase();
    this.capacidad = capacidad.toUpperCase();
    this.precio = parseFloat(precio); 
    }
}

const termo0 = new Termos('Termo Media Manija', 'Metal', '1 Litro', '3500');

class Bombilla{
    constructor(nombre, material, precio){
    this.nombre = nombre.toUpperCase();
    this.material = material.toUpperCase();
    this.precio = parseFloat(precio); 
    }
}

const bombilla0 = new Bombilla('Bombilla Cuchara', 'Metal', '600');

do {
    opcion = Number(prompt('Menu Productos:\n1 - Mate\n2 - Termo\n3 - Bombilla\n4 - Mates LIMITADOS\n\nFunciones:\n5 - Consultar monto\n6 - Lista\n7 - Vaciar carrito\n8 - Salir'));
    
    switch (opcion) {
        case 1:
            siQuieres(mate0)
            break;  

        case 2:
            siQuieres(termo0)
            break;

        case 3:
            siQuieres(bombilla0)
            break;

        case 4:
            opcionesDos = Number(prompt('Mates Limitados:\n1- Mate Dragon Imperial\n2 - Mate Leñador\n3 - Mate Arcoiris\n4 - Atras'));
            
            switch(opcionesDos){
                case 1:
                    siQuieres(mate1);
                    break;

                case 2:
                    siQuieres(mate2);
                    break;

                case 3:
                    siQuieres(mate3);
                    break;

                case 4:
                    break;
                    
                default:
                    alert('Opcion incorrecta');
                    break;
            }
            break;
            
        case 5:
            console.log('Tu monto actual es de ' + resultado + '$');
            break;
    
        case 6 :
            console.log(listaProductos.join(' - '));
            console.log('Cantidad de productos ' + listaProductos.length);
            break;

        case 7:
            resultado = 0;
            listaProductos.splice(0, listaProductos.length);
            alert('Carrito fue vaciado');
            break;

        case 8:
            if (resultado > 0){
                alert('Tu compra final es de ' + resultado + '$ Gracias por la compra!');
                break;
            }
            else{
                alert('Para que venis raton');
                break;
            }
        default:
            alert('Opcion incorrecta');
            break;
        }       
} while(opcion != 8);