var api;
export const storage = 'https://storage.siapptn.com';
if(window.location.hostname == 'localhost'){
     api = 'https://zkeys.id:2023';
}else{
     api = 'https://zkeys.id:2023';
}
export const koneksi = `${api}`