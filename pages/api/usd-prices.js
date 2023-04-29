import axios from 'axios';

const handler = async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cdai%2Cusd-coin&vs_currencies=usd'
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching USD prices:', error.message);
    res.status(500).json({ error: 'Failed to fetch USD prices' });
  }
};

export default handler;
