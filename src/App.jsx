// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CheckItem from "./components/CheckItem";
import { FaCheck } from "react-icons/fa";
import ProgresBar from "./components/ProgresBar";
// Fonts

function App() {
  const [items, setItems] = useState([
    { id: 1, text: "👶Be born", isChecked: false },
    { id: 2, text: "🚶Take first step", isChecked: false },
    { id: 2, text: "🗣️Take first word", isChecked: false },
    { id: 3, text: "Learn a book", isChecked: false },
    { id: 6, text: "🤗Make a friend", isChecked: false },
    { id: 10, text: "🚴‍♀️Learn to ride a bike", isChecked: false },
    { id: 3, text: "📕Read a book", isChecked: false },
    { id: 7, text: "🏊Learn to swim", isChecked: false },
    { id: 11, text: "🏫Finish elementary school", isChecked: false },
    { id: 4, text: "🏏Play a sport", isChecked: false },
    { id: 5, text: "Take first steps", isChecked: false },
    { id: 8, text: "Fly in a plane", isChecked: false },
    { id: 9, text: "Say first words", isChecked: false },
    { id: 12, text: "Ride a boat", isChecked: false },
  ]);

  const [progress, setProgress] = useState(0);
  const [checkedItems, setCheckedItems] = useState(0);

  function handleChange(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  }

  useEffect(() => {
    const totalItems = items.length;
    const checkedItems = items.filter((item) => item.isChecked).length;
    setProgress((checkedItems / totalItems) * 100);
    setCheckedItems(checkedItems);
  }, [items]);

  return (
    <Box p={{ base: 5, lg: 20 }} bg={"#f3f3f3"} m="auto">
      <Flex
        bg={"tomato"}
        position={"fixed"}
        left={0}
        fontSize={40}
        fontFamily={"'Margarine', sans-serif"}
        zIndex={9}
        color={"#fff"}
        top={0}
        w={"100%"}
        p={5}
      >
        <Text ml={20}>RMP</Text>
      </Flex>
      <Heading
        textAlign={"center"}
        p={5}
        bg={"#fff"}
        as="h1"
        size="4xl"
        mt={10}
        mb={2}
      >
        Life Checklist
      </Heading>
      <SimpleGrid bg={"#f3f3f3"} columns={[1, null, 3]} gap={2}>
        {items.map((item) => (
          <CheckItem
            key={item.id}
            id={item.id}
            isChecked={item.isChecked}
            text={item.text}
            onClick={() => handleChange(item.id)}
          />
        ))}
      </SimpleGrid>
      <Box p={5} mt={5} bg={"#fff"} textAlign={"center"}>
        <Text fontSize={"2xl"} mb={5}>
          You&apos;ve completed {`${checkedItems}/${items.length}`} items
        </Text>
        <ProgresBar val={progress} />
      </Box>
    </Box>
  );
}

export default App;
