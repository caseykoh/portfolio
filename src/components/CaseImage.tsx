function CaseImages({
  img,
  alt_text,
}: {
  img: string;
  alt_text?: string;
}): JSX.Element {
  return (
    <div className="rounded">
      <img className="" src={`/assets/${img}`} alt={alt_text} />
    </div>
  );
}

export default CaseImages;
