import { Checkbox, Flex, Text } from "@chakra-ui/react";

function CheckItem({ id, text, isChecked, onClick }) {
  return (
    <Flex
      key={id}
      p={10}
      borderWidth="1px"
      borderRadius="md"
      bg={isChecked ? "#25d366" : "#fff"}
      alignItems="center"
      cursor={"pointer"}
      justifyContent="space-between"
      onClick={onClick}
    >
      <Checkbox
        colorScheme="white"
        onChange={onClick}
        isChecked={isChecked}
        size="lg"
      >
        <Text fontSize={25}>{text}</Text>
      </Checkbox>
    </Flex>
  );
}

export default CheckItem;
