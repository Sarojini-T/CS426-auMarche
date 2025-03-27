import HeartIcon from "../assets/heart.png";

const ListItem = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-row">
      <button>
        <img src={HeartIcon} />
      </button>
      <h3>{text}</h3>
    </div>
  );
};

export default ListItem;
