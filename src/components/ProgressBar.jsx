import { Progress } from "@chakra-ui/react";
import PropTypes from "prop-types";

function ProgressBar({ val }) {
  return (
    <Progress
      value={val}
      colorScheme="green"
      height="40px"
      borderRadius="5px"
    />
  );
}

export default ProgressBar;

ProgressBar.propTypes = {
  val: PropTypes.number,
};
