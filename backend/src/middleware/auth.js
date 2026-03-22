/**
 * Admin API key authentication middleware.
 * Expects header: x-admin-key: <ADMIN_API_KEY>
 */
function adminAuth(req, res, next) {
  const adminKey = req.headers['x-admin-key'];
  if (!adminKey || adminKey !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({
      success: false,
      error: 'Unauthorized: Invalid or missing admin API key',
    });
  }
  next();
}

module.exports = { adminAuth };
