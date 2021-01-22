// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const splitLicense = license.split(" ").join("");
  if (license != null) {
    return `[![GitHub license](https://img.shields.io/badge/license-${splitLicense}-blue.svg)]\n\n`
  } else {
    return "";
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const splitLicense = license.split(" ").join("");
  if (splitLicense == null) {
    return ""
  } else {
    return `${splitLicense}`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license === null) {
    return ""
  } else {
    return "## License\n"
  }
}

module.exports = {
  renderLicenseBadge,
  renderLicenseSection,
  renderLicenseLink
};