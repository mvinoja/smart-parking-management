# Smart Parking Management System

## 🚗 Project Overview

The Smart Parking Management System is a web-based application that helps users efficiently manage parking slots. The system displays available and occupied parking spaces in real time, making the parking process simple and organized.

Users can select an empty parking slot, enter vehicle and owner details, and reserve the slot using a unique parking code displayed at the parking area. If an incorrect code is entered, the system generates an alert to prevent unauthorized bookings.

All parking information is stored using the browser's Local Storage, allowing data to persist even after refreshing the page.

---

## ✨ Features

* View available and occupied parking slots.
* Empty slots are displayed in one color.
* Booked slots are highlighted in red.
* Click an available slot to reserve it.
* Enter:

  * Owner Name
  * Vehicle Number
  * Parking Time
  * Unique Parking Code
* Validation of unique parking code.
* Alert notification for incorrect codes.
* Booking details stored in Local Storage.
* Persistent slot status after page refresh.
* Simple and user-friendly interface.

---

## 🛠️ Technologies Used

* HTML
* CSS
* JavaScript
* Local Storage API

---

## 📋 How It Works

1. The user opens the parking dashboard.
2. Available slots are displayed.
3. User clicks an empty slot.
4. User enters required details.
5. System validates the unique parking code.
6. If the code is correct:

   * Slot becomes booked.
   * Slot color changes to red.
   * Data is saved in Local Storage.
7. If the code is incorrect:

   * Alert message is shown.
   * Booking is rejected.

---

## Screenshots
<img width="1052" height="887" alt="Screenshot 2026-06-22 230048" src="https://github.com/user-attachments/assets/05fd475b-f389-46b6-93ec-de3908157ceb" />



## 📂 Data Stored

The following details are stored in Local Storage:

* Owner Name
* Vehicle Number
* Parking Time
* Parking Slot Number
* Booking Status

---

## 🚀 Future Enhancements

* User authentication and login.
* Database integration.
* Payment gateway integration.
* Admin dashboard.
* Real-time slot updates.
* QR code-based parking verification.
* Email and SMS notifications.

---

## 🎯 Conclusion

The Smart Parking Management System provides a simple and efficient solution for managing parking spaces. It reduces manual effort, prevents unauthorized bookings, and improves parking management through an interactive and user-friendly interface.

