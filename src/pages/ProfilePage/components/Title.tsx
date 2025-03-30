const Title = ({ text }: { text: string }) => {
  return (
    <div className="flex px-10 pt-3 flex-row mt-10 justify-center rounded-full bg-profiletitle font-bold font-anek">
      <span className="flex text-5xl">{text}</span>
    </div>
  );
};

export default Title;
