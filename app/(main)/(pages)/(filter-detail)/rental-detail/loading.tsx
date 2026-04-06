import { FaHeart, FaImage } from "react-icons/fa6";
import * as S from "./loading.style";

export default function RentalDetailLoading() {
  return (
    <div className={S.rentalLoadingOuterContainer}>
      <div className={S.rentalLoadingInnerLeftContainer}>
        <div className={S.rentalLoadingImagesWrapper}>
          <div className={S.rentalLoadingMainImage}>
            <FaImage size={50} className={S.rentalLoadingImageIcon} />
          </div>
          <div className={S.rentalLoadingThumbnailsContainer}>
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className={S.rentalLoadingThumbnailWrapper}
              >
                <div className={S.rentalLoadingThumbnailInner}>
                  <FaImage size={25} className={S.rentalLoadingThumbnailIcon} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={S.rentalLoadingRightContainer}>
        <div className={S.rentalLoadingHeaderContainer}>
          <div className={S.rentalLoadingTitleLinesWrapper}>
            <span className={S.rentalLoadingTitleLine1}></span>
            <span className={S.rentalLoadingTitleLine2}></span>
          </div>
            <FaHeart size={20}  className={S.rentalLoadingHeartIcon} />
        </div>
        <FaImage size={50} className={S.rentalLoadingTextIcon} />

        <div className={S.rentalLoadingDescContainer}>
          <span className={S.rentalLoadingDescLine}></span>
          <span className={S.rentalLoadingDescLine}></span>
          <span className={S.rentalLoadingDescLine}></span>
        </div>

        <div className={S.rentalLoadingSpecsMainContainer}>
          <div className={S.rentalLoadingSpecsGrid}>
            <span className={S.rentalLoadingSpecItemBgSecondary}></span>
            <span className={S.rentalLoadingSpecItemBgPrimary}></span>
            <span className={S.rentalLoadingSpecItemBgSecondary}></span>
            <span className={S.rentalLoadingSpecItemBgPrimary}></span>
          </div>

          <div className={S.rentalLoadingSpecsGrid}>
            <span className={S.rentalLoadingSpecItemBgSecondary}></span>
            <span className={S.rentalLoadingSpecItemBgPrimary}></span>
            <span className={S.rentalLoadingSpecItemBgSecondary}></span>
            <span className={S.rentalLoadingSpecItemBgPrimary}></span>
          </div>
        </div>

        <div className={S.rentalLoadingFooterContainer}>
            <div className={S.rentalLoadingPriceLinesWrapper}>
              <span className={S.rentalLoadingPriceLine1}></span>
            <span className={S.rentalLoadingPriceLine2}></span>
            </div>
            <div className={S.rentalLoadingButtonSkeleton}>

            </div>
        </div>
      </div>
    </div>
  );
}
