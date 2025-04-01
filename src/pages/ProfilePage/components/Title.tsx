const Title = ({ text }: { text: string }) => {
  return (
    <div className="px-9 pt-3 mt-10 self-center rounded-full bg-profiletitle">
      <span className="text-4xl font-bold font-anek">{text}</span>
    </div>
  );
};

export default Title;
