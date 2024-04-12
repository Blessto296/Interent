import { createserver} from 'node:http';
const hostname='127.0.0.1';
const port=3000;
const server=createserver((req,res) => {
    console.log('received request...',req.url, req.method);

    if(req.url=='/'){
        if(req.method == 'GET'){
            res.statuscode = 200;
            res.setHeader('content-type','text/plan');
            res.setHeader('Access-control-allow-origin',"*");

            res.end("mithilesh");
            // console.log(res)
        }
        if(req.method == 'option'){
            res.setHeader('content-type','appliction/json');
            res.setHeader('Access-control-allow-orgin','http://127.0.0.1:5500');
            res.setHeader('Acess-control-allow-method',"POST , GET , OPTIONS");
            res.setHeader('Access-control-allow-headers','*');
        }

    }
})