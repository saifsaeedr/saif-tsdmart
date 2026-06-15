


// Dmart.baseURL = 'http://localhost:8282';
//
// const r = await Dmart.login('dmart', 'Test1234')
// console.log({r});
// const request:any = {
//   space_name: "management",
//   request_type: "update",
//   records: [
//     {
//       resource_type: "user",
//       shortname: "zainebfrontend",
//       subpath: "/users",
//       attributes: {
//         description: {
//           ar: "desc ar",
//           en: "HelloWorld en",
//           ku: "desc ku"
//         },
//         displayname: {
//           ar: "name ar",
//           en: "myName en",
//           ku: "name ku"
//         },
//         is_active: true,
//         invitation: "",
//         payload: {
//           body: {
//             email: "zainebb@gmail.com",
//             first_name: "Jo",
//             last_name: "Do",
//             mobile: "792211703",
//             language: "english"
//           },
//           content_type: "json",
//           // schema_shortname: "user"
//         },
//         tags: []
//       }
//     }
//   ]
// };
// const u = await Dmart.request(request);
// console.log({u});

// import {Dmart, dmartClient} from "./dmart.service";
// import {ContentType, ResourceType} from "./dmart.model";
// import * as fs from "node:fs";
//
// dmartClient.defaults.baseURL = 'https://nova.imx.sh/dmart';
//
// Dmart.login('dmart', 'NdFVYdcsoo1M5u08').then(r => {
//     const myPDFBuffer = fs.readFileSync('/home/splimter/projects/zain/vvv/testpdf.pdf');
//     const myPDF = new File([myPDFBuffer], "testpdf.pdf", { type: "application/pdf" });
//
//
//     Dmart.upload_with_payload(
//         "referrals", `candidates/30304cab`, "auto",
//         ResourceType.media, myPDF, ContentType.pdf,
//         null, 'public'
//     ).then(r=> {
//         console.log({r})
//     }).catch(e=> {
//         console.log({e})
//     })
// });


