// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CheckItem from "./components/CheckItem";
import { FaCheck } from "react-icons/fa";
import ProgresBar from "./components/ProgresBar";

function App() {
  const [items, setItems] = useState([
    { id: 1, text: "Be born", icon: <FaCheck />, isChecked: false },
    { id: 2, text: "Learn to read", icon: <FaCheck />, isChecked: false },
    { id: 3, text: "Read a book", icon: <FaCheck />, isChecked: false },
    { id: 4, text: "Play a sport", icon: <FaCheck />, isChecked: false },
    { id: 5, text: "Take first steps", icon: <FaCheck />, isChecked: false },
    { id: 6, text: "Make a friend", icon: <FaCheck />, isChecked: false },
    { id: 7, text: "Learn to swim", icon: <FaCheck />, isChecked: false },
    { id: 8, text: "Fly in a plane", icon: <FaCheck />, isChecked: false },
    { id: 9, text: "Say first words", icon: <FaCheck />, isChecked: false },
    {
      id: 10,
      text: "Learn to ride a bike",
      icon: <FaCheck />,
      isChecked: false,
    },
    {
      id: 11,
      text: "Finish elementary school",
      icon: <FaCheck />,
      isChecked: false,
    },
    { id: 12, text: "Ride a boat", icon: <FaCheck />, isChecked: false },
  ]);

  const [progress, setProgress] = useState(0);

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
  }, [items]);

  return (
    <Box w={{ base: "80%", lg: "75%" }} bg="#fff" p={5} m="auto">
      <Heading textAlign={"center"} as="h1" size="4xl" mb={10}>
        Life Checklist
      </Heading>
      <SimpleGrid columns={[1, null, 3]} gap={5}>
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
      <ProgresBar val={progress} />
    </Box>
  );
}

export default App;
