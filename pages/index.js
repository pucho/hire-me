import { useState, useEffect } from "react";
import { Container, Flex, Button, Text } from "@chakra-ui/react";
import Card from "../components/Card";
import { useRouter } from "next/dist/client/router";

export default function Home(props) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState("");
  const { data, error } = props;
  const pageSize = 10;
  const lastPage = Math.ceil(data?.children.length / pageSize);

  const refreshData = (refreshingId) => {
    router.replace(router.asPath);
    setIsRefreshing(refreshingId);
  };

  useEffect(() => {
    setIsRefreshing("");
  }, [data]);

  const handleCheckIn = async (child) => {
    const { childId, checkedIn } = child;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v2/children/${childId}/${
        checkedIn ? "checkout" : "checkins"
      }?accessToken=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}&pickupTime=16%3A00`,
      {
        method: "POST",
      }
    );

    //on successful request
    if (res.status < 300) {
      refreshData(child.childId);
    }
  };

  const handlePageChange = (direction) => {
    if (data?.children.length > 0) {
      setCurrentPage(currentPage + direction);
    }
  };

  return (
    <Container maxW="container.xl" bgColor="gray.100" pt={4}>
      <Flex flexDir="column" alignItems="center">
        <Flex justifyContent="space-between" mb={4} alignItems="center">
          <Button
            disabled={currentPage === 0}
            bgColor="gray.300"
            onClick={() => {
              handlePageChange(-1);
            }}
          >
            Prev Page
          </Button>
          <Text ml={4} mr={4}>
            {currentPage + 1}
          </Text>
          <Button
            bgColor="gray.300"
            disabled={currentPage + 1 === lastPage}
            onClick={() => {
              handlePageChange(1);
            }}
          >
            Next Page
          </Button>
        </Flex>
        {error && <h1>{error}</h1>}
        {data?.children
          .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
          .map((child) => {
            return (
              <Card
                person={child}
                key={child.childId}
                onClick={handleCheckIn}
                loading={isRefreshing === child.childId}
              />
            );
          })}
      </Flex>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/daycare/tablet/group?accessToken=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}&groupId=11fc220c-ebba-4e55-9346-cd1eed714620&institutionId=fb6c8114-387e-4051-8cf7-4e388a77b673`
  );
  const data = await res.json();

  if (!data) {
    return {
      error: "There's been an error, please reload",
    };
  }
  return {
    props: { data }, // will be passed to the page component as props
  };
}
