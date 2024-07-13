type CardDetailProps = {
    featureName?: string;
    details?: string;
  };
  
  function CardDetail({ featureName, details }: CardDetailProps) {
    return (
      <div className=" bg-subtle py-4 rounded-lg divide-x  flex divide-border">
        <div className="grid gap-2  px-4 self-start">
          <p className="font-light text-xs">Feature</p>
          <p className="font-bold text-sm">{featureName}</p>
        </div>
        <div className="grid gap-2  px-4 self-start">
          <p className="font-light text-xs">Details</p>
          <p className="font-bold text-sm">{details}</p>
        </div>
      </div>
    );
  }
  
  export { CardDetail };
  export type { CardDetailProps };