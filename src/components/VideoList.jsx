import Video from "./Video";
import { nanoid } from "nanoid";

function VideoList({ list }) {
  return list.map(item => <Video url={item.url} date={item.date} key={nanoid()}/>);
}

export default VideoList
