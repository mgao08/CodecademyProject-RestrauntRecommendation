import { Card, Row, Col } from "antd";

function LoadingCardList (props) {
   const { numOfCards, loading } = props;

   const makeList = (counter) => {
      const list = [];
      for (let i = 0; i < counter; i++) {
         list.push(
            <Col className='gutter-row' xs={24} sm={24} md={12} lg={8} key={`col-${i}`}>
               <Card loading={loading}>
                  <Card.Meta
                     title="some title"
                     description={
                        <>
                           <p>some description</p>
                           <p>some description</p>
                        </>
                     }
                  />
               </Card>
            </Col>
         )
      }
      return list;
   }

   return(
      <Row gutter={[70, 70]}>
         {makeList(numOfCards)}
      </Row>
   );

}

export default LoadingCardList;