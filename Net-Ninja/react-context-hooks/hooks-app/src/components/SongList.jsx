import React , { useState } from 'react';
import uuid from 'uuid/dist/v35'

const SongList = () => {
    
    const [songs, setSongs] = useState([
        {title:'Arise' , id : 1},
        {title:'Inner Self' , id : 2},
        {title:'Territory' , id : 3},
    ])

    const addSong = ()=> {
        setSongs([...songs , { title: 'new song' , id: uuid() }])
    }

    return ( 
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return ( <li key={song.id}>{song.title}</li> )
                })}
            </ul>
            <button onClick={addSong}>Add a song</button>
        </div>
     );
}
 
export default SongList;