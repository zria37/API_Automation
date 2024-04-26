import { expect } from 'chai'; // Tambahkan baris ini di bagian atas berkas
import supertest from 'supertest';

describe('Delete User', () => {
    it('Success Delete user', async () => {
        const response = await supertest('https://reqres.in').delete('/api/users/2')
        console.log(response.body)
        expect(response.status).to.equal(204);
        // expect(response.body.page).equal(2);
    });
});
