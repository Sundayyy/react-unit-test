const aliases = (prefix = "src") => ({
  "@apps": `${prefix}/apps`,
  "@assets": `${prefix}/assets`,
  "@styles": `${prefix}/assets/styles`,
  "@contexts": `${prefix}/contexts`,
  "@components": `${prefix}/views/components`,
  "@pages": `${prefix}/views/pages`,
  "@locales": `${prefix}/locales`,
  "@utils": `${prefix}/utils`,
  "@routes": `${prefix}/routes`,
});

module.exports = aliases;
