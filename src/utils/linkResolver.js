const linkResolver = (doc) => {
  // Pretty URLs for known types

  if (doc.type === 'page') return doc.uid;

  // Backup for all other types
  return '/'
}

module.exports = linkResolver