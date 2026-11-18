// The 30 designs shown in the inbox. Files live in emails/<technology>/<id>.html
const CATEGORIES = ["Account", "Newsletter", "Payment", "E-commerce", "Notification", "Survey", "Report"];
const DESIGNS = [
 {
  "id": "01-account-welcome",
  "cat": "Account",
  "from": "Nova",
  "subject": "Welcome to Nova",
  "pre": "Your account is ready. Here's how to start.",
  "color": "#520dc2"
 },
 {
  "id": "02-account-verify-email",
  "cat": "Account",
  "from": "Cloudly",
  "subject": "Verify your email",
  "pre": "One click to confirm your email address.",
  "color": "#0a58ca"
 },
 {
  "id": "03-account-password-reset",
  "cat": "Account",
  "from": "Securo",
  "subject": "Reset your password",
  "pre": "Use the button inside to choose a new password.",
  "color": "#495057"
 },
 {
  "id": "04-account-login-code",
  "cat": "Account",
  "from": "Payly",
  "subject": "Your Payly login code",
  "pre": "Your one-time code is 482 913.",
  "color": "#1aa179"
 },
 {
  "id": "05-account-security-alert",
  "cat": "Account",
  "from": "Vaultly",
  "subject": "New sign-in to your account",
  "pre": "We noticed a new sign-in from Chrome on Windows.",
  "color": "#b02a37"
 },
 {
  "id": "06-newsletter-weekly-digest",
  "cat": "Newsletter",
  "from": "The Weekly Brief",
  "subject": "The Weekly Brief #42",
  "pre": "5 minutes to know what matters this week.",
  "color": "#1aa179"
 },
 {
  "id": "07-newsletter-product-updates",
  "cat": "Newsletter",
  "from": "Flowbase",
  "subject": "What's new in Flowbase",
  "pre": "Dark mode, faster search and 3 more updates.",
  "color": "#59359a"
 },
 {
  "id": "08-newsletter-blog-roundup",
  "cat": "Newsletter",
  "from": "Bake & Co",
  "subject": "This week's best recipes",
  "pre": "3 new recipes and a baking tip from our kitchen.",
  "color": "#ca6510"
 },
 {
  "id": "09-newsletter-community",
  "cat": "Newsletter",
  "from": "DevHub",
  "subject": "DevHub monthly: November",
  "pre": "Our community grew by 1,200 developers this month.",
  "color": "#0aa2c0"
 },
 {
  "id": "10-payment-receipt",
  "cat": "Payment",
  "from": "Kova",
  "subject": "Your receipt from Kova",
  "pre": "Payment received: $112.00.",
  "color": "#146c43"
 },
 {
  "id": "11-payment-invoice",
  "cat": "Payment",
  "from": "Studio Nine",
  "subject": "Invoice INV-2041 from Studio Nine",
  "pre": "Invoice for $1,450.00 due on 30 Nov.",
  "color": "#520dc2"
 },
 {
  "id": "12-payment-failed",
  "cat": "Payment",
  "from": "Streamly",
  "subject": "Your payment didn't go through",
  "pre": "Update your card to keep watching.",
  "color": "#b02a37"
 },
 {
  "id": "13-payment-subscription-renewed",
  "cat": "Payment",
  "from": "Cloudly",
  "subject": "Your Pro plan has renewed",
  "pre": "Thanks for staying with Cloudly Pro.",
  "color": "#0a58ca"
 },
 {
  "id": "14-payment-refund",
  "cat": "Payment",
  "from": "Kova",
  "subject": "Your refund is on the way",
  "pre": "We've refunded $89.00 to your Visa.",
  "color": "#1aa179"
 },
 {
  "id": "15-ecommerce-flash-sale",
  "cat": "E-commerce",
  "from": "Luma",
  "subject": "Flash sale: 50% off everything",
  "pre": "48 hours only. Up to 50% off.",
  "color": "#ab296a"
 },
 {
  "id": "16-ecommerce-new-arrivals",
  "cat": "E-commerce",
  "from": "Atelier",
  "subject": "The winter collection is here",
  "pre": "New coats, knitwear and boots.",
  "color": "#59359a"
 },
 {
  "id": "17-ecommerce-abandoned-cart",
  "cat": "E-commerce",
  "from": "Bloom",
  "subject": "You left something in your cart",
  "pre": "Your cart is saved. Here's 10% off.",
  "color": "#ca6510"
 },
 {
  "id": "18-ecommerce-order-shipped",
  "cat": "E-commerce",
  "from": "Kova",
  "subject": "Your order is on the way",
  "pre": "Order #10482 has shipped.",
  "color": "#0a58ca"
 },
 {
  "id": "19-ecommerce-back-in-stock",
  "cat": "E-commerce",
  "from": "Stride",
  "subject": "It's back: Trail Runner 2",
  "pre": "The shoe you wanted is back in stock.",
  "color": "#146c43"
 },
 {
  "id": "20-notification-new-comment",
  "cat": "Notification",
  "from": "Taskflow",
  "subject": "Karim commented on Homepage redesign",
  "pre": "\"Looks great! One small change...\"",
  "color": "#520dc2"
 },
 {
  "id": "21-notification-webinar-reminder",
  "cat": "Notification",
  "from": "Web Dev Summit",
  "subject": "Starts in 1 hour: Modern CSS",
  "pre": "Your webinar starts at 18:00.",
  "color": "#59359a"
 },
 {
  "id": "22-notification-usage-limit",
  "cat": "Notification",
  "from": "Cloudly",
  "subject": "You've used 90% of your storage",
  "pre": "Upgrade to keep uploading files.",
  "color": "#ca6510"
 },
 {
  "id": "23-notification-team-invite",
  "cat": "Notification",
  "from": "Taskflow",
  "subject": "Yasmine invited you to Acme",
  "pre": "Join the Acme workspace on Taskflow.",
  "color": "#1aa179"
 },
 {
  "id": "24-survey-nps",
  "cat": "Survey",
  "from": "Payly",
  "subject": "Quick question about Payly",
  "pre": "One click to tell us what you think.",
  "color": "#0a58ca"
 },
 {
  "id": "25-survey-rating",
  "cat": "Survey",
  "from": "Kova",
  "subject": "How was your order?",
  "pre": "Rate your Wireless Headphones.",
  "color": "#ca6510"
 },
 {
  "id": "26-survey-quick-poll",
  "cat": "Survey",
  "from": "DevHub",
  "subject": "Vote: what should we cover next?",
  "pre": "Pick the topic for our next workshop.",
  "color": "#59359a"
 },
 {
  "id": "27-survey-feedback-invite",
  "cat": "Survey",
  "from": "Flowbase",
  "subject": "Help us improve Flowbase",
  "pre": "3 minutes, and you get 1 month free.",
  "color": "#146c43"
 },
 {
  "id": "28-report-weekly-analytics",
  "cat": "Report",
  "from": "Metricly",
  "subject": "Your weekly report",
  "pre": "Visitors up 12% this week.",
  "color": "#520dc2"
 },
 {
  "id": "29-report-monthly-sales",
  "cat": "Report",
  "from": "Shopdash",
  "subject": "October sales report",
  "pre": "Revenue up 18% in October.",
  "color": "#146c43"
 },
 {
  "id": "30-report-year-in-review",
  "cat": "Report",
  "from": "Streamly",
  "subject": "Your 2026 in review",
  "pre": "You watched 214 hours this year.",
  "color": "#ab296a"
 }
];
