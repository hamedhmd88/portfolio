/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // نادیده گرفتن خطاهای ESLint در زمان بیلد پروژه برای جلوگیری از توقف فرآیند بیلد
  },
  typescript: {
    ignoreBuildErrors: true, // نادیده گرفتن خطاهای TypeScript در زمان بیلد، مفید برای توسعه سریع اما در تولید باید خاموش شود
  },
  images: {
    unoptimized: true, // غیرفعال کردن بهینه‌سازی تصاویر توسط Next.js، مفید برای زمانی که از سرویس خارجی استفاده می‌کنید
  },
  typedRoutes: true, // فعال کردن تایپ‌های امن برای روتینگ، که TypeScript را برای مسیرها اتوماتیک تولید می‌کند و خطاها را زودتر تشخیص می‌دهد
}

export default nextConfig
