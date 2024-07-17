import Image from "next/image";
import { useState } from "react";
import { Button } from "../Button";
import { CardDetail, type CardDetailProps } from "./CardDetail";

type CardProps = CardDetailProps & {
  banner: string;
  title: string;
  description: string;
  lecturers : string[];
  alt: string;
  topics: { name: string; content: string }[];
  onClick?: () => void;
  onSecondaryClick?: () => void;
  withCardDetail?: boolean;
  buttonLabel?: string;
  buttonSecondaryLabel?: string;
  height : number;
};

function Card({
  banner,
  title,
  description,
  lecturers,
  alt,
  withCardDetail = false,
  onClick,
  onSecondaryClick,
  featureName,
  details,
  topics,
  buttonLabel,
  buttonSecondaryLabel,
}: CardProps) {
  const [showDetails, setShowDetails] = useState(false);
 
  return (
    <div className="bg-invert rounded-3xl shadow-neutral p-2 bg-neutral-900 flex flex-col h-full">
      <div className="relative ">
        <Image
          src={banner}
          alt={alt}
          objectFit="cover"
          rounded-t-2xl
          objectPosition="bottom"
          style={{
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
            minHeight: "150px",
            height: "150px"
          }}
          width={800}
          height={150}
        />
      </div>
      <div className="p-3 flex-grow flex flex-col">
        {withCardDetail && (
          <CardDetail featureName={featureName} details={details} lecturers={lecturers}
          topics={topics} 
          />
        )}
        <div className="grid gap-2 flex-grow">
          <h3 className="text-ink font-bold text-lg mt-4">{title}</h3>
            <h5 className="text-ink font-medium text-lg mt-4 flex">
            {lecturers.map((lecturer, index) => (
              <span key={index} className="mr-2">
                {lecturer}
              </span>
            ))}
          </h5>
          <p className="text-ink font-light text-md mt-2">{description}</p>
          </div>
        <div className="border-t border-white mt-4 pt-4 flex-grow">
          
          <ul className="list-disc list-inside mt-2">
            {topics.map((topic) => (
              <li key={topic.topicId} className="list-none mb-3">
                <p className="font-semibold">{topic.name}</p>
                <p className="text-sm">{topic.content}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto pt-4">
        <div className="flex gap-2">
          <Button
            className="mt-4"
            variant="primary"
            onClick={onClick}
            isFullWidth={true}
          >
            {buttonLabel || "View more"}
          </Button>
          {buttonSecondaryLabel && (
            <Button
              className="mt-4"
              variant="secondary"
              onClick={onSecondaryClick}
              isFullWidth={true}
            >
              {buttonSecondaryLabel}
            </Button>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}

export { Card };
export type { CardProps };