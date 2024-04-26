import { expect } from 'chai'; // Tambahkan baris ini di bagian atas berkas
import supertest from 'supertest';

describe('Post User', () => {
    it('Success Post user', async () => {
        const response = await supertest('https://reqres.in').post('/api/users').send({
            "name": "morpheus",
            "job": "leader"
        })
        console.log(response.body)
        expect(response.status).to.equal(201);
        // expect(response.body.page).equal(2);
    });
});
