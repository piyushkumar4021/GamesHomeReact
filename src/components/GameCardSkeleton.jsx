import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Skeleton height="300px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}
export default GameCardSkeleton;
