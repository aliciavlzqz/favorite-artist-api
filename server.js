const { response } = require('express')
const express = require('express')
const app = express ()
const PORT = 8000

const songs = {
    'pies descalzos':{
        
        'albumYear': 1995,
        'releaseDate': 'october 6, 1995',
        'songLyrics': "Perteneciste a una raza antigua, de pies descalzos y de sueños blancos, Fuiste polvo, polvo eres Y piensas que el hierro siempre al calor es blando Tú mordiste la manzana, y renunciaste al paraiso, y condenaste a una serpiente, siendo tú el que así lo quiso. Por milenios y milenios, permaneciste desnudo, y enfrentaste a dinosaurios bajo un techo y sin escudo. Y ahora estás aquí, queriendo ser feliz, cuando no te importó un pepino tu destino...Coro: Perteneciste a una raza antigua, de pies descalzos y de sueños blancos, Fuiste polvo, polvo eres Y piensas que el hierro siempre al calor es blando Construiste un mundo exacto, de acabados tan perfectos, cada cosa calculada en su espacio y su tiempo. Yo que soy un caos completo las entradas, las salidas, los hombres, y las medidas no me caben en los sesos. Y ahora estás aquí, queriendo ser feliz, cuando no te importó un pepino tu destino...Coro (2x), Saludar al vecino, acostarse a una hora Trabajar cada día para vivir en la vida, contestar solo aquello y sentir solo esto, y que Dios nos ampare de malos pensamientos. Cumplir con las tareas. Asistir al colegio ¿Qué diría la familia si eres un fracasado? Ponte siempre zapatos, no hagas ruido en la mesa, usa medias veladas, y corbatas en las fiestas. Las mujeres se casan siempre antes de treinta, si no vestirán santos, y aunque así no lo quieran y en la fiesta de quince es mejor no olvidar una fina champaña y bailar bien el vals, y bailar bien el vals"
        },
    'bzrp music sessions':{
        'releaseDate': 'january 11, 2023',
        'songLyrics': "(Uh, uh, uh, uh) (Pa' tipos como tú) (Uh, uh, uh, uh) Ah-oh (Uh, uh, uh, uh) (Pa' tipos como tú)  (Uh, uh, uh, uh) Perdón, ya cogí otro avión Aquí no vuelvo No quiero otra decepción Tanto que te las das de campeón Y cuando te necesitaba Diste tu peor versión Sorry, baby, hace rato Que yo debí botar ese gato Una loba como yo no está pa' novato' Una loba como yo no está pa' tipos como tú, uh, uh, uh, uh Pa' tipos como tú, uh, uh, uh, uh A ti te quedé grande Y, por eso, estás con una igualita que tú, uh, uh, uh, uh Ah-oh, oh-oh Esto es pa' que te mortifique' Mastique' y trague', trague' y mastique' Yo, contigo, ya no regreso Ni que me llores ni me supliquе' Entendí que no es culpa mía que te critiquen Yo solo hago música Perdón que te salpique Me dejaste de vecina a la suegra Con la prensa en la puerta y la deuda en Hacienda Te creíste que me heriste y me volviste más dura Las mujeres ya no lloran, las mujeres facturan Tiene nombre de persona buena Claramente, no es como suena Tiene nombre de persona buena Claramente Es igualita que tú, uh, uh, uh, uh Pa' tipos como tú, uh, uh, uh, uh A ti te quedé grande Y, por eso, estás con una igualita que tú, uh, uh, uh, uh Ah-oh, oh-oh Del amor al odio hay un paso Por acá no vuelva', hazme caso Cero rencor, bebé Yo te deseo que te vaya bien con mi supuesto reemplazo No sé ni qué es lo que te pasó 'Tás tan raro que ni te distingo Yo valgo por dos de 22 Cambiaste un Ferrari por un Twingo Cambiaste un Rolex por un Casio Vas acelera'o, dale despacio Ah, mucho gimnasio Pero trabaja el cerebro un poquito también Fotos por donde me ven Aquí me siento un rehén Por mí todo bien Yo te desocupo mañana Y si quieres traértela a ella, que venga también Tiene nombre de persona buena (uh, uh, uh, uh) Claramente, no es como suena (uh, uh, uh, uh) Tiene nombre de persona buena (uh, uh, uh, uh) Y una loba como yo no está pa' tipos como tú, uh, uh, uh, uh Pa' tipos como tú, uh-uh-uh-uh A ti te quedé grande Y, por eso, estás con una igualita que tú, uh, uh, uh, uh Ah-oh, oh-oh (Uh, uh, uh, uh) Pa' tipos, pa'-pa'-pa' tipos como— (Uh, uh, uh, uh) A ti te quedé grande Y, por eso, estás con una igualita que tú, uh, uh, uh, uh (it's a wrap!) Ah-oh, oh-oh ¡Ya está, chao!"
    
    },    
   
    'unknown':{
        
        'albumYear': 'unknown',
        'releaseDate': 'unknown',
        'songLyrics': 'unknown'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})


app.get('/api/:name', (request, response)=>{
    
    const songName = request.params.name.toLowerCase()
    if(songs[songName]){
        response.json(songs[songName])
    }else{
        response.json(songs['unknown'])
    }
})

app.get('/api/', (request, response)=>{
    response.json(songs)
})

app.listen(8000, ()=>{
    console.log('Perdon que te sal-pique')
})
