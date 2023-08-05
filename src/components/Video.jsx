import { DateTimePretty } from "./DateTimePretty";

function Video(props) {
  return (
      <div className="video">
          <iframe src={props.url}  allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <DateTimePretty date={props.date} />
      </div>
  )
}

export default Video
