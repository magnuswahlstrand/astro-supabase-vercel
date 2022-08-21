import type Request from 'astro';


export async function logRequest(req: Request) {
    // console.log(req);
    //console.log('headers', req.headers);
    // try {
    //     const a = await req.text()
    //     console.log('bodya', a);
    //     const b = JSON.parse(a);
    //     console.log('bodyb', b);
    //     console.log('url', req.url);
    // } catch (e) {
    //     console.log(e);
    // }

    // console.log(await req.json());
    return false;
}


// http://localhost:3000/magic-link#access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjYxMDM2OTUzLCJzdWIiOiIzNzczYWI4Zi03NDRkLTRhYTktODFkYy1hNTc2ZmE5ZDkwNDQiLCJlbWFpbCI6Im1hZ251cy53YWhsc3RyYW5kQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCJ9.3gYjEt0mP6x5lcVjqNvNoXmVwmNfbSqlfWs4E2FBQaE&expires_in=3600&refresh_token=RFDgDruX8eLyW04agAgMmQ&token_type=bearer&type=magiclink
