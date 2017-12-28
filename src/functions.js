/*
 * Coloca el atributo page en los elementos de una lista
 * list array de elementos de DOM, deben tener atributo index
 * retorna integer la cantidad de elementos
 */
export function pager(list, max){
    var count = 0
    
    list.childNodes.forEach(e => {
        e.setAttribute('page', parseInt(e.getAttribute('index') / max + 1) )
        count++
    });
    return count
}

/*
 * Actualiza el DOM con los elementos de la página actual
 * current integer La página actual
 */
export function changePage(current){

    const list = document.getElementById('list')

    list.childNodes.forEach((item) =>{
        if(item.getAttribute('page') == current){
            item.style.display = 'block'
        }
        else{
            item.style.display = 'none'
        }
    })

}
