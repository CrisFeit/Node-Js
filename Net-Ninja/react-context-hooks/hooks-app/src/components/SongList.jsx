import React , { useState, useEffect } from 'react';
import uuid from 'uuid/dist/v35'
import NewSongForm from './newSongForm';

const SongList = () => {
    
    const [songs, setSongs] = useState([
        {title:'Arise' , id : 1},
        {title:'Inner Self' , id : 2},
        {title:'Territory' , id : 3},
    ])
    const [age,setAge] = useState(20)
    const addSong = (title)=> {
        setSongs([...songs , { title: title , id: uuid() }])
    }

    useEffect(() => {
        console.log('useeffect hooj ran',songs);
    },[songs])
    useEffect(() => {
        console.log('useeffect hooj ran',age);
    },[age])

    return ( 
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return ( <li key={song.id}>{song.title}</li> )
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
            {/* <button onClick={addSong}>Add a song</button> */}
            <button onClick={()=> setAge(age +1)}>Add  1 to  age: {age}</button>
        </div>
     );
}
 
export default SongList;