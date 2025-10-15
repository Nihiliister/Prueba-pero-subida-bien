import React from 'react';
import Text from '../atoms/Text';

function CardBody({ title, description}) {
  return (
    <>
      <Text variant="h5">{title}</Text>
      <Text variant="p">{description}</Text>
      <Text variant="span" className="text-muted">
      </Text>
    </>
  );
}

export default CardBody;