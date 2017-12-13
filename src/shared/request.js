import { log, LogType } from 'dingtalk-javascript-utility';
import axios from 'axios';

const TYPE = {
  HTTP: 'http'
}

const MOCK = false;

export default function request(opt){
  return new Promise(function(resolve, reject){
    const { ServiceName, MethodName, body, type='http' } = opt;
    if (MOCK){
      const url = 'http://127.0.0.1:8999/'+ ServiceName+'/'+ MethodName;
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(){
        if (xhr.readyState === 4){
          if (xhr.status === 200){
            resolve(JSON.parse(xhr.responseText));  
          }
        }
      }
      xhr.open("GET",url,true);
      xhr.send(null);
    } else {
      switch(type){
        case TYPE.HTTP:
          log(['Call LWP ServiceNam: ' + ServiceName + ' MethodName: ' + MethodName + ' body: ' + JSON.stringify(body)]);
          const { method='get', host, data } = body;
          axios({
            method: method,
            url: `${host}/${ServiceName}/${MethodName}`,
            data: data
          }).then(res => {
            resolve(res);
          }).catch(err => {
            reject(err);
          });
          break;
        default:
          log(['No Request'], LogType.WARNING);
          break;
      }
    }
  });
}
