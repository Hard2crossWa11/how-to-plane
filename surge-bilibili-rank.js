//Customize blacklist
let blacklist=['共青团中央','广东共青团','浙江共青团','央视频']

let body = $response.body
body=JSON.parse(body)
body['data'].forEach((element, index)=> {
   if(blacklist.includes(element['name'])){ 
         body['data'].splice(index,1)  
    }
})
body=JSON.stringify(body)
$done({body})
