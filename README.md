# Blue1984: Mobile
### Twitter without censorship

![1984v2 008](https://user-images.githubusercontent.com/26343374/85220247-9d21a580-b3b2-11ea-8870-ccc5a0f1d1eb.jpeg)

This anti-censorship app for twitter was designed from scratch especially for Bluzelle hackathon.

Official site: https://blue1984.herokuapp.com/

Video demo: https://youtu.be/O3uLL3kWXAY

## Mobile & web version

You could connect using web or mobile devices (works both on iOS and Android):

<img src='https://user-images.githubusercontent.com/26343374/83404016-7ce57300-a412-11ea-947b-9be3bbbf07d5.png' width='21%'/>&nbsp;&nbsp;&nbsp;<img src='https://user-images.githubusercontent.com/26343374/83404020-7f47cd00-a412-11ea-9422-ec1211715b1d.png' width='21%'/>&nbsp;&nbsp;&nbsp;<img src='https://user-images.githubusercontent.com/26343374/83404018-7eaf3680-a412-11ea-94cb-321941c54c12.png' width='21%'/>&nbsp;&nbsp;&nbsp;<img src='https://user-images.githubusercontent.com/26343374/83404017-7eaf3680-a412-11ea-90cb-fd732463cc0d.png' width='21%'/>

## Project & repostories

Server: https://github.com/MikaelLazarev/blu1984 (main folder)

Mobile apps: https://github.com/MikaelLazarev/blu1984 ('/mobile' folder)

Front-end: https://github.com/MikaelLazarev/blue1984

Python microservice for twitter scrapping: https://github.com/MikaelLazarev/blue1984-ts

#### How to install

1. Clone this chat: 
2. Install node dependencies with ```yarn``` or ```npm i```
3. Open ./config.ts and provide server address. For local start, please provide you local network address instead localhost:
```
export const BACKEND_ADDR = 'http://192.168.0.47:4000';
```
4. Go to ./mobile/ios and install ios modules with ```pod install```
5. Run iOS app with ```yarn ios``` or ```npm start ios```
6. Run Android app with ```yarn android``` or ```npm run android```

## Disclaimer

This application is provided "as is" and "with all faults." Me as developer makes no representations or warranties of any kind concerning the safety, suitability, lack of viruses, inaccuracies, typographical errors, or other harmful components of this software. There are inherent dangers in the use of any software, and you are solely responsible for determining whether this software product is compatible with your equipment and other software installed on your equipment. You are also solely responsible for the protection of your equipment and backup of your data, and THE PROVIDER will not be liable for any damages you may suffer in connection with using, modifying, or distributing this software product.


