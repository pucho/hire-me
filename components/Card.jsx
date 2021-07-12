import { Flex, Image, Text, Box, Button } from "@chakra-ui/react";

import { CheckIcon } from "@chakra-ui/icons";

export default function Card({ person, onClick, loading }) {
  const {
    name: { fullName },
    checkedIn,
    image: { small },
  } = person;
  return (
    <Flex
      bgColor="gray.200"
      mb={4}
      borderRadius={6}
      minHeight={24}
      p={4}
      w="500px"
      shadow="md"
      onClick={() => {
        onClick(person);
      }}
    >
      <Image src={small} borderRadius="full" boxSize="80px" />
      <Box ml={6} mr={6} flex="1">
        <Text fontWeight="semibold">{fullName}</Text>
        <Text fontWeight="light">PLACEHOLDER years old</Text>
      </Box>
      <Flex alignItems="center">
        <Flex alignItems="center" justifyContent="center" flexDir="column">
          <CheckIcon
            color={checkedIn ? "green.400" : "red.500"}
            w={12}
            h={12}
            p={3}
            bgColor={checkedIn ? "green.100" : "red.100"}
            borderRadius="full"
            mb={2}
          />
          <Button isLoading={loading} minW="120px">
            Check {checkedIn ? "out" : "in"}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
