import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "title": "Login to Space",
      "keywords": {
        "email": "Email Address",
        "password": "Password",
      },
      "btnText": {
        "login": "Log In",
        "addusers": "Add Users",
        "manageusers": "Manage Users",
        "manageOrg": "Manage Organization"
      },
      "links": {
        "home": "Home",
        "claim": "Claims New",
        "payment": "Payments"
      },
      "navbar": {
        "Home": "Home",
        "UserName": "User Name",
        "name": "Bizom",
        "Logout": "Logout"
      },
      "userList": {
        "zoneManager": "Zone Manager(s)",
        "whManager": "Warehouse Manager(s)",
        "salesSupervisor": "Sales Supervisor(s)",
        "dsManager": "Distributors Sales Manager",
        "deliveryPerson": "Delivery Person(s)",
        "salsman": "Salesman(s)"
      },
      "organizationList":
      {
        "zones": "Zone(s)",
        "warehouse": "Warehouse(s)",
        "wsArea": "Warehouse Area(s)",
        "outlet": "Outlet(s)",
        "distributor": "Distributor(s)",
        "dsArea": "Distributor Area(s)",
      },
      "homePage": {
        "Orders": "Orders",
        "Recieved": "Recieved",
        "InProcess": "In Process",
        "Completed": "Completed",
        "Pending": "Pending",
        "Invoices": "Invoices",
        "chartlabel": "Sales Return",
        "claim": "Claim",
        "approved": "Approved",
        "new": "New",
        "users": "Users",
        "organization": "Organization"
      },
      "language": {
        "english": "English",
        "bengali": "Bengali",
        "vietnamese": "Vietnamese"
      },
      "logOutPage": {
        "linkText": "Login",
        "description1": "You are not logged in, please ",
        "description2": " to continue.",
        
      }
    }
  },
  fr: {
    translation: {
      "title": "WorkSpace লগইন করুন",
      "keywords": {
        "email": "ইমেইল ঠিকানা",
        "password": "পাসওয়ার্ড",
      },
      "btnText": {
        "login": "প্রবেশ করুন",
        "addusers": "যোগ করুন",
        "manageusers": "পরিচালনা ব্যবহারকারী",
        "manageOrg": "পরিচালনা সংগঠন"
      },
      "links": {
        "home": "বাড়ি  ",
        "claim": "নতুন দাবি",
        "payment": "অর্থপ্রদান"
      },
      "navbar": {
        "Home": "বাড়ি",
        "UserName": "ব্যবহারকারীর নাম",
        "name": "Bizom",
        "Logout": "প্রস্থান"
      },
      "userList": {
        "zoneManager": " জোন ম্যানেজার",
        "whManager": "গুদাম ব্যবস্থাপক",
        "salesSupervisor": "সেলস সুপারভাইজার",
        "dsManager": "ডিস্ট্রিবিউটর সেলস ম্যানেজার",
        "deliveryPerson": "জন ডেলিভারি ব্যক্তি",
        "salsman": "জন সেলসম্যান",
      },
      "organizationList":
      {
        "zones": "অঞ্চল(গুলি)",
        "warehouse": "গুদাম(গুলি)",
        "wsArea": "টি গুদামঘর এলাকা(গুলি)",
        "outlet": "টি আউটলেট",
        "distributor": "জন পরিবেশক",
        "dsArea": "ডিস্ট্রিবিউটর এলাকা(গুলি)"
      },
      "homePage": {
        "Orders": "আদেশ",
        "Recieved": "প্রাপ্ত",
        "InProcess": "প্রক্রিয়াধীন",
        "Completed": "সম্পন্ন",
        "Pending": "বিচারাধীন",
        "Invoices": "চালান",
        "chartlabel": "বিক্রয় রিটার্ন",
        "users": "ব্যবহারকারীদের",
        "claim": "দাবি",
        "approved": "অনুমোদিত",
        "new": "নতুন",
        "users": "ব্যবহারকারীদের",
        "organization": "সংগঠন"
      },
      "language": {
        "english": "ইংরেজি",
        "bengali": "বাংলা",
        "vietnamese": "ভিয়েতনামী"
      },
      "logOutPage": {
        "linkText": "প্রবেশ করুন",
        "description1": "আপনি লগ ইন করেননি, চালিয়ে",
        "description2" : "যেতে লগইন করুন।",

      }
    }
  },
  vie: {
    translation: {
      "title": "Đăng nhập không gian làm việc",
      "keywords": {
        "email": "Địa chỉ email",
        "password": "Mật khẩu",
      },
      "btnText": {
        "login": "Đăng nhập",
        "addusers": "Thêm người dùng",
        "manageusers": "Quản lý người dùng",
        "manageOrg": "Quản lý tổ chức"
      },
      "links": {
        "home": "Nhà",
        "claim": "Tuyên bố mới",
        "payment": "Thanh toán"
      },
      "navbar": {
        "Home": "Nhà",
        "UserName": "Tên tài khoản",
        "name": "Bizom",
        "Logout": "Đăng xuất"
      },
      "userList": {
        "zoneManager": "Quản lý khu vực",
        "whManager": "Quản lý kho",
        "salesSupervisor": "Giám sát bán hàng",
        "dsManager": "Giám đốc bán hàng của nhà phân phối",
        "deliveryPerson": "Người giao hàng",
        "salsman": "Người bán hàng"
      },
      "organizationList":
      {
        "zones": "Vùng",
        "warehouse": "Kho",
        "wsArea": "Khu vực kho",
        "outlet": "Chỗ thoát",
        "distributor": "Nhà phân phối",
        "dsArea": "Khu vực nhà phân phối",
      },
      "homePage": {
        "Orders": "Đơn hàng",
        "Recieved": "Được nhận",
        "InProcess": "Đang tiến hành",
        "Completed": "Hoàn thành",
        "Pending": "Chưa giải quyết",
        "Invoices": "Hóa đơn",
        "chartlabel": "Lợi nhuận bán hàng",
        "claim": "Yêu cầu",
        "approved": "Tán thành",
        "new": "Mới mẻ",
        "users": "Người dùng",
        "organization": "Cơ quan"
      },
      "language": {
        "english": "tiếng Anh",
        "bengali": "Tiếng Bengali",
        "vietnamese": "Tiếng Việt"
      },
      "logOutPage": {
        "linkText": "Đăng nhập",
        "description1": "Bạn chưa đăng nhập, vui lòng",
        "description2" :" để tiếp tục.",
      }
    }

  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
