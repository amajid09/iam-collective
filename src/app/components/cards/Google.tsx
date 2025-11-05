import * as React from 'react';
import type { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Google: React.FC<SVGProps<SVGSVGElement> & SVGRProps> = ({
  title,
  titleId,
  ...props
}): React.ReactElement => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    aria-labelledby={titleId}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d='M16.0001 9.45783C18.0031 9.45783 19.3542 10.323 20.1245 11.046L23.1349 8.10671C21.286 6.38819 18.8801 5.33337 16.0001 5.33337C11.8282 5.33337 8.22526 7.72745 6.47118 11.2119L9.92008 13.8904C10.7853 11.3186 13.1793 9.45783 16.0001 9.45783Z'
      fill='black'
    />
    <path
      d='M26.2401 16.2371C26.2401 15.3601 26.169 14.7201 26.0149 14.0563H16.0001V18.0149H21.8786C21.7601 18.9986 21.1201 20.4801 19.6979 21.4756L23.0638 24.083C25.0786 22.2223 26.2401 19.4845 26.2401 16.2371Z'
      fill='black'
    />
    <path
      d='M9.9319 18.1097C9.70672 17.446 9.57635 16.7349 9.57635 16C9.57635 15.2652 9.70674 14.5541 9.92008 13.8904L6.47118 11.2119C5.74822 12.6578 5.33337 14.2815 5.33337 16C5.33337 17.7186 5.74819 19.3423 6.47115 20.7882L9.9319 18.1097Z'
      fill='black'
    />
    <path
      d='M16 26.6667C18.88 26.6667 21.2979 25.7186 23.0638 24.083L19.6979 21.4756C18.7971 22.1038 17.5882 22.5423 16 22.5423C13.1793 22.5423 10.7852 20.6815 9.9319 18.1097L6.48298 20.7882C8.23706 24.2726 11.8282 26.6667 16 26.6667Z'
      fill='black'
    />
  </svg>
);

export default Google;
