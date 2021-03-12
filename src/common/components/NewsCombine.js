import NewsCase from './NewsCase'
import {
    NewsContainer,
    NewsBox,
    NewsTitle,
    NewsMain
} from '../style'
import { Link } from 'react-router-dom'

const obj = { 
            desc: 'URSUS Fitness大爆疫　群組疑波及國際學校、律師行　中環人恐慌', 
            seletive: true, 
            subject: '社會新聞', 
            time: '11 小時前', 
            imgUrl: 'https://cdn.hk01.com/di/media/images/dw/20210312/446845490575708160538619.jpeg/GFjTPp4yEd0-QYywA81x56-c67qb8_GZh2cSP4dnEj8?v=w1600r16_9', 
            hasVideo: true,
            videoTimes: '00:44'
         }

function NewsCombine(props) {
    const {title = '最Hit', list = [obj]} = props
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
                            return (<NewsCase key={item.desc} {...item}/>)
                        })
                    }
                </NewsMain>
            </NewsBox>
        </NewsContainer>
    )
}

export default NewsCombine