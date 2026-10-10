const USE_MOCK_DATA = true;
const BASE_URL = 'http://localhost:5000/api';

import { servicesData } from '../data/services';
import { initialMockRequests } from '../data/mockRequests';
import { mockTechniciansList, mockCustomersList } from '../data/mockAdminData';

const simulateNetworkDelay = (ms = 400) => new Promise((res) => setTimeout(res, ms));

export const quickFixApi = {
  async getServices() {
    if (USE_MOCK_DATA) {
      await simulateNetworkDelay(300);
      return { success: true, data: servicesData };
    }
    const response = await fetch(`${BASE_URL}/services`);
    return await response.json();
  },

  async getServiceById(serviceId) {
    if (USE_MOCK_DATA) {
      await simulateNetworkDelay(200);
      const service = servicesData.find((s) => s.id === serviceId);
      return service ? { success: true, data: service } : { success: false, message: 'Not found' };
    }
    const response = await fetch(`${BASE_URL}/services/${serviceId}`);
    return await response.json();
  },

  async createBooking(bookingPayload) {
    if (USE_MOCK_DATA) {
      await simulateNetworkDelay(900);
      const selectedService = servicesData.find((s) => s.id === bookingPayload.serviceId);
      
      const newBookingReceipt = {
        id: `QF-${Math.floor(100000 + Math.random() * 900000)}`,
        serviceName: selectedService ? selectedService.name : 'Home Service',
        estimatedPrice: selectedService ? selectedService.startingPrice : 299,
        customerName: bookingPayload.fullName,
        phone: bookingPayload.phoneNumber,
        address: bookingPayload.address,
        problem: bookingPayload.problemDescription,
        preferredDate: bookingPayload.preferredDate,
        timeSlot: bookingPayload.preferredTimeSlot,
        status: 'Pending Assignment',
        createdAt: 'Just now',
        timeline: [
          { step: 'Request Created', done: true, time: 'Just now' },
          { step: 'Technician Accepted', done: false, time: 'Assigning pro...' },
          { step: 'Work In Progress', done: false, time: 'Pending' },
          { step: 'Job Completed', done: false, time: 'Pending' }
        ]
      };
      return { success: true, data: newBookingReceipt };
    }

    const response = await fetch(`${BASE_URL}/requests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingPayload)
    });
    return await response.json();
  },

  async getCustomerRequests() {
    if (USE_MOCK_DATA) {
      await simulateNetworkDelay(400);
      return { success: true, data: initialMockRequests };
    }
    const response = await fetch(`${BASE_URL}/customer/requests`);
    return await response.json();
  },

  async login(credentials) {
    if (USE_MOCK_DATA) {
      await simulateNetworkDelay(800);
      return {
        success: true,
        user: {
          email: credentials.email,
          role: credentials.role,
          name: credentials.role === 'customer' ? 'Rahul Sharma' : 'Rajesh Kumar'
        },
        token: 'mock-jwt-token-quickfix-xyz-2026'
      };
    }

    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    return await response.json();
  },

  async updateJobStatus(jobId, newStatus, finalAmount = null) {
    if (USE_MOCK_DATA) {
      await simulateNetworkDelay(300);
      return { success: true, message: `Status updated to ${newStatus}` };
    }

    const response = await fetch(`${BASE_URL}/technician/jobs/${jobId}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus, finalAmount })
    });
    return await response.json();
  },

  async getAdminStats() {
    if (USE_MOCK_DATA) {
      await simulateNetworkDelay(350);
      return {
        success: true,
        data: {
          requests: initialMockRequests,
          technicians: mockTechniciansList,
          customers: mockCustomersList
        }
      };
    }

    const response = await fetch(`${BASE_URL}/admin/overview`);
    return await response.json();
  }
};