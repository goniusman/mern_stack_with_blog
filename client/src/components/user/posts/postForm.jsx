import React from 'react'

import {Button, Input, Col, Row, FormGroup} from 'reactstrap'

function PostForm({ name, changeHandler, handleSubmit }) {
    return (
        <>
            <div className="reply-form mb-5">
                <form action="" onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Input name="title" type="text" placeholder="Post Title*"  onChange={changeHandler} />
                            </FormGroup>
                            <Input name="author" type="hidden" value={name} onChange={changeHandler} />
                            <Input name="category" type="hidden" value="general" onChange={changeHandler} />
                        </Col>
                    
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup >
                                <Input name="tag" type="text" placeholder="all tags" onChange={changeHandler} />
                            </FormGroup>
                        </Col>
                    </Row>
                
                    <Row>
                        <Col>
                            <FormGroup>                   
                                <Input name="description" type="textarea" placeholder="Description" onChange={changeHandler} />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Button type="submit">Create Post</Button>

                </form>
            </div>
        </>
    )
}

export default PostForm