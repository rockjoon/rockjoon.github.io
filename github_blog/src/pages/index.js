import React from "react"
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import '../styles/index.scss'
import config from '../../data/siteConfig'
const Indexpage = ()=>{
    return(
    <Layout>
        <Helmet title={config.siteTitle}/>
        <div>
        <h1>환영합니다.</h1>
        <p>아직은 좀 썰렁하죠? 
        <br/>
        깃헙 블로그를 처음 해봐서 그래요 조금만 기다려 주시면 더 멋진 블로그로 찾아올께요.

        </p>
        
        </div>
    </Layout>
        )
}

export default Indexpage
