import {useRouter} from 'next/router'
import Listing from '../Components/Listings'
import {data, pageData} from '../data'

export default function Path({res, pres}){
    
    const router = useRouter()
    const {id} = router.query

    return(
        <div>
            <section className="cover-section">
                <div className="container">
                    <div className="cover">
                        <div className="header head-1">{pres.icon}{pres.head}</div>   
                        <div className="subhead">Browse {res.length} {pres.subhead}</div>
                    </div>
                </div>
            </section>
            <Listing data={res}></Listing>
        </div>
    )
}

export const getStaticProps = async ({params}) => {

    const res = data[params.id]
    const pres = pageData[params.id]
    
    return{
        props: {
            res,
            pres
        }
    }
}

export const getStaticPaths = () => {
    return{
        paths: [
            {params: {id: 'inspirations'}},
            {params: {id: 'resources'}},
            {params: {id: 'fonts'}},
            {params: {id: 'colors'}},
            {params: {id: 'icons'}},
            {params: {id: 'illustrations'}},
            {params: {id: 'designsystems'}},
            {params: {id: 'designguides'}},
            {params: {id: 'stockimages'}},
            {params: {id: 'mockups'}}
        ],
        fallback: false
    }
}




