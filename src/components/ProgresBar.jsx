import { Progress } from "@chakra-ui/react";

function ProgresBar({ val }) {
  return <Progress value={val} height="32px" />;
}

export default ProgresBar;
