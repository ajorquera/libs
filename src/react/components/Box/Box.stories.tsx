import Box, {Props} from './Box';

const commonProps = { border: '1px solid black'};

const boxes: Props[] = [
  {
    margin: '10px',
    padding: '10px'
  },
  {
    margin: '20px',
    padding: '20px',
  }
];

const children = "This is a box";

export const Spacing = () => {
  return (
    <Box display="flex">
      {boxes.map(props => <Box {...commonProps} {...props} children={children} /> )}
    </Box>
  );
};

