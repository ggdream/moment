import BaseImple from './base'


export default interface Verify extends BaseImple {
    data: string;
}

export interface VerifyModel {
    time: number;
    salt: string;
    sign: string;
}
