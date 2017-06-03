/**
 * 练习Promise/A+规范
 */
import React,{Component} from 'react'
import examplesServices from './examplesServices.js'

export default class PromiseA extends Component{
    getresult(){
        var _obj={
            num1:1,
            num2:2
        }
        var promise=examplesServices.getPromiseAresult(_obj);
        promise.then((result)=>{
            console.log(result);
            let obj1={
                num1:2,
                num2:result.result
            }
            return obj1;
        },(err)=>{
            console.log('then1:错误');
        }).then((result)=>{
            console.log(result);
            var promise1=examplesServices.getPromiseAresult(result);
            promise1.then((result1)=>{
                console.log(result1);
                let obj1={
                    num1:2,
                    num2:result1.result
                }
                return obj1;
            }).then((data1)=>{
                console.log(data1)
            })
        }).catch((err)=>{
            console.log('catch:错误');
        })
    }
    render(){
        this.getresult();
        return (
            <div>
                <h3>练习Promise/A+规范</h3>
            </div>
        )
    }
}