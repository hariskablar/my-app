import classes from './PaginationDots.module.css';
import { Flex } from '@mantine/core';

function PaginationDots({ dataLength, activeIndex, onDotClick }) {
  const dots = Array.from({ length: dataLength - 1 }).map((_, index) => {
    return (
      <span
        key={index}
        className={`
          ${classes['dot']} ${
          index === activeIndex ? `${classes['active-index']}` : ''
        }`}
        data-index={index}
        onClick={() => onDotClick(index)}
      ></span>
    );
  });

  return (
    <>
      <Flex className={classes['pagination-container']}>{dots}</Flex>
    </>
  );
}

export default PaginationDots;
