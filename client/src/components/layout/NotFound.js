import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'reactstrap'; 

export default function NotFound() {
    return (
        <div className="container">
            <Card>
                <h1 className="text-center mt-3">404 Not Found</h1>
                <p className="text-center"><Link to="">Back To Page</Link></p>
            </Card>
        </div>
    )
}
