let blacklist=['共青团中央','广东共青团','浙江共青团','央视频']

let body = $response.body
body=JSON.parse(body)
body['data'].forEach((element, index)=> {
   if(blacklist.includes(element['right_desc_1'])||element["card_type"] !== "small_cover_v5"){ 
         body['data'].splice(index,1)  
    }
})
body=JSON.stringify(body)
$done({body})
