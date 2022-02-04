var api;
var apiPayment;
export const storage = 'https://storage.siapptn.com';
if(window.location.hostname == 'localhost'){
     api = 'http://localhost:8443';
}else{
     apiPayment = 'https://api.meylendra.com:8080';
     api = 'https://api.meylendra.com:1998';
}
export const koneksi = `${api}`
export const koneksiPayment = `${apiPayment}`