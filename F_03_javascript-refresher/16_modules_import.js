import song from "./15_modules_export.js";
import { nowPlaying } from "./15_modules_export.js";

 
console.log(`Playlist: ${song.name}, Artist: ${song.artist}`);
console.log(nowPlaying());