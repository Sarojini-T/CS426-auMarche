import { FaHeart } from "react-icons/fa";

const ListLocation = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-row items-center">
      <h3 className="font-anek text-[40px] pt-3.5">{text}&nbsp;</h3>
      <button className="cursor-pointer pr-3">
        <FaHeart size={30} className="text-white stroke-30 stroke-black hover:text-red-500" />
      </button>
    </div>
  );
};

export default ListLocation;