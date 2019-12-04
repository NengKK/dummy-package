import SftpConnector from './emis/sftp-connector';

export async function GetFile(fileName: string): Promise<string> {
    const sftp = new SftpConnector();
    await sftp.connect();

    return await sftp.get(fileName)
        .then(() => `Get file successful file=${fileName}`)
        .catch(err => `Get file error err=${err}`);
}
