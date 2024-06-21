import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BirthdayWish from '../components/BirthdayWish';
import Bubbles from '../components/Bubbles';

const HappyBirthday = () => {
  const { wishUrl } = useParams();
  const [wishData, setWishData] = useState(null);

  useEffect(() => {
    const fetchWishData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/wishes/${wishUrl}`);
        setWishData(response.data.data);
      } catch (error) {
        console.error('Error fetching wish data:', error);
      }
    };

    fetchWishData();
  }, [wishUrl]);

  if (!wishData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="happy-birthday-page">
      <Bubbles />
      <BirthdayWish name={wishData.name} imageUrl={wishData.imageUrl} />
    </div>
  );
};

export default HappyBirthday;