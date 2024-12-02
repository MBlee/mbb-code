import fs from 'fs';
export const mReadFile = (path) => {
    return new Promise((res, rej) => {
        fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
            if (err)
                return rej(err);
            res(data);
        });
    });
};
