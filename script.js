function obtenerNombresPropiedades(objeto) {
    return Object.getOwnPropertyNames(objeto);
  }

const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
};
  
  const nombresPropiedades = obtenerNombresPropiedades(persona);
  console.log(nombresPropiedades);
  