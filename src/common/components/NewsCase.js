import { Link } from 'react-router-dom'
import {
    CaseWrapper,
    CaseContainer,
    CaseDetail,
    CasePlayBox
} from '../style'

function NewsCase(props) {
    const { width = "32.5%",desc, seletive, subject, date, imgUrl, hasVideo ,videoTimes } = props;
    return (
        <CaseWrapper width={width}>
            <CaseContainer>
                <Link to="/detail/2">
                    <img src={imgUrl} alt="/"/>
                </Link>
                {
                    hasVideo ? <CasePlayBox><i className="iconfont">&#xe61d;</i> {videoTimes}</CasePlayBox> : ''
                }
            </CaseContainer>
            <CaseDetail>
                <p className="case-desc">{desc}</p>
                <div className="case-detail">
                    {
                        seletive ? <span className="case-selective">精選</span> : ''
                    }
                    <span>{subject}  {date}</span>
                    <i className="iconfont">&#xe83e;</i>
                </div>
            </CaseDetail>
        </CaseWrapper>
    )
}

export default NewsCase