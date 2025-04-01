import { FaHeart } from "react-icons/fa";

const ListItem = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-row">
      <button className="cursor-pointer pr-3">
        <FaHeart size={30} className="text-red-700 hover:text-red-300" />
      </button>
      <h3 className="font-anek text-[30px] pt-3.5">{text}</h3>
    </div>
  );
};

export default ListItem;
