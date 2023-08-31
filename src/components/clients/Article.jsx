import moment from 'moment';
import data from './data';
const Article = () => {
  return (
    <>
     {data.map((info) => {
        const {index, title, snippet, date, length } = info;
        return (
            <article className='post' key={index}>
            <h2>{title}</h2>
            <div className='post-info'>
              <span>{moment(date).format('dddd Do, YYYY')}</span>
              <span>{length} min read</span>
            </div>
            <p>{snippet}</p>
          </article>
        )
     })};
    </>
  );
}

export default Article