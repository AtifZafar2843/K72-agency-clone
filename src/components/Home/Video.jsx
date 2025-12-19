import video from "../../../public/videos/video.mp4"

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        src={video}
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default Video;
