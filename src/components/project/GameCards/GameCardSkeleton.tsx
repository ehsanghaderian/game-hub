import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

export const GameCardSkeleton = () => {
  return (
    <Card.Root width={"300px"} overflow={"hidden"} borderRadius={"10px"}>
      <Skeleton height={"100px"}></Skeleton>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card.Root>
  );
};
