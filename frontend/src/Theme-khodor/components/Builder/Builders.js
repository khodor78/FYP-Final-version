import axios from 'axios';
import { useEffect, useState } from 'react';
import Main from '../Main';
import Builder from './Builder';
const URL = 'http://localhost:5000/Personal';

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Builders = () => {
  const [builders, setBuilders] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBuilders(data.PersonalInfo));
  }, []);
  console.log(builders);
  return (
    <div>
      <ul>
        {builders &&
          builders.map((PersonalInfo, i) => (
            <div key={i}>
              <Main PersonalInfo={PersonalInfo} />
            </div>
          ))}
      </ul>
    </div>
  );
};
export default Builders;
