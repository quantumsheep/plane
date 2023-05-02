import React from "react";

import type { Props } from "./types";

export const TriangleExclamationIcon: React.FC<Props> = ({ width = "24", height = "24", className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.7254 13.75C0.6129 13.75 0.515075 13.7242 0.431925 13.6727C0.348775 13.6211 0.2841 13.5531 0.2379 13.4688C0.185813 13.3863 0.157169 13.2969 0.151969 13.2006C0.146757 13.1044 0.1754 13.0063 0.2379 12.9063L7.5129 0.34375C7.5754 0.24375 7.64728 0.171875 7.72853 0.128125C7.80978 0.084375 7.9004 0.0625 8.0004 0.0625C8.1004 0.0625 8.19103 0.084375 8.27228 0.128125C8.35353 0.171875 8.4254 0.24375 8.4879 0.34375L15.7629 12.9063C15.8254 13.0063 15.854 13.1044 15.8488 13.2006C15.8436 13.2969 15.815 13.3863 15.7629 13.4688C15.7167 13.5531 15.652 13.6211 15.5689 13.6727C15.4857 13.7242 15.3879 13.75 15.2754 13.75H0.7254ZM1.7004 12.625H14.3004L8.0004 1.75L1.7004 12.625ZM8.07868 11.5563C8.23899 11.5563 8.37228 11.502 8.47853 11.3936C8.58478 11.2851 8.6379 11.1508 8.6379 10.9905C8.6379 10.8302 8.58368 10.6969 8.47524 10.5906C8.36679 10.4844 8.23242 10.4313 8.07212 10.4313C7.91181 10.4313 7.77853 10.4855 7.67228 10.5939C7.56603 10.7024 7.5129 10.8367 7.5129 10.997C7.5129 11.1573 7.56712 11.2906 7.67556 11.3969C7.78401 11.5031 7.91838 11.5563 8.07868 11.5563ZM8.07868 9.475C8.23899 9.475 8.37228 9.42109 8.47853 9.31328C8.58478 9.20547 8.6379 9.07188 8.6379 8.9125V5.8375C8.6379 5.67813 8.58368 5.54453 8.47524 5.43672C8.36679 5.32891 8.23242 5.275 8.07212 5.275C7.91181 5.275 7.77853 5.32891 7.67228 5.43672C7.56603 5.54453 7.5129 5.67813 7.5129 5.8375V8.9125C7.5129 9.07188 7.56712 9.20547 7.67556 9.31328C7.78401 9.42109 7.91838 9.475 8.07868 9.475Z"
      fill="#ACB5BD"
    />
  </svg>
);
