import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card>
      <Skeleton width="300px" height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}
export default GameCardSkeleton;
