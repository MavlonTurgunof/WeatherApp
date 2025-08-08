export const XIcon = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_7_443"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="44"
        height="44"
      >
        <path
          d="M24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44Z"
          fill="white"
          stroke="white"
          stroke-width="4"
          stroke-linejoin="round"
        />
        <path
          d="M29.657 18.343L18.343 29.657M18.343 18.343L29.657 29.657"
          stroke="black"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </mask>
      <g mask="url(#mask0_7_443)">
        <path d="M0 0H48V48H0V0Z" fill="#0ea5e9" />
      </g>
    </svg>
  );
};

export const Menu = ({ width, hight }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={hight}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
        fill="#fff"
      />
    </svg>
  );
};
