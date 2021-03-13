import NewsCase from './NewsCase'
import {
    SpecialWrapper,
    NewsBox,
    NewsTitle,
    NewsMain
} from '../style'
// import { Link } from 'react-router-dom'


function NewsSpecial(props) {
    const {title, list} = props
    return (
        <SpecialWrapper>
            <NewsBox>
                <NewsTitle>
                    <h2>{title}</h2>
                    {/* <Link to="/">
                        查看更多 &gt;
                    </Link> */}
                </NewsTitle>
                <NewsMain>
                    {
                        list.map(item => {
                            return (<NewsCase key={item.channel} {...item}/>)
                        })
                    }
                </NewsMain>
            </NewsBox>
        </SpecialWrapper>
    )
}

export default NewsSpecial