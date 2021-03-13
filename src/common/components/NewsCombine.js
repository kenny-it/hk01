import NewsCase from './NewsCase'
import {
    NewsContainer,
    NewsBox,
    NewsTitle,
    NewsMain
} from '../style'
import { Link } from 'react-router-dom'


function NewsCombine(props) {
    const {title, list} = props
    if (title && list) {
        return (
            <NewsContainer>
                <NewsBox>
                    <NewsTitle>
                        <h2>{title}</h2>
                        <Link to="/">
                            查看更多 &gt;
                        </Link>
                    </NewsTitle>
                    <NewsMain>
                        {
                            list.map(item => {
                                return (<NewsCase key={item.channel} {...item}/>)
                            })
                        }
                    </NewsMain>
                </NewsBox>
            </NewsContainer>
        ) 
    } 
    return ''
}

export default NewsCombine