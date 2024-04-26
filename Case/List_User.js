import { expect } from 'chai'; // Tambahkan baris ini di bagian atas berkas
import supertest from 'supertest';

describe('Get List User', () => {
    it('Success Get List user for query parameter', async () => {
        const response = await supertest('https://reqres.in').get('/api/users?page=2');
        // console.log(response.body)
        expect(response.status).to.equal(200);
        expect(response.body.page).equal(2);
    });
});
