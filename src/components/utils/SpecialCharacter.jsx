const SpecialCharacter = ({ tag }) => {
  return (
    <>
      {tag === 1 && <span className="font-bold text-2xl text-tag">&lt;</span>}
      {tag === 2 && <span className="font-bold text-2xl text-tag">/&gt;</span>}
    </>
  );
};

export default SpecialCharacter;
