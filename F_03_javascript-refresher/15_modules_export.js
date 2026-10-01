const song = {
  name: "ONE LIFE",
  artist: "The Pillows",
};

function nowPlaying() {
  return `Now Playing ${song.name} by ${song.artist}
1:55 ———♡——— 3:50
◁◁          ▐  ▌          ▷▷`;
}   

export default song;
export { nowPlaying };