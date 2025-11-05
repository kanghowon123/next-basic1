import ReviewBottom from "./ReviewBottom";
import ReviewTop from "./ReviewTop";

import { IMAGES } from "@/constants/images";

export default function ReviewSection() {
  return (
    <div
      className="review-box"
      style={{
        backgroundImage: `url(${IMAGES.reviewBackgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-(--site-width) mx-auto pt-[100px]">
        <ReviewTop />
        <ReviewBottom />
      </div>
    </div>
  );
}
