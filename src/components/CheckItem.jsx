import { Checkbox, Flex, Text } from "@chakra-ui/react";

function CheckItem({ id, text, isChecked, onClick }) {
  return (
    <Flex
      key={id}
      p={4}
      borderWidth="1px"
      borderRadius="md"
      bg={isChecked ? "#25d366" : "#fff"}
      alignItems="center"
      justifyContent="space-between"
    >
      <Checkbox
        colorScheme="white"
        onChange={onClick}
        isChecked={isChecked}
        size="lg"
      >
        <Text>{text}</Text>
      </Checkbox>
    </Flex>
  );
}

export default CheckItem;
