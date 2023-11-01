exports.config = {
  port: process.env.PORT || 3000,
  host: process.env.HOST || "15.206.146.88",
  // host: process.env.HOST || "192.168.250.132",
  db: {
    url: "mongodb+srv://admin:clientdemotest@clientcluster1.adbltrp.mongodb.net/book?retryWrites=true&w=majority",
  },
  aes : '5',
  jwtkey : 'awafvasfwaehfuwhuhvuzvdbszdbuszufbysgzhfdbvhsbzvhbhzbvdyusavudvbausvbiuas',
  s3secretkey : 'PtERmWg9daVOQ/o+xm7/BNpgY2fKLLfbcYMjUVJA',
  s3Accesskey : 'AKIAU3C5NQDMM5I5UZP4',
  bucketname : 'clientdemoproject',
  bucketUrl : 'https://clientdemoproject.s3.ap-south-1.amazonaws.com/',
  bucketRegion : 'ap-south-1'
};
