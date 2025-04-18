import { useMode } from '@/components/ui/gluestack-ui-provider/providerContext';
import React from 'react';

function Next() {
  const { colorMode } = useMode();
  return colorMode === 'light' ? (
    <svg
      width={92}
      height={72}
      viewBox="0 0 92 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_ii_10404_112242)">
        <rect width={92} height={72} rx={8} fill="white" />
        <g clipPath="url(#clip0_10404_112242)">
          <path
            d="M56.5391 29.5892H67.6866V31.6467H63.2645V42.4712H61.0533V31.6467H56.5391V29.5892Z"
            fill="black"
          />
          <path
            d="M38.21 29.5892V31.6467H29.2745V34.9567H36.4604V37.0142H29.2745V40.4136H38.21V42.4712H27.0634V31.6467H27.0625V29.5892H38.21Z"
            fill="black"
          />
          <path
            d="M43.7842 29.5946H40.8906L51.2549 42.4766H54.157L48.9742 36.04L54.1487 29.6044L51.2549 29.6089L47.5254 34.2408L43.7842 29.5946Z"
            fill="black"
          />
          <path
            d="M46.754 38.7963L45.3049 36.9946L40.8828 42.4864H43.7847L46.754 38.7963Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.1421 42.4712L16.7638 29.5839H14V42.4658H16.2111V32.3374L24.3644 42.4712H27.1421Z"
            fill="black"
          />
          <path
            d="M68.1797 42.3925C68.0177 42.3925 67.88 42.3364 67.7647 42.2242C67.6493 42.112 67.5923 41.9762 67.5938 41.8153C67.5923 41.6588 67.6493 41.5244 67.7647 41.4123C67.88 41.3001 68.0177 41.244 68.1797 41.244C68.3355 41.244 68.4717 41.3001 68.5871 41.4123C68.704 41.5244 68.7623 41.6588 68.764 41.8153C68.7623 41.9216 68.7354 42.019 68.6814 42.1061C68.626 42.1947 68.5557 42.2641 68.4672 42.3143C68.3803 42.3659 68.2844 42.3925 68.1797 42.3925Z"
            fill="black"
          />
          <path
            d="M71.9597 36.9658H72.9395V40.7406C72.9381 41.0875 72.863 41.3843 72.7163 41.6338C72.568 41.8833 72.3627 42.0737 72.0991 42.208C71.8369 42.3409 71.5298 42.4088 71.1807 42.4088C70.8615 42.4088 70.5755 42.3512 70.3208 42.239C70.0661 42.1268 69.8638 41.9585 69.7155 41.7371C69.5656 41.5157 69.4922 41.2396 69.4922 40.9089H70.4736C70.4751 41.0536 70.5081 41.1791 70.5709 41.2839C70.6338 41.3887 70.7207 41.4684 70.8316 41.5245C70.9439 41.5806 71.0728 41.6087 71.2181 41.6087C71.3754 41.6087 71.5103 41.5762 71.6196 41.5097C71.7289 41.4448 71.8129 41.3474 71.8714 41.2174C71.9282 41.089 71.9583 40.9296 71.9597 40.7406V36.9658Z"
            fill="black"
          />
          <path
            d="M76.9691 38.442C76.9452 38.2132 76.8403 38.0345 76.6575 37.9076C76.4732 37.7791 76.235 37.7157 75.9428 37.7157C75.7377 37.7157 75.5609 37.7467 75.4141 37.8072C75.2673 37.8692 75.1534 37.9519 75.0754 38.0567C74.9976 38.1615 74.9586 38.2811 74.9556 38.4154C74.9556 38.5276 74.9825 38.625 75.035 38.7063C75.0874 38.7889 75.1578 38.8583 75.2492 38.9144C75.3391 38.972 75.4394 39.0192 75.5489 39.0576C75.6597 39.096 75.7706 39.1285 75.8814 39.155L76.3923 39.2805C76.5976 39.3278 76.7969 39.3913 76.9871 39.4724C77.1773 39.5522 77.3497 39.654 77.5009 39.7765C77.6523 39.8991 77.7722 40.0467 77.8605 40.2194C77.9489 40.3922 77.9939 40.5944 77.9939 40.8277C77.9939 41.1421 77.913 41.4182 77.7496 41.6573C77.5863 41.895 77.3511 42.081 77.0425 42.2154C76.7353 42.3482 76.3639 42.4161 75.9264 42.4161C75.5039 42.4161 75.1354 42.3512 74.8253 42.2213C74.5137 42.0928 74.2709 41.9039 74.0956 41.6558C73.9204 41.4078 73.826 41.1052 73.8125 40.7494H74.7834C74.7968 40.9354 74.8568 41.0904 74.9586 41.2159C75.0619 41.3399 75.1968 41.4315 75.3616 41.4935C75.528 41.554 75.7136 41.585 75.919 41.585C76.1332 41.585 76.3219 41.5525 76.4852 41.489C76.647 41.4255 76.7743 41.337 76.8658 41.2218C76.9587 41.1081 77.0051 40.9738 77.0066 40.8203C77.0051 40.68 76.9631 40.5634 76.8822 40.4719C76.7998 40.3803 76.686 40.3036 76.5406 40.2416C76.3939 40.1796 76.223 40.1235 76.0283 40.0748L75.4081 39.9183C74.9601 39.8046 74.605 39.6319 74.3458 39.4001C74.0852 39.1683 73.9563 38.8613 73.9563 38.476C73.9563 38.16 74.0432 37.8825 74.2186 37.6448C74.3922 37.4071 74.6305 37.2226 74.9317 37.0912C75.2343 36.9583 75.5759 36.8934 75.9563 36.8934C76.3429 36.8934 76.6814 36.9583 76.9736 37.0912C77.2657 37.2226 77.495 37.4057 77.6612 37.6389C77.8275 37.8722 77.9145 38.1394 77.919 38.442H76.9691Z"
            fill="black"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_ii_10404_112242"
          x={0}
          y={0}
          width={92}
          height={72}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={1}
            operator="erode"
            in="SourceAlpha"
            result="effect1_innerShadow_10404_112242"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_10404_112242"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-1} dy={-1} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_10404_112242"
            result="effect2_innerShadow_10404_112242"
          />
        </filter>
        <clipPath id="clip0_10404_112242">
          <rect
            width="63.9991"
            height="12.8323"
            fill="white"
            transform="translate(14 29.5839)"
          />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg
      width={92}
      height={72}
      viewBox="0 0 92 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_ii_10256_68770)">
        <rect width={92} height={72} rx={8} fill="#232123" fillOpacity="0.16" />
        <rect
          width={92}
          height={72}
          rx={8}
          fill="url(#paint0_radial_10256_68770)"
        />
        <g clipPath="url(#clip0_10256_68770)">
          <path
            d="M56.5391 29.5892H67.6866V31.6467H63.2645V42.4712H61.0533V31.6467H56.5391V29.5892Z"
            fill="white"
          />
          <path
            d="M38.21 29.5892V31.6467H29.2745V34.9567H36.4604V37.0142H29.2745V40.4136H38.21V42.4712H27.0634V31.6467H27.0625V29.5892H38.21Z"
            fill="white"
          />
          <path
            d="M43.7842 29.5946H40.8906L51.2549 42.4766H54.157L48.9742 36.04L54.1487 29.6044L51.2549 29.6089L47.5254 34.2408L43.7842 29.5946Z"
            fill="white"
          />
          <path
            d="M46.754 38.7963L45.3049 36.9946L40.8828 42.4864H43.7847L46.754 38.7963Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.1421 42.4712L16.7638 29.5839H14V42.4658H16.2111V32.3374L24.3644 42.4712H27.1421Z"
            fill="white"
          />
          <path
            d="M68.1797 42.3925C68.0177 42.3925 67.88 42.3364 67.7647 42.2242C67.6493 42.112 67.5923 41.9762 67.5938 41.8153C67.5923 41.6588 67.6493 41.5244 67.7647 41.4123C67.88 41.3001 68.0177 41.244 68.1797 41.244C68.3355 41.244 68.4717 41.3001 68.5871 41.4123C68.704 41.5244 68.7623 41.6588 68.764 41.8153C68.7623 41.9216 68.7354 42.019 68.6814 42.1061C68.626 42.1947 68.5557 42.2641 68.4672 42.3143C68.3803 42.3659 68.2844 42.3925 68.1797 42.3925Z"
            fill="white"
          />
          <path
            d="M71.9597 36.9658H72.9395V40.7406C72.9381 41.0875 72.863 41.3843 72.7163 41.6338C72.568 41.8833 72.3627 42.0737 72.0991 42.208C71.8369 42.3409 71.5298 42.4088 71.1807 42.4088C70.8615 42.4088 70.5755 42.3512 70.3208 42.239C70.0661 42.1268 69.8638 41.9585 69.7155 41.7371C69.5656 41.5157 69.4922 41.2396 69.4922 40.9089H70.4736C70.4751 41.0536 70.5081 41.1791 70.5709 41.2839C70.6338 41.3887 70.7207 41.4684 70.8316 41.5245C70.9439 41.5806 71.0728 41.6087 71.2181 41.6087C71.3754 41.6087 71.5103 41.5762 71.6196 41.5097C71.7289 41.4448 71.8129 41.3474 71.8714 41.2174C71.9282 41.089 71.9583 40.9296 71.9597 40.7406V36.9658Z"
            fill="white"
          />
          <path
            d="M76.9691 38.442C76.9452 38.2132 76.8403 38.0345 76.6575 37.9076C76.4732 37.7791 76.235 37.7157 75.9428 37.7157C75.7377 37.7157 75.5609 37.7467 75.4141 37.8072C75.2673 37.8692 75.1534 37.9519 75.0754 38.0567C74.9976 38.1615 74.9586 38.2811 74.9556 38.4154C74.9556 38.5276 74.9825 38.625 75.035 38.7063C75.0874 38.7889 75.1578 38.8583 75.2492 38.9144C75.3391 38.972 75.4394 39.0192 75.5489 39.0576C75.6597 39.096 75.7706 39.1285 75.8814 39.155L76.3923 39.2805C76.5976 39.3278 76.7969 39.3913 76.9871 39.4724C77.1773 39.5522 77.3497 39.654 77.5009 39.7765C77.6523 39.8991 77.7722 40.0467 77.8605 40.2194C77.9489 40.3922 77.9939 40.5944 77.9939 40.8277C77.9939 41.1421 77.913 41.4182 77.7496 41.6573C77.5863 41.895 77.3511 42.081 77.0425 42.2154C76.7353 42.3482 76.3639 42.4161 75.9264 42.4161C75.5039 42.4161 75.1354 42.3512 74.8253 42.2213C74.5137 42.0928 74.2709 41.9039 74.0956 41.6558C73.9204 41.4078 73.826 41.1052 73.8125 40.7494H74.7834C74.7968 40.9354 74.8568 41.0904 74.9586 41.2159C75.0619 41.3399 75.1968 41.4315 75.3616 41.4935C75.528 41.554 75.7136 41.585 75.919 41.585C76.1332 41.585 76.3219 41.5525 76.4852 41.489C76.647 41.4255 76.7743 41.337 76.8658 41.2218C76.9587 41.1081 77.0051 40.9738 77.0066 40.8203C77.0051 40.68 76.9631 40.5634 76.8822 40.4719C76.7998 40.3803 76.686 40.3036 76.5406 40.2416C76.3939 40.1796 76.223 40.1235 76.0283 40.0748L75.4081 39.9183C74.9601 39.8046 74.605 39.6319 74.3458 39.4001C74.0852 39.1683 73.9563 38.8613 73.9563 38.476C73.9563 38.16 74.0432 37.8825 74.2186 37.6448C74.3922 37.4071 74.6305 37.2226 74.9317 37.0912C75.2343 36.9583 75.5759 36.8934 75.9563 36.8934C76.3429 36.8934 76.6814 36.9583 76.9736 37.0912C77.2657 37.2226 77.495 37.4057 77.6612 37.6389C77.8275 37.8722 77.9145 38.1394 77.919 38.442H76.9691Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_ii_10256_68770"
          x={0}
          y={0}
          width={92}
          height={72}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={1}
            operator="erode"
            in="SourceAlpha"
            result="effect1_innerShadow_10256_68770"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_10256_68770"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-1} dy={-1} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_10256_68770"
            result="effect2_innerShadow_10256_68770"
          />
        </filter>
        {/* <radialGradient
          id="paint0_radial_10256_68770"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(46 36) rotate(38.047) scale(58.4123 56.7004)"
        >
          <stop stopColor="white" stopOpacity="0.08" />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </radialGradient> */}
        <clipPath id="clip0_10256_68770">
          <rect
            width="63.9991"
            height="12.8323"
            fill="white"
            transform="translate(14 29.5839)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Next;
