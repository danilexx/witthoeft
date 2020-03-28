import { ThemeContext } from "styled-components";
import { useContext, forwardRef } from "react";

export const FavoriteIcon = forwardRef(({ isOn = false }, ref) => {
  const { gray, pink } = useContext(ThemeContext);
  return (
    <svg
      width="48"
      height="42"
      viewBox="0 0 48 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47.4336 14.7748C47.4336 18.6724 45.9569 22.2418 42.786 26.0043C39.9487 29.3712 35.8721 32.7883 31.1505 36.7453C29.5372 38.0971 27.7089 39.6297 25.8121 41.2621C25.315 41.6898 24.6782 41.9271 24.0167 41.931H24.0003C23.3331 41.931 22.6898 41.6933 22.1885 41.2614C20.2952 39.6332 18.4698 38.1024 16.8593 36.7523L16.8511 36.7463C12.1302 32.789 8.0518 29.3712 5.21524 26.0043C2.04364 22.2418 0.566895 18.6724 0.566895 14.7748C0.566895 10.9877 1.88738 7.49318 4.28485 4.93549C6.71129 2.34722 10.0402 0.922607 13.6595 0.922607C16.3652 0.922607 18.842 1.76309 21.0235 3.42191C22.1245 4.25959 23.1217 5.28365 24.0003 6.47967L24.0167 6.45822C24.8917 5.27134 25.8836 4.25431 26.9777 3.42191C29.1585 1.76309 31.6364 0.922607 34.341 0.922607C37.961 0.922607 41.29 2.34722 43.7157 4.93549C46.1132 7.49318 47.4336 10.9866 47.4336 14.7748Z"
        fill={isOn ? pink : gray}
      />
    </svg>
  );
});