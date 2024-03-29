import { GiSpiderWeb } from 'react-icons/gi';
import { useState } from 'react';
import Creatorlist from './Components/Creatorlist';
import useFetch from './hooks/use-fetch';

const Home = () => {
  const [course, setCourse] = useState('open');

  const { creator, error, loading } = useFetch('http://localhost:8000/creators');

  // const confidential = process.env.REACT_API

  return (
    <div className="Home">
      <h1
        style={{
          color: 'greenyellow',
        }}
      >
        Webloaded
        <GiSpiderWeb />
      </h1>
      {loading && <div>Your item is being fetched</div>}
      {error && <div>{error}</div>}
      {creator && <Creatorlist creator={creator} />}
      <button type="button" onClick={() => setCourse('close')}>click to change course </button>

      <p>{course}</p>
    </div>

  );
};

export default Home;
