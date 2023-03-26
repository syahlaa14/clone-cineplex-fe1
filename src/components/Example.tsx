import { Badge, Card, CardSection, Group, Image, Text } from "@mantine/core";

const Example = ({ data }: { data: any[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-10 mx-55">
      {data?.map((item, index) => (
        <Card key={index}>
          <Image src={item.src} height={370} width={280} alt="Norway" />

          <Text weight={500} size={19} text-align="center">
            {item.name}
          </Text>

          <Badge color="pink" variant="light" mt="md">
            {item.umur17}
          </Badge>

          <Badge color="green" variant="light" mt="md">
            {item.umur}
          </Badge>

          <Badge color="blue" variant="light" mt="md">
            {item.umur13}
          </Badge>
        </Card>
      ))}
    </div>
  );
};

export default Example;
