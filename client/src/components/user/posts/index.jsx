import React from 'react'
import { connect } from 'react-redux'

import {loadBlog, createPost} from '../../../store/actions/blogAction'
import Breadcrumbs from '../breadcrumbs'
import PostForm from './postForm'
import Sidebar from '../sidebar'
import Pagination from '../../common/Pagination'
import { paginate } from '../../../utils/paginate'
import Articles from './article'


class Blog extends React.Component {

    state = {
            title: "",
            description: "",
            tag: "",
            category: "genaral",
            author: "emon",
            pageSize: 2,
            currentPage: 1, 
            error: {}
    }

    static getDerivedStateFromProps(props, state) {
        if (
          JSON.stringify(props.posts.error) !== JSON.stringify(state.error)
        ) {
          return {
            error: props.posts.error
          };
        }
        return null;
    }

    componentDidMount(){
        // fetch("/api/post")
        //     .then(res => res.json())
        //     .then(data => this.setState({posts: data}))
        
    //    Axios.get("http://localhost:2000/api/post")
    //         .then((data) => (this.setState({posts: data.data})))
    //         .catch((err) => console.log(err))

        this.props.loadBlog()
 
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {title, description, category, tag, author} = this.state
        this.props.createPost({title, description, category, tag, author})
    }

    pageChangeEvent = page => {
        // e.preventDefault()
        this.setState({
            currentPage: page
        })
    }

    render() {
        
        const { posts: allPosts, auth } = this.props
        const {currentPage, pageSize} = this.state
        const posts = paginate(allPosts.allBlog, currentPage, pageSize)

        return (
            <>
                <Breadcrumbs title="All Blog" />

                <section id="blog" className="blog">
                
                    <div className="container" data-aos="fade-up">

                        <div className="row">

                        <div className="col-lg-8 entries">

                            {auth.isAuthenticated && 

                                <PostForm
                                    name = {this.props.auth.user.name}
                                    changeHandler = {this.changeHandler}
                                    handleSubmit = {this.handleSubmit}
                                />
                            
                            }
                    { posts.length && 


                          posts.map((item) => (
                            <Articles key={item._id} item={item} />
                            )) 
                }
                            
                        <Pagination
                                items={allPosts.allBlog && allPosts.allBlog.length}
                                currentPage={currentPage}
                                pageSize={pageSize}
                                pageChange={this.pageChangeEvent}
                            />
                        </div>

                        <Sidebar />

                    </div>

                    </div>

                </section>
            </>
        )
    }
}


const mamStateToProps = state => ({
    posts: state.blog,
    auth: state.auth
})
export default connect(mamStateToProps, {loadBlog, createPost})(Blog)

