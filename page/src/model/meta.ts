import BaseImple from './base'


interface MetaInfoDataImple {
    avatar: string;
    show: Array<string>;
}

export default interface MetaInfoImple extends BaseImple {
    data: MetaInfoDataImple;
}
