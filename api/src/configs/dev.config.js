let port = process.env.PORT || 3001;

exports.config = {
  port: port,
  host: process.env.HOST || "http://localhost:" + port,
  db: {
    url: "mongodb+srv://siva:siva@cluster0.8mvie.mongodb.net/book?retryWrites=true&w=majority",
  },
  aes: "5",
  jwtkey:
    "awafvasfwaehfuwhuhvuzvdbszdbuszufbysgzhfdbvhsbzvhbhzbvdyusavudvbausvbiuas",
  s3secretkey: "h8Y3O7d2u2IcUjVHS7+KdbiYGhTWB39PiJd9Nc01",
  s3Accesskey: "AKIAU3C5NQDMFAQ3F5NE",
  bucketname: "clientdemoproject",
  bucketUrl: "https://clientdemoproject.s3.ap-south-1.amazonaws.com/",
  bucketRegion: "ap-south-1",
};
