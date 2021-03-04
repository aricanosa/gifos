const apiKey = '28L2nswSvQEfuRYGUf9s8KREHA7Fy01J';

let searchInput = document.getElementById('search');
let searchBtn = document.getElementById('searchBtn');
let resultadoGifs = document.getElementById('articulo_resultado-busqueda');
let h1ResutadoBusqueda = document.getElementById('titulo_resultado-busqueda');
let cajaGifs = document.getElementById('gif-box_resultado-busqueda');

function search(){
    async function newSearch(gif){
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${gif}&limit=12&offset=0&rating=g&lang=es`;

        const resp = await fetch(url);
        const info = await resp.json();
        return info;
    }
    let info = newSearch(searchInput.value);

    info.then(info => {
        document.getElementById('articulo_busqueda').removeAttribute('class');
        document.getElementById('articulo_busqueda').setAttribute('class', 'articulo_busqueda art-bqda_hidden')
        resultadoGifs.removeAttribute('class');
        resultadoGifs.setAttribute('class', 'visible articulo_resultado-busqueda');
        h1ResutadoBusqueda.textContent = searchInput.value;
        for (i = 0; i <= info.data.length; i++) {            
            let img = document.getElementById(`gif${[i]}`)
            img.setAttribute('src', info.data[i].images.original.url);   
        }
        
    }).catch(error => {
        console.log(error);
    })
}

searchBtn.addEventListener('click', () => {
    search();
})

searchInput.addEventListener('keyup', ()=> {
        if (event.which === 13 || event.keyCode == 13) {
            search();
        }
    })

/*let iconFav = document.getElementsById('icon-fav');
let iconDownload = document.getElementsById('icon-download');
let iconMax = document.getElementsById('icon-max');

iconFav.addEventListener('mouseover', () => {
    iconMax.src = 'assets/icons/icon-download.svg';
})*/