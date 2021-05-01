import React from 'react'
import {Link} from 'react-router-dom'

const Breadcrumbs = ({title}) => {
    return (
        <>
            <section id="breadcrumbs" className="breadcrumbs">
                <div className="container">
                    <ol>
                        <li><Link to="/">Home</Link></li>
                        <li>Blog</li>
                    </ol>
                    <h2>{title && title}</h2>
                </div>
            </section>
        </>
    )
}

export default Breadcrumbs