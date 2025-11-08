import ReviewBottom from "./ReviewBottom";
import ReviewPcTop from "./ReviewPcTop";
import ReviewMobileTop from "./ReviewMobileTop";

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
        <div className="md:block hidden">
          <ReviewPcTop />
        </div>
        <div className="md:hidden block">
          <ReviewMobileTop />
        </div>
        <ReviewBottom />
      </div>
    </div>
  );
}
