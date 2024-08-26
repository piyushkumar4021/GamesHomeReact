import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Skeleton height={{ base: "200px", xl: "300px" }} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}
export default GameCardSkeleton;
