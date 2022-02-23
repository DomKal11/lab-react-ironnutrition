import { Card, Col, Button, Row, Divider } from 'antd';

function FoodBox(props) {
  const { data, index } = props;

  const deleteFood = (name) => {
    console.log(name);
    props.delete(name);
  };

  return (
    <Col>
      <Card title={data.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={data.image} height={60} alt={data.name} />
        <p>Calories: {data.calories}</p>
        <p>Servings: {data.servings}</p>
        <p>
          <b>Total Calories: {data.calories * data.servings} </b> kcal
        </p>
        <Button type="primary" onClick={() => deleteFood(data.name)}>
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
