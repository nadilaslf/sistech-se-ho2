type CardDetailProps = {
    featureName?: string;
    details?: string;
    lecturers? : string;
    topics? : {topicId : number; name:string; content:string}[];
  };
  
  function CardDetail({ featureName, details, topics, lecturers }: CardDetailProps) {
    return (
      <div className=" bg-subtle py-4 rounded-lg divide-x  flex divide-border">
        <div className="grid gap-2  px-4 self-start">
          <p className="font-light text-xs">Feature</p>
          <p className="font-bold text-sm">{featureName}</p>
        </div>
        <div className="grid gap-2  px-4 self-start">
          <p className="font-light text-xs">Lecturers</p>
          <p className="font-medium text-sm">{lecturers}</p>
        </div>
        <div className="grid gap-2  px-4 self-start">
          <p className="font-light text-xs">Details</p>
          <p className="font-bold text-sm">{details}</p>
        </div>
        {topics && (
        <div className="px-4 py-4">
          <h4 className="font-bold text-md mb-2">Topics:</h4>
          <ul className="list-disc list-inside">
            {topics.map(topic => (
              <li key={topic.topicId}>
                <p className="font-semibold">{topic.name}</p>
                <p className="text-sm">{topic.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    );
  }
  
  export { CardDetail };
  export type { CardDetailProps };