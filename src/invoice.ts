class Invoice<T> {
    subject: T;
    price: number;

    /*
    Zugriff auf id löst Komppilierungsfehler aus, weil T alles
    Mögliche sein kann.
    Das nachfolgende Beispiel löst dieses Problem.
     */

     toSring() {
         let id = '';
         // id = this.subject.id // Fehler
         return `${id}: ${this.price}`;
     }
}
