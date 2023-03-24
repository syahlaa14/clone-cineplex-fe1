import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";

const Example = ({ data }: { data: any[] }) => {
  return (
    <div className="grid grid-cols-0 md:grid-cols-4 gap-2">
      {data?.map((item, index) => (
        <Card key={index}>
          <Image src={item.src} height={450} alt=" Film" />
          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>{item.name}</Text>
            <Badge color="pink" variant="light">
              On Sale
            </Badge>
          </Group>
        </Card>
      ))}
    </div>
  );
};

export default Example;
