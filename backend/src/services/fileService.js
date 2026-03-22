const fs = require('fs');
const path = require('path');

/**
 * Get metadata for all uploaded files in a request
 */
function getUploadedFilesMetadata(files) {
  if (!files || files.length === 0) return [];
  return files.map(f => ({
    filename: f.filename,
    originalName: f.originalname,
    path: f.path,
    size: f.size,
    mimeType: f.mimetype,
  }));
}

/**
 * Delete a file from disk
 */
function deleteFile(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return true;
    }
  } catch (error) {
    console.error(`[FileService] Failed to delete ${filePath}:`, error.message);
  }
  return false;
}

/**
 * Delete uploaded files older than X hours (auto-cleanup)
 */
function cleanupOldFiles(hoursOld = 48) {
  const uploadDir = process.env.UPLOAD_DIR || './uploads';
  if (!fs.existsSync(uploadDir)) return;

  const files = fs.readdirSync(uploadDir);
  const now = Date.now();
  let deleted = 0;

  for (const file of files) {
    const filePath = path.join(uploadDir, file);
    try {
      const stat = fs.statSync(filePath);
      const ageHours = (now - stat.mtimeMs) / (1000 * 60 * 60);
      if (ageHours > hoursOld) {
        fs.unlinkSync(filePath);
        deleted++;
      }
    } catch (e) {
      // skip
    }
  }

  console.log(`[FileService] Cleaned up ${deleted} old files (>${hoursOld}h)`);
  return deleted;
}

/**
 * Read a text file's content (for SMS text saved as file)
 */
function readTextFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    return null;
  }
}

module.exports = {
  getUploadedFilesMetadata,
  deleteFile,
  cleanupOldFiles,
  readTextFile,
};
