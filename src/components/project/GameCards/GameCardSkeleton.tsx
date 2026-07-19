import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export const GameCardSkeleton = () => {
  return (
    <Card.Root width={"300px"}>
      <Skeleton height={"100px"}></Skeleton>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card.Root>
  );
};
