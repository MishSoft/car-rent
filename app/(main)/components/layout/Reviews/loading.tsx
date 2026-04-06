import { CiUser } from "react-icons/ci";
import * as S from "./review.style";


export default function ReviewLoading() {
  return (
    <article className={S.reviewLoadingArticle}>
      <div className={S.reviewLoadingHeader}>
        <div className={S.reviewLoadingHeaderInner}>
          <span className={S.reviewLoadingHeaderLine1}></span>
          <span className={S.reviewLoadingHeaderLine2}></span>
        </div>
      </div>
      <div className={S.reviewLoadingItemContainer}>
        <div className={S.reviewLoadingUserIconWrapper}>
          <CiUser className={S.reviewLoadingUserIcon}/>
        </div>
        <div className={S.reviewLoadingContentContainer}>
          <div className={S.reviewLoadingLinesGrid}>
            <span className={S.reviewLoadingLineStartColor}></span>
            <span className={S.reviewLoadingLineEndColor}></span>


            <span className={S.reviewLoadingLineStartSecondaryColor}></span>
            <span className={S.reviewLoadingLineEndSecondaryColor}></span>
          </div>
          <p className={S.reviewLoadingParagraph}></p>
        </div>

      </div>

      <div className={S.reviewLoadingItemContainer}>
        <div className={S.reviewLoadingUserIconWrapper}>
          <CiUser className={S.reviewLoadingUserIcon} />
        </div>
        <div className={S.reviewLoadingContentContainer}>
          <div className={S.reviewLoadingLinesGrid}>
            <span className={S.reviewLoadingLineStartColor}></span>
            <span className={S.reviewLoadingLineEndColor}></span>


            <span className={S.reviewLoadingLineStartSecondaryColor}></span>
            <span className={S.reviewLoadingLineEndSecondaryColor}></span>
          </div>
          <p className={S.reviewLoadingParagraph}></p>
        </div>

      </div>
    </article>
  );
}
