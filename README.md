# Dự án laravel websire chấm công bằng mã qrcode cho quán cà phê

## Các quy định trong dự án:
- Viết code mạch lạc theo quy tắc Code Formatting
- Đặt tên biến chuẩn camelCase VD: `$username`, `$postTitle`. 
- Chú thích rõ ràng

    VD:
    ```php
    // Chú thích trên dòng: Mô tả tóm tắt cho hàm
    function calculateTotal($quantity, $price) {
        // Kiểm tra số lượng
        if ($quantity > 0) {
            // Tính toán tổng giá trị
            $total = $quantity * $price;
            return $total; // Trả về tổng giá trị
        } else {
            // Nếu số lượng không hợp lệ, trả về 0
            return 0;
        }
    }

    // Chú thích đối với biến
    $userName = 'JohnDoe'; // Tên người dùng mặc định
    ```

- Kiểm soát kĩ càng các gói cài đăt

## 1. Các gói cài đặt trong laravel
1. React vite `npm create vite@latest react -- --template react`

## 2. Các thư mục và file cài đặt


