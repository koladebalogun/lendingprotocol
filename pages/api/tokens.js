export default async function handler(_, res) {
  const tokens = [
    {
      symbol: "ETH",
      address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      logo: "/icons/eth.svg",
    },
    {
      symbol: "USDT",
      address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
      logo: "/icons/usdt.svg",
    },
    {
      symbol: "USDC",
      address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      logo: "/icons/usdc.svg",
    },
    {
      symbol: "DAI",
      address: "0x6b175474e89094c44da98b954eedeac495271d0f",
      logo: "/icons/dai.svg",
    },
    {
      symbol: "LINK",
      address: "0x514910771af9ca656af840dff83e8264ecf986ca",
      logo: "/icons/link.svg",
    },
    {
      symbol: "UNI",
      address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      logo: "/icons/uni.svg",
    },
  ];

  res.status(200).json(tokens);
}
