const authService = require('../services/authService');
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Khởi tạo Google OAuth2 client
envClientCheck(); // ensure GOOGLE_CLIENT_ID is set
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// 🔹 ĐĂNG KÝ
const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Validate đầu vào
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Thiếu thông tin bắt buộc!', code: 400 });
    }
    // Gọi service đăng ký
    const result = await authService.registerService({ name, email, password });
    return res.status(result.code).json({
      message: result.message,
      code: result.code,
      data: result.data
    });
  } catch (err) {
    console.error('🚀 ~ registerController ~ err:', err);
    return res.status(500).json({ message: 'Lỗi từ hệ thống', code: 500, data: null });
  }
};

// 🔹 ĐĂNG NHẬP
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Thiếu email hoặc mật khẩu!', code: 400 });
    }
    const result = await authService.loginService({ email, password });
    return res.status(result.code).json({
      message: result.message,
      code: result.code,
      data: result.data,
      token: result.token
    });
  } catch (err) {
    console.error('🚀 ~ loginController ~ err:', err);
    return res.status(500).json({ message: 'Lỗi từ hệ thống', code: 500, data: null });
  }
};

// 🔹 ĐĂNG NHẬP QUA GOOGLE OAuth2
const googleLoginController = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) {
      return res.status(400).json({ message: 'Thiếu token Google!', code: 400 });
    }
    // Verify token với Google
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    });
    const payload = ticket.getPayload(); // { email, name, sub, picture, ... }

    // Tìm hoặc tạo user
    let user = await User.findOne({ where: { email: payload.email } });
    if (!user) {
      user = await User.create({
        name: payload.name,
        email: payload.email,
        password: payload.sub,   // dùng sub như mật khẩu tạm
        role_id: 1
      });
    }

    // Tạo JWT của riêng bạn
    const jwtToken = jwt.sign(
      { id: user.id, role: user.role_id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    const { password: _, ...userData } = user.toJSON();
    return res.status(200).json({
      message: 'Đăng nhập bằng Google thành công',
      code: 200,
      data: userData,
      token: jwtToken
    });
  } catch (err) {
    console.error('🚀 ~ googleLoginController ~ err:', err);
    return res.status(401).json({ message: 'Xác thực Google thất bại', code: 401, data: null });
  }
};

module.exports = {
  registerController,
  loginController,
  googleLoginController
};

// Utility: kiểm tra biến môi trường Google Client ID
envClientCheck();
function envClientCheck() {
  if (!process.env.GOOGLE_CLIENT_ID) {
    console.warn('⚠️ GOOGLE_CLIENT_ID chưa được cấu hình trong .env');
  }
}
