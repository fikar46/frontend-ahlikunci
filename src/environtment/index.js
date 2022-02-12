var api;
export const storage = 'https://storage.siapptn.com';
if(window.location.hostname == 'localhost'){
     api = 'https://api.meylendra.com:2023';
}else{
     api = 'https://api.meylendra.com:2023';
}
export const koneksi = `${api}`