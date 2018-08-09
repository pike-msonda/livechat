const config = {
    port: process.env.PORT || 3000,
    db: process.env.MONGOLAB_URI || "mongodb://localhost:27017/livechat",
    test_port: 3001,
    test_db: "mongodb://localhost:27017/livechat_test",
    access_token: "dal:bjve6cFEQrWhEJ-UBzp9EQ"
}

module.exports = config;