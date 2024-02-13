import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Creatorlist = ({ creator }) => (
  <>
    {creator.map((item) => (
      <div className="creator-preview" key={item.id}>
        <Link to={`/creators/${item.id}`}>
          <h2>
            {' '}
            Title is
            {item.title}
          </h2>
          <p>
            written by
            {item.author}
          </p>

        </Link>
      </div>
    ))}

  </>
);

Creatorlist.propTypes = {
  creator: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Creatorlist;
