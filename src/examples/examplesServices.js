/**
 * 练习服务
 */
export default{
    getPromiseAresult(obj){
        return new Promise((resolve,reject)=>{
            let _url='http://127.0.0.1:3389/examples/promisea/';
            fetch(_url,{
                method:"POST",
                headers:{
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body:`num1=${obj.num1}&num2=${obj.num2}`
            }).then((res)=>{
                if(res.ok)
                    return res.json()
                else
                    reject('调用服务失败')
            }).then((data)=>{
                resolve(data);
            }).catch((err)=>{
                reject(err);
            })
        })
    }
}