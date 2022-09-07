import image from "../assets/images/javascript.jpg";

export default function MiniPlayer() {
  return (
    <div className="miniPlayer floatingBtn">
      <span className="material-icons-outlined open">
        {" "}
        play_circle_filled{" "}
      </span>
      <span className="material-icons-outlined close">
        {" "}
        close{" "}
      </span>
      <img src={image} alt="Alt Tag" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
}
