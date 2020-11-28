export declare type Unit = 'pounds' | 'ounces' | 'grams';
export interface IWeight {
    value: number;
    units: Unit;
    WeightUnits: number;
}
export interface ICreateWeight {
    value: number;
    units: Unit;
}
