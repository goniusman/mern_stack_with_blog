
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {SingleloadBlog} from '../../../store/actions/blogAction';
import Breadcrumbs from '../breadcrumbs';
import Sidebar from '../sidebar';
import Article from './article';
import Author from './author';
import Comment from './comment';

 class SingleBlog extends Component {
    
    state = {
        name: this.props.user.name,
        email:  this.props.user.email,
        website: "",
        comments: "",
    }

    commentChangeHandler = (e) => {
        this.setState({
            [e.target.name ] : e.target.value
        })
    }

    componentDidMount(){
        const params = this.props.match.params.postId;
        // const urls = `/api/post/${params}`
        
        this.props.SingleloadBlog(params);

        // fetch(urls)
        //     .then(res => res.json())
        //     .then(data => this.setState({data}))
        //     .catch(err => console.log(err))
        // axios.get(`/api/post/single-post/${params}`)
        //     .then(comments => this.setState({comments: comments.data}))
        //     .catch(err => console.log(err))

    }

    render() {
       const {data} = this.props
    //    console.log(this.props);
        return (
            <>
                <Breadcrumbs title={data.title} />

                <section id="blog" className="blog">
                    <div className="container" data-aos="fade-up">

                        <div className="row">

                            <div className="col-lg-8 entries">

                                    <Article data={data} />

                                    <Author />

                                    <Comment data={data} />

                            </div>

                            <Sidebar />

                        </div>

                    </div>
                </section>
            </>
        )
    }
}

const mapStateToProps = state => ({
    data: state.blog.singleBlog,
    user: state.auth.user
})
export default connect(mapStateToProps, {SingleloadBlog})(SingleBlog)

