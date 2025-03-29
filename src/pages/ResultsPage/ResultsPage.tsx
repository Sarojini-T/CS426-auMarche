import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { ITEM_DATA, ItemData } from "../../data/item-data";
import { Col, Container, Row } from "react-bootstrap";
import item0 from "./assets/item0.png"
import item1 from "./assets/item1.png"
import item2 from "./assets/item2.png"
import item3 from "./assets/item3.png"
import item4 from "./assets/item4.png"
import item5 from "./assets/item5.png"


const ResultsPage = () => {
    const { itemName } = useParams();
    const images = [ item0, item1, item2, item3, item4, item5 ];
    const [result, setResult] = useState<ItemData>();

    useEffect(() => {
   	    const item = ITEM_DATA.find(i => i.englishNames.some(e => e === itemName) || i.haitianKreyolNames.some(e => e === itemName) || i.japaneseNames.some(e => e === itemName));
   	    setResult(item)

    }, [itemName])

    return (
        result &&
        <Container className='mt-4'>
        <Row>
            <Col>
                <img src={images[ITEM_DATA.indexOf(result)]} style={{maxWidth: '400px'}} />
            </Col>

            <Col className='py-5 d-flex flex-column justify-content-around'>
                <h3>{result.englishNames[0]}</h3>
                <p>English names: {result.englishNames.join(', ')}</p>
                <p>Haitian Kreyol names: {result.haitianKreyolNames.join(', ')}</p>
                <p>Japanese names: {result.japaneseNames.join(', ')}</p>
            </Col>
        </Row>
        </Container>
    )
}

export default ResultsPage