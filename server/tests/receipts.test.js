/*jshint esversion: 8 */
const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const server = require('../app');
const User = require('../server/models/user');
const Receipt = require('../server/models/receipt');

chai.use(chaiHttp);

const expect = chai.expect;

describe('Receipts', () => {
  let user;
  let token;
  let receipt;

  before(async () => {
    await mongoose.connect('mongodb://localhost:27017/mern-test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await User.deleteMany({});
    await Receipt.deleteMany({});

    user = await User.create({
      name: 'John Doe',
      email: 'johndoe@test.com',
      password: 'password',
    });

    const res = await chai
      .request(server)
      .post('/api/auth/login')
      .send({ email: 'johndoe@test.com', password: 'password' });
    token = res.body.token;

    receipt = await Receipt.create({
      title: 'Test receipt',
      user: user._id,
      amount: 20.5,
      category: 'food',
    });
  });

  after(async () => {
    await User.deleteMany({});
    await Receipt.deleteMany({});
    await mongoose.connection.close();
  });

  describe('GET /api/receipts', () => {
    it('should get all receipts', async () => {
      const res = await chai
        .request(server)
        .get('/api/receipts')
        .set('Authorization', `Bearer ${token}`);
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array');
      expect(res.body[0].title).to.equal(receipt.title);
      expect(res.body[0].amount).to.equal(receipt.amount);
      expect(res.body[0].category).to.equal(receipt.category);
      expect(res.body[0].user.name).to.equal(user.name);
    });
  });

  describe('PUT /api/receipts/:id', () => {
    it('should update an existing receipt', async () => {
      const receipt = new Receipt({
        merchant: 'Walmart',
        total: 100,
      });
      await receipt.save();
  
      const res = await request(app)
        .put(`/api/receipts/${receipt.id}`)
        .send({ merchant: 'Target' });
  
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('merchant', 'Target');
      expect(res.body).to.have.property('total', 100);
    });
  
    it('should return 404 if the receipt is not found', async () => {
      const res = await request(app)
        .put('/api/receipts/invalidId')
        .send({ merchant: 'Target' });
  
      expect(res.status).to.equal(404);
    });
  });
});