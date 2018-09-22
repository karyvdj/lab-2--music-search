# Lab 2 - Music Search

## Milestone 1 - Artists and Albums

Demo: http://distracted-kirch-3f32c6.netlify.com/

Para este milestone debes crear una pagina para ver la información de un artista, y otra página para ver la información de un álbum. Las urls deben ser `/artists/:artistId` y `/albums/:albumId`, respectivamente.

La página del artista debe mostrar una lista de álbums. Cada álbum es un link a su respectiva página. En la página del álbum, deben aparecer las canciones del álbum.

En la url `/` debes añadir la página `Home`, que ya debes tener.

## Milestone 2 - Search

Demo: https://awesome-hoover-ef692e.netlify.com/

Ahora debes reemplazar la página de `Home`, con un `Search` de artistas. Cada uno de los resultados te debe enlazar a la página de ese artista.

## Milestone 3 - Playlists

Demo: https://reverent-visvesvaraya-810152.netlify.com/

Comienza añadiendo un link en el `Header` donde te lleve a la página de tu `Playlist`. El id del playlist lo debes añadir en el archivo `constants.js`.

En esa página debes cargar todas las canciones que has guardado en el playlist.

Para guardar una canción debes añadir un botón al lado de cada track en la página de un álbum. La canción se debe guardar en el playlist con el id que está en el archivo de constants.

### API Docs

#### Search - GET `/search?query=KEYWORDS`

Ejemplo: https://react-api-lab.herokuapp.com/search?query=pink+floyd

#### Artist - GET `/artists/:artistId`

Ejemplo: https://react-api-lab.herokuapp.com/artists/83d91898-7763-47d7-b03b-b92132375c47

#### Album - GET `/albums/:albumId`

Ejemplo: https://react-api-lab.herokuapp.com/albums/a1a86e05-c23f-4a40-b50a-14dd7da379f2

#### Playlist - GET `/playlists/:playlistId`

Ejemplo: https://react-api-lab.herokuapp.com/playlists/@sparragus

#### Add Track to Playlist - POST `/playlists/:playlistId`

Body: `{ track: TRACK_DATA }`

TRACK_DATA es la información que recibes sobre cada track en un álbum.

Ejemplo:
`curl 'https://react-api-lab.herokuapp.com/playlists/@sparragus' -X POST -H 'Content-Type: application/json' -d '{"track":{"trackNumber":3,"name":"Wish You Were Here","durationInSeconds":325,"album":{"id":"a2f73eb8-eee6-3588-8909-9046058a468e","name":"Wish You Were Here"},"artist":{"id":"83d91898-7763-47d7-b03b-b92132375c47","name":"Pink Floyd"}}}'`
