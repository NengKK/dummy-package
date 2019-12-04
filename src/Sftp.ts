import SftpConnector from './emis/sftp-connector';

export async function GetFile(fileName: string): Promise<string> {
    const sftp = new SftpConnector();
    await sftp.connect();

    return await sftp.get(fileName)
        .then(() => `SUCCESSFUL x file=${fileName}`)
        .catch(err => `ERROR err=${err}`);
}
