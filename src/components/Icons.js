import React from "react";

export const LikeIcon = ({className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    className={`${className}`}
    {...rest}
  >
    <path
      fill="none"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"
    />
  </svg>
);

export const ViewIcon = ({className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={`${className}`}
    {...rest}
  >
    <g fill="none" stroke="black" strokeWidth={2}>
      <circle cx={12} cy={12} r={3} />
      <path d="M20.188 10.934c.388.472.582.707.582 1.066 0 .359-.194.594-.582 1.066C18.768 14.79 15.636 18 12 18c-3.636 0-6.768-3.21-8.188-4.934-.388-.472-.582-.707-.582-1.066 0-.359.194-.594.582-1.066C5.232 9.21 8.364 6 12 6c3.636 0 6.768 3.21 8.188 4.934Z" />
    </g>
  </svg>
);

export const ShareIcon = ({className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={`${className}`}
    {...rest}
  >
    <path
      fill="black"
      d="M18 22q-1.25 0-2.125-.875T15 19q0-.175.025-.363t.075-.337l-7.05-4.1q-.425.375-.95.588T6 15q-1.25 0-2.125-.875T3 12q0-1.25.875-2.125T6 9q.575 0 1.1.213t.95.587l7.05-4.1q-.05-.15-.075-.337T15 5q0-1.25.875-2.125T18 2q1.25 0 2.125.875T21 5q0 1.25-.875 2.125T18 8q-.575 0-1.1-.212t-.95-.588L8.9 11.3q.05.15.075.338T9 12q0 .175-.025.363T8.9 12.7l7.05 4.1q.425-.375.95-.587T18 16q1.25 0 2.125.875T21 19q0 1.25-.875 2.125T18 22m0-16q.425 0 .713-.287T19 5q0-.425-.288-.712T18 4q-.425 0-.712.288T17 5q0 .425.288.713T18 6M6 13q.425 0 .713-.288T7 12q0-.425-.288-.712T6 11q-.425 0-.712.288T5 12q0 .425.288.713T6 13m12 7q.425 0 .713-.288T19 19q0-.425-.288-.712T18 18q-.425 0-.712.288T17 19q0 .425.288.713T18 20m0-1"
    />
  </svg>
);
export const CommentIcon = (className, ...rest) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={`h-auto ${className}`}
    {...rest}
  >
    <path
      fill="none"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 4H5a2 2 0 0 0-2 2v15l3.467-2.6a2 2 0 0 1 1.2-.4H19a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
    />
  </svg>
);
export const UserIcon = ({className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={`h-auto ${className}`}
    {...rest}
  >
    <path
      fill="white"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-7-3a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 11.5a8.46 8.46 0 0 0 4.807-1.489c.604-.415.862-1.205.51-1.848C16.59 15.83 15.09 15 12 15c-3.09 0-4.59.83-5.318 2.163-.351.643-.093 1.433.511 1.848A8.46 8.46 0 0 0 12 20.5"
      clipRule="evenodd"
    />
  </svg>
);
export const NotificationIcon = ({className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 36 36"
    className={`${className}`}
    {...rest}
  >
    <path
      fill="white"
      d="m32.85 28.13-.34-.3A14.37 14.37 0 0 1 30 24.9a12.63 12.63 0 0 1-1.35-4.81v-4.94A10.81 10.81 0 0 0 19.21 4.4V3.11a1.33 1.33 0 1 0-2.67 0v1.31a10.81 10.81 0 0 0-9.33 10.73v4.94a12.63 12.63 0 0 1-1.35 4.81 14.4 14.4 0 0 1-2.47 2.93l-.34.3v2.82h29.8Z"
      className="clr-i-solid clr-i-solid-path-1"
    />
    <path
      fill="white"
      d="M15.32 32a2.65 2.65 0 0 0 5.25 0Z"
      className="clr-i-solid clr-i-solid-path-2"
    />
    <path fill="none" d="M0 0h36v36H0z" />
  </svg>
);
export const ArrowIcon = ({className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={`${className}`}
    {...rest}
  >
    <path
      fill="white"
      fillRule="evenodd"
      d="m6.5 17.5 8.25-5.5L6.5 6.5l1-1.5L18 12 7.5 19z"
    />
  </svg>
);

export const DisscussionIcon = ({className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={`${className}`}
    {...rest}
  >
    <path
      fill="currentColor"
      d="M17 12V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14l4-4h10a1 1 0 0 0 1-1m4-6h-2v9H6v2a1 1 0 0 0 1 1h11l4 4V7a1 1 0 0 0-1-1"
    />
  </svg>
);
export const MarketStoryIcon = ({className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 2048 2048"
    className={`${className}`}
    {...rest}
  >
    <path
      fill="currentColor"
      d="M2048 384v640h-128V603l-768 768-384-384-675 674-90-90 765-766 384 384 677-677h-421V384z"
    />
  </svg>
);
export const EventIcon = ({className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={`${className}`}
    {...rest}
  >
    <path
      fill="currentColor"
      d="M21 17V8H7v9zm0-14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1V1h2v2h8V1h2v2zM3 21h14v2H3a2 2 0 0 1-2-2V9h2zm16-6h-4v-4h4z"
    />
  </svg>
);
export const SectorIcon = ({className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={`${className}`}
    {...rest}
  >
    <g fill="none">
      <path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
      <path
        fill="currentColor"
        d="M3 5c0-1.087.893-2.04 2.062-1.967a17 17 0 0 1 15.905 15.905C21.04 20.107 20.087 21 19 21H5a2 2 0 0 1-2-2z"
      />
    </g>
  </svg>
);
export const WatchListIcon = ({className, ...rest}) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 20 20"
  className={`${className}`}
  {...rest}
>
  <path
    fill="currentColor"
    d="M1 3h16v2H1Zm0 6h6v2H1Zm0 6h8v2H1Zm8-4.24h3.85L14.5 7l1.65 3.76H20l-3 3.17.9 4.05-3.4-2.14L11.1 18l.9-4.05Z"
  />
</svg>
);
export const NewsIcon = ({className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={`${className}`}
    {...rest}
  >
    <path
      fill="currentColor"
      d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M3 6h8v12H3zm18 12h-9V6h9.003zm-1-4.5c0-.275-.225-.5-.5-.5h-1c-.275 0-.5.225-.5.5v3c0 .275.225.5.5.5h1c.275 0 .5-.225.5-.5zm-3-6c0-.275-.225-.5-.5-.5h-3c-.275 0-.5.225-.5.5v5c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5zm1.5 2.5h1c.275 0 .5-.225.5-.5s-.225-.5-.5-.5h-1c-.275 0-.5.225-.5.5s.225.5.5.5m0 2h1c.275 0 .5-.225.5-.5s-.225-.5-.5-.5h-1c-.275 0-.5.225-.5.5s.225.5.5.5m-5 3h3c.275 0 .5-.225.5-.5s-.225-.5-.5-.5h-3c-.275 0-.5.225-.5.5s.225.5.5.5m3 1h-3c-.275 0-.5.225-.5.5s.225.5.5.5h3c.275 0 .5-.225.5-.5s-.225-.5-.5-.5m2-8h1c.275 0 .5-.225.5-.5s-.225-.5-.5-.5h-1c-.275 0-.5.225-.5.5s.225.5.5.5M10 7.5c0-.275-.225-.5-.5-.5h-5c-.275 0-.5.225-.5.5v3c0 .275.225.5.5.5h5c.275 0 .5-.225.5-.5zM9.501 14h-5c-.274 0-.5.225-.5.5s.226.5.5.5h5c.274 0 .499-.225.499-.5s-.225-.5-.499-.5m0-2h-5c-.274 0-.5.225-.5.5s.226.5.5.5h5c.274 0 .499-.225.499-.5s-.225-.5-.499-.5m0 4h-5c-.274 0-.5.225-.5.5s.226.5.5.5h5c.274 0 .499-.225.499-.5s-.225-.5-.499-.5"
    />
  </svg>
);
export const Market2Icon = ({className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    className={`${className}`}
    {...rest}
  >
    <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={4}>
      <path d="M6 20h8v14H6zm14-6h8v26h-8z" />
      <path strokeLinecap="round" d="M24 44v-4" />
      <path d="M34 12h8v9h-8z" />
      <path strokeLinecap="round" d="M10 20V10m28 24V21m0-9V4" />
    </g>
  </svg>
);
export const SentimentIcon = ({className, ...rest}) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 2048 2048"
  className={`${className}`}
    {...rest}
>
  <path
    fill="currentColor"
    d="M1344 640q97 0 187 25t168 71 143 110 110 142 71 169 25 187q0 97-25 187t-71 168-110 143-142 110-169 71-187 25q-97 0-187-25t-168-71-143-110-110-142-71-169-25-187q0-32 3-64-133 0-250-50t-204-136T51 891 0 640q0-88 23-170t64-153 100-129T317 88t153-65T640 0q89 0 171 23t153 65 129 100 100 130 64 154 23 171q31-3 64-3m-704 512q7 0 14-1t14-2q18-63 47-120t69-110q-35-11-71-17t-73-6q-61 0-119 15t-113 43l-58-114q68-34 141-53t149-19q62 0 121 13t117 36q59-52 127-90t144-59l2-14q1-7 1-14 0-106-40-199t-110-162-163-110-199-41q-106 0-199 40T279 278 169 441t-41 199q0 106 40 199t110 162 163 110 199 41m704 768q119 0 224-45t183-124 123-183 46-224q0-119-45-224t-124-183-183-123-224-46q-119 0-224 45T937 937t-123 183-46 224q0 119 45 224t124 183 183 123 224 46m256-608q-40 0-68-28t-28-68q0-40 28-68t68-28q40 0 68 28t28 68q0 40-28 68t-68 28m-512 0q-40 0-68-28t-28-68q0-40 28-68t68-28q40 0 68 28t28 68q0 40-28 68t-68 28m256 352q43 0 84-11t77-33 66-52 51-68l111 63q-30 53-72 95t-92 72-107 46-118 16q-61 0-118-16t-107-45-92-72-72-96l111-63q21 38 51 68t66 51 76 33 85 12M448 528q-33 0-56-23t-24-57q0-33 23-56t57-24q33 0 56 23t24 57q0 33-23 56t-57 24m384 0q-33 0-56-23t-24-57q0-33 23-56t57-24q33 0 56 23t24 57q0 33-23 56t-57 24"
  />
</svg>
);
