// export class Person {
//   id?: number;
//   firstName: string;
//   age: number;
//   job: string;
//
//   constructor(id: number = null, firstName: string = '', age: number = 0, job: string = '') {
//     this.id = id;
//     this.firstName = firstName;
//     this.age = age;
//     this.job = job;
//   }
// }
export class Person {
  idRecord: string;
  patientId: string;
  patientName: string;
  startIn: string;
  startOut: string;
  reason: string;
  treatmentMethods: string
  doctorName: string;

  constructor(idRecord: string=null, patientId: string=null, patientName: string=null, startIn: string=null, startOut: string=null, reason: string=null, treatmentMethods: string=null, doctorName: string=null) {
    this.idRecord = idRecord;
    this.patientId = patientId;
    this.patientName = patientName;
    this.startIn = startIn;
    this.startOut = startOut;
    this.reason = reason;
    this.treatmentMethods = treatmentMethods;
    this.doctorName = doctorName;
  }
}
