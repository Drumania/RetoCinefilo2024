import loopVideo from "../assets/vid/loop.webm";

const BkVideo = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src={loopVideo} type="video/webm" />
        Tu navegador no admite el elemento de video.
      </video>
    </div>
  );
};

export default BkVideo;
