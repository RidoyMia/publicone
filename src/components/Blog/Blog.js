import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md="4">
                        <h1>Contex  Api কি জিনিস ? </h1>
                        <p>contex Api বলতে বজায়। আমরা যদি প্রপ্স এর মাধ্যমে প্যারেন্ট কম্পোনেন্টস থেকে চাইল্ড কম্পোনেন্টস এ ডাটা পাঠাতে বার বার প্রপ্স লিখে পাঠাতে হয়। যা অনেক জামেলা। আর এই সমস্যা সমাধানে জন্য কন্টেক্স এপিআই বেবহার করতে পারি। যা ট্রি এর মথ ডাটা কোনো প্যারেন্ট কম্পোনেন্টস থেকে সরাসরি চাইল্ড কম্পোনেন্টস এক্সেস করতে পারে </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;