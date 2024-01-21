const TailwindIcon = ({
  size = 18, // or any default size of your choice
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0,0,256,256"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
  >
    <g
      fill="currentColor"
      fill-rule="nonzero"
      stroke="none"
      stroke-width="1"
      stroke-linecap="butt"
      stroke-linejoin="miter"
      stroke-miterlimit="10"
      stroke-dasharray=""
      stroke-dashoffset="0"
      font-family="none"
      font-weight="none"
      font-size="none"
      text-anchor="none"
    >
      <g transform="scale(5.33333,5.33333)">
        <path d="M24,9.604c-6.4,0 -10.4,3.199 -12,9.597c2.4,-3.199 5.2,-4.398 8.4,-3.599c1.826,0.456 3.131,1.781 4.576,3.247c2.352,2.387 5.075,5.151 11.024,5.151c6.4,0 10.4,-3.199 12,-9.598c-2.4,3.199 -5.2,4.399 -8.4,3.6c-1.825,-0.456 -3.13,-1.781 -4.575,-3.247c-2.353,-2.388 -5.077,-5.151 -11.025,-5.151zM12,24c-6.4,0 -10.4,3.199 -12,9.598c2.4,-3.199 5.2,-4.399 8.4,-3.599c1.825,0.457 3.13,1.781 4.575,3.246c2.353,2.388 5.077,5.152 11.025,5.152c6.4,0 10.4,-3.199 12,-9.598c-2.4,3.199 -5.2,4.399 -8.4,3.599c-1.826,-0.456 -3.131,-1.781 -4.576,-3.246c-2.352,-2.388 -5.075,-5.152 -11.024,-5.152z"></path>
      </g>
    </g>
  </svg>
);

export default TailwindIcon;
