// utils.js

function getDownloadUrl(filename) {
    if (!filename) return '';

    const extension = filename.split('.').pop().toLowerCase();
    let folder = '';

    switch (extension) {
        case 'jpg':
        case 'jpeg':
        case 'png':
        case 'gif':
            folder = 'images';
            break;
        case 'pdf':
            folder = 'pdfs';
            break;
        case 'mp4':
        case 'avi':
        case 'mov':
            folder = 'videos';
            break;
        default:
            folder = 'others';
    }

    const BASE_URL = location.hostname === 'tngis.tnega.org'
        ? 'http://tngis.tnega.org'
        // : 'http://192.168.5.247:2209';
        : 'http://10.236.248.107';

    return `${BASE_URL}/uploads/${folder}/${filename}`;
}
