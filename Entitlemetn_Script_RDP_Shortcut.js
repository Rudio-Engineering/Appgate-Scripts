//Scripts assums that it's granted access only to users with a value under "deviceName" attribut in their IdP

let result = ""
let idp ="03fb5278-7614-4fec-a08e-1bd34dffd035" //Use IdP as filter to get deviceName claim from that IdP attributs
let domain = ".mydomain.com"

if (claims.user.ag.identityProviderId === idp) { 
  result = claims.user.deviceName + domain;  
}

if/*claims.device.os.name*/(claims.device.os.name && claims.device.os.name.startsWith("macOS"))/*end claims.device.os.name*/ { osresult = "rdp:"; } else { osresult = "rdp://"; }

return [{
      "name": "RDP",
      "description": "",
      "url": osresult + "full%20address=s:" + result + ":3389",
      "colorCode": 4
    }];

