import { Person } from "../models/person";

// export const personsData : Person[] = [
//   new Person(1, 'person 1', 30, 'Software Developer'),
//   new Person(2, 'person 2', 33, 'Dentist'),
//   new Person(3, 'person 3', 32, 'Physician Assistant'),
//   new Person(4, 'person 4', 33, 'Software Developer'),
//   new Person(5, 'person 5', 34, 'Software Developer'),
//   new Person(6, 'person 6', 25, 'Nurse'),
//   new Person(7, 'person 7', 36, 'Software Developer'),
//   new Person(8, 'person 8', 27, 'Physician'),
//   new Person(9, 'person 9', 28, 'Software Developer'),
//   new Person(10, 'person 10', 28, 'Software Developer')
// ]
//

export const personsData : ({ startOut: string; patientName: string; reason: string; doctorName: string; treatmentMethods: string; patientId: string; idRecord: string; startIn: string } | { startOut: string; patientName: string; reason: string; doctorName: string; treatmentMethods: string; patientId: string; idRecord: string; startIn: string } | { startOut: string; patientName: string; reason: string; doctorName: string; treatmentMethods: string; patientId: string; idRecord: string; startIn: string } | { startOut: string; patientName: string; reason: string; doctorName: string; treatmentMethods: string; patientId: string; idRecord: string; startIn: string })[] = [
  {
    "idRecord": "BA-001",
    "patientId": "BN-435",
    "patientName": "Nguyễn Văn A",
    "startIn": "07-08-2016",
    "startOut": "08-08-2019",
    "reason": "Ung thư gan giai đoạn cuối",
    "treatmentMethods": "Mổ",
    "doctorName": "Lê Văn B"
  },
  {
    "idRecord": "BA-112",
    "patientId": "BN-123",
    "patientName": "Nguyễn Văn C",
    "startIn": "10-08-2019",
    "startOut": "10-08-2020",
    "reason": "Suy thận mạn",
    "treatmentMethods": "Chạy thận",
    "doctorName": "Nguyễn Đôn D"
  },
  {
    "idRecord": "BA-223",
    "patientId": "BN-984",
    "patientName": "Tôn Nữ D",
    "startIn": "11-01-2020",
    "startOut": "08-08-2020",
    "reason": "Covid-2019",
    "treatmentMethods": "Cách ly và theo dõi thường xuyên",
    "doctorName": "La Văn N"
  },
  {
    "idRecord": "BA-444",
    "patientId": "BN-153",
    "patientName": "Đoàn Thị E",
    "startIn": "07-08-2017",
    "startOut": "08-08-2018",
    "reason": "Ung thư phổi giai đoạn cuối",
    "treatmentMethods": "Xạ trị",
    "doctorName": "Lê Văn B"
  }
]

