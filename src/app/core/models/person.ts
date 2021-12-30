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
