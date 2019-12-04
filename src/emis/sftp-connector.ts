import * as SshClient from 'ssh2-sftp-client';

export default class EmisSftpConnector {
    private _sftp: any;

    constructor() {
        this._sftp = new SshClient();
    }

    public connect(): Promise<boolean> {
        return this._sftp.connect({
            host: 'data.emis.com',
            port: 22,
            username: process.env.EMIS_USERNAME,
            password: process.env.EMIS_PASSWORD
        }).then(() => true);
    }

    public get(fileName: string): Promise<any> {
        return this._sftp.get(fileName);
    }
}
