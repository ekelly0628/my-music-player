import { useState, useEffect } from "react";
/* import "./styles.css"; */
import Player from "./components/Player.jsx";

export default function App() {
  const [ songs ] = useState([
    {
      title: "Forget me too ft. Halsey",
      artist: " Machine Gun Kelly",
      img_src:
        "https://m.media-amazon.com/images/I/712ZZxYWwML._SX425_.jpg./public/images/song_1.jpg",
      src: "https://magenta-impossible-gibbon-819.mypinata.cloud/ipfs/bafybeidsdxblq2g4ozvrylm3ntychnfyyfozu6ww52lzupyh5tfftjpt54"
    },
    {
      title: "Troubled Waters",
      artist: "Alex Warren",
      img_src:
        "https://cdn-images.dzcdn.net/images/cover/7e99add2a699cc5a81b092faa0c14671/500x500-000000-80-0-0.jpg",
      src: "https://magenta-impossible-gibbon-819.mypinata.cloud/ipfs/bafybeiep4uhxjwva5cjsilojqmmm5lpiaobbzdyrb2mynvzblqnfwfhbjq"
    },
    {
      title: "On & On (ft. Daniel Levi)",
      artist: "Cartoon & Jeja",
      img_src:
        "https://i.scdn.co/image/ab67616d0000b27394a9f1bc3c0f766b3d761565",
      src: "https://magenta-impossible-gibbon-819.mypinata.cloud/ipfs/bafybeihkvjtv7nxbayshjrkb7fcazjlos7d5fo52q5uecaovsz74c74hwe"
    },
    {
      title: "Waves of Blue",
      artist: "Majid Jordan",
      img_src:
        "https://magenta-impossible-gibbon-819.mypinata.cloud/ipfs/bafkreidueoeepnko7v4lvrrsfaqxgriftoknnkaerexolotffwrekdxkja",
      src: "https://magenta-impossible-gibbon-819.mypinata.cloud/ipfs/bafybeicszvnuxncoe4dvli7ferrljti2vya3uj5f2tjfvvgmphaby7w2yq"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
      return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]); // Dependency Array

  return (
    <div className="App">
      <Player
      currentSongIndex={currentSongIndex}
      setCurrentSongIndex={setCurrentSongIndex}
      nextSongIndex={nextSongIndex}
      songs={songs} />
      
    </div>
  );
}
