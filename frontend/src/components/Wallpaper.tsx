import wallpaper1 from "../assets/wallpaper1.png";
import wallpaper2 from "../assets/wallpaper2.png";
import wallpaper3 from "../assets/wallpaper3.png";

const Wallpaper = ({ onChangeWallpaper }) => {
  const handleCycle = () => {
    onChangeWallpaper((prev) => {
      if (prev === wallpaper1) return wallpaper2;
      if (prev === wallpaper2) return wallpaper3;
      if (prev === wallpaper3) return wallpaper1;
      return wallpaper1;
    })
  }

  return (
    <div className="absolute top-2 right-2">
      <button className="px-2 py-2 rounded-full bg-(--bg-dark) border border-(--color-primary) hover:bg-(--color-primary)" onClick={handleCycle}>
        <img src="./src/assets/images.svg" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Wallpaper;