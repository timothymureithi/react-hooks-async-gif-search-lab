import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";
function GifListContainer() {

   const [gif, setGifs] = useState([]);
   const [search, setSearch] = useState("dolphins");
   const apiKey = 'vMFUDBOytRCBkKaAxTY99WtwByiua12y';

   useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}&rating=g`)
    .then((response) => response.json())
    .then(({ data }) => {
        //capture 3 elements
        const gifs = data.slice(0,3).map((gif) => ({ url: gif.images.original.url }));
        setGifs(gifs);
    });
   }, [search])

   return (
    <div >
             <GifSearch onSubmit={setSearch} />
              <GifList gifs={gif} />
    </div>
   )
}
export default GifListContainer;