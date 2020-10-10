import React ,{ useState } from 'react';

const NewSongForm = ({ addSong }) => {
    const [title, setTitle] = useState('');
    function handleSubmit(e){
        e.preventDefault();
        addSong(title);
        setTitle('');
    } 
    return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor="">Song name: </label>
            <input type="text" required
                   value={title} 
                   onChange={event => setTitle(event.target.value)}/>
            <input type="submit" value="Add Song"/>
        </form>
      );
}
 
export default NewSongForm;