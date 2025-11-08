import { ReviewItem } from "@/types/review.types";

export default function ReviewCard({ review }: { review: ReviewItem }) {
  return (
    <div
      className={`${review.bgColor} ${review.color} rounded-3xl flex items-center py-10`}
    >
      <p className="text-[20px] font-bold w-1/3 text-center ">{review.title}</p>
      <div className="space-y-1 w-2/3">
        {review.content.split("\n").map((list, index) => (
          <p key={index}>{list}</p>
        ))}
      </div>
    </div>
  );
}
