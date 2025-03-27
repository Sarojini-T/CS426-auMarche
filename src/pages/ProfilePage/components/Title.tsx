const Title = ({ text }: { text: string }) => {
  return (
    <div className="rounded-full bg-profiletitle font-bold font-anek">
      {text}
    </div>
  );
};

export default Title;
