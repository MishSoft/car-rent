import {
  footerWrapper,
  footerText,
  footerBottom,
  footerBottomLinks,
  footerContainer,
  loading,
  loadingWrapper,
  loadingItem,
  loadingItemLinks,
} from "./footer.style";
import { container } from "../layout";

export default function FooterLoading() {
  return (
    <footer className={container(footerContainer)}>
      <div className={footerWrapper}>
        <div className={footerText}>
          <span className={loading("bg-(--loading-color)")}></span>
          <span className={loading("bg-(--loading-secondary-color)")}></span>
        </div>

        {/* <Navigation /> */}
        <div className={loadingWrapper}>
          {
            Array.from({length: 3}).map((_, i) => (
              <div key={i} className={loadingItem}>
                <span className={loading('bg-(--loading-color)')}></span>
                <div className={loadingItemLinks}>
                  <span className={loading('bg-(--loading-secondary-color)')}></span>
                  <span className={loading('bg-(--loading-secondary-color)')}></span>
                  <span className={loading('bg-(--loading-secondary-color)')}></span>
                  <span className={loading('bg-(--loading-secondary-color)')}></span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className={footerBottom}>
        <span className={loading('bg-(--loading-color)')}> </span>

        <div className={footerBottomLinks}>
          <span className={loading('bg-(--loading-secondary-color)')}></span>
          <span className={loading('bg-(--loading-secondary-color)')}></span>
        </div>
      </div>
    </footer>
  );
}
