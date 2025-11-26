import ButtonList from "./buttons/ButtonList";
import VideoContainer from "./innerpages/videoCard/VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};
export default MainContainer;
