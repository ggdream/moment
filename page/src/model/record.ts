import BaseImple from './base'


export interface Record {
    label: string;
    subtitle: string;
    vid: string;
    datetime: string;
    image: string;
}

export interface RecordSetImple extends BaseImple {
    data: string;
}

export interface RecordGetImple extends BaseImple {
    data: Array<Record>;
}

export interface RecordReqModel {
    offset: number;
    number: number;
}

export interface RecordSaveModel {
    label: string;
    subtitle: string;
    image: string;
    text: string;
}
