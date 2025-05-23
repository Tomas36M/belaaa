import { Accordion } from 'react-bootstrap';

function ResearchCategory({ title, items, eventKey }) {
    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>
                {items.map((paper, index) => (
                    <div key={index} className="mb-3">
                        <h5>{paper.title}</h5>
                        <p>Autores: {paper.authors.join(', ')}</p>
                        <p>Año: {paper.year}</p>
                        <p>{paper.description}</p>
                        {paper.link && <a href={paper.link} target="_blank" rel="noopener noreferrer">Enlace</a>}
                    </div>
                ))}
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default ResearchCategory;