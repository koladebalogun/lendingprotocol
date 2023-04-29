import axios from 'axios';

const ORDERBOOK_URL = 'https://api.0x.org/sra/v4/orderbook';

export default async function handler(req, res) {
  const { baseToken, quoteToken } = req.query;

  if (!baseToken || !quoteToken) {
    res.status(400).json({ error: 'baseToken and quoteToken are required.' });
    return;
  }

  const response = await axios.get(
    `${ORDERBOOK_URL}?baseToken=${baseToken}&quoteToken=${quoteToken}`
  );
  res.status(200).json(response.data);
}
