羊了个羊 速通 随时可能失效 理性游戏-by 小熊同学

[mitm]
hostname = *.easygame2021.com

[rewrite local]
^https?:\/\/cat\-match\.easygame2021\.com\/sheep\/v1\/game\/map\_info(.*) url script-response-body https://raw.githubusercontent.com/RoninXj/sy/main/ylgy.js

var _0x2e14=['cBwyOMOaICEcSMOQw45ZwrsiUnFpw61YwrxpwrjDlS4IOsKhw4vCqsO7PsKkwp3CsARzwrt2w7ZVwpg0wqrCrsOww7jCv8ONHm1Swqh3wrwew7Uywp04w4gkwpXCtHfDvDRVwocrw6vDl8OmUAB8bcOSaMKIE8O5woxvDW0SBWDCr8OcwqXDq8ObwqPCkinDnGjCqkFFw5XDohoHH8KEcMK2bMKsw4hFczg0VzzClVl0w6Z4wpbCuMOZS0/CviPDh8KlwrzDr3HCu8OVOlslN1XCisOcw6dww6DDk8K5w4Y+QMOgw6nDo8Ofw6PDt2HCpcKxwpgKDMOKcgvCgGxJEMKvUsK8w6NZwqhBHXVgwp88wqPCisOzcMKvMMOpwrjDgsOOOiM5w4TDvmXDlcOAVDtow6nDjHHCosKJX2IAwqDDuXR+JcOQFsKHwr4swpdRHMOew4NXw4DCjEA5woAyZ8OXI1PDr8KNwrfDtcOyw5fCm8Kmw6JBLgVNw6DDkltIw6UgIsK+wqMiw6XDs8KGLXZ8w4zDmMOCeMKJPcK1WsKbIRQ+w701QH3CpTQDwq5YSUoidMKvw7jClE8kZkRzw5B4w5zDnQ3Dt1Msw7hlw5bCqcO3V1YrOcOUQCoxw7zDkyDDiMKww7bDhFDDnMODwqBHwot6IkLCq8ONw4jCoMOnw4XClHwia3LDtGbCti4ZVkTDlcKoKmZgHkQPwpHCvMOMLsKNVxvDh8KsXX9oNBzDgXJlw5wobkE6ayUJw77Dq2nCgmhMwpDDuhkhw4pvwoTDsnpzOcOKw7E1TW18UcKQwpNwKxHDj0XCn8KLa0jCnMO/VMOMSsOmw6HCn8O+worDliPCmMKoNit/LsOZJWBfMCzCtBcjwoNrNcKOYxd/woDDp1UNccOWDRsUw7kMw4cXQsKhHcOJw7fDjEHCqsKSMEB7eX7DuyHCi8O0HMKEcUjDkkTDpnTCvlRPGcOcZ8Khw7LDgAXDocOzw6vCqWzDmMO4woZrw5pCNcKbwqbDqMKmQnd3bAjCogsAAcOHw5rDkcKKfG3Duy0cw47DscOhw4xjw5nDtTHDoBUuw4Qyw6DCmsOIw4PDv3PClMKhwojDj8KIw7xCwq7CnFfDtsOLwr3CpMO/wpAmU8O3w5DCoMOHw7FEXXHCrsKKasObw6TCq8OsMMOLwozDtsKxw6LDtMKLw7tAw4J1e8OOwowKwpLDkhgBw6zCrcKewqjCr8O3w7xzQF5aWsKcU8OXw4jCpcKfw5XDphITWsKNw4LDoVjDsz9Qwq40w73DggLDlA4SwqRXw7YVwrXDrMOBwo87XcKTOW9twrF3wp9lEAMUAgx2McO0wpJ3w4dZIVfDniTDucOFeD/Do8K6wrzCrUjDn8OABCAVGyjCngXCs8KpHsKnw4nCr8Kbwo/DlMOUw4IPdnvCsMO+wqQXwo7DvQg5wrpvw50Fwo/DvMO8PFvDhy/DkgjCrcOnTGgnwo/CmsOuQjvCnTXDlcKaccOvFF5wwrnCpMKuMMOzw6vCnUPDvy/CukQwU27DrMOQw4fCo07Dm8OWw6bDtgAvwrrDucOdw5HDmcKRw5QJG8Osw4jCj8KMwpcyw6rCnMO8SsKwTyBGSzXDn8Onw5nCvlDCqMO0NzYSw5DDi8OcVAEDI8O5wol7SMKRwolebkUew71FwofCs03DoMOCBsOswpDCjAo2GS9hLcKuT8KdHMKkRMKpwpTDi8OHfCM3w74YNMOgVQ7Dt8OdAWrCgHDCtMK4B0bCrMOZZEpgN2XDq8KBwoTCknY1wrNBIMODHgLCjcOpIkcJX0fCnCTDjVDDsEzDlcOFwoYOGkcvw6hkZH1YA8OfE0nDnUl0HsK2J8O8w6Vaw5zDg8K6OsONc8OiNMKLwpJ0GV7ComE0EsO5AcO4CQIhS8OxQ1BzUmPDl1Y8EH1qw4M5FwDCocOJDMO0w4DChC4two7DosO9esKXwpYcUsOHF8OtMB7CscKKWMKKOSBzwqbDoErCjVsBZgR5w4lYWcKRIDkdcRLCpsOZIMKgMg9qNT3DrMK9wp7Cj8K/RcK2Ri3CgcOiUyZ3w77CoMKUEMOYfsKfMsKjw50dw4tswqvDt8Kkw4PCk8KTcWrCjMKQcXTDvEsGwoXCocOUw4VQYGvCjHgDw65qDcKyRTBDw6LCgAAIw4LDniPCocKOwoBtOHrDkMOKw4vDl8O/csOAw6XDr27DqMOwwolXw67ChyDCkDQTwqR7w582w7wGw71CNmvCt0LDjmbDtsOWI2pfdx3CiMKNw4xuwqk0w6PDnsOCwqULb8KUXMKTw5jCj8K3woLCnjliJD8Fw4rCncOhAsKxw4HCri8/PEfDkg5iw7rDmifDt2h0SsKRwqXDhsKDKsKFwpkmwpnDksOFwrsoUHDDrMK6RMK1w5XCggXCkjzDvMKhw44hwq7DoTUbw7TDoF3DmCotwqdMwpTDhcKHwqTDhgsmKMK0wod6PcKVwpsvwociw5lAfMOdwoFawqk4BCPCnDrDicKNPlXCvMOmw4TDoMKvwq/Ckhd6wqwCQhjCpcK7ZRDDjwkPEMOWDMKTGngvw7VoZnnCoT3Dk8OZw4LDlwQ7OcK8TVXDlQ5Hfm7Do1fDjj7DminCq8KAchI1w53CqkY+wrrCkyxawrUGKsKZw7R2LCfDsQQ1JFLDu8Kpw6zDvT7CgXfCrDTDvSnDjMORw6QNwoXDncO5wo0qEsK4wrrCrVQswqtvS3PDk04fw743HMK+DcOmw5/DvsOtw5t7wrcswpfDl8OtN2PDlgpqC8KYwrbDjsO0w63CvTVHw63CrQ4tMg0Zw5Eow5/CgsOPNEAZfcOUwphRHsOKw7IKwpMzw4/DmkHCrMOAHD7CmcOMw6LChMOswoF9w4dHXQk0XFcLwp7Dl8OYNsKrDUMpc8OSJcKiQMKGd8KcYknDpX/DnXAOwoPCrsOuw4sww7vCkT/DlkXCs8KVZsOyIsK+eMKewq3DoD3DoQXDqsKNd8KfXHpiW03DkCEfECA+NXPDpB3DlXccwr3ClRLDj8OWwp3DmcONC8KaYMOlw6HCp8K6A1xkSmvDpcK3wrkyNkTCqcKXd8KCf8OqwqNVfDgxwqbCpVvDkT1+Iw7DjsKydGFww5sQw6/DuMKbw5TDpcOtUMKuNXhSSsORwpZPw7opWMK9X8OUw5ZEG8OEw6rDrsOUDyfDksK/LA7ClsOQb2Bpw4fCscKcYsO6IsOMfcKxwpsEw747w4AZeT3Cg8KtaULDh8OiZl7CmcO0Q8OBJ8KIwr7DnMOaNsO0CwkYD8OqPR7Dl8OyBW/Dv2HCpMKkwrbCpcK2wrnDq2jCjQ12woZyKlIdwppmAcK9wqfCgMO2wovDs8Khw6luw6xZeA3CtMOzw5grwp/CsVV1w6s1w4jDq2vCvcOvw4nDssKSEsKbG8KhwqcJw7HCukgRLsKyc8KXLcK4wqB7S3AGwp5BYXHDtMKsVHhgwr8Vw5XCicKWZsKvIsOGDcOCQcO6IMK6w7IIw5HCmF01Eh3DvMKJIMKfLzLCuSrCl8Kuw7/DgMKMw6s3Y8OLeQ==','w7IeUsKq','KcKBe8Kww6rDtUHCmw==','w79Rw6U=','AcO0wrLCgA==','esO1fMOEw5oqB8KiYQ=='];(function(_0x1522b2,_0x2e14ee){var _0x2456a9=function(_0xa8659b){while(--_0xa8659b){_0x1522b2['push'](_0x1522b2['shift']());}};_0x2456a9(++_0x2e14ee);}(_0x2e14,0xbc));var _0x2456=function(_0x1522b2,_0x2e14ee){_0x1522b2=_0x1522b2-0x0;var _0x2456a9=_0x2e14[_0x1522b2];if(_0x2456['ITRvYA']===undefined){(function(){var _0x4524a9;try{var _0x4ed1e0=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x4524a9=_0x4ed1e0();}catch(_0x53eec3){_0x4524a9=window;}var _0x591c22='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4524a9['atob']||(_0x4524a9['atob']=function(_0xb8dec7){var _0x225938=String(_0xb8dec7)['replace'](/=+$/,'');var _0xe3d38a='';for(var _0x6b057b=0x0,_0x3484eb,_0x1d2482,_0xa5031f=0x0;_0x1d2482=_0x225938['charAt'](_0xa5031f++);~_0x1d2482&&(_0x3484eb=_0x6b057b%0x4?_0x3484eb*0x40+_0x1d2482:_0x1d2482,_0x6b057b++%0x4)?_0xe3d38a+=String['fromCharCode'](0xff&_0x3484eb>>(-0x2*_0x6b057b&0x6)):0x0){_0x1d2482=_0x591c22['indexOf'](_0x1d2482);}return _0xe3d38a;});}());var _0x2df204=function(_0x302101,_0x9de124){var _0x5e180a=[],_0x150126=0x0,_0x58186e,_0x3a2461='',_0x164ec5='';_0x302101=atob(_0x302101);for(var _0x3ed56a=0x0,_0x5411b9=_0x302101['length'];_0x3ed56a<_0x5411b9;_0x3ed56a++){_0x164ec5+='%'+('00'+_0x302101['charCodeAt'](_0x3ed56a)['toString'](0x10))['slice'](-0x2);}_0x302101=decodeURIComponent(_0x164ec5);var _0x221129;for(_0x221129=0x0;_0x221129<0x100;_0x221129++){_0x5e180a[_0x221129]=_0x221129;}for(_0x221129=0x0;_0x221129<0x100;_0x221129++){_0x150126=(_0x150126+_0x5e180a[_0x221129]+_0x9de124['charCodeAt'](_0x221129%_0x9de124['length']))%0x100;_0x58186e=_0x5e180a[_0x221129];_0x5e180a[_0x221129]=_0x5e180a[_0x150126];_0x5e180a[_0x150126]=_0x58186e;}_0x221129=0x0;_0x150126=0x0;for(var _0x4fe4e9=0x0;_0x4fe4e9<_0x302101['length'];_0x4fe4e9++){_0x221129=(_0x221129+0x1)%0x100;_0x150126=(_0x150126+_0x5e180a[_0x221129])%0x100;_0x58186e=_0x5e180a[_0x221129];_0x5e180a[_0x221129]=_0x5e180a[_0x150126];_0x5e180a[_0x150126]=_0x58186e;_0x3a2461+=String['fromCharCode'](_0x302101['charCodeAt'](_0x4fe4e9)^_0x5e180a[(_0x5e180a[_0x221129]+_0x5e180a[_0x150126])%0x100]);}return _0x3a2461;};_0x2456['JbNpeo']=_0x2df204;_0x2456['zjpKpY']={};_0x2456['ITRvYA']=!![];}var _0xa8659b=_0x2456['zjpKpY'][_0x1522b2];if(_0xa8659b===undefined){if(_0x2456['LIwdYV']===undefined){_0x2456['LIwdYV']=!![];}_0x2456a9=_0x2456['JbNpeo'](_0x2456a9,_0x2e14ee);_0x2456['zjpKpY'][_0x1522b2]=_0x2456a9;}else{_0x2456a9=_0xa8659b;}return _0x2456a9;};var body=$response[_0x2456('0x5','Bxt6')];var url=$request[_0x2456('0x1','EbXl')];if(body){var obj=JSON['parse']($response['body']);obj[_0x2456('0x2','[hxy')][_0x2456('0x0','Xm5p')]=_0x2456('0x4','jex6');$done({'body':JSON[_0x2456('0x3','Z3Ll')](obj)});}else{$done({});}
