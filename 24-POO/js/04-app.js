class Cliente {

    #nombre;
    
    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }
}

const Alexander = new Cliente();
Alexander.setNombre('Alexander')
console.log(Alexander.getNombre());
