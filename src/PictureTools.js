import React from 'react';
import { Jumbotron, Media, Container, Row, Col } from 'reactstrap';
import { Image } from 'react-bootstrap'
import ReactPicture from './Pictures/ReactPicture.png'
import NodePicture from './Pictures/NodePicture.png'
import JiraPicture from './Pictures/JiraPicture.png'
import GithubPic from './Pictures/GithubPic.png'

function Tools() {
    return ( 
        <div>
            <h1 className="display-2">Tools</h1>
            <p>Some of the tools we will be using to work on this project include React.js to develop the 
                front end, node.js to develop the back end, Jira to help keep track of what tasks must be done by who and when,
                and finally GitHub which will simplify the process of working as a team and keeping track of multiple changes in the code.
            </p>
            <Media>
                <Media left top href="#">
                    <Media object src={ReactPicture} alt="Generic placeholder image" />
                </Media>
                <Media>
                    <Media left middle href="#">
                        <Media object src={NodePicture} alt="Generic placeholder image" />
                    </Media>
                </Media>
                <Media>
                    <Media left bottom href="#">
                        <Media object src={JiraPicture} alt="Generic placeholder image" />
                    </Media>
                </Media>
            </Media>
            <div>
                <h1 className="display-1">Yee</h1>
                <p>It uses Node.js, React.js, and different tools like reactstrap and bootstrap</p>
                <Media>
                <Media>
                    <Media object src={ReactPicture} alt="My Placeholder Picture" />
                </Media>
                <Media>
                    <Media>
                        <Media object src={NodePicture} alt="Ting" />
                    </Media>
                </Media>
                <Media>
                    <Media>
                        <Media object src={JiraPicture} alt="idk" />
                    </Media>
                </Media>
            </Media>
            </div>
            <Container>
                <Row>
                    <Col xs={2} md={2}>
                        <Image src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kissclipart.com%2Fgithub-clipart-github-computer-icons-gs72hd%2F&psig=AOvVaw2b_19rLNK7mibxMeOeUPVn&ust=1604821542676000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDj0KL47-wCFQAAAAAdAAAAABAJ" roundedCircle />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Tools;