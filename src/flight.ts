export interface Flight {
    id: number;
    from: string;
    to: string;
    date: string;

    distance?: number; // optionaler Parameter
    calcPrice?(): number;
}

export class ScheduledFlight implements Flight {
    id: number;
    from: string;
    to: string;
    date: string;
    distance: number;
    calcPrice() {
        return this.distance / 3;
    }
}

export class CharterFlight implements Flight {
    id: number;
    from: string;
    to: string;
    date: string;
    distance: number;
    calcPrice() {
        return this.distance / 2;
    }
}
