export const initialMockRequests = [
  {
    id: "QF-892104",
    serviceId: "ac-repair",
    serviceName: "AC Repair & Service",
    customerName: "Rahul Sharma",
    phone: "9876543210",
    address: "Flat 402, Royal Residency, Mahipalpur, New Delhi",
    city: "Delhi NCR",
    problem: "AC bilkul cold air nahi de raha hai, outdoor compressor se continuous humming sound aa rahi hai.",
    preferredDate: "2026-09-24",
    timeSlot: "Morning (09:00 AM - 12:00 PM)",
    status: "In Progress",
    technician: {
      name: "Rajesh Kumar",
      phone: "+91 98112 34567",
      rating: "4.9 ★",
      photoIcon: "👨‍🔧"
    },
    estimatedPrice: 499,
    finalAmount: null,
    createdAt: "Today, 10:15 AM",
    timeline: [
      { step: "Request Created", done: true, time: "10:15 AM" },
      { step: "Technician Accepted", done: true, time: "10:30 AM" },
      { step: "Technician Arrived", done: true, time: "11:10 AM" },
      { step: "Work In Progress", done: true, time: "11:15 AM" },
      { step: "Job Completed", done: false, time: "Pending" }
    ]
  },
  {
    id: "QF-741982",
    serviceId: "ro-water-purifier",
    serviceName: "RO Water Purifier Service",
    customerName: "Rahul Sharma",
    phone: "9876543210",
    address: "Flat 402, Royal Residency, Mahipalpur, New Delhi",
    city: "Delhi NCR",
    problem: "RO ka pure water output speed drop ho gayi hai aur water ka taste metallic lag raha hai.",
    preferredDate: "2026-09-25",
    timeSlot: "Evening (03:00 PM - 06:00 PM)",
    status: "Accepted",
    technician: {
      name: "Sunil Verma",
      phone: "+91 99554 12345",
      rating: "4.8 ★",
      photoIcon: "👨‍🔧"
    },
    estimatedPrice: 349,
    finalAmount: null,
    createdAt: "Yesterday, 04:45 PM",
    timeline: [
      { step: "Request Created", done: true, time: "04:45 PM" },
      { step: "Technician Accepted", done: true, time: "05:10 PM" },
      { step: "Technician Arrived", done: false, time: "Scheduled" },
      { step: "Work In Progress", done: false, time: "Pending" },
      { step: "Job Completed", done: false, time: "Pending" }
    ]
  },
  {
    id: "QF-632011",
    serviceId: "electrician",
    serviceName: "Electrician Services",
    customerName: "Rahul Sharma",
    phone: "9876543210",
    address: "Flat 402, Royal Residency, Mahipalpur, New Delhi",
    city: "Delhi NCR",
    problem: "Living room MCB switch trip ho raha hai jab bhi geyser on karte hain.",
    preferredDate: "2026-09-26",
    timeSlot: "Morning (09:00 AM - 12:00 PM)",
    status: "Pending",
    technician: null,
    estimatedPrice: 199,
    finalAmount: null,
    createdAt: "Today, 01:20 PM",
    timeline: [
      { step: "Request Created", done: true, time: "01:20 PM" },
      { step: "Technician Accepted", done: false, time: "Assigning nearby pro..." },
      { step: "Technician Arrived", done: false, time: "Pending" },
      { step: "Work In Progress", done: false, time: "Pending" },
      { step: "Job Completed", done: false, time: "Pending" }
    ]
  },
  {
    id: "QF-510984",
    serviceId: "fan-repair",
    serviceName: "Ceiling Fan Repair",
    customerName: "Rahul Sharma",
    phone: "9876543210",
    address: "Flat 402, Royal Residency, Mahipalpur, New Delhi",
    city: "Delhi NCR",
    problem: "Master bedroom ka ceiling fan bohot slow chal raha tha, capacitor change karwana tha.",
    preferredDate: "2026-09-18",
    timeSlot: "Afternoon (12:00 PM - 03:00 PM)",
    status: "Completed",
    technician: {
      name: "Vikram Negi",
      phone: "+91 97110 88231",
      rating: "4.7 ★",
      photoIcon: "👨‍🔧"
    },
    estimatedPrice: 149,
    finalAmount: 220,
    createdAt: "18 Sep 2026",
    timeline: [
      { step: "Request Created", done: true, time: "11:00 AM" },
      { step: "Technician Accepted", done: true, time: "11:20 AM" },
      { step: "Technician Arrived", done: true, time: "12:15 PM" },
      { step: "Work In Progress", done: true, time: "12:30 PM" },
      { step: "Job Completed", done: true, time: "01:10 PM" }
    ]
  }
];