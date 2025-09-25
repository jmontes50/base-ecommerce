//guardar en LS
const saveStorage = (name, data) => {
  const JSONdata = JSON.stringify(data); //transformar a texto
  localStorage.setItem(name, JSONdata); //guardamos
}

//leer y retornar de LS
const getStorage = (name) => {
  const JSONdata = localStorage.getItem(name); //getItem da texto
  const data = JSON.parse(JSONdata); //Convierte JSON de string a JS
  return data;
}

//remover, con removeItem

export {
  saveStorage,
  getStorage
}
